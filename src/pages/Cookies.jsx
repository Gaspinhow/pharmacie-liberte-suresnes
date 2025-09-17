import React from 'react';
import { LegalSEO } from '../components/SEO';

const Cookies = () => {
  return (
    <>
      <LegalSEO pageType="cookies" title="Politique de cookies" />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
              Politique de cookies
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Qu'est-ce qu'un cookie ?
                </h2>
                <p className="text-neutral-700 mb-4">
                  Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone 
                  lorsque vous visitez un site web. Les cookies permettent au site de reconnaître votre 
                  appareil et de mémoriser certaines informations sur vos préférences ou actions passées.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Comment utilisons-nous les cookies ?
                </h2>
                <p className="text-neutral-700 mb-4">
                  Nous utilisons les cookies pour améliorer votre expérience sur notre site web, 
                  analyser l'utilisation du site et personnaliser le contenu. Voici les types de 
                  cookies que nous utilisons :
                </p>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-green-900 mb-3">
                      Cookies nécessaires
                    </h3>
                    <p className="text-green-800 mb-3">
                      Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés.
                    </p>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>Cookies de session pour maintenir votre navigation</li>
                      <li>Cookies de sécurité pour protéger vos données</li>
                      <li>Cookies de préférences de langue</li>
                      <li>Cookies de consentement aux cookies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-blue-900 mb-3">
                      Cookies d'analyse (optionnels)
                    </h3>
                    <p className="text-blue-800 mb-3">
                      Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                    </p>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li>Google Analytics pour les statistiques de visite</li>
                      <li>Cookies de performance pour mesurer la vitesse du site</li>
                      <li>Cookies d'erreur pour identifier les problèmes techniques</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-purple-900 mb-3">
                      Cookies de préférences (optionnels)
                    </h3>
                    <p className="text-purple-800 mb-3">
                      Ces cookies mémorisent vos choix pour personnaliser votre expérience.
                    </p>
                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                      <li>Préférences d'affichage (taille de police, contraste)</li>
                      <li>Choix de langue et région</li>
                      <li>Préférences de navigation</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Gestion de vos cookies
                </h2>
                <p className="text-neutral-700 mb-4">
                  Vous pouvez contrôler et gérer les cookies de plusieurs façons :
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                      Via notre bannière de cookies
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      Lors de votre première visite, une bannière vous permet de choisir 
                      quels cookies accepter ou refuser.
                    </p>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600">
                        <strong>Note :</strong> Vous pouvez modifier vos préférences à tout moment 
                        en cliquant sur le lien "Cookies" en bas de page.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                      Via votre navigateur
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies :
                    </p>
                    <ul className="list-disc list-inside text-neutral-700 space-y-1">
                        <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                        <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                        <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                        <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Cookies tiers
                </h2>
                <p className="text-neutral-700 mb-4">
                  Notre site peut contenir des cookies provenant de services tiers :
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                      Google Maps
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      Utilisé pour afficher les cartes interactives. 
                      Ces cookies sont soumis à la politique de Google.
                    </p>
                    <a 
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 text-sm"
                    >
                      Politique de confidentialité Google →
                    </a>
                  </div>
                  
                  <div className="bg-white border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                      Google Analytics
                    </h3>
                    <p className="text-neutral-700 mb-3">
                      Utilisé pour analyser l'utilisation du site (si activé). 
                      Ces cookies sont soumis à la politique de Google.
                    </p>
                    <a 
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 text-sm"
                    >
                      Politique de confidentialité Google →
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Durée de conservation
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">Cookies de session</span>
                    <span className="text-sm text-neutral-600">Supprimés à la fermeture du navigateur</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">Cookies de préférences</span>
                    <span className="text-sm text-neutral-600">12 mois maximum</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">Cookies d'analyse</span>
                    <span className="text-sm text-neutral-600">13 mois maximum</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Conséquences du refus des cookies
                </h2>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Cookies nécessaires</h4>
                    <p className="text-yellow-800 text-sm">
                      Le refus de ces cookies peut empêcher le bon fonctionnement du site.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Cookies optionnels</h4>
                    <p className="text-blue-800 text-sm">
                      Le refus de ces cookies n'affecte pas le fonctionnement du site, 
                      mais peut limiter certaines fonctionnalités personnalisées.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Contact
                </h2>
                <p className="text-neutral-700 mb-4">
                  Pour toute question concernant notre utilisation des cookies :
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email :</strong> {{Email}}</p>
                  <p className="mb-2"><strong>Téléphone :</strong> {{Phone}}</p>
                  <p><strong>Adresse :</strong> {{Street}}, {{PostalCode}} {{City}}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Modifications
                </h2>
                <p className="text-neutral-700">
                  Cette politique de cookies peut être mise à jour périodiquement. 
                  Toute modification sera publiée sur cette page avec une date de mise à jour.
                </p>
                <p className="text-sm text-neutral-600 mt-4">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookies;
