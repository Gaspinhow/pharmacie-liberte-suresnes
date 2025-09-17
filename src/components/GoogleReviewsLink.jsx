import React from 'react';
import { Star, ExternalLink, MapPin } from 'lucide-react';

const GoogleReviewsLink = () => {
  return (
    <div className="text-center py-12 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-6">
          <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
            Découvrez nos avis clients
          </h3>
          <p className="text-neutral-600">
            Consultez les témoignages authentiques de nos patients sur Google Maps
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-lg font-medium text-neutral-700">
            Basé sur les avis Google
          </span>
        </div>
        
        <a 
          href="https://maps.google.com/?q=11+Rue+de+la+Liberté,+92150+Suresnes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          <span>Voir tous les avis sur Google Maps</span>
          <ExternalLink className="w-5 h-5" />
        </a>
        
        <p className="text-sm text-neutral-500 mt-4">
          Cliquez pour lire les témoignages authentiques de nos patients
        </p>
      </div>
    </div>
  );
};

export default GoogleReviewsLink;
