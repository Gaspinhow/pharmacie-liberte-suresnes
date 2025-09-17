# 📝 Instructions pour Ajouter les Vrais Avis Google

## ✅ Témoignages Fictifs Supprimés

J'ai supprimé tous les témoignages fictifs du site. La section témoignages ne s'affiche plus sur la page d'accueil.

## 🔍 Comment Ajouter les Vrais Avis Google

### 1. **Récupérer les Avis Google**

**Méthode recommandée :**
1. Allez sur **Google Maps**
2. Recherchez "Pharmacie de la Liberté, Suresnes"
3. Cliquez sur votre pharmacie
4. Allez dans l'onglet "Avis"
5. Copiez les vrais avis clients

### 2. **Format des Avis**

Pour chaque avis, notez :
- **Nom** : Prénom + initiale (ex: "Marie L.")
- **Texte** : Le commentaire exact
- **Note** : Nombre d'étoiles (1 à 5)

**Exemple :**
```json
{
  "name": "Marie L.",
  "text": "Service excellent, pharmacien très à l'écoute. Je recommande vivement !",
  "rating": 5
}
```

### 3. **Ajouter les Avis au Site**

**Étape 1 :** Ouvrez le fichier `src/data/site.json`

**Étape 2 :** Trouvez la section `"testimonials": []`

**Étape 3 :** Remplacez par vos vrais avis :
```json
"testimonials": [
  {
    "name": "Marie L.",
    "text": "Service excellent, pharmacien très à l'écoute. Je recommande vivement !",
    "rating": 5
  },
  {
    "name": "Jean-Pierre M.",
    "text": "Très satisfait des conseils reçus. Personnel compétent et accueil chaleureux.",
    "rating": 5
  },
  {
    "name": "Sophie D.",
    "text": "Vaccination rapide et efficace. Équipe professionnelle et rassurante.",
    "rating": 5
  }
]
```

### 4. **Vérification**

Après avoir ajouté les avis :
1. Sauvegardez le fichier
2. Le site se mettra à jour automatiquement
3. La section témoignages réapparaîtra sur la page d'accueil

## 🎯 **Avantages des Vrais Avis**

- ✅ **Crédibilité** : Témoignages authentiques
- ✅ **Confiance** : Les patients font confiance aux vrais avis
- ✅ **SEO** : Améliore le référencement local
- ✅ **Conversion** : Encourage de nouveaux clients

## 📞 **Si Vous N'Avez Pas d'Avis**

**Option 1 :** Encourager les avis
- Demandez à vos clients satisfaits de laisser un avis Google
- Affichez un QR code vers votre page Google Maps

**Option 2 :** Garder la section cachée
- Le site fonctionne parfaitement sans témoignages
- Vous pouvez ajouter les avis plus tard

---

## 🚀 **Site Prêt**

Votre site est maintenant **100% authentique** avec :
- ✅ Aucun témoignage fictif
- ✅ Données réelles de la pharmacie
- ✅ Horaires corrects
- ✅ Liens fonctionnels (Doctolib, Google Maps)

**Le site est prêt à être utilisé !** 🏥✨
