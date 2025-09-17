import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check, X as XIcon } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours nécessaire
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setPreferences(allPreferences);
    saveConsent(allPreferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    setPreferences(minimalPreferences);
    saveConsent(minimalPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const saveConsent = (prefs) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // TODO: Implémenter l'initialisation des services selon les préférences
    if (prefs.analytics) {
      // Initialiser Google Analytics ou autre service d'analyse
      console.log('Analytics activé');
    }
    
    if (prefs.marketing) {
      // Initialiser les pixels de tracking marketing
      console.log('Marketing activé');
    }
    
    if (prefs.preferences) {
      // Sauvegarder les préférences utilisateur
      console.log('Préférences activées');
    }
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Ne peut pas être désactivé
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Modal */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
          {!showSettings ? (
            // Vue principale
            <>
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-neutral-900 mb-2">
                    Gestion des cookies
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                    Vous pouvez choisir quels cookies accepter.
                  </p>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-neutral-900">Cookies nécessaires</p>
                    <p className="text-xs text-neutral-600">Fonctionnement du site</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600">Toujours actif</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-neutral-900">Analytics</p>
                    <p className="text-xs text-neutral-600">Statistiques d'utilisation</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-4 bg-neutral-300 rounded-full relative">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform" />
                    </div>
                    <span className="text-xs text-neutral-600">Désactivé</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-neutral-900">Marketing</p>
                    <p className="text-xs text-neutral-600">Publicités personnalisées</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-4 bg-neutral-300 rounded-full relative">
                      <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform" />
                    </div>
                    <span className="text-xs text-neutral-600">Désactivé</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleRejectAll}
                  className="btn btn-outline flex-1"
                >
                  Tout refuser
                </button>
                <button 
                  onClick={() => setShowSettings(true)}
                  className="btn btn-ghost flex-1"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Personnaliser
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="btn btn-primary flex-1"
                >
                  Tout accepter
                </button>
              </div>
            </>
          ) : (
            // Vue des paramètres détaillés
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-neutral-900">
                  Paramètres des cookies
                </h3>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                  aria-label="Retour"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Cookies nécessaires */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Cookies nécessaires</h4>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">Toujours actif</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés.
                  </p>
                </div>

                {/* Analytics */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Cookies d'analyse</h4>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-primary-500' : 'bg-neutral-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                  </p>
                </div>

                {/* Marketing */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Cookies marketing</h4>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-primary-500' : 'bg-neutral-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Ces cookies permettent d'afficher des publicités personnalisées.
                  </p>
                </div>

                {/* Préférences */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900">Cookies de préférences</h4>
                    <button
                      onClick={() => togglePreference('preferences')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.preferences ? 'bg-primary-500' : 'bg-neutral-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.preferences ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Ces cookies mémorisent vos préférences pour personnaliser votre expérience.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleRejectAll}
                  className="btn btn-outline flex-1"
                >
                  Tout refuser
                </button>
                <button 
                  onClick={handleSavePreferences}
                  className="btn btn-primary flex-1"
                >
                  Sauvegarder mes choix
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
