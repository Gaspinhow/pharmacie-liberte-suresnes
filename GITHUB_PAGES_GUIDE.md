# 🚀 Guide pour Héberger sur GitHub Pages

## ✅ **Repository Git Créé**

Votre projet est maintenant prêt pour GitHub ! Voici comment procéder :

---

## 📋 **Étapes pour GitHub Pages**

### **1. Créer un Repository GitHub**

1. **Allez sur** [github.com](https://github.com)
2. **Connectez-vous** ou créez un compte
3. **Cliquez sur "New repository"**
4. **Nom du repository** : `pharmacie-liberte-suresnes` (ou autre nom)
5. **Description** : "Site web Pharmacie de la Liberté - Suresnes"
6. **Cochez** "Public" (obligatoire pour GitHub Pages gratuit)
7. **Cliquez** "Create repository"

### **2. Connecter votre Projet Local**

```bash
# Ajouter le remote GitHub (remplacez USERNAME par votre nom d'utilisateur)
git remote add origin https://github.com/USERNAME/pharmacie-liberte-suresnes.git

# Pousser le code
git branch -M main
git push -u origin main
```

### **3. Activer GitHub Pages**

1. **Allez dans** votre repository GitHub
2. **Cliquez sur** "Settings" (en haut à droite)
3. **Scrollez vers** "Pages" (dans le menu de gauche)
4. **Source** : Sélectionnez "GitHub Actions"
5. **Sauvegardez**

### **4. Créer le Workflow GitHub Actions**

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

---

## 🎯 **URL de Démo**

Une fois déployé, votre site sera accessible à :
**https://USERNAME.github.io/pharmacie-liberte-suresnes/**

---

## 🔧 **Commandes Rapides**

```bash
# Ajouter le remote (remplacez USERNAME)
git remote add origin https://github.com/USERNAME/pharmacie-liberte-suresnes.git

# Pousser le code
git push -u origin main

# Pour les mises à jour futures
git add .
git commit -m "Mise à jour du site"
git push
```

---

## 📱 **Avantages de GitHub Pages**

- ✅ **Gratuit** et illimité
- ✅ **HTTPS** automatique
- ✅ **CDN** mondial
- ✅ **Mise à jour** automatique
- ✅ **URL** personnalisable
- ✅ **Performance** excellente

---

## 🎉 **Résultat Final**

Votre pharmacie aura un site web professionnel accessible à :
**https://USERNAME.github.io/pharmacie-liberte-suresnes/**

**Parfait pour montrer la démo à la pharmacie !** 🏥✨
