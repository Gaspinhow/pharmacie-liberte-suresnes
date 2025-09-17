import React, { useEffect } from 'react';

const ThirdPartyReviews = () => {
  useEffect(() => {
    // Exemple avec Elfsight Google Reviews Widget
    // Vous devez vous inscrire sur elfsight.com et obtenir votre widget ID
    
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://apps.elfsight.com/p/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
          Avis Google intégrés
        </h3>
        <p className="text-neutral-600">
          Témoignages authentiques directement depuis Google
        </p>
      </div>

      {/* Widget Elfsight Google Reviews */}
      <div 
        className="elfsight-app-YOUR_WIDGET_ID"
        data-elfsight-app-lazy
      >
        {/* Placeholder pendant le chargement */}
        <div className="text-center py-12 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
          <div className="max-w-lg mx-auto">
            <div className="text-primary-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-neutral-900 mb-4">
              Intégration des avis Google
            </h4>
            <p className="text-neutral-600 mb-6">
              Pour afficher vos avis Google directement sur le site, vous pouvez utiliser :
            </p>
            
            <div className="space-y-4 text-left">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h5 className="font-semibold text-neutral-900 mb-2">1. Elfsight (Recommandé)</h5>
                <p className="text-sm text-neutral-600 mb-2">
                  Service tiers populaire avec widget gratuit
                </p>
                <a 
                  href="https://elfsight.com/google-reviews-widget/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                >
                  Voir Elfsight →
                </a>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h5 className="font-semibold text-neutral-900 mb-2">2. Google Places API</h5>
                <p className="text-sm text-neutral-600 mb-2">
                  Solution officielle Google (payante)
                </p>
                <a 
                  href="https://developers.google.com/maps/documentation/places/web-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                >
                  Documentation Google →
                </a>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h5 className="font-semibold text-neutral-900 mb-2">3. Trustpilot</h5>
                <p className="text-sm text-neutral-600 mb-2">
                  Plateforme d'avis professionnelle
                </p>
                <a 
                  href="https://business.trustpilot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                >
                  Voir Trustpilot →
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <a 
                href="https://maps.google.com/?q=11+Rue+de+la+Liberté,+92150+Suresnes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span>Voir les avis sur Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyReviews;
