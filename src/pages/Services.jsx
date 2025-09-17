import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import siteData from '../data/site.json';

const Services = () => {
  const featuredServices = siteData.services.filter(service => service.featured);
  const otherServices = siteData.services.filter(service => !service.featured);

  return (
    <>
      <SEO
        title="Nos services"
        description="Découvrez tous nos services de santé : vaccination, tests antigéniques, préparation des doses, conseils personnalisés et bien plus encore."
        keywords={['services', 'pharmacie', 'vaccination', 'tests', 'conseils', 'santé']}
        url="/services"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nos services de santé
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Une gamme complète de services pharmaceutiques pour répondre à tous vos besoins de santé 
              avec professionnalisme et bienveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Services phares */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Services phares
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nos services les plus demandés, disponibles sur rendez-vous ou selon disponibilités.
            </p>
          </div>
          
          <div className="grid-services">
            {featuredServices.map((service) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tous les services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Tous nos services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez l'ensemble de nos services pour votre bien-être et votre santé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nos services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Pourquoi choisir nos services ?
            </h2>
            <p className="text-xl text-neutral-600">
              Des services de qualité avec une approche personnalisée.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Disponibilité
              </h3>
              <p className="text-neutral-600">
                Horaires étendus et services disponibles selon vos besoins. 
                Certains services sont disponibles sans rendez-vous.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Expertise
              </h3>
              <p className="text-neutral-600">
                Équipe de pharmaciens diplômés et préparateurs expérimentés 
                pour des conseils personnalisés et adaptés.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Sécurité
              </h3>
              <p className="text-neutral-600">
                Respect des normes pharmaceutiques strictes et suivi rigoureux 
                de tous nos services pour votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Besoin d'un service spécifique ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour plus d'informations sur nos services ou pour prendre rendez-vous.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${siteData.contact.phone}`}
              className="btn btn-accent btn-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler maintenant
            </a>
            <Link 
              to="/contact"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-500"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
