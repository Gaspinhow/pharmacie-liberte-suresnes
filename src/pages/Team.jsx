import React from 'react';
import { Users, Award, Calendar, Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import siteData from '../data/site.json';

const Team = () => {
  return (
    <>
      <SEO
        title="Notre équipe"
        description="Découvrez notre équipe de pharmaciens et préparateurs qualifiés, dédiés à votre santé et votre bien-être."
        keywords={['équipe', 'pharmaciens', 'préparateurs', 'professionnels', 'santé']}
        url="/equipe"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Notre équipe
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Découvrez notre équipe de professionnels de santé qualifiés, 
              dédiés à votre bien-être et à votre santé au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation de l'équipe */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
              Une équipe à votre service
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Notre équipe de pharmaciens diplômés et de préparateurs expérimentés 
              met tout en œuvre pour vous offrir des conseils personnalisés et 
              un service de qualité adapté à vos besoins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteData.team.map((member, index) => (
              <div key={index} className="card card-hover">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-neutral-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-sm text-neutral-600 mb-2">
                      {member.specialty}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {member.experience}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-neutral-600">
                      <Award className="w-4 h-4 text-primary-500" />
                      <span>Diplômé en pharmacie</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-neutral-600">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      <span>Disponible sur rendez-vous</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-neutral-600">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span>Conseils personnalisés</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <div className="flex space-x-3">
                      <a 
                        href={`tel:${siteData.contact.phone}`}
                        className="btn btn-primary btn-sm flex-1"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Appeler
                      </a>
                      <a 
                        href={`mailto:${siteData.contact.email}`}
                        className="btn btn-outline btn-sm flex-1"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-12 text-center">
              Nos valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  Proximité
                </h3>
                <p className="text-neutral-600">
                  Une relation de confiance et de proximité avec nos patients, 
                  dans un environnement chaleureux et accueillant.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  Expertise
                </h3>
                <p className="text-neutral-600">
                  Une équipe qualifiée et expérimentée, formée aux dernières 
                  avancées de la pharmacie et des soins de santé.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  Disponibilité
                </h3>
                <p className="text-neutral-600">
                  Des horaires étendus et un service de garde pour répondre 
                  à vos besoins même en dehors des heures habituelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation et qualifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Formation et qualifications
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Pharmacien titulaire
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Diplôme d'État de Docteur en Pharmacie</li>
                  <li>• Formation continue obligatoire</li>
                  <li>• Membre de l'Ordre des Pharmaciens</li>
                  <li>• Spécialisation en pharmacie clinique</li>
                </ul>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Préparateur en pharmacie
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Diplôme de Préparateur en Pharmacie Hospitalière</li>
                  <li>• Formation en galénique et préparations</li>
                  <li>• Connaissance des interactions médicamenteuses</li>
                  <li>• Formation en conseil pharmaceutique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact équipe */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Rencontrez notre équipe
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Venez nous rendre visite dans notre pharmacie pour faire connaissance 
            avec notre équipe et découvrir nos services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${siteData.contact.phone}`}
              className="btn btn-accent btn-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler maintenant
            </a>
            <a 
              href={`mailto:${siteData.contact.email}`}
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-500"
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
