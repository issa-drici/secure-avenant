import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log("🔵 Route API /api/waitlist appelée");
  try {
    const body = await request.json();
    console.log("🟢 Body reçu:", body);
    const { firstname, lastname, email, phone, company, size, job, customJob, pain } = body;

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
    return NextResponse.json({ success: true, id: data.id }, { status: 200 });
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}
