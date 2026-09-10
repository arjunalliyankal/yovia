import React from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/ui/SeoMeta';
import { MagneticButton } from '../components/motion/MagneticButton';
import { TiltCard } from '../components/motion/TiltCard';
import { ProximityFloat } from '../components/motion/ProximityFloat';
import { ClientReviewsSection } from '../components/sections/ClientReviewsSection';

export function HomePage({ onOpenEligibility }) {
  const HERO_IMAGE = "/image.png";



  const destinations = [
    {
      title: "Schengen Europe",
      countries: "France, Germany, Italy, Switzerland & 25 States",
      time: "10-15 Days",
      rate: "99.4%",
      tag: "Top Choice",
      bgColor: "bg-sky-tint",
      accentColor: "text-secondary"
    },
    {
      title: "United States",
      countries: "B1/B2 Business & Visitor, F1 Student, H1B",
      time: "Rapid Appointment Booking",
      rate: "98.8%",
      tag: "High Demand",
      bgColor: "bg-lavender-mist/40",
      accentColor: "text-primary"
    },
    {
      title: "United Kingdom",
      countries: "Standard Visitor, Work & Short-term Study",
      time: "7-12 Days",
      rate: "99.1%",
      tag: "Fast Track",
      bgColor: "bg-volt/40",
      accentColor: "text-ink"
    },
    {
      title: "Canada",
      countries: "Temporary Resident Visa, Super Visa & Study",
      time: "15-25 Days",
      rate: "98.5%",
      tag: "High Approval",
      bgColor: "bg-studio-off-white",
      accentColor: "text-slate"
    }
  ];

  const tourHighlights = [
    {
      title: "Grand European Alpine & Riviera Tour",
      duration: "10 Days / 9 Nights",
      destinations: "Zurich • Lucerne • Paris • Nice",
      price: "₹1,85,000",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1XpTtE4PD4s_dAGWagRdw_9Scxjul1_OAXJY4OSvUnRbBkZf_JNPBNQ7ss9FvoB2-rUaLojAb7pw96gvM_45xbd6RcMBSOoeovWNyGXPHvlyMWjOYSmtBTEDSW9_FXhluf-UFIj76cgXEdts5spkRlWJTFM2W8Ykdr6VzFFyq7LoJaSDZWYdAmLiPeQIIgcS5fMeK5d1JY8sfaTXWmbI2h6SD2RF4lpMr_-GwDfH6GasvjCnbsY2GDsZbI"
    },
    {
      title: "Japan Cherry Blossom & Bullet Train Expedition",
      duration: "8 Days / 7 Nights",
      destinations: "Tokyo • Kyoto • Mount Fuji • Osaka",
      price: "₹2,10,000",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1VgrX0RmzS22PKvffCLmsO15-3tfsKGIjYtJtrWXlSXULJWv9t1wDTO0dwK6UUdrWKdqll0aOtFZN35TRYNwSGxazZ_zQ9weu02vFi5y-IdutUbGHBL9uwML1ukTS63uD4qJNgOt44AOrCRUDHcrTIJsdRmXlvq4iRPOELOBeyDRU3tWKhCslpv0DVhRYBmjP8K_4C_PXZv--maM-DuRPjeVfj0fvVQhwGXBlpBqfAtDLYwhhNnHs9veg"
    }
  ];

  const metrics = [
    { value: '99.4%', label: 'Visa Approval Rate', badge: '⚙ Consulate Audited', badgeClass: 'bg-lavender-mist/30 text-primary' },
    { value: '45+', label: 'Global Destinations', badge: '🌐 World Coverage', badgeClass: 'bg-sky-tint text-secondary' },
    { value: '12,000+', label: 'Visas Processed', badge: '★ 4.9/5 Rating', badgeClass: 'bg-volt/40 text-ink' },
    { value: '10+ Years', label: 'Diplomatic Experience', badge: '▣ Est. in Ooty', badgeClass: 'bg-surface-container text-slate' },
  ];

  const fastFilingTags = ['Schengen 29', 'USA B1/B2', 'UK Visitor', 'Canada & Australia'];

  return (
    <>
      <SeoMeta
        title="Yovia Visa Services — Premier Global Mobility & Tour Advisory"
        description="Institutional high-trust visa consulting and luxury travel advisory. Fast Schengen, US, UK, Canada & Asia processing from our flagship Ooty office."
        canonicalUrl="https://yoviavisaservices.com"
      />

      <main className="space-y-0">

        {/* ==================== HERO SECTION ==================== */}
        <section className="relative overflow-hidden">
          {/* Subtle background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMAGE}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-[0.07]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-studio-off-white via-studio-off-white/95 to-studio-off-white/70" />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-6">

            {/* Top Status Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-lavender-mist/40 px-4 py-2 text-deep-plum shadow-sm backdrop-blur-md border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  Nilgiris Authorized Global Mobility Desk
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pure-white/80 border border-hairline-gray shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-semibold text-ink">VFS & Embassy Compliant</span>
                </span>
                <span className="hidden sm:inline-block w-px h-4 bg-hairline-gray" />
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pure-white border border-hairline-gray font-semibold text-ink shadow-sm">
                  <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                  <span>Direct Office in Ooty</span>
                </div>
              </div>
            </div>

            {/* Grid: Left Copy + Right Hero Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* LEFT COLUMN — Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-ink tracking-tight leading-[1.1]">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-ink">Hassle-Free</span>
                    <span className="absolute bottom-1 left-0 w-full h-[38%] bg-volt -z-0 rounded-sm" />
                  </span>{' '}
                  Visa & Travel Solutions
                </h1>

                <p className="text-base sm:text-lg text-slate max-w-xl leading-relaxed">
                  Premier international visa documentation, embassy protocol compliance, and bespoke global travel itineraries engineered right from our Ooty advisory desk.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <MagneticButton
                    onClick={onOpenEligibility}
                    className="bg-primary-container text-pure-white hover:bg-primary font-bold text-sm px-7 py-3.5 rounded-pill shadow-surface-resting hover:shadow-surface-elevated text-center inline-flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Apply for Visa</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </MagneticButton>

                  <Link
                    to="/tours"
                    className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-input-dark-fill text-pure-white font-semibold text-sm px-6 py-3.5 rounded-pill transition-colors text-center shadow-sm"
                  >
                    <span>Explore Tour Packages</span>
                    <span className="material-symbols-outlined text-lg">travel_explore</span>
                  </Link>
                </div>

                {/* Fast Filing Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-hairline-gray/60">
                  <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-slate mr-1">Fast Filing For:</span>
                  {fastFilingTags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-pure-white border border-hairline-gray text-xs font-semibold text-ink shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN — Hero Visual Card */}
              <div className="lg:col-span-5 w-full max-w-lg lg:max-w-none mx-auto">
                <ProximityFloat factor={0.03}>
                  <TiltCard maxTilt={8} className="w-full rounded-2xl overflow-hidden shadow-surface-elevated border border-hairline-gray bg-pure-white p-3">
                    <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden group">
                      <img
                        src={HERO_IMAGE}
                        alt="Cinematic luxury travel destination landscape — Yovia Visa Services Ooty flagship"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-pure-white">
                        <span className="px-3 py-1 bg-volt text-ink text-[11px] font-extrabold rounded-full w-max mb-2 shadow-xs">
                          Verified Advisory Status
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold">Ooty Flagship Consultancy</h2>
                        <p className="text-xs text-sky-tint mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-volt">location_on</span>
                          <span>Near Honeymoon Boat House, North Lake Road, Ooty</span>
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </ProximityFloat>
              </div>
            </div>

            {/* Bottom Bar */}

          </div>
        </section>

        {/* ==================== METRICS STAT CARDS ==================== */}
        <section className="w-full bg-studio-off-white px-4 sm:px-6 lg:px-10 py-8">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-pure-white px-4 py-5 text-center shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-hairline-gray/50 hover:shadow-surface-resting transition-shadow">
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-none tracking-tight text-ink">
                  {m.value}
                </h3>
                <p className="mt-1.5 text-[11px] font-medium text-slate">
                  {m.label}
                </p>
                <span className={`mt-2.5 rounded-full px-2.5 py-1 text-[9px] font-semibold ${m.badgeClass}`}>
                  {m.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== POPULAR DESTINATIONS GRID ==================== */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-primary mb-1">
                Global Destinations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                Featured Visa Programs
              </h2>
            </div>
            <Link
              to="/visa-services"
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-ink transition-colors"
            >
              <span>View All 45+ Countries</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((item, idx) => (
              <TiltCard key={idx} maxTilt={8} className="bg-pure-white rounded-2xl p-6 shadow-surface-resting border border-hairline-gray flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.bgColor} ${item.accentColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate">{item.time}</span>
                  </div>

                  <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-xs text-slate leading-relaxed mb-6">{item.countries}</p>
                </div>

                <div className="pt-4 border-t border-hairline-gray flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate block">Approval Rate</span>
                    <span className="text-lg font-extrabold text-ink">{item.rate}</span>
                  </div>
                  <Link
                    to="/visa-services"
                    className="w-10 h-10 rounded-full bg-studio-off-white hover:bg-ink hover:text-pure-white text-ink flex items-center justify-center transition-colors shadow-sm"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* ==================== TOUR PACKAGES FEATURE TEASER ==================== */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
          <div className="bg-ink text-pure-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-surface-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 bg-volt text-ink text-xs font-bold rounded-full uppercase tracking-wider">
                  Curated Expeditions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Handcrafted Tour Packages &amp; Getaways
                </h2>
                <p className="text-slate text-sm leading-relaxed">
                  Tailored itineraries with seamless flight, hotel, and visa coordination. Handled end-to-end by our Nilgiris tour specialists.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tours"
                    className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-pure-white font-bold px-6 py-3.5 rounded-pill shadow-md transition-colors text-sm"
                  >
                    <span>Browse All Packages</span>
                    <span className="material-symbols-outlined text-lg">flight_takeoff</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tourHighlights.map((pkg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-3">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-volt uppercase">{pkg.duration}</span>
                      <h3 className="text-base font-bold text-pure-white leading-snug">{pkg.title}</h3>
                      <p className="text-xs text-slate">{pkg.destinations}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate">From <strong className="text-pure-white text-sm">{pkg.price}</strong></span>
                      <Link to="/tours" className="text-volt font-bold hover:underline">Details →</Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================== CLIENT REVIEWS SECTION ==================== */}
        <ClientReviewsSection />

        {/* ==================== OOTY OFFICE / TRUST SECTION ==================== */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">
          <div className="bg-pure-white border border-hairline-gray rounded-2xl p-8 sm:p-12 shadow-surface-resting">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Nilgiris Flagship Headquarters
                </div>
                <h2 className="text-3xl font-extrabold text-ink tracking-tight">
                  Visit Our Ooty Consultancy Hub
                </h2>
                <p className="text-slate text-sm leading-relaxed">
                  Located near Charing Cross in Ooty, our experienced visa consultants provide one-on-one document verification, interview preparation, and biometric scheduling.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3 text-sm text-ink font-semibold">
                    <span className="material-symbols-outlined text-secondary">location_on</span>
                    Commercial Road, Near Charing Cross, Ooty 643001
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink font-semibold">
                    <span className="material-symbols-outlined text-secondary">call</span>
                    Direct Hotline: +91 93458 60732
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about-contact"
                    className="inline-flex items-center gap-2 bg-ink text-pure-white font-bold px-6 py-3 rounded-pill text-sm hover:bg-input-dark-fill transition-colors"
                  >
                    <span>Get Directions &amp; Contact</span>
                    <span className="material-symbols-outlined text-base">map</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 bg-studio-off-white rounded-2xl p-6 border border-hairline-gray space-y-4">
                <h3 className="text-lg font-bold text-ink flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  Why Clients Trust Yovia Visa Services
                </h3>
                <ul className="space-y-3 text-sm text-slate">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>100% Pre-Check Security:</strong> Zero application submitted without 3-tier document validation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>VFS & Embassy Scheduling:</strong> Fast-track appointment booking for urgent travel requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                    <span><strong>Transparent Pricing:</strong> Clear, upfront service fees with no hidden administrative surcharges.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
