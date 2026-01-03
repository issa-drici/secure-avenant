import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  console.log("🔵 Route API /api/waitlist appelée");
  try {
    const body = await request.json();
    console.log("🟢 Body reçu:", body);
    const { firstname, lastname, email, phone, company, size, job, customJob, pain, source, platform, cookieConsent } = body;

    // Validation des champs requis
    if (!firstname || !lastname || !email || !phone || !company || !size || !job || !pain) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Si job === 'autre', customJob est requis
    if (job === 'autre' && !customJob) {
      return NextResponse.json(
        { error: 'Veuillez préciser votre métier' },
        { status: 400 }
      );
    }

    // Normalisation du téléphone - toujours formater en +33
    const normalizedPhone = phone.replace(/\s/g, '').replace(/[^\d+]/g, '');
    let formattedPhone = normalizedPhone;
    
    // Si déjà en format +33, garder tel quel
    if (/^\+33[1-9]\d{8}$/.test(normalizedPhone)) {
      formattedPhone = normalizedPhone;
    }
    // Si commence par 0X (format français), convertir en +33X
    else if (/^0[1-9]\d{8}$/.test(normalizedPhone)) {
      formattedPhone = `+33${normalizedPhone.substring(1)}`;
    }
    // Si 9 chiffres sans le 0, ajouter +33
    else if (/^[1-9]\d{8}$/.test(normalizedPhone)) {
      formattedPhone = `+33${normalizedPhone}`;
    }
    // Si format international autre que +33, extraire les 9 derniers chiffres et ajouter +33
    else if (/^\+\d{1,3}[1-9]\d{8}$/.test(normalizedPhone)) {
      // Extraire les 9 derniers chiffres (après l'indicatif)
      const digits = normalizedPhone.replace(/\D/g, '');
      if (digits.length >= 9) {
        const last9Digits = digits.slice(-9);
        formattedPhone = `+33${last9Digits}`;
      }
    }
    // Si seulement des chiffres, prendre les 9 derniers et ajouter +33
    else {
      const digits = normalizedPhone.replace(/\D/g, '');
      if (digits.length >= 9) {
        const last9Digits = digits.slice(-9);
        formattedPhone = `+33${last9Digits}`;
      } else {
        // Si moins de 9 chiffres, essayer de formater quand même
        formattedPhone = `+33${digits}`;
      }
    }

    // Récupération des variables d'environnement
    const airtableApiKey = process.env.AIRTABLE_API_KEY;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Waitlist';

    if (!airtableApiKey || !airtableBaseId) {
      console.error('Variables d\'environnement Airtable manquantes');
      console.error('AIRTABLE_API_KEY:', airtableApiKey ? 'présent' : 'manquant');
      console.error('AIRTABLE_BASE_ID:', airtableBaseId ? 'présent' : 'manquant');
      return NextResponse.json(
        { error: 'Configuration serveur manquante. Vérifiez vos variables d\'environnement.' },
        { status: 500 }
      );
    }

    // Préparer les champs pour Airtable
    const airtableFields: Record<string, string> = {
      'Prénom': firstname.trim(),
      'Nom': lastname.trim(),
      'Email': email.trim().toLowerCase(),
      'Téléphone': formattedPhone,
      'Société': company.trim(),
      'Effectif': size,
      'Métier': job === 'autre' ? customJob.trim() : job,
      'Pertes annuelles': pain,
      'Source': source || 'direct',
      'Plateforme': platform || 'unknown',
      'Date': new Date().toISOString(),
    };

    // Envoi des données à Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: airtableFields,
        }),
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json();
      console.error('Erreur Airtable:', errorData);
      const errorMessage = errorData.error?.message || 'Erreur lors de l\'enregistrement';
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    const data = await airtableResponse.json();

    // Envoi de l'événement Facebook Conversions API
    // Vérifier le consentement RGPD avant d'envoyer (sauf si FORCE_FACEBOOK_TRACKING est activé)
    const forceTracking = process.env.FORCE_FACEBOOK_TRACKING === 'true';
    const hasAdvertisingConsent = forceTracking || cookieConsent?.advertising === true;
    
    try {
      const facebookPixelId = process.env.FACEBOOK_PIXEL_ID;
      const facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
      const facebookApiVersion = process.env.FACEBOOK_API_VERSION || 'v21.0';

      if (facebookPixelId && facebookAccessToken && hasAdvertisingConsent) {
        // Préparer l'événement CompleteRegistration
        const eventTime = Math.floor(Date.now() / 1000);
        const userAgent = request.headers.get('user-agent') || '';
        const origin = request.headers.get('origin') || '';
        const referer = request.headers.get('referer') || '';
        const eventSourceUrl = referer || origin || 'https://secure-avenant.com/inscription';
        
        // Générer un event_id unique pour éviter les doublons
        const eventId = randomUUID();

        // Hasher les données PII en SHA256 (requis par Facebook)
        const hashEmail = crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex');
        const hashPhone = crypto.createHash('sha256').update(formattedPhone.replace(/\D/g, '')).digest('hex');
        const hashFirstname = crypto.createHash('sha256').update(firstname.trim().toLowerCase()).digest('hex');
        const hashLastname = crypto.createHash('sha256').update(lastname.trim().toLowerCase()).digest('hex');

        const facebookEvent = {
          data: [
            {
              event_name: 'CompleteRegistration',
              event_time: eventTime,
              event_id: eventId,
              action_source: 'website',
              event_source_url: eventSourceUrl,
              user_data: {
                em: [hashEmail],
                ph: [hashPhone],
                fn: [hashFirstname],
                ln: [hashLastname],
                client_user_agent: userAgent,
              },
              custom_data: {
                content_name: 'Inscription SecureAvenant',
                source: source || 'direct',
                platform: platform || 'facebook',
              },
            },
          ],
        };

        // Fonction pour envoyer avec retry
        const sendToFacebookWithRetry = async (retries = 2): Promise<boolean> => {
          for (let attempt = 0; attempt <= retries; attempt++) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 secondes timeout

            try {
              const facebookResponse = await fetch(
                `https://graph.facebook.com/${facebookApiVersion}/${facebookPixelId}/events?access_token=${facebookAccessToken}`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(facebookEvent),
                  signal: controller.signal,
                }
              );

              clearTimeout(timeoutId);

              if (facebookResponse.ok) {
                const facebookData = await facebookResponse.json();
                console.log('✅ Événement Facebook CompleteRegistration envoyé avec succès:', {
                  event_id: eventId,
                  events_received: facebookData.events_received,
                  messages: facebookData.messages,
                  attempt: attempt + 1,
                });
                return true;
              } else {
                const facebookError = await facebookResponse.json();
                // Ne pas retry pour les erreurs 4xx (erreurs client)
                if (facebookResponse.status >= 400 && facebookResponse.status < 500) {
                  console.error('❌ Erreur client Facebook (pas de retry):', {
                    status: facebookResponse.status,
                    error: facebookError,
                    event_id: eventId,
                  });
                  return false;
                }
                // Retry pour les erreurs 5xx (erreurs serveur)
                if (attempt < retries) {
                  console.warn(`⚠️ Tentative ${attempt + 1}/${retries + 1} échouée, retry...`, {
                    status: facebookResponse.status,
                    event_id: eventId,
                  });
                  await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1))); // Backoff exponentiel
                  continue;
                }
                console.error('❌ Erreur Facebook après tous les retries:', {
                  status: facebookResponse.status,
                  error: facebookError,
                  event_id: eventId,
                });
                return false;
              }
            } catch (fetchError) {
              clearTimeout(timeoutId);
              if (attempt < retries) {
                console.warn(`⚠️ Erreur réseau tentative ${attempt + 1}/${retries + 1}, retry...`, {
                  error: fetchError instanceof Error ? fetchError.message : 'Unknown error',
                  event_id: eventId,
                });
                await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
                continue;
              }
              if (fetchError instanceof Error && fetchError.name === 'AbortError') {
                console.error('⏱️ Timeout lors de l\'envoi à Facebook après tous les retries', {
                  event_id: eventId,
                  event_name: 'CompleteRegistration',
                });
              } else {
                console.error('❌ Erreur réseau après tous les retries:', {
                  error: fetchError,
                  event_id: eventId,
                  event_name: 'CompleteRegistration',
                });
              }
              return false;
            }
          }
          return false;
        };

        // Envoyer avec retry (2 tentatives supplémentaires = 3 au total)
        await sendToFacebookWithRetry(2);
      } else if (!hasAdvertisingConsent) {
        console.log('⚠️ Événement Facebook non envoyé : consentement publicitaire non donné');
      } else if (forceTracking) {
        console.log('🔓 Mode FORCE_FACEBOOK_TRACKING activé : événements envoyés sans vérification du consentement');
      }
    } catch (facebookError) {
      console.error('Erreur lors de l\'envoi à Facebook:', facebookError);
      // On continue même si Facebook échoue, l'enregistrement Airtable a réussi
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 200 });
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}
