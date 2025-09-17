import React from 'react';
import { AlertTriangle, Phone, Clock, MapPin, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import siteData from '../data/site.json';

const Emergency = () => {
  return (
    <>
      <SEO
        title="Pharmacie de garde et urgences"
        description="Informations sur les pharmacies de garde, numéros d'urgence et services disponibles en cas de besoin médical urgent."
        keywords={['pharmacie de garde', 'urgence', 'garde', 'SAMU', 'pompiers']}
        url="/garde"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Pharmacie de garde & Urgences
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              En cas d'urgence médicale ou de besoin de médicaments en dehors des heures d'ouverture, 
              consultez les informations ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Numéros d'urgence */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Numéros d'urgence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-red-900 mb-2">
                  SAMU
                </h3>
                <p className="text-red-700 mb-4">
                  Service d'Aide Médicale Urgente
                </p>
                <a 
                  href="tel:15"
                  className="text-2xl font-bold text-red-600 hover:text-red-700"
                >
                  15
                </a>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-orange-900 mb-2">
                  Pompiers
                </h3>
                <p className="text-orange-700 mb-4">
                  Service de secours et d'urgence
                </p>
                <a 
                  href="tel:18"
                  className="text-2xl font-bold text-orange-600 hover:text-orange-700"
                >
                  18
                </a>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-blue-900 mb-2">
                  Police
                </h3>
                <p className="text-blue-700 mb-4">
                  Forces de l'ordre
                </p>
                <a 
                  href="tel:17"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                >
                  17
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacie de garde */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Pharmacie de garde
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200 mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
                    Comment trouver une pharmacie de garde ?
                  </h3>
                  <p className="text-neutral-600">
                    Les pharmacies de garde sont désignées par le Conseil de l'Ordre des Pharmaciens 
                    pour assurer un service continu. Elles changent régulièrement selon un planning établi.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Site officiel des pharmacies de garde
                  </h4>
                  <p className="text-blue-700 mb-3">
                    Consultez le site officiel pour connaître la pharmacie de garde de votre secteur.
                  </p>
                  <a 
                    href={siteData.emergency.pharmacyGuard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Consulter le site officiel
                  </a>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Appel direct
                  </h4>
                  <p className="text-green-700 mb-3">
                    Vous pouvez également appeler directement notre pharmacie pour connaître 
                    les pharmacies de garde de votre secteur.
                  </p>
                  <a 
                    href={`tel:${siteData.contact.phone}`}
                    className="btn btn-accent btn-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler {siteData.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Informations pratiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Horaires de garde
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Lundi au vendredi</span>
                    <span className="font-medium">19h30 - 8h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Samedi</span>
                    <span className="font-medium">19h00 - 9h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Dimanche</span>
                    <span className="font-medium">24h/24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Jours fériés</span>
                    <span className="font-medium">24h/24</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Services de garde
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Délivrance de médicaments urgents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Conseils pharmaceutiques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Premiers secours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Orientation vers les services d'urgence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils d'urgence */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Conseils en cas d'urgence
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Que faire en cas d'urgence médicale ?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                    <p className="text-neutral-700">
                      <strong>Appelez le 15 (SAMU)</strong> pour toute urgence médicale nécessitant une intervention rapide.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                    <p className="text-neutral-700">
                      <strong>Restez calme</strong> et donnez des informations claires sur la situation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                    <p className="text-neutral-700">
                      <strong>Suivez les instructions</strong> du médecin régulateur du SAMU.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Besoin de médicaments urgents ?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                    <p className="text-neutral-700">
                      <strong>Consultez le site officiel</strong> des pharmacies de garde pour trouver la pharmacie ouverte.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                    <p className="text-neutral-700">
                      <strong>Appelez avant de vous déplacer</strong> pour vérifier la disponibilité du médicament.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                    <p className="text-neutral-700">
                      <strong>Présentez votre ordonnance</strong> et votre carte vitale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact d'urgence */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Besoin d'aide immédiate ?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              En cas d'urgence médicale, n'hésitez pas à appeler les services d'urgence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:15"
                className="btn bg-white text-red-600 hover:bg-red-50 btn-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler le SAMU (15)
              </a>
              
              <a 
                href="tel:18"
                className="btn bg-white text-red-600 hover:bg-red-50 btn-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler les Pompiers (18)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
