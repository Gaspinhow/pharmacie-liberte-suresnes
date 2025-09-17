import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { isPharmacyOpen, getStatusMessage, getTimeUntilClose } from '../utils/hours';
import siteData from '../data/site.json';

const OpeningHours = ({ variant = 'default' }) => {
  const [pharmacyStatus, setPharmacyStatus] = useState(null);
  const [currentDayHours, setCurrentDayHours] = useState(null);

  useEffect(() => {
    const updateStatus = () => {
      const status = isPharmacyOpen(siteData.hours);
      setPharmacyStatus(status);
      
      // Trouver les horaires du jour actuel
      const now = new Date();
      const currentDay = now.getDay();
      const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
      setCurrentDayHours(siteData.hours[dayIndex]);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Mise à jour chaque minute

    return () => clearInterval(interval);
  }, []);

  const timeUntilClose = currentDayHours ? getTimeUntilClose(currentDayHours) : null;

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg p-4 shadow-soft border border-neutral-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${pharmacyStatus?.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <div>
              <p className="font-medium text-neutral-900">
                {pharmacyStatus?.isOpen ? 'Ouvert maintenant' : 'Fermé'}
              </p>
              <p className="text-sm text-neutral-600">
                {pharmacyStatus?.currentDay}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-medium text-neutral-900">
              {currentDayHours?.closed ? 'Fermé' : `${currentDayHours?.open} - ${currentDayHours?.close}`}
            </p>
            {timeUntilClose && (
              <p className="text-xs text-green-600">
                Fermeture dans {timeUntilClose}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="flex items-center space-x-2 text-sm">
        <Clock className="w-4 h-4 text-neutral-500" />
        <span className="text-neutral-700">
          {pharmacyStatus ? getStatusMessage(pharmacyStatus) : 'Horaires'}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <Clock className="w-6 h-6 text-primary-500" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-neutral-900">
            Horaires d'ouverture
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <div className={`w-2 h-2 rounded-full ${pharmacyStatus?.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className={`text-sm font-medium ${pharmacyStatus?.isOpen ? 'text-green-600' : 'text-red-600'}`}>
              {pharmacyStatus?.isOpen ? 'Ouvert maintenant' : 'Fermé'}
            </span>
          </div>
        </div>
      </div>

      {/* Horaires de la semaine */}
      <div className="space-y-3 mb-6">
        {siteData.hours.map((day, index) => {
          let displayText = '';
          if (day.closed) {
            displayText = 'Fermé';
          } else {
            let hasHours = false;
            
            // Horaires du matin
            if (day.openMorning && day.closeMorning) {
              displayText += `${day.openMorning} - ${day.closeMorning}`;
              hasHours = true;
            }
            
            // Horaires de l'après-midi
            if (day.openAfternoon && day.closeAfternoon) {
              if (hasHours) {
                displayText += ` / ${day.openAfternoon} - ${day.closeAfternoon}`;
              } else {
                displayText += `${day.openAfternoon} - ${day.closeAfternoon}`;
                hasHours = true;
              }
            }
            
            // Si aucun horaire n'est défini
            if (!hasHours) {
              displayText = 'Horaires à confirmer';
            }
          }
          
          return (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="font-medium text-neutral-700">{day.day}</span>
              <span className={`text-sm ${day.closed ? 'text-red-600' : 'text-neutral-600'}`}>
                {displayText}
              </span>
            </div>
          );
        })}
      </div>

      {/* Informations supplémentaires */}
      <div className="space-y-3 pt-4 border-t border-neutral-200">
        <div className="flex items-center space-x-3 text-sm text-neutral-600">
          <MapPin className="w-4 h-4 text-primary-500" />
          <span>
            {siteData.address.street}, {siteData.address.postalCode} {siteData.address.city}
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-sm text-neutral-600">
          <Phone className="w-4 h-4 text-primary-500" />
          <a 
            href={`tel:${siteData.contact.phone}`}
            className="hover:text-primary-500 transition-colors"
          >
            {siteData.contact.phone}
          </a>
        </div>

        {timeUntilClose && pharmacyStatus?.isOpen && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm text-green-800">
              <strong>Fermeture dans {timeUntilClose}</strong>
            </p>
          </div>
        )}

        {pharmacyStatus?.nextOpen && !pharmacyStatus?.isOpen && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <strong>Réouverture {pharmacyStatus.nextOpen}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Pharmacie de garde */}
      <div className="mt-4 p-3 bg-neutral-50 rounded-lg">
        <p className="text-sm text-neutral-600 mb-2">
          <strong>Pharmacie de garde :</strong>
        </p>
        <a 
          href={siteData.emergency.pharmacyGuard}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
        >
          Consulter la liste officielle des pharmacies de garde
        </a>
      </div>
    </div>
  );
};

export default OpeningHours;
