'use client';

import { useState, useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

export default function CookieBanner() {
  const { consent, isLoading, saveConsent } = useCookieConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Toujours activé
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    if (!isLoading && !consent) {
      // Afficher la bannière après un court délai si pas de consentement
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, [isLoading, consent]);

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      advertising: true,
    });
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      advertising: false,
    });
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    saveConsent({
      essential: true,
      analytics: preferences.analytics,
      advertising: preferences.advertising,
    });
    setShowBanner(false);
  };

  if (isLoading || !showBanner) return null;

  return (
    <div className={`fixed bottom-0 sm:bottom-6 left-0 sm:left-6 z-50 w-full sm:max-w-md p-4 sm:p-0 transition-all duration-700 ease-out transform ${showBanner ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {!showDetails ? (
          // Vue principale
          <div className="p-3 sm:p-6 relative">
            {/* Decorative background element - hidden on mobile */}
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            {/* Desktop Layout (Hidden on Mobile) */}
            <div className="hidden sm:block">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-2xl border border-slate-700 shadow-inner">
                  🍪
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Un petit cookie ?</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Nous utilisons des cookies pour sécuriser votre navigation et améliorer notre service. C'est tout.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={handleAcceptAll} className="w-full py-3.5 bg-primary hover:bg-yellow-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,200,0,0.1)] hover:shadow-[0_0_25px_rgba(255,200,0,0.2)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  <span>C'est d'accord</span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={handleRejectAll} className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10">
                    Continuer sans accepter
                  </button>
                  <button onClick={() => setShowDetails(true)} className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10">
                    Personnaliser
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Micro-Layout (Visible only on Mobile) */}
            <div className="sm:hidden flex flex-col gap-3">
              <p className="text-slate-200 text-xs leading-tight pr-4">
                🍪 On utilise des cookies pour améliorer votre expérience. <button onClick={() => setShowDetails(true)} className="text-slate-400 underline decoration-slate-600 underline-offset-2">Détails</button>
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRejectAll}
                  className="px-3 py-2 text-xs font-medium text-slate-400 bg-white/5 rounded-lg border border-white/5 flex-shrink-0"
                >
                  Non merci
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-2 bg-primary text-slate-900 font-bold text-sm rounded-lg shadow-lg flex items-center justify-center"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Vue détaillée
          <div className="p-6 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Vos préférences</h3>
              <button onClick={() => setShowDetails(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>

            <div className="space-y-4 mb-8">
              {/* Cookies essentiels */}
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Essentiels
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Indispensables au bon fonctionnement du site (sécurité, panier, connexion).
                    </p>
                  </div>
                  <div className="relative flex items-center">
                    <input type="checkbox" checked disabled className="peer sr-only" />
                    <div className="w-9 h-5 bg-slate-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500 opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Cookies analytics */}
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 transition-colors hover:bg-slate-800">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h4 className="text-white font-semibold text-sm mb-1">Analytiques</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                    </p>
                  </div>
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    />
                    <div className="w-9 h-5 bg-slate-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              {/* Cookies publicitaires */}
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 transition-colors hover:bg-slate-800">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h4 className="text-white font-semibold text-sm mb-1">Marketing</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Permettent de vous proposer des contenus pertinents sur les réseaux sociaux.
                    </p>
                  </div>
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={preferences.advertising}
                      onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                    />
                    <div className="w-9 h-5 bg-slate-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <button
                onClick={handleSavePreferences}
                className="w-full py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl transition-colors shadow-lg"
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full py-2 text-sm font-medium text-primary hover:text-white transition-colors"
              >
                Tout accepter (Recommandé)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
