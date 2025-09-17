/**
 * Utilitaires pour le SEO et les données structurées
 */

/**
 * Génère les données structurées JSON-LD pour une pharmacie
 * @param {Object} siteData - Données du site
 * @returns {Object} - Données structurées LocalBusiness
 */
export function generatePharmacyJSONLD(siteData) {
  const { name, contact, address, hours, social, map } = siteData;
  
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": name,
    "description": "Pharmacie de quartier moderne - Services de santé, conseils personnalisés et accompagnement sur-mesure",
    "url": `https://${name.toLowerCase().replace(/\s+/g, '')}.fr`,
    "telephone": contact.phone,
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "postalCode": address.postalCode,
      "addressLocality": address.city,
      "addressCountry": address.country
    },
    "openingHoursSpecification": generateOpeningHoursJSONLD(hours),
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Carte Vitale"],
    "currenciesAccepted": "EUR"
  };
  
  // Ajouter les coordonnées géographiques si disponibles
  if (map && map.includes('@')) {
    const coords = extractCoordinatesFromMap(map);
    if (coords) {
      jsonLD.geo = {
        "@type": "GeoCoordinates",
        "latitude": coords.lat,
        "longitude": coords.lng
      };
    }
  }
  
  // Ajouter les réseaux sociaux
  const sameAs = [];
  if (social.facebook) sameAs.push(social.facebook);
  if (social.instagram) sameAs.push(social.instagram);
  if (social.linkedin) sameAs.push(social.linkedin);
  
  if (sameAs.length > 0) {
    jsonLD.sameAs = sameAs;
  }
  
  return jsonLD;
}

/**
 * Génère les données structurées pour une page FAQ
 * @param {Array} faqItems - Liste des questions/réponses
 * @returns {Object} - Données structurées FAQPage
 */
export function generateFAQJSONLD(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

/**
 * Génère les données structurées pour un service
 * @param {Object} service - Données du service
 * @returns {Object} - Données structurées Service
 */
export function generateServiceJSONLD(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Pharmacy",
      "name": "{{PharmacyName}}"
    },
    "serviceType": service.title,
    "areaServed": {
      "@type": "City",
      "name": "{{City}}"
    }
  };
}

/**
 * Génère les données structurées pour un produit
 * @param {Object} product - Données du produit
 * @returns {Object} - Données structurées Product
 */
export function generateProductJSONLD(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Marque générique"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "seller": {
        "@type": "Pharmacy",
        "name": "{{PharmacyName}}"
      }
    }
  };
}

/**
 * Génère les données structurées pour une organisation
 * @param {Object} siteData - Données du site
 * @returns {Object} - Données structurées Organization
 */
export function generateOrganizationJSONLD(siteData) {
  const { name, contact, address, social } = siteData;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": `https://${name.toLowerCase().replace(/\s+/g, '')}.fr`,
    "logo": `https://${name.toLowerCase().replace(/\s+/g, '')}.fr/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contact.phone,
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": "French"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "postalCode": address.postalCode,
      "addressLocality": address.city,
      "addressCountry": address.country
    }
  };
}

/**
 * Extrait les coordonnées d'un lien Google Maps
 * @param {string} mapUrl - URL Google Maps
 * @returns {Object|null} - { lat, lng } ou null
 */
function extractCoordinatesFromMap(mapUrl) {
  try {
    // Format: https://maps.google.com/maps?q=lat,lng
    const match = mapUrl.match(/q=([0-9.-]+),([0-9.-]+)/);
    if (match) {
      return {
        lat: parseFloat(match[1]),
        lng: parseFloat(match[2])
      };
    }
    
    // Format: https://www.google.com/maps/place/.../@lat,lng,zoom
    const match2 = mapUrl.match(/@([0-9.-]+),([0-9.-]+),/);
    if (match2) {
      return {
        lat: parseFloat(match2[1]),
        lng: parseFloat(match2[2])
      };
    }
  } catch (error) {
    console.warn('Erreur lors de l\'extraction des coordonnées:', error);
  }
  
  return null;
}

/**
 * Génère les métadonnées SEO pour une page
 * @param {Object} pageData - Données de la page
 * @returns {Object} - Métadonnées SEO
 */
export function generatePageSEO(pageData) {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url = '',
    type = 'website'
  } = pageData;
  
  const baseUrl = 'https://{{PharmacyName}}.fr';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  return {
    title: title ? `${title} | {{PharmacyName}}` : '{{PharmacyName}} - Votre santé, notre priorité',
    description: description || 'Pharmacie de quartier moderne - Services de santé, conseils personnalisés et accompagnement sur-mesure.',
    keywords: keywords.join(', '),
    openGraph: {
      title: title ? `${title} | {{PharmacyName}}` : '{{PharmacyName}} - Votre santé, notre priorité',
      description: description || 'Pharmacie de quartier moderne - Services de santé, conseils personnalisés et accompagnement sur-mesure.',
      url: fullUrl,
      type: type,
      image: fullImageUrl,
      siteName: '{{PharmacyName}}'
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | {{PharmacyName}}` : '{{PharmacyName}} - Votre santé, notre priorité',
      description: description || 'Pharmacie de quartier moderne - Services de santé, conseils personnalisés et accompagnement sur-mesure.',
      image: fullImageUrl
    },
    canonical: fullUrl
  };
}

/**
 * Génère le contenu du fichier robots.txt
 * @param {string} baseUrl - URL de base du site
 * @returns {string} - Contenu robots.txt
 */
export function generateRobotsTxt(baseUrl = 'https://{{PharmacyName}}.fr') {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Allow all other content
Allow: /images/
Allow: /css/
Allow: /js/`;
}

/**
 * Génère le contenu du sitemap.xml
 * @param {Array} pages - Liste des pages du site
 * @param {string} baseUrl - URL de base du site
 * @returns {string} - Contenu sitemap.xml
 */
export function generateSitemapXML(pages, baseUrl = 'https://{{PharmacyName}}.fr') {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  pages.forEach(page => {
    const url = page.url.startsWith('/') ? page.url : `/${page.url}`;
    const fullUrl = `${baseUrl}${url}`;
    const lastmod = page.lastmod || currentDate;
    const priority = page.priority || '0.8';
    const changefreq = page.changefreq || 'weekly';
    
    sitemap += `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  
  sitemap += `
</urlset>`;
  
  return sitemap;
}

/**
 * Génère les données structurées pour les horaires d'ouverture
 * @param {Array} hours - Horaires de la semaine
 * @returns {Array} - Données structurées openingHoursSpecification
 */
function generateOpeningHoursJSONLD(hours) {
  const dayMap = {
    'Lundi': 'Monday',
    'Mardi': 'Tuesday', 
    'Mercredi': 'Wednesday',
    'Jeudi': 'Thursday',
    'Vendredi': 'Friday',
    'Samedi': 'Saturday',
    'Dimanche': 'Sunday'
  };
  
  return hours
    .filter(day => !day.closed)
    .map(day => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": dayMap[day.day],
      "opens": day.open,
      "closes": day.close
    }));
}

/**
 * Valide les données structurées JSON-LD
 * @param {Object} jsonLD - Données structurées à valider
 * @returns {boolean} - True si valide
 */
export function validateJSONLD(jsonLD) {
  try {
    // Vérifications de base
    if (!jsonLD['@context'] || !jsonLD['@type']) {
      return false;
    }
    
    // Vérifier que le contexte est valide
    const validContexts = [
      'https://schema.org',
      'http://schema.org'
    ];
    
    if (!validContexts.includes(jsonLD['@context'])) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Erreur de validation JSON-LD:', error);
    return false;
  }
}
