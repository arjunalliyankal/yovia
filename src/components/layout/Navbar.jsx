import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '../motion/MagneticButton';

export function Navbar({ onOpenEligibility }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Tour Packages', path: '/tours' },
    { name: 'About & Contact', path: '/about-contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <nav className="bg-pure-white/90 backdrop-blur-md border border-hairline-gray/80 rounded-pill shadow-floating-dock px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300">

        {/* Brand Lockup */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-pure-white border border-hairline-gray/80 shadow-xs flex items-center justify-center p-1 overflow-hidden group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300 shrink-0">
            <img
              src="/logo.png"
              alt="Yovia Visa Services Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = "/images/logo.png";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-ink leading-none">Yovia</span>
            <span className="text-[10px] font-semibold tracking-wider text-slate uppercase mt-0.5">GLOBAL VISA CONSULTANTS</span>
          </div>
        </Link>

        {/* Desktop Navigation Dock */}
        <div className="hidden md:flex items-center gap-1 bg-studio-off-white/80 p-1.5 rounded-pill border border-hairline-gray/50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-semibold rounded-pill transition-all duration-200 ${isActive(link.path)
                ? 'bg-pure-white text-ink shadow-sm'
                : 'text-slate hover:text-ink hover:bg-pure-white/50'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <MagneticButton
            onClick={onOpenEligibility}
            className="bg-primary-container text-pure-white hover:bg-primary font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-pill shadow-sm hover:shadow-md"
          >
            Check Eligibility
          </MagneticButton>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-ink hover:bg-studio-off-white transition-colors"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-trigger"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-pure-white border border-hairline-gray rounded-3xl shadow-surface-elevated p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-semibold rounded-2xl transition-colors ${isActive(link.path)
                  ? 'bg-studio-off-white text-ink font-bold'
                  : 'text-slate hover:text-ink hover:bg-studio-off-white/50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-hairline-gray flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEligibility();
              }}
              className="w-full bg-ink text-pure-white font-semibold py-3.5 rounded-pill text-center hover:bg-input-dark-fill transition-colors"
            >
              Start Visa Check
            </button>
            <a
              href="tel:+919443100000"
              className="w-full bg-studio-off-white text-ink font-semibold py-3.5 rounded-pill text-center flex items-center justify-center gap-2 text-sm hover:bg-hairline-gray transition-colors"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Call Ooty Office
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
