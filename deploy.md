# Guide de déploiement

## 🚀 Déploiement rapide

### 1. Vercel (Recommandé)

1. **Connecter le repository**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Importez ce repository

2. **Configuration**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables d'environnement** (optionnel)
   - Ajoutez les variables dans les settings du projet
   - Utilisez le fichier `env.example` comme référence

4. **Déploiement**
   - Cliquez sur "Deploy"
   - Votre site sera accessible via l'URL fournie

### 2. Netlify

1. **Connecter le repository**
   - Allez sur [netlify.com](https://netlify.com)
   - Connectez votre compte GitHub
   - Importez ce repository

2. **Configuration**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Node Version: `18` (dans les variables d'environnement)

3. **Déploiement**
   - Cliquez sur "Deploy site"
   - Votre site sera accessible via l'URL fournie

### 3. Serveur traditionnel

1. **Build local**
   ```bash
   npm run build
   ```

2. **Upload**
   - Uploadez le contenu du dossier `dist/` sur votre serveur
   - Configurez votre serveur web (Apache/Nginx)

3. **Configuration serveur**
   ```nginx
   # Nginx example
   server {
       listen 80;
       server_name votre-pharmacie.fr;
       root /var/www/pharmacie/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## 🔧 Configuration post-déploiement

### 1. Personnalisation des données

Modifiez le fichier `src/data/site.json` avec vos informations :

```json
{
  "name": "Votre Pharmacie",
  "contact": {
    "phone": "01 23 45 67 89",
    "email": "contact@votre-pharmacie.fr"
  },
  "address": {
    "street": "123 Rue de la Santé",
    "postalCode": "75001",
    "city": "Paris"
  }
}
```

### 2. Images et assets

Remplacez les placeholders par vos vraies images :
- `public/pharmacy-icon.svg` - Icône de la pharmacie
- `public/og-image.jpg` - Image Open Graph (1200x630px)
- Images des services dans `src/assets/images/`

### 3. Configuration Google Maps

Pour activer la carte interactive :
1. Créez un compte Google Cloud Platform
2. Activez l'API Maps JavaScript
3. Créez une clé API
4. Ajoutez-la dans les variables d'environnement

### 4. Analytics (optionnel)

Pour ajouter Google Analytics :
1. Créez un compte Google Analytics
2. Obtenez votre Measurement ID
3. Ajoutez-le dans les variables d'environnement
4. Le tracking sera activé automatiquement

## 📊 Monitoring et maintenance

### 1. Performance
- Surveillez les scores Lighthouse
- Optimisez les images si nécessaire
- Vérifiez la vitesse de chargement

### 2. SEO
- Soumettez votre sitemap à Google Search Console
- Surveillez les positions dans les résultats de recherche
- Mettez à jour le contenu régulièrement

### 3. Sécurité
- Maintenez les dépendances à jour
- Surveillez les logs d'erreur
- Sauvegardez régulièrement

## 🔄 Mises à jour

### 1. Contenu
- Modifiez `src/data/site.json` pour les informations générales
- Éditez les composants React pour le contenu spécifique
- Redéployez le site

### 2. Fonctionnalités
- Ajoutez de nouveaux composants dans `src/components/`
- Créez de nouvelles pages dans `src/pages/`
- Étendez les utilitaires dans `src/utils/`

### 3. Dépendances
```bash
npm update
npm audit fix
```

## 🆘 Dépannage

### Problèmes courants

1. **Build échoue**
   - Vérifiez la version de Node.js (18+)
   - Supprimez `node_modules` et `package-lock.json`
   - Réinstallez avec `npm install`

2. **Images ne s'affichent pas**
   - Vérifiez les chemins dans `public/`
   - Assurez-vous que les images sont uploadées

3. **Carte ne fonctionne pas**
   - Vérifiez la clé API Google Maps
   - Assurez-vous que l'API est activée

4. **Formulaires ne fonctionnent pas**
   - Vérifiez la configuration du backend
   - Testez la validation côté client

### Support
- Consultez la documentation React/Vite
- Vérifiez les logs du navigateur (F12)
- Testez en mode incognito

---

**Votre site est maintenant prêt ! 🎉**
