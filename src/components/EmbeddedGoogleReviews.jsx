import React, { useEffect } from 'react';

const EmbeddedGoogleReviews = () => {
  useEffect(() => {
    // Script pour intégrer les avis Google via un service tiers
    const script = document.createElement('script');
    script.src = 'https://widgets.google.com/reviews/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Nettoyage du script
      const existingScript = document.querySelector('script[src="https://widgets.google.com/reviews/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Widget Google Reviews intégré */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
          Nos avis Google
        </h3>
        <p className="text-neutral-600">
          Découvrez ce que disent nos patients sur Google
        </p>
      </div>

      {/* Container pour le widget Google Reviews */}
      <div 
        className="google-reviews-widget"
        data-place-id="YOUR_PLACE_ID"
        data-api-key="YOUR_API_KEY"
        data-max-reviews="6"
        data-min-rating="4"
        data-style="vertical"
      >
        {/* Le widget Google Reviews s'affichera ici */}
        <div className="text-center py-12 bg-neutral-50 rounded-xl">
          <div className="max-w-md mx-auto">
            <div className="text-primary-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-2">
              Configuration requise
            </h4>
            <p className="text-neutral-600 mb-6">
              Pour afficher vos avis Google directement, vous devez configurer :
            </p>
            <div className="space-y-2 text-sm text-neutral-600 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Place ID de votre pharmacie</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Clé API Google Places</span>
              </div>
            </div>
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
  );
};

export default EmbeddedGoogleReviews;
