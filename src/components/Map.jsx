import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, ExternalLink, Loader } from 'lucide-react';

const Map = ({ 
  address, 
  height = '400px',
  zoom = 15,
  showDirections = true,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState(false);

  // Construire l'URL Google Maps
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}&zoom=${zoom}`;
  
  // URL alternative sans clé API (redirection vers Google Maps)
  const mapsRedirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleMapError = () => {
    setIsLoading(false);
    setMapError(true);
  };

  const openDirections = () => {
    window.open(mapsRedirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative ${className}`}>
      {/* Titre de la section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-500" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-neutral-900">
              Nous trouver
            </h3>
            <p className="text-sm text-neutral-600">
              {address}
            </p>
          </div>
        </div>
        
        {showDirections && (
          <button
            onClick={openDirections}
            className="btn btn-primary btn-sm"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Itinéraire
          </button>
        )}
      </div>

      {/* Carte */}
      <div className="relative rounded-xl overflow-hidden shadow-soft border border-neutral-200" style={{ height }}>
        {isLoading && (
          <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center z-10">
            <div className="flex items-center space-x-2 text-neutral-600">
              <Loader className="w-5 h-5 animate-spin" />
              <span>Chargement de la carte...</span>
            </div>
          </div>
        )}

        {mapError ? (
          // Fallback si l'embed ne fonctionne pas
          <div className="h-full bg-neutral-100 flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h4 className="font-medium text-neutral-900 mb-2">
                Carte non disponible
              </h4>
              <p className="text-sm text-neutral-600 mb-4">
                Impossible de charger la carte interactive.
              </p>
              <button
                onClick={openDirections}
                className="btn btn-primary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ouvrir dans Google Maps
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={mapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleMapLoad}
            onError={handleMapError}
            title="Localisation de la pharmacie"
          />
        )}
      </div>

      {/* Informations supplémentaires */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-neutral-200">
          <h4 className="font-medium text-neutral-900 mb-2">
            Accès en transport
          </h4>
          <ul className="text-sm text-neutral-600 space-y-1">
            <li>• Métro : Station la plus proche (5 min à pied)</li>
            <li>• Bus : Lignes 12, 24, 35 (arrêt Pharmacie)</li>
            <li>• Parking : Places disponibles à proximité</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-neutral-200">
          <h4 className="font-medium text-neutral-900 mb-2">
            Accessibilité
          </h4>
          <ul className="text-sm text-neutral-600 space-y-1">
            <li>• Accès PMR disponible</li>
            <li>• Parking handicapé à proximité</li>
            <li>• Boutique de plain-pied</li>
          </ul>
        </div>
      </div>

      {/* Note importante */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-2">
          <ExternalLink className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-700">
            <strong>Note :</strong> Cette carte est fournie à titre indicatif. 
            Pour un itinéraire précis, utilisez votre application de navigation préférée.
          </p>
        </div>
      </div>
    </div>
  );
};

// Composant simplifié pour les cas où on ne veut pas d'iframe
export const SimpleMap = ({ address, className = '' }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className={`bg-white rounded-xl p-6 shadow-soft border border-neutral-200 ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <MapPin className="w-5 h-5 text-primary-500" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-neutral-900">
            Adresse
          </h3>
          <p className="text-sm text-neutral-600">
            {address}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Ouvrir dans Google Maps
        </a>
        
        <a
          href={`tel:{{Phone}}`}
          className="btn btn-outline w-full"
        >
          <Phone className="w-4 h-4 mr-2" />
          Appeler pour demander l'itinéraire
        </a>
      </div>
    </div>
  );
};

export default Map;
