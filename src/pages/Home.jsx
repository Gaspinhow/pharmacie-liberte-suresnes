import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  FileText, 
  Calendar, 
  ArrowRight, 
  Star,
  Shield,
  Users,
  Clock,
  MapPin,
  CheckCircle
} from 'lucide-react';
import { HomeSEO } from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import OpeningHours from '../components/OpeningHours';
import EmergencyBanner, { VaccinationBanner } from '../components/EmergencyBanner';
import siteData from '../data/site.json';

const Home = () => {
  const featuredServices = siteData.services.filter(service => service.featured);
  const testimonials = siteData.testimonials.slice(0, 3);

  return (
    <>
      <HomeSEO />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                {siteData.tagline}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                {siteData.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ordonnance" className="btn btn-accent btn-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Envoyer mon ordonnance
                </Link>
                <a href={`tel:${siteData.contact.phone}`} className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-500">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Conseils personnalisés</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Équipe qualifiée</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-pharmacy bg-white bg-opacity-10 rounded-2xl backdrop-blur-custom border border-white border-opacity-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold">P</span>
                  </div>
                  <p className="text-lg font-medium">Image de la pharmacie</p>
                  <p className="text-sm opacity-80">(placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière d'urgence si nécessaire */}
      <VaccinationBanner 
        campaign={{
          type: "GRIPPE",
          message: "Campagne de vaccination contre la grippe en cours."
        }}
      />

      {/* Services phares */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Nos services phares
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez nos services de santé spécialisés, conçus pour répondre à tous vos besoins 
              avec professionnalisme et bienveillance.
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
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary btn-lg">
              Découvrir tous nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Pourquoi choisir notre pharmacie ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Une approche personnalisée et des services adaptés à vos besoins de santé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Équipe qualifiée
              </h3>
              <p className="text-neutral-600">
                Pharmaciens diplômés et préparateurs expérimentés à votre service 
                pour des conseils personnalisés et adaptés.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Disponibilité
              </h3>
              <p className="text-neutral-600">
                Horaires étendus et service de garde pour répondre à vos besoins 
                même en dehors des heures habituelles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Sécurité & Qualité
              </h3>
              <p className="text-neutral-600">
                Respect des normes pharmaceutiques strictes et suivi rigoureux 
                de la chaîne du froid pour vos médicaments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-neutral-600">
              La satisfaction de nos patients est notre priorité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-medium text-neutral-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires et contact */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <OpeningHours />
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Besoin d'aide ?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Notre équipe est là pour vous accompagner dans tous vos besoins de santé. 
                  N'hésitez pas à nous contacter.
                </p>
                
                <div className="space-y-3">
                  <a 
                    href={`tel:${siteData.contact.phone}`}
                    className="btn btn-primary w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler maintenant
                  </a>
                  
                  <Link 
                    to="/ordonnance"
                    className="btn btn-secondary w-full"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Envoyer une ordonnance
                  </Link>
                  
                  <Link 
                    to="/contact"
                    className="btn btn-outline w-full"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Nos engagements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">Conseils personnalisés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">Service de proximité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">Respect de la confidentialité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">Qualité des produits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
