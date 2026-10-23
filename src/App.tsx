import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ScrollMotion } from './components/ui/ScrollMotion';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { RouteTransition } from './components/layout/RouteTransition';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { SolarSolutionsPage } from './pages/SolarSolutionsPage';
import { ResidentialSolarPage } from './pages/solutions/ResidentialSolarPage';
import { CommercialSolarPage } from './pages/solutions/CommercialSolarPage';
import { IndustrialSolarPage } from './pages/solutions/IndustrialSolarPage';
import { InstitutionalSolarPage } from './pages/solutions/InstitutionalSolarPage';
import { OpenAccessPage } from './pages/solutions/OpenAccessPage';
import { SystemTypesPage } from './pages/solutions/SystemTypesPage';
import { ProductsListPage } from './pages/ProductsListPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <ScrollMotion />
        <RouteTransition />
        <div className="flex flex-col min-h-screen bg-fog text-moss-ink selection:bg-pistachio selection:text-moss-ink font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/solutions" element={<SolarSolutionsPage />} />
              
              {/* Dedicated Solution Landing Pages */}
              <Route path="/solutions/residential" element={<ResidentialSolarPage />} />
              <Route path="/solutions/commercial" element={<CommercialSolarPage />} />
              <Route path="/solutions/industrial" element={<IndustrialSolarPage />} />
              <Route path="/solutions/institutional" element={<InstitutionalSolarPage />} />
              <Route path="/solutions/open-access" element={<OpenAccessPage />} />
              <Route path="/solutions/system-types" element={<SystemTypesPage />} />
              
              {/* Products & BOS */}
              <Route path="/products-list" element={<ProductsListPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              
              {/* Projects, About & Contact */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/calculator" element={<Navigate to="/#calculator" replace />} />
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/resellers" element={<Navigate to="/about-us" replace />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/about" element={<Navigate to="/about-us" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
