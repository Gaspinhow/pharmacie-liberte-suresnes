import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { FAQSEO } from '../components/SEO';
import siteData from '../data/site.json';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQ = siteData.faq.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <FAQSEO faqItems={siteData.faq} />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Trouvez rapidement les réponses aux questions les plus courantes 
              sur nos services, horaires et modalités de fonctionnement.
            </p>
          </div>
        </div>
      </section>

      {/* Barre de recherche */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher dans les questions fréquentes..."
                className="form-input pl-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQ.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-neutral-600">
                  Essayez avec d'autres mots-clés ou consultez toutes les questions.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn btn-primary mt-4"
                >
                  Voir toutes les questions
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQ.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-soft border border-neutral-200 overflow-hidden">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                    >
                      <h3 className="font-semibold text-neutral-900 pr-4">
                        {item.question}
                      </h3>
                      {openItems.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.has(index) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-neutral-200 pt-4">
                          <p className="text-neutral-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact si pas de réponse */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-neutral-600 mb-8">
              Notre équipe est là pour répondre à toutes vos questions. 
              N'hésitez pas à nous contacter directement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="btn btn-primary btn-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </a>
              
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="btn btn-outline btn-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
