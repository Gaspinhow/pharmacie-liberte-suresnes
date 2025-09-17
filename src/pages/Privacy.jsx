import React from 'react';
import { LegalSEO } from '../components/SEO';
import siteData from '../data/site.json';

const Privacy = () => {
  return (
    <>
      <LegalSEO pageType="politique-confidentialite" title="Politique de confidentialité" />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
              Politique de confidentialité
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Introduction
                </h2>
                <p className="text-neutral-700 mb-4">
                  La présente politique de confidentialité décrit la manière dont {siteData.name} collecte, 
                  utilise et protège vos informations personnelles lorsque vous utilisez notre site web 
                  et nos services.
                </p>
                <p className="text-neutral-700">
                  Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles 
                  conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française 
                  "Informatique et Libertés".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Responsable du traitement
                </h2>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Pharmacie :</strong> {siteData.name}</p>
                  <p className="mb-2"><strong>SIRET :</strong> {siteData.siret}</p>
                  <p className="mb-2"><strong>Adresse :</strong> {siteData.address.street}, {siteData.address.postalCode} {siteData.address.city}</p>
                  <p className="mb-2"><strong>Téléphone :</strong> {siteData.contact.phone}</p>
                  <p><strong>Email :</strong> {siteData.contact.email}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Données collectées
                </h2>
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  Données collectées automatiquement
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Site web de référence</li>
                </ul>

                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  Données fournies volontairement
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Messages et demandes</li>
                  <li>Ordonnances (traitement temporaire uniquement)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Finalités du traitement
                </h2>
                <p className="text-neutral-700 mb-4">Nous utilisons vos données pour :</p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  <li>Fournir nos services pharmaceutiques</li>
                  <li>Traiter vos demandes et ordonnances</li>
                  <li>Vous contacter pour confirmer la réception de vos demandes</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Assurer la sécurité de notre site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Base légale du traitement
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Consentement</h4>
                    <p className="text-blue-800 text-sm">
                      Pour l'utilisation de cookies non essentiels et le traitement de données de santé 
                      pour les ordonnances transmises en ligne.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Exécution d'un contrat</h4>
                    <p className="text-green-800 text-sm">
                      Pour la fourniture de nos services pharmaceutiques et le traitement de vos ordonnances.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Intérêt légitime</h4>
                    <p className="text-purple-800 text-sm">
                      Pour l'amélioration de notre site web et la sécurité de nos services.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Conservation des données
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">Données de contact</span>
                    <span className="text-sm text-neutral-600">3 ans maximum</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">Ordonnances</span>
                    <span className="text-sm text-neutral-600">Traitement temporaire uniquement</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                    <span className="font-medium">Données de navigation</span>
                    <span className="text-sm text-neutral-600">13 mois maximum</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Partage des données
                </h2>
                <p className="text-neutral-700 mb-4">
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec nos prestataires techniques (hébergement sécurisé)</li>
                  <li>En cas d'urgence médicale nécessitant une intervention</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Vos droits
                </h2>
                <p className="text-neutral-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Droit d'accès</h4>
                    <p className="text-sm text-neutral-600">Obtenir une copie de vos données</p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Droit de rectification</h4>
                    <p className="text-sm text-neutral-600">Corriger des données inexactes</p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Droit d'effacement</h4>
                    <p className="text-sm text-neutral-600">Supprimer vos données</p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Droit d'opposition</h4>
                    <p className="text-sm text-neutral-600">Vous opposer au traitement</p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Droit de portabilité</h4>
                    <p className="text-sm text-neutral-600">Récupérer vos données</p>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Droit de limitation</h4>
                    <p className="text-sm text-neutral-600">Limiter le traitement</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Sécurité des données
                </h2>
                <p className="text-neutral-700 mb-4">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données contre :
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  <li>L'accès non autorisé</li>
                  <li>La divulgation accidentelle</li>
                  <li>La modification non autorisée</li>
                  <li>La destruction malveillante</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Cookies
                </h2>
                <p className="text-neutral-700 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez gérer vos préférences de cookies via notre bannière de consentement 
                  ou consulter notre <a href="/cookies" className="text-primary-500 hover:text-primary-600">politique de cookies</a> détaillée.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Contact et réclamations
                </h2>
                <p className="text-neutral-700 mb-4">
                  Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email :</strong> {siteData.contact.email}</p>
                  <p className="mb-2"><strong>Téléphone :</strong> {siteData.contact.phone}</p>
                  <p className="mb-4"><strong>Adresse :</strong> {siteData.address.street}, {siteData.address.postalCode} {siteData.address.city}</p>
                  <p className="text-sm text-neutral-600">
                    Vous avez également le droit d'introduire une réclamation auprès de la CNIL 
                    (Commission Nationale de l'Informatique et des Libertés) si vous estimez que 
                    vos droits ne sont pas respectés.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Modifications
                </h2>
                <p className="text-neutral-700">
                  Cette politique de confidentialité peut être mise à jour périodiquement. 
                  Toute modification sera publiée sur cette page avec une date de mise à jour. 
                  Nous vous encourageons à consulter régulièrement cette page.
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

export default Privacy;
