import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, AlertCircle, Shield, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import FileUpload from '../components/FileUpload';
import { validatePrescriptionForm, sanitizeFormData } from '../utils/validators';
import siteData from '../data/site.json';

const Prescription = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    file: null,
    consent: false,
    honeypot: '' // Champ anti-spam
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileSelect = (file) => {
    setFormData(prev => ({
      ...prev,
      file: file
    }));
    
    // Effacer l'erreur du fichier
    if (errors.file) {
      setErrors(prev => ({
        ...prev,
        file: ''
      }));
    }
  };

  const handleFileRemove = () => {
    setFormData(prev => ({
      ...prev,
      file: null
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Nettoyer les données
    const cleanedData = sanitizeFormData(formData);
    
    // Valider le formulaire
    const validation = validatePrescriptionForm(cleanedData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: Implémenter l'envoi sécurisé de l'ordonnance
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        file: null,
        consent: false,
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
          title="Ordonnance envoyée"
          description="Votre ordonnance a été transmise avec succès. Nous vous contacterons pour confirmer la réception."
          keywords={['ordonnance', 'envoyée', 'confirmation']}
          url="/ordonnance"
        />
        
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Ordonnance transmise !
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8">
                Merci ! Votre ordonnance a été transmise avec succès. 
                Nous vous contacterons dans les plus brefs délais pour confirmer la réception 
                et vérifier la disponibilité des médicaments.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Prochaines étapes :
                </h3>
                <ul className="text-blue-800 text-left space-y-1">
                  <li>• Vérification de la lisibilité de votre ordonnance</li>
                  <li>• Contrôle de la disponibilité des médicaments</li>
                  <li>• Appel de confirmation sous 2h ouvrées</li>
                  <li>• Organisation de la récupération</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${siteData.contact.phone}`}
                  className="btn btn-primary btn-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler pour vérifier
                </a>
                
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline btn-lg"
                >
                  Envoyer une autre ordonnance
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
        title="Envoyer une ordonnance"
        description="Transmettez votre ordonnance en ligne de manière sécurisée. Nous vous contacterons pour confirmer la réception et organiser la récupération."
        keywords={['ordonnance', 'envoi', 'pharmacie', 'médicaments']}
        url="/ordonnance"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Envoyer une ordonnance
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Transmettez votre ordonnance en ligne de manière sécurisée et pratique. 
              Nous vous contacterons pour confirmer la réception et organiser la récupération.
            </p>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-soft border border-blue-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                    Informations importantes
                  </h2>
                  <p className="text-neutral-600">
                    Avant d'envoyer votre ordonnance, veuillez prendre connaissance des points suivants :
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Ordonnance lisible
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Assurez-vous que votre ordonnance est claire et complète.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Formats acceptés
                      </h3>
                      <p className="text-sm text-neutral-600">
                        JPG, PNG ou PDF. Taille maximale : 10MB.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Confirmation rapide
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Nous vous appelons sous 2h ouvrées pour confirmer.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Sécurité des données
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Vos données sont traitées de manière sécurisée et confidentielle.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Pas de stockage
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Aucune donnée n'est stockée de manière permanente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Consentement RGPD
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Vous devez accepter le traitement de vos données de santé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                Transmettre votre ordonnance
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
                      placeholder="Votre nom et prénom"
                      required
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Votre numéro de téléphone"
                      required
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="form-label">
                    Ordonnance *
                  </label>
                  <FileUpload
                    onFileSelect={handleFileSelect}
                    onFileRemove={handleFileRemove}
                    maxSize={10 * 1024 * 1024} // 10MB
                    allowedTypes={['image/jpeg', 'image/png', 'application/pdf']}
                    allowedExtensions={['.jpg', '.jpeg', '.png', '.pdf']}
                    label="Sélectionner votre ordonnance"
                    placeholder="Glissez-déposez votre ordonnance ici ou cliquez pour sélectionner"
                    error={errors.file}
                  />
                </div>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                      required
                    />
                    <div className="text-sm">
                      <span className="font-medium text-neutral-900">
                        Consentement RGPD *
                      </span>
                      <p className="text-neutral-600 mt-1">
                        J'autorise la pharmacie à traiter ces données de santé pour répondre à ma demande. 
                        Ces données seront utilisées uniquement pour traiter mon ordonnance et ne seront pas conservées 
                        de manière permanente. Je peux retirer mon consentement à tout moment.
                      </p>
                    </div>
                  </label>
                  {errors.consent && (
                    <p className="form-error mt-2">{errors.consent}</p>
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
                      <Upload className="w-4 h-4 mr-2" />
                      Envoyer l'ordonnance
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact alternatif */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-neutral-600 mb-8">
              Si vous rencontrez des difficultés ou préférez transmettre votre ordonnance par téléphone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="btn btn-primary btn-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler pour transmettre
              </a>
              
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="btn btn-outline btn-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Envoyer par email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prescription;
