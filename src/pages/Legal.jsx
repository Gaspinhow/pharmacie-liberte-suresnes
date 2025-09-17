import React from 'react';
import { LegalSEO } from '../components/SEO';
import siteData from '../data/site.json';

const Legal = () => {
  return (
    <>
      <LegalSEO pageType="mentions-legales" title="Mentions légales" />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
              Mentions légales
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Éditeur du site
                </h2>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Raison sociale :</strong> {siteData.name}</p>
                  <p className="mb-2"><strong>SIRET :</strong> {siteData.siret}</p>
                  <p className="mb-2"><strong>Adresse :</strong> {siteData.address.street}, {siteData.address.postalCode} {siteData.address.city}</p>
                  <p className="mb-2"><strong>Téléphone :</strong> {siteData.contact.phone}</p>
                  <p className="mb-2"><strong>Email :</strong> {siteData.contact.email}</p>
                  <p><strong>Directeur de publication :</strong> Pharmacien titulaire</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Hébergement
                </h2>
                <p className="text-neutral-700">
                  Ce site est hébergé par un prestataire professionnel respectant les normes de sécurité 
                  et de confidentialité en vigueur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="text-neutral-700 mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-neutral-700">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit 
                  est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Responsabilité
                </h2>
                <p className="text-neutral-700 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                  à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="text-neutral-700 mb-4">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email, à l'adresse {siteData.contact.email}, 
                  en décrivant le problème de la manière la plus précise possible.
                </p>
                <p className="text-neutral-700">
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. 
                  En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de 
                  l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Liens hypertextes
                </h2>
                <p className="text-neutral-700 mb-4">
                  Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant 
                  sur ces liens, il sortira du site {siteData.name}.fr. Ce dernier n'a pas de contrôle sur les pages 
                  web sur lesquelles aboutissent ces liens et ne saurait en aucun cas être responsable de leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Cookies
                </h2>
                <p className="text-neutral-700 mb-4">
                  Le site {siteData.name}.fr peut être amené à vous demander l'acceptation des cookies pour des besoins 
                  de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le 
                  serveur du site que vous visitez.
                </p>
                <p className="text-neutral-700">
                  Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte 
                  auquel un serveur accède pour lire et enregistrer des informations. Pour plus d'informations, 
                  consultez notre <a href="/cookies" className="text-primary-500 hover:text-primary-600">politique de cookies</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Droit applicable
                </h2>
                <p className="text-neutral-700">
                  Tout litige en relation avec l'utilisation du site {siteData.name}.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de {siteData.address.city}.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Contact
                </h2>
                <p className="text-neutral-700">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg mt-4">
                  <p className="mb-2"><strong>Email :</strong> {siteData.contact.email}</p>
                  <p className="mb-2"><strong>Téléphone :</strong> {siteData.contact.phone}</p>
                  <p><strong>Adresse :</strong> {siteData.address.street}, {siteData.address.postalCode} {siteData.address.city}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;
