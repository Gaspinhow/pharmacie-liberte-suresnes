import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  // Articles d'exemple
  const articles = [
    {
      id: 1,
      title: 'Les bienfaits de la vitamine D en hiver',
      excerpt: 'Découvrez pourquoi la vitamine D est essentielle pendant la période hivernale et comment bien la choisir.',
      content: 'La vitamine D joue un rôle crucial dans le bon fonctionnement de notre organisme...',
      author: 'Dr. {{PharmacistName}}',
      date: '2024-01-15',
      category: 'Nutrition',
      image: '/blog/vitamine-d.jpg',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Comment bien préparer sa trousse de secours',
      excerpt: 'Les essentiels à avoir dans sa trousse de secours pour être prêt en cas de petits bobos.',
      content: 'Une trousse de secours bien préparée peut faire la différence en cas d\'urgence...',
      author: '{{AssistantName}}',
      date: '2024-01-10',
      category: 'Conseils',
      image: '/blog/trousse-secours.jpg',
      readTime: '3 min'
    },
    {
      id: 3,
      title: 'Les gestes barrières pour éviter les infections',
      excerpt: 'Rappel des gestes essentiels pour se protéger et protéger les autres des infections.',
      content: 'Les gestes barrières restent la meilleure protection contre les infections...',
      author: 'Dr. {{PharmacistName}}',
      date: '2024-01-05',
      category: 'Prévention',
      image: '/blog/gestes-barrieres.jpg',
      readTime: '4 min'
    },
    {
      id: 4,
      title: 'Comprendre les étiquettes des cosmétiques',
      excerpt: 'Guide pour décrypter les ingrédients et choisir les cosmétiques adaptés à votre peau.',
      content: 'Les étiquettes des cosmétiques peuvent sembler complexes...',
      author: '{{AssistantName}}',
      date: '2023-12-28',
      category: 'Cosmétique',
      image: '/blog/etiquettes-cosmetiques.jpg',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Les compléments alimentaires : quand et comment ?',
      excerpt: 'Conseils pour bien choisir et utiliser les compléments alimentaires de manière efficace.',
      content: 'Les compléments alimentaires peuvent être utiles dans certaines situations...',
      author: 'Dr. {{PharmacistName}}',
      date: '2023-12-20',
      category: 'Nutrition',
      image: '/blog/complements-alimentaires.jpg',
      readTime: '7 min'
    },
    {
      id: 6,
      title: 'Préparer l\'hiver : renforcer ses défenses immunitaires',
      excerpt: 'Nos conseils pour booster votre système immunitaire avant l\'arrivée de l\'hiver.',
      content: 'L\'hiver approche et avec lui, les risques d\'infections...',
      author: 'Dr. {{PharmacistName}}',
      date: '2023-12-15',
      category: 'Prévention',
      image: '/blog/defenses-immunitaires.jpg',
      readTime: '5 min'
    }
  ];

  const categories = ['Tous', 'Nutrition', 'Conseils', 'Prévention', 'Cosmétique'];

  return (
    <>
      <SEO
        title="Conseils santé et bien-être"
        description="Découvrez nos conseils santé, articles sur le bien-être et informations pratiques pour prendre soin de votre santé au quotidien."
        keywords={['conseils santé', 'bien-être', 'articles', 'nutrition', 'prévention']}
        url="/conseils"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Conseils santé & bien-être
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Découvrez nos conseils d'experts, articles sur la santé et informations pratiques 
              pour prendre soin de votre bien-être au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Recherche */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    className="form-input pl-12"
                  />
                </div>
              </div>
              
              {/* Filtres par catégorie */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className="btn btn-outline btn-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <article key={article.id} className="card card-hover">
                  <div className="aspect-video bg-neutral-100 rounded-t-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📄</span>
                      </div>
                      <p className="text-sm text-neutral-500">Image article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary-500 uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-heading font-semibold text-neutral-900 mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary w-full">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Restez informé
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Recevez nos derniers conseils santé et informations directement dans votre boîte mail.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="form-input flex-1"
                />
                <button className="btn btn-primary">
                  S'abonner
                </button>
              </div>
              <p className="text-sm text-neutral-500 mt-3">
                Nous respectons votre vie privée. Désabonnement possible à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils rapides */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Conseils rapides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Hydratation
                </h3>
                <p className="text-sm text-neutral-600">
                  Buvez au moins 1,5L d'eau par jour pour maintenir une bonne hydratation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Alimentation
                </h3>
                <p className="text-sm text-neutral-600">
                  Privilégiez les fruits et légumes de saison pour un apport vitaminique optimal.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😴</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Sommeil
                </h3>
                <p className="text-sm text-neutral-600">
                  Respectez un rythme de sommeil régulier pour un repos réparateur.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Activité physique
                </h3>
                <p className="text-sm text-neutral-600">
                  30 minutes d'activité physique modérée par jour pour rester en forme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
