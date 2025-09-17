import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import OpeningHours from '../components/OpeningHours';
import Map from '../components/Map';
import { validateContactForm, sanitizeFormData } from '../utils/validators';
import siteData from '../data/site.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '' // Champ anti-spam
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Nettoyer les données
    const cleanedData = sanitizeFormData(formData);
    
    // Valider le formulaire
    const validation = validateContactForm(cleanedData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: Implémenter l'envoi du formulaire
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        honeypot: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEO
          title="Contact"
          description="Contactez notre pharmacie pour toute question ou demande. Nous sommes là pour vous accompagner."
          keywords={['contact', 'pharmacie', 'rendez-vous', 'conseils']}
          url="/contact"
        />
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Message envoyé !
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8">
                Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${siteData.contact.phone}`}
                  className="btn btn-primary btn-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </a>
                
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline btn-lg"
                >
                  Envoyer un autre message
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contactez notre pharmacie pour toute question ou demande. Nous sommes là pour vous accompagner."
        keywords={['contact', 'pharmacie', 'rendez-vous', 'conseils']}
        url="/contact"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos besoins de santé.
            </p>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Téléphone
              </h3>
              <p className="text-neutral-600 mb-4">
                Appelez-nous pour toute question ou demande urgente.
              </p>
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                {siteData.contact.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Email
              </h3>
              <p className="text-neutral-600 mb-4">
                Envoyez-nous un message pour toute demande non urgente.
              </p>
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="text-secondary-500 hover:text-secondary-600 font-medium"
              >
                {siteData.contact.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Adresse
              </h3>
              <p className="text-neutral-600 mb-4">
                Venez nous rendre visite dans notre pharmacie.
              </p>
              <p className="text-accent-500 font-medium">
                {siteData.address.street}<br />
                {siteData.address.postalCode} {siteData.address.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact et informations */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ honeypot (caché) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="form-label">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question générale</option>
                      <option value="rendez-vous">Prise de rendez-vous</option>
                      <option value="ordonnance">Ordonnance</option>
                      <option value="conseil">Conseil pharmaceutique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Décrivez votre demande ou votre question..."
                    required
                  />
                  {errors.message && (
                    <p className="form-error">{errors.message}</p>
                  )}
                </div>
                
                {errors.submit && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Informations supplémentaires */}
            <div className="space-y-6">
              <OpeningHours />
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Besoin d'aide rapide ?
                </h3>
                <div className="space-y-3">
                  <a 
                    href={`tel:${siteData.contact.phone}`}
                    className="btn btn-primary w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler maintenant
                  </a>
                  
                  <a 
                    href={`mailto:${siteData.contact.email}`}
                    className="btn btn-outline w-full"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer un email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Map 
            address={`${siteData.address.street}, ${siteData.address.postalCode} ${siteData.address.city}`}
            height="500px"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
