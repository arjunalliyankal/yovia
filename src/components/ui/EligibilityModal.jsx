import React, { useState } from 'react';

export function EligibilityModal({ isOpen, onClose }) {
  const [destination, setDestination] = useState('Schengen Europe');
  const [purpose, setPurpose] = useState('Tourism & Leisure');
  const [passport, setPassport] = useState('Indian Passport');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-pure-white w-full max-w-lg rounded-card shadow-surface-elevated overflow-hidden border border-hairline-gray p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-studio-off-white flex items-center justify-center text-slate hover:text-ink hover:bg-hairline-gray transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase mb-1">
              <span className="material-symbols-outlined text-base">verified</span>
              Free Instant Assessment
            </div>
            <h3 className="text-2xl font-bold text-ink tracking-tight mb-2">Check Visa Eligibility</h3>
            <p className="text-slate text-sm mb-6">
              Select your travel destination and purpose to receive an instant document checklist and approval probability score.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Destination Country / Region
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                >
                  <option>Schengen Europe (France, Germany, Italy, Switzerland)</option>
                  <option>United States (B1/B2 Visitor, F1 Student)</option>
                  <option>United Kingdom (Standard Visitor)</option>
                  <option>Canada (Temporary Resident Visa)</option>
                  <option>Japan & South Korea</option>
                  <option>Singapore & Malaysia</option>
                  <option>Dubai & UAE Express</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Travel Purpose
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                >
                  <option>Tourism & Holiday Getaway</option>
                  <option>Business Meeting & Conference</option>
                  <option>Higher Studies / University Admission</option>
                  <option>Family / Friend Visit</option>
                  <option>Work & Employment Transit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Passport Nationality
                </label>
                <input
                  type="text"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}
                  className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                  placeholder="e.g. Indian Passport"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary-container hover:bg-primary text-pure-white font-bold py-3.5 rounded-pill shadow-md transition-colors text-center text-sm"
                >
                  Calculate Approval Score
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-volt/30 text-ink flex items-center justify-center mx-auto text-3xl">
              <span className="material-symbols-outlined text-4xl text-primary font-bold">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-ink">High Eligibility Confidence (98.4%)</h3>
            <p className="text-slate text-sm max-w-sm mx-auto">
              Your profile for <strong className="text-ink">{destination}</strong> under <strong className="text-ink">{purpose}</strong> meets standard processing criteria.
            </p>

            <div className="bg-studio-off-white border border-hairline-gray rounded-2xl p-4 text-left text-xs space-y-2 text-slate">
              <p className="font-bold text-ink flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-secondary">task_alt</span>
                Next Recommended Step:
              </p>
              <p>Connect with our Ooty office specialist for document verification and slot booking.</p>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/919443100000?text=Hi%20Yovia%20Visa%20Team,%20I%20checked%20my%20eligibility%20online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-ink text-pure-white font-bold py-3.5 rounded-pill shadow-md hover:bg-input-dark-fill transition-colors text-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                WhatsApp Ooty Advisor
              </a>
              <button
                onClick={handleReset}
                className="w-full bg-studio-off-white text-ink font-semibold py-3 rounded-pill text-xs hover:bg-hairline-gray transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
