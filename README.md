# Site Web Pharmacie - React + Vite + Tailwind CSS

Un site web moderne et professionnel pour une pharmacie française, développé avec React, Vite et Tailwind CSS. Le site est entièrement responsive, accessible et optimisé pour le SEO.

## 🎯 Fonctionnalités

### Pages principales
- **Accueil** - Présentation de la pharmacie avec services phares
- **Services** - Catalogue complet des services proposés
- **Ordonnance** - Formulaire sécurisé d'envoi d'ordonnances
- **Produits** - Vitrine de la parapharmacie
- **Conseils** - Blog santé et bien-être
- **Garde** - Informations sur les pharmacies de garde
- **FAQ** - Questions fréquentes avec recherche
- **Contact** - Formulaire de contact et informations
- **Équipe** - Présentation de l'équipe
- **Pages légales** - Mentions légales, RGPD, cookies

### Fonctionnalités techniques
- ✅ **Responsive Design** - Adapté mobile, tablette, desktop
- ✅ **Accessibilité WCAG 2.1 AA** - Navigation clavier, lecteurs d'écran
- ✅ **SEO Optimisé** - Métadonnées, données structurées JSON-LD
- ✅ **Performance** - Optimisé pour Lighthouse
- ✅ **RGPD Compliant** - Gestion des cookies, consentement
- ✅ **Formulaires sécurisés** - Validation, anti-spam
- ✅ **Horaires dynamiques** - Statut ouvert/fermé en temps réel
- ✅ **Carte interactive** - Intégration Google Maps
- ✅ **Mode sombre** - Prêt pour l'implémentation

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:3000`

### Build de production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualisation du build
```bash
npm run preview
```

## ⚙️ Configuration

### Personnalisation des données
Modifiez le fichier `src/data/site.json` pour adapter le contenu :

```json
{
  "name": "{{PharmacyName}}",
  "contact": {
    "phone": "{{Phone}}",
    "email": "{{Email}}"
  },
  "address": {
    "street": "{{Street}}",
    "postalCode": "{{PostalCode}}",
    "city": "{{City}}"
  }
}
```

### Variables à remplacer
- `{{PharmacyName}}` - Nom de la pharmacie
- `{{Phone}}` - Numéro de téléphone
- `{{Email}}` - Adresse email
- `{{Street}}` - Adresse complète
- `{{PostalCode}}` - Code postal
- `{{City}}` - Ville
- `{{SIRET}}` - Numéro SIRET
- `{{GoogleMapsLink}}` - Lien Google Maps
- `{{DoctolibLink?}}` - Lien Doctolib (optionnel)
- `{{Facebook?}}` - Page Facebook (optionnel)
- `{{Instagram?}}` - Compte Instagram (optionnel)

### Configuration Tailwind
Le fichier `tailwind.config.js` contient la palette de couleurs personnalisée :
- **Primaire** : #1363DF (bleu pharmacie)
- **Secondaire** : #47B5FF (bleu clair)
- **Accent** : #22C55E (vert)
- **Neutres** : Palette de gris adaptée

## 📁 Structure du projet

```
src/
├── components/          # Composants React réutilisables
│   ├── Header.jsx      # En-tête avec navigation
│   ├── Footer.jsx      # Pied de page
│   ├── OpeningHours.jsx # Horaires dynamiques
│   ├── ServiceCard.jsx  # Carte de service
│   ├── CookieConsent.jsx # Bannière cookies
│   ├── EmergencyBanner.jsx # Bannières d'urgence
│   ├── FileUpload.jsx  # Upload d'ordonnances
│   ├── Map.jsx         # Carte interactive
│   └── SEO.jsx         # Métadonnées SEO
├── pages/              # Pages du site
│   ├── Home.jsx        # Page d'accueil
│   ├── Services.jsx    # Services
│   ├── Contact.jsx     # Contact
│   ├── Prescription.jsx # Envoi ordonnance
│   └── ...
├── data/               # Données du site
│   └── site.json       # Configuration principale
├── styles/             # Styles CSS
│   ├── globals.css     # Styles globaux
│   └── utilities.css   # Classes utilitaires
├── utils/              # Utilitaires JavaScript
│   ├── hours.js        # Gestion des horaires
│   ├── validators.js   # Validation de formulaires
│   └── seo.js          # Utilitaires SEO
└── assets/             # Assets statiques
    ├── images/         # Images
    └── icons/          # Icônes
```

## 🎨 Design System

### Couleurs
- **Primaire** : Bleu pharmacie (#1363DF)
- **Secondaire** : Bleu clair (#47B5FF)  
- **Accent** : Vert (#22C55E)
- **Neutres** : Palette de gris (#0F172A à #F8FAFC)

### Typographie
- **Titres** : Poppins (Google Fonts)
- **Corps** : Inter (Google Fonts)

### Composants
- **Boutons** : Styles cohérents avec états hover/focus
- **Cartes** : Ombres douces, coins arrondis
- **Formulaires** : Validation en temps réel
- **Navigation** : Accessible au clavier

## 🔧 Fonctionnalités avancées

### Gestion des horaires
- Calcul automatique du statut ouvert/fermé
- Affichage du temps restant avant fermeture
- Données structurées JSON-LD pour les moteurs de recherche

### Upload d'ordonnances
- Validation côté client (taille, format)
- Consentement RGPD obligatoire
- Simulation d'envoi sécurisé
- Aucun stockage permanent côté client

### SEO et données structurées
- Métadonnées complètes par page
- Données structurées JSON-LD (LocalBusiness, FAQPage, Service)
- Sitemap XML automatique
- Robots.txt configuré

### Accessibilité
- Navigation au clavier complète
- Focus visible sur tous les éléments interactifs
- Labels et descriptions pour les lecteurs d'écran
- Contraste respectant les standards WCAG 2.1 AA

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans :
- **Mobile** : 320px - 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : 1024px+

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez automatiquement

### Netlify
1. Connectez votre repository GitHub à Netlify
2. Configurez le build command : `npm run build`
3. Déployez automatiquement

### Serveur traditionnel
1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `dist/` sur votre serveur
3. Configurez votre serveur web (Apache/Nginx)

## 🔒 Sécurité

### Formulaires
- Validation côté client et serveur
- Protection anti-spam (honeypot)
- Sanitisation des données
- Consentement RGPD pour les données de santé

### Cookies
- Gestion granulaire des cookies
- Consentement explicite
- Cookies nécessaires vs optionnels
- Politique de cookies détaillée

## 📊 Performance

### Optimisations incluses
- **Code splitting** automatique avec Vite
- **Lazy loading** des images
- **Minification** CSS/JS
- **Compression** Gzip
- **Cache** optimisé

### Scores Lighthouse cibles
- **Performance** : ≥95
- **Accessibilité** : ≥100  
- **SEO** : ≥95
- **Bonnes pratiques** : ≥95

## 🧪 Tests et qualité

### Linting
```bash
npm run lint
```

### Vérifications
- ESLint configuré pour React
- Prettier pour le formatage
- Validation des formulaires
- Tests d'accessibilité

## 📞 Support et maintenance

### Mise à jour du contenu
1. Modifiez `src/data/site.json` pour les informations générales
2. Éditez les composants React pour le contenu spécifique
3. Redéployez le site

### Ajout de nouvelles pages
1. Créez le composant dans `src/pages/`
2. Ajoutez la route dans `src/App.jsx`
3. Configurez le SEO dans le composant

### Personnalisation avancée
- Modifiez `tailwind.config.js` pour les couleurs/thèmes
- Ajoutez des composants dans `src/components/`
- Étendez les utilitaires dans `src/utils/`

## 📄 Licence

Ce projet est fourni tel quel pour usage professionnel. 
Adaptez-le selon vos besoins spécifiques.

## 🤝 Contribution

Pour améliorer ce template :
1. Forkez le projet
2. Créez une branche feature
3. Commitez vos changements
4. Ouvrez une Pull Request

---

**Développé avec ❤️ pour les pharmaciens français**

*Template prêt à l'emploi - Personnalisez selon vos besoins*
