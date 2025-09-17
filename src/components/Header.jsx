import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Search, 
  Clock,
  MapPin,
  ChevronDown,
  FileText,
  Calendar
} from 'lucide-react';
import { isPharmacyOpen, getStatusMessage } from '../utils/hours';
import siteData from '../data/site.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pharmacyStatus, setPharmacyStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Mettre à jour le statut de la pharmacie
    const updateStatus = () => {
      const status = isPharmacyOpen(siteData.hours);
      setPharmacyStatus(status);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Mise à jour chaque minute

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implémenter la recherche
    console.log('Recherche:', searchQuery);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Skip link pour l'accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Bandeau d'information */}
      <div className="bg-primary-500 text-white py-2 px-4 text-center text-sm">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">
                {pharmacyStatus ? getStatusMessage(pharmacyStatus) : 'Horaires'}
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{siteData.address.city}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${siteData.contact.phone}`}
              className="flex items-center space-x-1 hover:text-primary-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteData.contact.phone}</span>
            </a>
            <a 
              href={`mailto:${siteData.contact.email}`}
              className="flex items-center space-x-1 hover:text-primary-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{siteData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="bg-white shadow-soft sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo et nom */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-neutral-900">
                  {siteData.name}
                </h1>
                <p className="text-sm text-neutral-600">
                  Pharmacie de quartier
                </p>
              </div>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                Accueil
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium text-neutral-700 hover:text-primary-500 transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link to="/services" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                      Tous nos services
                    </Link>
                    <Link to="/services/vaccination" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                      Vaccination
                    </Link>
                    <Link to="/services/tests" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                      Tests antigéniques
                    </Link>
                    <Link to="/services/pda" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                      Préparation des doses
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/ordonnance" 
                className={`font-medium transition-colors ${
                  isActive('/ordonnance') ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                Ordonnance
              </Link>
              
              
              <Link 
                to="/conseils" 
                className={`font-medium transition-colors ${
                  isActive('/conseils') ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                Conseils
              </Link>
              
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Recherche */}
              <button 
                onClick={toggleSearch}
                className="p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                aria-label="Rechercher"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Boutons d'action */}
              <div className="hidden md:flex items-center space-x-2">
                <a 
                  href={`tel:${siteData.contact.phone}`}
                  className="btn btn-primary btn-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </a>
                <Link 
                  to="/ordonnance"
                  className="btn btn-secondary btn-sm"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Envoyer ordonnance
                </Link>
              </div>

              {/* Menu mobile */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 text-neutral-600 hover:text-primary-500 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="container-custom py-4">
              <nav className="space-y-4">
                <Link 
                  to="/" 
                  className="block font-medium text-neutral-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link 
                  to="/services" 
                  className="block font-medium text-neutral-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/ordonnance" 
                  className="block font-medium text-neutral-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ordonnance
                </Link>
                <Link 
                  to="/conseils" 
                  className="block font-medium text-neutral-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conseils
                </Link>
                <Link 
                  to="/contact" 
                  className="block font-medium text-neutral-700 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <a 
                    href={`tel:${siteData.contact.phone}`}
                    className="btn btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </a>
                  <Link 
                    to="/ordonnance"
                    className="btn btn-secondary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Envoyer ordonnance
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}

        {/* Barre de recherche */}
        {isSearchOpen && (
          <div className="border-t border-neutral-200 bg-white">
            <div className="container-custom py-4">
              <form onSubmit={handleSearch} className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher un service, un produit..."
                    className="form-input w-full"
                    autoFocus
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Rechercher
                </button>
                <button 
                  type="button" 
                  onClick={toggleSearch}
                  className="btn btn-ghost"
                >
                  Annuler
                </button>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
