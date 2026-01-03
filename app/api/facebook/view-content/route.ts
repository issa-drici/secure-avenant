import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    // Gérer à la fois JSON et Blob (pour sendBeacon)
    let body;
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      body = await request.json();
    } else {
      // Pour sendBeacon qui envoie un Blob
      const text = await request.text();
      body = JSON.parse(text);
    }
    
    const { url, content_name, event_id } = body;

    const facebookPixelId = process.env.FACEBOOK_PIXEL_ID;
    const facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const facebookApiVersion = process.env.FACEBOOK_API_VERSION || 'v21.0';
    const forceTracking = process.env.FORCE_FACEBOOK_TRACKING === 'true';
    const testEventCode = process.env.FACEBOOK_TEST_EVENT_CODE;

    if (!facebookPixelId || !facebookAccessToken) {
      return NextResponse.json(
        { error: 'Configuration Facebook manquante' },
        { status: 500 }
      );
    }

    // Si FORCE_FACEBOOK_TRACKING est activé, on envoie toujours
    if (forceTracking) {
      console.log('🔓 Mode FORCE_FACEBOOK_TRACKING activé : ViewContent envoyé sans vérification du consentement');
    }

    // Préparer l'événement ViewContent
    const eventTime = Math.floor(Date.now() / 1000);
    const userAgent = request.headers.get('user-agent') || '';
    const eventSourceUrl = url || request.headers.get('referer') || 'https://secure-avenant.com';

    // Générer un event_id unique si non fourni
    const uniqueEventId = event_id || randomUUID();

    // Pour ViewContent, Facebook nécessite plus de données utilisateur
    // On récupère l'IP et les cookies Facebook si disponibles
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     request.headers.get('x-real-ip') || 
                     undefined;
    
    // Récupérer fbp et fbc depuis les cookies si disponibles
    const cookies = request.headers.get('cookie') || '';
    const fbp = cookies.match(/fbp=([^;]+)/)?.[1];
    const fbc = cookies.match(/fbc=([^;]+)/)?.[1];

    const facebookEvent: {
      data: Array<{
        event_name: string;
        event_time: number;
        event_id: string;
        action_source: string;
        event_source_url: string;
        user_data: Record<string, string | undefined>;
        custom_data: Record<string, string>;
      }>;
      test_event_code?: string;
    } = {
      data: [
        {
          event_name: 'ViewContent',
          event_time: eventTime,
          event_id: uniqueEventId,
          action_source: 'website',
          event_source_url: eventSourceUrl,
          user_data: {
            client_user_agent: userAgent,
            ...(clientIp && { client_ip_address: clientIp }),
            ...(fbp && { fbp }),
            ...(fbc && { fbc }),
          },
          custom_data: {
            content_name: content_name || 'Page SecureAvenant',
            content_category: 'Inscription',
          },
        },
      ],
    };

    // Ajouter test_event_code si défini (pour le mode test dans Facebook Events Manager)
    if (testEventCode) {
      facebookEvent.test_event_code = testEventCode;
      console.log('🧪 Mode TEST activé avec test_event_code:', testEventCode);
    }

    // Envoyer l'événement à Facebook avec timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 secondes timeout

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

      if (!facebookResponse.ok) {
        const facebookError = await facebookResponse.json();
        console.error('❌ Erreur Facebook Conversions API (ViewContent):', {
          status: facebookResponse.status,
          error: facebookError,
          event_id: uniqueEventId,
          event_name: 'ViewContent',
        });
        // On retourne quand même un succès pour ne pas bloquer le chargement de la page
        return NextResponse.json({ 
          success: false, 
          error: 'Erreur Facebook',
          event_id: uniqueEventId 
        }, { status: 200 });
      }

      const data = await facebookResponse.json();
      console.log('✅ Événement Facebook ViewContent envoyé avec succès:', {
        event_id: uniqueEventId,
        events_received: data.events_received,
        messages: data.messages,
      });
      return NextResponse.json({ 
        success: true, 
        events_received: data.events_received,
        event_id: uniqueEventId 
      }, { status: 200 });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error('⏱️ Timeout lors de l\'envoi à Facebook (10s)', {
          event_id: uniqueEventId,
          event_name: 'ViewContent',
        });
      } else {
        console.error('❌ Erreur réseau lors de l\'envoi à Facebook:', {
          error: fetchError,
          event_id: uniqueEventId,
          event_name: 'ViewContent',
        });
      }
      // On retourne quand même un succès pour ne pas bloquer le chargement de la page
      return NextResponse.json({ 
        success: false, 
        error: 'Erreur réseau',
        event_id: uniqueEventId 
      }, { status: 200 });
    }
  } catch (error) {
    console.error('Erreur serveur (ViewContent):', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}

