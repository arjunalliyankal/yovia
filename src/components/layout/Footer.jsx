import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ink text-pure-white pt-16 pb-12 mt-24 border-t border-deep-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pure-white p-1 overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Yovia Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/images/logo.png";
                  }}
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight">Yovia Visa Services</span>
            </div>
            <p className="text-slate text-sm max-w-sm leading-relaxed">
              Institutional, high-trust digital mobility administration and tailored international tour advisory. Eliminating bureaucratic friction with precision and wanderlust aesthetics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 bg-white/10 text-volt text-xs font-semibold rounded-full">
                Ooty Flagship Office
              </span>
              <span className="px-3 py-1 bg-white/10 text-sky-tint text-xs font-semibold rounded-full">
                Govt Reg. Consultancy
              </span>
            </div>
          </div>

          {/* Column 3: Visa Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-pure-white uppercase">Visa Categories</h4>
            <ul className="space-y-2 text-sm text-slate">
              <li><Link to="/visa-services" className="hover:text-volt transition-colors">Schengen Europe</Link></li>
              <li><Link to="/visa-services" className="hover:text-volt transition-colors">United States (B1/B2, F1)</Link></li>
              <li><Link to="/visa-services" className="hover:text-volt transition-colors">United Kingdom & Canada</Link></li>
              <li><Link to="/visa-services" className="hover:text-volt transition-colors">Japan, Singapore & Asia</Link></li>
              <li><Link to="/visa-services" className="hover:text-volt transition-colors">Business & Express Work</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-pure-white uppercase">Exploration</h4>
            <ul className="space-y-2 text-sm text-slate">
              <li><Link to="/tours" className="hover:text-volt transition-colors">Tour Packages & Getaways</Link></li>
              <li><Link to="/about-contact" className="hover:text-volt transition-colors">About Our Consultancy</Link></li>
              <li><Link to="/about-contact" className="hover:text-volt transition-colors">Ooty Office Contact</Link></li>
              <li><Link to="/visa-services" className="hover:text-volt transition-colors">Document Verification</Link></li>
            </ul>
          </div>

          {/* Column 5: Office Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-pure-white uppercase">Contact Ooty HQ</h4>
            <address className="not-italic text-sm text-slate space-y-1 leading-relaxed">
              <p className="font-semibold text-pure-white">Yovia Advisory Hub</p>
              <p>Commercial Road, Charing Cross</p>
              <p>Ooty, The Nilgiris — 643001</p>
              <p className="pt-2 text-xs text-sky-tint">Phone: +91 94431 00000</p>
              <p className="text-xs text-sky-tint">Email: ooty@yoviavisaservices.com</p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate">
          <p>© 2026 Yovia Visa Services & Travel Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-pure-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-pure-white transition-colors">Terms of Service</a>
            <a href="#disclaimer" className="hover:text-pure-white transition-colors">Government Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
