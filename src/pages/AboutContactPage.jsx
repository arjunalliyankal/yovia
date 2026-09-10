import React, { useState } from 'react';
import { SeoMeta } from '../components/ui/SeoMeta';
import { TiltCard } from '../components/motion/TiltCard';
import { MagneticButton } from '../components/motion/MagneticButton';

export function AboutContactPage() {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', service: 'Schengen Visa', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SeoMeta
        title="About Us & Contact Ooty Office — Yovia Visa Services"
        description="Connect with our flagship visa and tour advisory hub at Commercial Road, Charing Cross, Ooty. Direct phone, WhatsApp, and office visits."
        canonicalUrl="https://yoviavisaservices.com/about-contact"
      />

      <main className="space-y-16 py-8">
        
        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-4 py-1.5 bg-lavender-mist/40 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
            Flagship Nilgiris Consultancy
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight max-w-3xl mx-auto leading-tight">
            About Our Advisory &amp; Ooty HQ
          </h1>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto">
            Combining Swiss kinetic design principles with high-trust local expertise in visa processing and luxury tour arrangements.
          </p>
        </section>

        {/* OFFICE & CONTACT GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Office Info & Map Card */}
            <div className="lg:col-span-5 space-y-6">
              <TiltCard maxTilt={5} className="bg-pure-white border border-hairline-gray rounded-card p-6 sm:p-8 shadow-surface-resting space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Main Office Location</span>
                  <h2 className="text-2xl font-bold text-ink">Ooty Advisory Hub</h2>
                  <p className="text-sm text-slate leading-relaxed">
                    Commercial Road, Near Charing Cross,<br />
                    Ooty, The Nilgiris, Tamil Nadu — 643001
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-hairline-gray">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-studio-off-white flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate block">Direct Phone Line</span>
                      <a href="tel:+919443100000" className="text-sm font-bold text-ink hover:text-primary transition-colors">
                        +91 94431 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-studio-off-white flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-xl">chat</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate block">WhatsApp Instant Support</span>
                      <a 
                        href="https://wa.me/919443100000" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-bold text-ink hover:text-secondary transition-colors"
                      >
                        +91 94431 00000 (Chat Now)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-studio-off-white flex items-center justify-center text-slate">
                      <span className="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate block">Working Hours</span>
                      <span className="text-xs font-semibold text-ink">Mon - Sat: 9:30 AM – 6:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Charing+Cross+Ooty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-studio-off-white hover:bg-hairline-gray text-ink font-bold py-3 rounded-pill text-xs transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">map</span>
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </TiltCard>

              {/* Trust Badge */}
              <div className="bg-ink text-pure-white rounded-3xl p-6 space-y-3 shadow-surface-resting">
                <span className="text-xs font-bold text-volt uppercase tracking-wider">Government Regulatory Compliance</span>
                <p className="text-xs text-slate leading-relaxed">
                  Registered mobility advisory under Nilgiris commercial registry. Authorized support for VFS Global document formatting.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-pure-white border border-hairline-gray rounded-card p-6 sm:p-10 shadow-surface-resting">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Direct Consultation</span>
                    <h2 className="text-2xl font-bold text-ink">Send Us a Message</h2>
                    <p className="text-xs text-slate mt-1">Our Ooty visa specialist will review your query and respond within 2 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                        placeholder="+91 94431 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">Required Service</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full bg-studio-off-white border border-hairline-gray rounded-input px-4 py-3 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                      >
                        <option>Schengen Tourist / Business Visa</option>
                        <option>US B1/B2 Visitor Visa</option>
                        <option>UK & Canada Visa</option>
                        <option>Japan / Singapore e-Visa</option>
                        <option>International Tour Package Booking</option>
                        <option>Ooty Local Office Appointment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">Message / Query Details</label>
                    <textarea
                      rows="4"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-studio-off-white border border-hairline-gray rounded-2xl p-4 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-primary-container"
                      placeholder="Please specify your travel dates, target country, or any prior visa refusals..."
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full bg-primary-container hover:bg-primary text-pure-white font-bold py-3.5 rounded-pill shadow-surface-resting text-sm"
                  >
                    Submit Inquiry to Ooty Advisors
                  </MagneticButton>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-volt/40 text-ink flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-ink">Inquiry Submitted Successfully!</h3>
                  <p className="text-slate text-sm max-w-sm mx-auto">
                    Thank you, <strong className="text-ink">{formState.name}</strong>. Our Ooty consultancy team has received your inquiry regarding <strong className="text-ink">{formState.service}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-studio-off-white hover:bg-hairline-gray text-ink font-semibold px-6 py-2.5 rounded-pill text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
