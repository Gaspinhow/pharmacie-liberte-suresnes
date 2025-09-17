import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram,
  ExternalLink,
  Shield,
  Cookie,
  FileText
} from 'lucide-react';
import { formatHours } from '../utils/hours';
import siteData from '../data/site.json';

const Footer = () => {
  const formattedHours = formatHours(siteData.hours);

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Contenu principal du footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations de contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              {siteData.name}
            </h3>
            <p className="text-neutral-300 mb-4">
              Votre santé, notre priorité au quotidien. Pharmacie de quartier moderne 
              avec des services de proximité et un accompagnement personnalisé.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    {siteData.address.street}<br />
                    {siteData.address.postalCode} {siteData.address.city}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`tel:${siteData.contact.phone}`}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {siteData.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${siteData.contact.email}`}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Horaires d'ouverture
            </h3>
            <div className="space-y-2">
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
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-neutral-300">{day.day}</span>
                    <span className={day.closed ? 'text-red-400' : 'text-white'}>
                      {displayText}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 p-3 bg-neutral-800 rounded-lg">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-primary-400" />
                <span className="text-neutral-300">
                  Pharmacie de garde : 
                  <a 
                    href={siteData.emergency.pharmacyGuard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 ml-1"
                  >
                    Consulter le site officiel
                    <ExternalLink className="w-3 h-3 inline ml-1" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Liens rapides
            </h3>
            <nav className="space-y-2">
              <Link 
                to="/services" 
                className="block text-sm text-neutral-300 hover:text-primary-400 transition-colors"
              >
                Nos services
              </Link>
              <Link 
                to="/ordonnance" 
                className="block text-sm text-neutral-300 hover:text-primary-400 transition-colors"
              >
                Envoyer une ordonnance
              </Link>
              <Link 
                to="/conseils" 
                className="block text-sm text-neutral-300 hover:text-primary-400 transition-colors"
              >
                Conseils santé
              </Link>
              <Link 
                to="/garde" 
                className="block text-sm text-neutral-300 hover:text-primary-400 transition-colors"
              >
                Pharmacie de garde
              </Link>
              <Link 
                to="/faq" 
                className="block text-sm text-neutral-300 hover:text-primary-400 transition-colors"
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm text-neutral-300 hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Réseaux sociaux et informations légales */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Suivez-nous
            </h3>
            
            <div className="flex space-x-4 mb-6">
              {siteData.social.facebook && (
                <a 
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              
              {siteData.social.instagram && (
                <a 
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Liens utiles */}
            <div className="space-y-3 mb-4">
              {siteData.doctolib && (
                <a 
                  href={siteData.doctolib}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <span>Prendre rendez-vous</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              
              {siteData.map && (
                <a 
                  href={siteData.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Voir sur Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Informations légales */}
            <div className="space-y-2 text-xs text-neutral-400">
              <p>SIRET : {siteData.siret}</p>
              <p>Pharmacie autorisée</p>
              <p>Conseil de l'Ordre des Pharmaciens</p>
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link 
                to="/mentions-legales" 
                className="hover:text-primary-400 transition-colors"
              >
                Mentions légales
              </Link>
              <Link 
                to="/politique-confidentialite" 
                className="hover:text-primary-400 transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link 
                to="/cookies" 
                className="hover:text-primary-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>RGPD</span>
              </div>
              <div className="flex items-center space-x-1">
                <Cookie className="w-4 h-4" />
                <span>Cookies</span>
              </div>
              <div className="flex items-center space-x-1">
                <FileText className="w-4 h-4" />
                <span>CGV</span>
              </div>
            </div>
            
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} {siteData.name}. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
