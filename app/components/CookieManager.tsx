'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useCookieConsent } from '../hooks/useCookieConsent';

// Déclarer les types pour window.dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function CookieManager() {
  const { isLoading } = useCookieConsent();
  const pathname = usePathname();

  const loadScripts = useCallback(() => {
    // Pour l'instant, on tracke toujours, peu importe le consentement
    // Les scripts sont gérés directement dans le layout
  }, []);

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
  }, [isLoading, loadScripts]);

  // Tracker les changements de page pour Google Tag Manager (toujours, peu importe le consentement)
  useEffect(() => {
    if (isLoading) return;
    
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname,
      });
    }
  }, [pathname, isLoading]);

  return null;
}
