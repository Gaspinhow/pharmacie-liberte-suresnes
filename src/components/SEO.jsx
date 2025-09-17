import React, { useEffect } from 'react';
import { generatePageSEO, generatePharmacyJSONLD, generateFAQJSONLD } from '../utils/seo';
import siteData from '../data/site.json';

const SEO = ({ 
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = '',
  type = 'website',
  jsonLD = null,
  noindex = false
}) => {
  const seoData = generatePageSEO({
    title,
    description,
    keywords,
    image,
    url,
    type
  });

  // Données structurées par défaut pour la pharmacie
  const defaultJSONLD = generatePharmacyJSONLD(siteData);

  useEffect(() => {
    // Mise à jour du titre
    document.title = seoData.title;
    
    // Mise à jour de la meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = seoData.description;
    
    // Mise à jour des mots-clés
    if (keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = seoData.keywords;
    }
    
    // Mise à jour du canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.canonical;
    
    // Données structurées JSON-LD
    let jsonLDScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLDScript) {
      jsonLDScript = document.createElement('script');
      jsonLDScript.type = 'application/ld+json';
      document.head.appendChild(jsonLDScript);
    }
    jsonLDScript.textContent = JSON.stringify(jsonLD || defaultJSONLD);
  }, [title, description, keywords, image, url, type, jsonLD, seoData, defaultJSONLD]);

  return null; // Ce composant ne rend rien visuellement
};

// Composant spécialisé pour la page d'accueil
export const HomeSEO = () => {
  const jsonLD = generatePharmacyJSONLD(siteData);
  
  return (
    <SEO
      title="Accueil"
      description="Pharmacie de quartier moderne - Services de santé, conseils personnalisés et accompagnement sur-mesure. Votre santé, notre priorité au quotidien."
      keywords={[
        'pharmacie',
        'santé',
        'médicaments',
        'conseils',
        'vaccination',
        'tests',
        'ordonnance',
        siteData.address.city
      ]}
      url="/"
      jsonLD={jsonLD}
    />
  );
};

// Composant spécialisé pour les services
export const ServiceSEO = ({ service }) => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Pharmacy",
      "name": siteData.name
    },
    "serviceType": service.title,
    "areaServed": {
      "@type": "City",
      "name": siteData.address.city
    }
  };
  
  return (
    <SEO
      title={service.title}
      description={`${service.description} - Service proposé par ${siteData.name}, pharmacie de ${siteData.address.city}.`}
      keywords={[
        service.title.toLowerCase(),
        'pharmacie',
        'service',
        siteData.address.city
      ]}
      url={`/services/${service.slug}`}
      jsonLD={jsonLD}
    />
  );
};

// Composant spécialisé pour la FAQ
export const FAQSEO = ({ faqItems }) => {
  const jsonLD = generateFAQJSONLD(faqItems);
  
  return (
    <SEO
      title="Questions fréquentes"
      description="Trouvez les réponses aux questions les plus fréquentes sur nos services, horaires, et modalités de fonctionnement."
      keywords={[
        'FAQ',
        'questions fréquentes',
        'aide',
        'pharmacie',
        siteData.address.city
      ]}
      url="/faq"
      jsonLD={jsonLD}
    />
  );
};

// Composant spécialisé pour les pages légales
export const LegalSEO = ({ pageType, title }) => {
  return (
    <SEO
      title={title}
      description={`${title} - ${siteData.name}, pharmacie de ${siteData.address.city}.`}
      url={`/${pageType}`}
      noindex={true}
    />
  );
};

export default SEO;
