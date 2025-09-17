/**
 * Utilitaires pour la gestion des horaires de la pharmacie
 */

/**
 * Vérifie si la pharmacie est actuellement ouverte
 * @param {Array} hours - Tableau des horaires de la semaine
 * @returns {Object} - { isOpen: boolean, nextOpen: string|null, currentDay: string }
 */
export function isPharmacyOpen(hours) {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = dimanche, 1 = lundi, etc.
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  // Convertir le jour de la semaine (0=dimanche) vers notre format (0=lundi)
  const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
  const todayHours = hours[dayIndex];
  
  if (!todayHours || todayHours.closed) {
    return {
      isOpen: false,
      nextOpen: getNextOpenDay(hours, dayIndex),
      currentDay: todayHours?.day || 'Inconnu'
    };
  }
  
  // Vérifier si on est dans les horaires du matin
  let isOpen = false;
  if (todayHours.openMorning && todayHours.closeMorning) {
    const morningOpen = timeToMinutes(todayHours.openMorning);
    const morningClose = timeToMinutes(todayHours.closeMorning);
    if (currentMinutes >= morningOpen && currentMinutes < morningClose) {
      isOpen = true;
    }
  }
  
  // Vérifier si on est dans les horaires de l'après-midi
  if (!isOpen && todayHours.openAfternoon && todayHours.closeAfternoon) {
    const afternoonOpen = timeToMinutes(todayHours.openAfternoon);
    const afternoonClose = timeToMinutes(todayHours.closeAfternoon);
    if (currentMinutes >= afternoonOpen && currentMinutes < afternoonClose) {
      isOpen = true;
    }
  }
  
  return {
    isOpen,
    nextOpen: isOpen ? null : getNextOpenDay(hours, dayIndex),
    currentDay: todayHours.day
  };
}

/**
 * Convertit une heure au format "HH:MM" en minutes depuis minuit
 * @param {string} time - Heure au format "HH:MM"
 * @returns {number} - Minutes depuis minuit
 */
function timeToMinutes(time) {
  if (!time) return 0;
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Trouve le prochain jour d'ouverture
 * @param {Array} hours - Tableau des horaires
 * @param {number} currentDayIndex - Index du jour actuel
 * @returns {string|null} - Prochain jour d'ouverture ou null
 */
function getNextOpenDay(hours, currentDayIndex) {
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (currentDayIndex + i) % 7;
    const nextDay = hours[nextDayIndex];
    
    if (nextDay && !nextDay.closed) {
      return nextDay.day;
    }
  }
  return null;
}

/**
 * Formate les horaires pour l'affichage
 * @param {Array} hours - Tableau des horaires
 * @returns {Array} - Horaires formatés pour l'affichage
 */
export function formatHours(hours) {
  return hours.map(day => {
    if (day.closed) {
      return {
        ...day,
        display: `${day.day} : Fermé`
      };
    }
    
    // Construire l'affichage des horaires
    let display = `${day.day} : `;
    let hasHours = false;
    
    // Horaires du matin
    if (day.openMorning && day.closeMorning) {
      display += `${day.openMorning} - ${day.closeMorning}`;
      hasHours = true;
    }
    
    // Horaires de l'après-midi
    if (day.openAfternoon && day.closeAfternoon) {
      if (hasHours) {
        display += ` / ${day.openAfternoon} - ${day.closeAfternoon}`;
      } else {
        display += `${day.openAfternoon} - ${day.closeAfternoon}`;
        hasHours = true;
      }
    }
    
    // Si aucun horaire n'est défini
    if (!hasHours) {
      display += "Horaires à confirmer";
    }
    
    return {
      ...day,
      display
    };
  });
}

/**
 * Génère les données structurées JSON-LD pour les horaires
 * @param {Array} hours - Tableau des horaires
 * @returns {Array} - Données structurées openingHoursSpecification
 */
export function generateOpeningHoursJSONLD(hours) {
  return hours
    .filter(day => !day.closed)
    .map(day => {
      const dayMap = {
        'Lundi': 'Monday',
        'Mardi': 'Tuesday', 
        'Mercredi': 'Wednesday',
        'Jeudi': 'Thursday',
        'Vendredi': 'Friday',
        'Samedi': 'Saturday',
        'Dimanche': 'Sunday'
      };
      
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": dayMap[day.day],
        "opens": day.open,
        "closes": day.close
      };
    });
}

/**
 * Calcule le temps restant avant la fermeture
 * @param {Object} todayHours - Horaires du jour actuel
 * @returns {string|null} - Temps restant ou null si fermé
 */
export function getTimeUntilClose(todayHours) {
  if (!todayHours || todayHours.closed) return null;
  
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const closeMinutes = timeToMinutes(todayHours.close);
  
  if (currentMinutes >= closeMinutes) return null;
  
  const remainingMinutes = closeMinutes - currentMinutes;
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  } else {
    return `${minutes}min`;
  }
}

/**
 * Vérifie si c'est une période de forte affluence
 * @returns {boolean} - True si période de forte affluence
 */
export function isPeakTime() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  
  // Heures de pointe : 8h-10h et 17h-19h en semaine
  const isWeekday = day >= 1 && day <= 5;
  const isPeakHour = (hour >= 8 && hour < 10) || (hour >= 17 && hour < 19);
  
  return isWeekday && isPeakHour;
}

/**
 * Génère un message d'état dynamique
 * @param {Object} status - Statut de la pharmacie
 * @returns {string} - Message d'état
 */
export function getStatusMessage(status) {
  if (status.isOpen) {
    return `Ouvert maintenant - Fermeture à ${status.currentDay}`;
  } else {
    return status.nextOpen 
      ? `Fermé - Réouverture ${status.nextOpen}`
      : 'Fermé';
  }
}
