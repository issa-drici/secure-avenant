'use client';

import { useState, useEffect } from 'react';

export type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
  date: string;
};

const defaultConsent: CookieConsent = {
  essential: true, // Toujours true, ne peut pas être désactivé
  analytics: false,
  advertising: false,
  date: '',
};

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Charger le consentement depuis localStorage
    const stored = localStorage.getItem('cookie-consent');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsent(parsed);
      } catch {
        setConsent(null);
      }
    }
    setIsLoading(false);
  }, []);

  const saveConsent = (newConsent: Partial<CookieConsent>) => {
    const fullConsent: CookieConsent = {
      ...defaultConsent,
      ...newConsent,
      essential: true, // Toujours true
      date: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(fullConsent));
    setConsent(fullConsent);
    
    // Déclencher un événement personnalisé pour que les autres composants puissent réagir
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: fullConsent }));
  };

  const hasConsent = (category: 'essential' | 'analytics' | 'advertising'): boolean => {
    if (!consent) return false;
    if (category === 'essential') return true; // Toujours true
    return consent[category] === true;
  };

  return {
    consent,
    isLoading,
    saveConsent,
    hasConsent,
  };
}

