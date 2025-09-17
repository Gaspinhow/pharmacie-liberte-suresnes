import React, { useState } from 'react';
import { AlertTriangle, X, Phone, Clock, MapPin } from 'lucide-react';

const EmergencyBanner = ({ 
  type = 'info', 
  title, 
  message, 
  actionText, 
  actionUrl, 
  dismissible = true,
  autoHide = false,
  autoHideDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    if (autoHide && autoHideDelay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
      
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay]);

  const getTypeStyles = (type) => {
    const styles = {
      emergency: {
        bg: 'bg-red-600',
        text: 'text-white',
        icon: 'text-red-100',
        border: 'border-red-500'
      },
      warning: {
        bg: 'bg-orange-500',
        text: 'text-white',
        icon: 'text-orange-100',
        border: 'border-orange-400'
      },
      info: {
        bg: 'bg-blue-600',
        text: 'text-white',
        icon: 'text-blue-100',
        border: 'border-blue-500'
      },
      success: {
        bg: 'bg-green-600',
        text: 'text-white',
        icon: 'text-green-100',
        border: 'border-green-500'
      }
    };
    
    return styles[type] || styles.info;
  };

  const getIcon = (type) => {
    const icons = {
      emergency: AlertTriangle,
      warning: AlertTriangle,
      info: AlertTriangle,
      success: AlertTriangle
    };
    
    const IconComponent = icons[type] || AlertTriangle;
    return <IconComponent className="w-5 h-5" />;
  };

  if (!isVisible) return null;

  const styles = getTypeStyles(type);

  return (
    <div className={`${styles.bg} ${styles.text} py-3 px-4 relative`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`${styles.icon} flex-shrink-0`}>
              {getIcon(type)}
            </div>
            <div className="flex-1">
              {title && (
                <h3 className="font-semibold text-sm mb-1">
                  {title}
                </h3>
              )}
              <p className="text-sm">
                {message}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {actionText && actionUrl && (
              <a 
                href={actionUrl}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                {actionText}
              </a>
            )}
            
            {dismissible && (
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant spécialisé pour les urgences médicales
export const EmergencyMedicalBanner = () => {
  return (
    <EmergencyBanner
      type="emergency"
      title="URGENCE MÉDICALE"
      message="En cas d'urgence médicale, appelez le 15 (SAMU) ou le 18 (Pompiers)"
      actionText="Appeler le 15"
      actionUrl="tel:15"
      dismissible={false}
    />
  );
};

// Composant pour les pharmacies de garde
export const PharmacyGuardBanner = ({ isGuardDay = false }) => {
  if (!isGuardDay) return null;
  
  return (
    <EmergencyBanner
      type="warning"
      title="PHARMACIE DE GARDE"
      message="Nous sommes de garde aujourd'hui. Service d'urgence disponible."
      actionText="Voir les horaires"
      actionUrl="/garde"
    />
  );
};

// Composant pour les campagnes de vaccination
export const VaccinationBanner = ({ campaign = null }) => {
  if (!campaign) return null;
  
  return (
    <EmergencyBanner
      type="info"
      title={`CAMPAGNE DE VACCINATION - ${campaign.type}`}
      message={`${campaign.message} Sans rendez-vous possible selon disponibilités.`}
      actionText="Prendre RDV"
      actionUrl="/services/vaccination"
    />
  );
};

// Composant pour les fermetures exceptionnelles
export const ClosureBanner = ({ closureInfo }) => {
  if (!closureInfo) return null;
  
  return (
    <EmergencyBanner
      type="warning"
      title="FERMETURE EXCEPTIONNELLE"
      message={`${closureInfo.reason} Réouverture prévue ${closureInfo.reopening}.`}
      dismissible={true}
    />
  );
};

// Composant pour les informations importantes
export const InfoBanner = ({ info }) => {
  if (!info) return null;
  
  return (
    <EmergencyBanner
      type="info"
      title={info.title}
      message={info.message}
      actionText={info.actionText}
      actionUrl={info.actionUrl}
      dismissible={true}
    />
  );
};

export default EmergencyBanner;
