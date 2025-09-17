import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, MapPin, Calendar } from 'lucide-react';

const GooglePlacesReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [placeInfo, setPlaceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Configuration pour l'API Google Places
    const PLACE_ID = 'YOUR_PLACE_ID'; // À remplacer par votre Place ID
    const API_KEY = 'YOUR_API_KEY'; // À remplacer par votre clé API
    
    const loadGoogleReviews = async () => {
      try {
        // Appel à l'API Google Places
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des avis');
        }
        
        const data = await response.json();
        
        if (data.status === 'OK') {
          setPlaceInfo({
            name: data.result.name,
            rating: data.result.rating,
            totalReviews: data.result.user_ratings_total
          });
          setReviews(data.result.reviews || []);
        } else {
          throw new Error(data.error_message || 'Erreur API Google');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Erreur:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    // Pour l'instant, on simule des données
    // Décommentez la ligne suivante quand vous aurez votre clé API
    // loadGoogleReviews();
    
    // Simulation temporaire
    setTimeout(() => {
      setLoading(false);
      setError('Configuration API requise');
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-neutral-600">Chargement des avis Google...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-xl">
        <div className="max-w-md mx-auto">
          <div className="text-red-500 mb-4">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Configuration requise</h3>
          </div>
          <p className="text-neutral-600 mb-6">
            Pour afficher vos avis Google directement sur le site, vous devez :
          </p>
          <div className="text-left space-y-2 text-sm text-neutral-600 mb-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Obtenir une clé API Google Places</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Récupérer votre Place ID</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Configurer les restrictions CORS</span>
            </div>
          </div>
          <a 
            href="https://maps.google.com/?q=11+Rue+de+la+Liberté,+92150+Suresnes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <span>Voir les avis sur Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Informations générales */}
      {placeInfo && (
        <div className="text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
            {placeInfo.name}
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${
                    i < Math.floor(placeInfo.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-neutral-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-neutral-900">
              {placeInfo.rating}
            </span>
          </div>
          <p className="text-neutral-600">
            Basé sur {placeInfo.totalReviews} avis Google
          </p>
        </div>
      )}

      {/* Avis individuels */}
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < review.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-neutral-300'
                    }`} 
                  />
                ))}
              </div>
              
              <p className="text-neutral-700 mb-4 italic line-clamp-4">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-neutral-900">
                    {review.author_name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {new Date(review.time * 1000).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                {review.profile_photo_url && (
                  <img 
                    src={review.profile_photo_url} 
                    alt={review.author_name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-neutral-600 mb-4">
            Aucun avis disponible pour le moment.
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
      )}
    </div>
  );
};

export default GooglePlacesReviews;
