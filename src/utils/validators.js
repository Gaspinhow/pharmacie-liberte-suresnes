/**
 * Utilitaires de validation pour les formulaires
 */

/**
 * Valide une adresse email
 * @param {string} email - Email à valider
 * @returns {boolean} - True si email valide
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valide un numéro de téléphone français
 * @param {string} phone - Numéro de téléphone à valider
 * @returns {boolean} - True si numéro valide
 */
export function isValidPhone(phone) {
  // Supprime tous les espaces, tirets et points
  const cleanPhone = phone.replace(/[\s\-\.]/g, '');
  
  // Vérifie les formats français : 0X XX XX XX XX ou +33 X XX XX XX XX
  const phoneRegex = /^(0[1-9]|(\+33\s?[1-9]))[\s\.]?([0-9][\s\.]?){8}$/;
  return phoneRegex.test(cleanPhone);
}

/**
 * Valide un code postal français
 * @param {string} postalCode - Code postal à valider
 * @returns {boolean} - True si code postal valide
 */
export function isValidPostalCode(postalCode) {
  const postalCodeRegex = /^[0-9]{5}$/;
  return postalCodeRegex.test(postalCode);
}

/**
 * Valide un nom (prénom ou nom de famille)
 * @param {string} name - Nom à valider
 * @returns {boolean} - True si nom valide
 */
export function isValidName(name) {
  // Au moins 2 caractères, lettres, espaces, tirets et apostrophes autorisés
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,}$/;
  return nameRegex.test(name.trim());
}

/**
 * Valide un message (longueur minimale)
 * @param {string} message - Message à valider
 * @param {number} minLength - Longueur minimale (défaut: 10)
 * @returns {boolean} - True si message valide
 */
export function isValidMessage(message, minLength = 10) {
  return message.trim().length >= minLength;
}

/**
 * Valide un fichier uploadé
 * @param {File} file - Fichier à valider
 * @param {Object} options - Options de validation
 * @returns {Object} - { isValid: boolean, error: string|null }
 */
export function validateFile(file, options = {}) {
  const {
    maxSize = 10 * 1024 * 1024, // 10MB par défaut
    allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf']
  } = options;
  
  // Vérifier la taille
  if (file.size > maxSize) {
    return {
      isValid: false,
      error: `Le fichier est trop volumineux. Taille maximale : ${Math.round(maxSize / 1024 / 1024)}MB`
    };
  }
  
  // Vérifier le type MIME
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `Type de fichier non autorisé. Types acceptés : ${allowedExtensions.join(', ')}`
    };
  }
  
  // Vérifier l'extension
  const fileName = file.name.toLowerCase();
  const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
  
  if (!hasValidExtension) {
    return {
      isValid: false,
      error: `Extension de fichier non autorisée. Extensions acceptées : ${allowedExtensions.join(', ')}`
    };
  }
  
  return { isValid: true, error: null };
}

/**
 * Valide un formulaire de contact
 * @param {Object} formData - Données du formulaire
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export function validateContactForm(formData) {
  const errors = {};
  
  // Validation du nom
  if (!formData.name || !isValidName(formData.name)) {
    errors.name = 'Veuillez saisir un nom valide (au moins 2 caractères)';
  }
  
  // Validation de l'email
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Veuillez saisir une adresse email valide';
  }
  
  // Validation du téléphone (optionnel mais si fourni, doit être valide)
  if (formData.phone && !isValidPhone(formData.phone)) {
    errors.phone = 'Veuillez saisir un numéro de téléphone valide';
  }
  
  // Validation du message
  if (!formData.message || !isValidMessage(formData.message)) {
    errors.message = 'Veuillez saisir un message d\'au moins 10 caractères';
  }
  
  // Validation du honeypot (anti-spam)
  if (formData.honeypot) {
    errors.honeypot = 'Spam détecté';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Valide un formulaire d'envoi d'ordonnance
 * @param {Object} formData - Données du formulaire
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export function validatePrescriptionForm(formData) {
  const errors = {};
  
  // Validation du nom
  if (!formData.name || !isValidName(formData.name)) {
    errors.name = 'Veuillez saisir votre nom complet';
  }
  
  // Validation du téléphone
  if (!formData.phone || !isValidPhone(formData.phone)) {
    errors.phone = 'Veuillez saisir un numéro de téléphone valide';
  }
  
  // Validation du fichier
  if (!formData.file) {
    errors.file = 'Veuillez sélectionner un fichier';
  } else {
    const fileValidation = validateFile(formData.file);
    if (!fileValidation.isValid) {
      errors.file = fileValidation.error;
    }
  }
  
  // Validation du consentement RGPD
  if (!formData.consent) {
    errors.consent = 'Vous devez accepter le traitement de vos données de santé';
  }
  
  // Validation du honeypot
  if (formData.honeypot) {
    errors.honeypot = 'Spam détecté';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Nettoie et formate les données d'un formulaire
 * @param {Object} formData - Données brutes du formulaire
 * @returns {Object} - Données nettoyées
 */
export function sanitizeFormData(formData) {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      // Supprime les espaces en début/fin et normalise les espaces multiples
      sanitized[key] = value.trim().replace(/\s+/g, ' ');
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

/**
 * Génère un message d'erreur générique
 * @param {string} field - Nom du champ
 * @returns {string} - Message d'erreur
 */
export function getGenericErrorMessage(field) {
  const messages = {
    name: 'Veuillez saisir un nom valide',
    email: 'Veuillez saisir une adresse email valide',
    phone: 'Veuillez saisir un numéro de téléphone valide',
    message: 'Veuillez saisir un message',
    file: 'Veuillez sélectionner un fichier valide',
    consent: 'Vous devez accepter les conditions'
  };
  
  return messages[field] || 'Veuillez vérifier ce champ';
}

/**
 * Valide une URL
 * @param {string} url - URL à valider
 * @returns {boolean} - True si URL valide
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Valide un SIRET
 * @param {string} siret - SIRET à valider
 * @returns {boolean} - True si SIRET valide
 */
export function isValidSIRET(siret) {
  // Supprime les espaces
  const cleanSiret = siret.replace(/\s/g, '');
  
  // Vérifie la longueur (14 chiffres)
  if (cleanSiret.length !== 14) return false;
  
  // Vérifie que ce sont bien des chiffres
  if (!/^\d{14}$/.test(cleanSiret)) return false;
  
  // Algorithme de validation SIRET (clé de contrôle)
  let sum = 0;
  for (let i = 0; i < 13; i++) {
    let digit = parseInt(cleanSiret[i]);
    if (i % 2 === 1) digit *= 2;
    if (digit > 9) digit -= 9;
    sum += digit;
  }
  
  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === parseInt(cleanSiret[13]);
}
