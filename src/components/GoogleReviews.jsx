import React, { useState, useEffect } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Note: Pour utiliser l'API Google Places, vous devez :
    // 1. Créer un compte Google Cloud Platform
    // 2. Activer l'API Places
    // 3. Obtenir une clé API
    // 4. Configurer les restrictions CORS
    
    // Pour l'instant, nous simulons le chargement
    const loadReviews = async () => {
      try {
        // Simulation d'un appel API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Ici vous pourriez faire un appel à l'API Google Places
        // const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews&key=YOUR_API_KEY`);
        
        setReviews([]); // Vide pour l'instant
        setLoading(false);
      } catch (err) {
        setError('Impossible de charger les avis Google');
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
        <p className="text-neutral-600 mt-2">Chargement des avis...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">{error}</p>
        <a 
          href="https://maps.google.com/?q=11+Rue+de+la+Liberté,+92150+Suresnes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
        >
          <span>Voir les avis sur Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-neutral-600 mb-4">
          Aucun avis Google disponible pour le moment.
        </p>
        <a 
          href="https://maps.google.com/?q=11+Rue+de+la+Liberté,+92150+Suresnes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
        >
          <span>Voir les avis sur Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-neutral-700 mb-4 italic">
            "{review.text}"
          </p>
          <div className="flex items-center justify-between">
            <p className="font-medium text-neutral-900">
              {review.author_name}
            </p>
            <span className="text-sm text-neutral-500">
              {new Date(review.time * 1000).toLocaleDateString('fr-FR')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
