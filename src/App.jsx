import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { VisaServicesPage } from './pages/VisaServicesPage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { EligibilityModal } from './components/ui/EligibilityModal';

export function App() {
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-studio-off-white text-ink font-sans selection:bg-primary-container selection:text-white">
      
      {/* Top Capsule Navigation */}
      <Navbar onOpenEligibility={() => setIsEligibilityOpen(true)} />

      {/* Main Page Router */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenEligibility={() => setIsEligibilityOpen(true)} />} />
          <Route path="/visa-services" element={<VisaServicesPage onOpenEligibility={() => setIsEligibilityOpen(true)} />} />
          <Route path="/tours" element={<TourPackagesPage />} />
          <Route path="/about-contact" element={<AboutContactPage />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Instant Eligibility Assessment Modal */}
      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
      />
    </div>
  );
}

export default App;
