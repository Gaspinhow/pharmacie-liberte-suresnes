import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Team from './pages/Team';
import Prescription from './pages/Prescription';
import Blog from './pages/Blog';
import Emergency from './pages/Emergency';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/ordonnance" element={<Prescription />} />
          <Route path="/conseils" element={<Blog />} />
          <Route path="/garde" element={<Emergency />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/politique-confidentialite" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
