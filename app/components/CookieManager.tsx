'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

export default function CookieManager() {
  const { hasConsent, isLoading } = useCookieConsent();

  useEffect(() => {
    if (isLoading) return;

    // Écouter les changements de consentement
    const handleConsentUpdate = () => {
      loadScripts();
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate);
    loadScripts();

    return () => {
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
    };
  }, [isLoading, hasConsent]);

  const loadScripts = () => {
    // Charger les scripts uniquement si le consentement est donné
    if (hasConsent('advertising')) {
      // Les scripts Meta/Google seront chargés ici si nécessaire
      // Pour l'instant, on utilise uniquement l'API Conversions côté serveur
      // donc pas besoin de charger de scripts côté client
    }
  };

  return null;
}

