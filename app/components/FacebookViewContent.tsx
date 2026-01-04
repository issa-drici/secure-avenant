'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

// Générer un UUID v4 côté client
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function FacebookViewContent({ 
  contentName, 
  contentCategory 
}: { 
  contentName: string;
  contentCategory?: string;
}) {
  const { hasConsent, isLoading } = useCookieConsent();

  useEffect(() => {
    // Attendre que le consentement soit chargé
    if (isLoading) return;
    
    // Envoyer toujours - le serveur vérifiera FORCE_FACEBOOK_TRACKING
    // Si FORCE_FACEBOOK_TRACKING=true dans .env, les événements seront envoyés même sans consentement

    // Ne s'exécuter qu'une seule fois par chargement de page
    let hasSent = false;
    
    const sendViewContent = () => {
      if (hasSent) return;
      hasSent = true;

      // Générer un event_id unique pour cet événement
      const eventId = generateUUID();
      const payload = JSON.stringify({
        url: window.location.href,
        content_name: contentName,
        content_category: contentCategory,
        event_id: eventId,
      });

      // Utiliser sendBeacon pour garantir l'envoi même si l'utilisateur quitte la page
      // Note: sendBeacon ne supporte pas les headers personnalisés, donc on doit utiliser fetch avec keepalive
      // sendBeacon est mieux pour les cas simples, mais fetch avec keepalive est plus fiable pour notre cas
      sendWithFetch(eventId, payload);
    };

    const sendWithFetch = async (eventId: string, payload: string) => {
      try {
        const response = await fetch('/api/facebook/view-content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
          keepalive: true, // Continue même si la page se ferme
        });

        const data = await response.json();
        if (data.success) {
          console.log('✅ ViewContent envoyé:', { event_id: data.event_id, content_name: contentName });
        } else {
          console.warn('⚠️ ViewContent échoué:', { event_id: data.event_id, error: data.error });
        }
      } catch (error) {
        console.error('❌ Erreur lors de l\'envoi de ViewContent:', error);
      }
    };

    // Envoyer immédiatement (pas besoin d'attendre le load complet)
    sendViewContent();

    // Également envoyer au moment du beforeunload pour être sûr
    const handleBeforeUnload = () => {
      if (!hasSent) {
        sendViewContent();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
    };
  }, [contentName, isLoading, hasConsent]);

  return null;
}

