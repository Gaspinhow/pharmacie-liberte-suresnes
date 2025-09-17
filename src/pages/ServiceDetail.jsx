import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, CheckCircle, Phone, Calendar } from 'lucide-react';
import { ServiceSEO } from '../components/SEO';
import siteData from '../data/site.json';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = siteData.services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Service non trouvé
            </h1>
            <p className="text-neutral-600 mb-8">
              Le service que vous recherchez n'existe pas.
            </p>
            <Link to="/services" className="btn btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ServiceSEO service={service} />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux services
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contenu principal */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                    À propos de ce service
                  </h2>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {service.details}
                  </p>
                  
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                    Comment ça fonctionne ?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                      <p className="text-neutral-700">
                        <strong>Prise de rendez-vous</strong> - Contactez-nous pour planifier votre visite.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                      <p className="text-neutral-700">
                        <strong>Consultation</strong> - Notre équipe vous accueille et évalue vos besoins.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                      <p className="text-neutral-700">
                        <strong>Service personnalisé</strong> - Nous vous proposons une solution adaptée.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                      <p className="text-neutral-700">
                        <strong>Suivi</strong> - Nous restons disponibles pour toute question.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Informations pratiques */}
                <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                    Informations pratiques
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium text-neutral-900">Sur rendez-vous</p>
                        <p className="text-sm text-neutral-600">Recommandé pour un meilleur service</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary-500" />
                      <div>
                        <p className="font-medium text-neutral-900">Conseil personnalisé</p>
                        <p className="text-sm text-neutral-600">Adapté à vos besoins</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium text-neutral-900">Service professionnel</p>
                        <p className="text-sm text-neutral-600">Équipe qualifiée</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                    Prendre rendez-vous
                  </h3>
                  
                  <div className="space-y-3">
                    <a 
                      href={`tel:${siteData.contact.phone}`}
                      className="btn btn-primary w-full"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler maintenant
                    </a>
                    
                    <Link 
                      to="/contact"
                      className="btn btn-outline w-full"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Demander un RDV
                    </Link>
                  </div>
                </div>
                
                {/* Autres services */}
                <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                    Autres services
                  </h3>
                  
                  <div className="space-y-2">
                    {siteData.services
                      .filter(s => s.slug !== service.slug)
                      .slice(0, 3)
                      .map(otherService => (
                        <Link
                          key={otherService.slug}
                          to={`/services/${otherService.slug}`}
                          className="block text-sm text-primary-500 hover:text-primary-600 transition-colors"
                        >
                          {otherService.title}
                        </Link>
                      ))}
                  </div>
                  
                  <Link 
                    to="/services"
                    className="text-sm text-primary-500 hover:text-primary-600 transition-colors mt-3 inline-block"
                  >
                    Voir tous les services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ spécifique au service */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Questions fréquentes
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Faut-il prendre rendez-vous pour ce service ?
                </h3>
                <p className="text-neutral-700">
                  Nous recommandons fortement de prendre rendez-vous pour garantir la disponibilité 
                  de notre équipe et un service optimal. Cependant, selon les périodes, 
                  nous pouvons accepter les consultations sans rendez-vous.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Combien de temps dure la consultation ?
                </h3>
                <p className="text-neutral-700">
                  La durée varie selon le type de service et vos besoins spécifiques. 
                  Comptez généralement entre 15 et 30 minutes pour une consultation complète.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Ce service est-il remboursé ?
                </h3>
                <p className="text-neutral-700">
                  Les modalités de remboursement dépendent du type de service et de votre mutuelle. 
                  Nous vous informerons des tarifs et des possibilités de remboursement lors de votre visite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
