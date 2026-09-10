import React from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/ui/SeoMeta';
import { MagneticButton } from '../components/motion/MagneticButton';
import { TiltCard } from '../components/motion/TiltCard';
import { ProximityFloat } from '../components/motion/ProximityFloat';

export function HomePage({ onOpenEligibility }) {
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

  // Exact image URLs from Stitch project 5576737861905440358 favorite screens
  const HERO_IMAGE = "/image.png";

  const tourHighlights = [
    {
      title: "Grand European Alpine & Riviera Tour",
      duration: "10 Days / 9 Nights",
      destinations: "Zurich • Lucerne • Paris • Nice",
      price: "₹1,85,000",
      // Stitch favorite screen: Tour Packages & Getaways desktop — hero travel image
      image: "https://lh3.googleusercontent.com/aida/AEtjO1XpTtE4PD4s_dAGWagRdw_9Scxjul1_OAXJY4OSvUnRbBkZf_JNPBNQ7ss9FvoB2-rUaLojAb7pw96gvM_45xbd6RcMBSOoeovWNyGXPHvlyMWjOYSmtBTEDSW9_FXhluf-UFIj76cgXEdts5spkRlWJTFM2W8Ykdr6VzFFyq7LoJaSDZWYdAmLiPeQIIgcS5fMeK5d1JY8sfaTXWmbI2h6SD2RF4lpMr_-GwDfH6GasvjCnbsY2GDsZbI"
    },
    {
      title: "Japan Cherry Blossom & Bullet Train Expedition",
      duration: "8 Days / 7 Nights",
      destinations: "Tokyo • Kyoto • Mount Fuji • Osaka",
      price: "₹2,10,000",
      // Stitch project image: cinematic travel landscape — scenic mountain destination
      image: "https://lh3.googleusercontent.com/aida/AEtjO1VgrX0RmzS22PKvffCLmsO15-3tfsKGIjYtJtrWXlSXULJWv9t1wDTO0dwK6UUdrWKdqll0aOtFZN35TRYNwSGxazZ_zQ9weu02vFi5y-IdutUbGHBL9uwML1ukTS63uD4qJNgOt44AOrCRUDHcrTIJsdRmXlvq4iRPOELOBeyDRU3tWKhCslpv0DVhRYBmjP8K_4C_PXZv--maM-DuRPjeVfj0fvVQhwGXBlpBqfAtDLYwhhNnHs9veg"
    }
  ];

  return (
    <>
      <SeoMeta
        title="Yovia Visa Services — Premier Global Mobility & Tour Advisory"
        description="Institutional high-trust visa consulting and luxury travel advisory. Fast Schengen, US, UK, Canada & Asia processing from our flagship Ooty office."
        canonicalUrl="https://yoviavisaservices.com"
      />

      <main className="space-y-24">

        {/* HERO SECTION */}
        <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studio-off-white border border-hairline-gray shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-volt animate-pulse" />
                  <span className="text-xs font-bold tracking-wide uppercase text-ink">
                    Institutional Precision & Global Mobility
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.08]">
                  Kinetic Precision for Worldwide Visa &amp; Tour Advisory
                </h1>

                <p className="text-base sm:text-lg text-slate max-w-2xl leading-relaxed">
                  Seamless visa approvals, expedited embassy appointments, and luxury international itineraries managed directly from our flagship consultancy hub in Ooty.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <MagneticButton
                    onClick={onOpenEligibility}
                    className="bg-primary-container text-pure-white hover:bg-primary font-bold text-base px-8 py-4 rounded-pill shadow-surface-resting hover:shadow-surface-elevated text-center"
                  >
                    Initiate Visa Check
                  </MagneticButton>

                  <Link
                    to="/tours"
                    className="inline-flex items-center justify-center gap-2 bg-pure-white text-ink hover:bg-studio-off-white border border-hairline-gray font-semibold text-base px-6 py-4 rounded-pill transition-colors text-center"
                  >
                    <span>Explore Tour Packages</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>

                {/* Key Metrics Pill Bar */}
                {/* <div className="pt-8 border-t border-hairline-gray grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-ink">99.2%</p>
                    <p className="text-xs font-semibold text-slate mt-1">Approval Success</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-ink">14,800+</p>
                    <p className="text-xs font-semibold text-slate mt-1">Visas Granted</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-ink">48 hrs</p>
                    <p className="text-xs font-semibold text-slate mt-1">Rapid Audit</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-ink">45+</p>
                    <p className="text-xs font-semibold text-slate mt-1">Destinations</p>
                  </div>
                </div> */}
                <section class="w-full bg-[#f5f5f7] px-4 py-7 sm:px-6 lg:px-10">
                  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">


                    <div class="flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-white px-4 py-4 text-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                      <h3 class="text-3xl font-extrabold leading-none tracking-tight text-black sm:text-4xl">
                        99.4%
                      </h3>

                      <p class="mt-1 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                        Visa Approval Rate
                      </p>

                      <span class="mt-2 rounded-full bg-purple-50 px-2.5 py-1 text-[9px] font-medium text-purple-700">
                        ⚙ Consulate Audited
                      </span>
                    </div>


                    <div class="flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-white px-4 py-4 text-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                      <h3 class="text-3xl font-extrabold leading-none tracking-tight text-black sm:text-4xl">
                        45+
                      </h3>

                      <p class="mt-1 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                        Global Destinations
                      </p>

                      <span class="mt-2 rounded-full bg-sky-50 px-2.5 py-1 text-[9px] font-medium text-sky-700">
                        🌐 World Coverage
                      </span>
                    </div>


                    <div class="flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-white px-4 py-4 text-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                      <h3 class="text-3xl font-extrabold leading-none tracking-tight text-black sm:text-4xl">
                        12,000+
                      </h3>

                      <p class="mt-1 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                        Visas Processed
                      </p>

                      <span class="mt-2 rounded-full bg-yellow-100 px-2.5 py-1 text-[9px] font-medium text-gray-800">
                        ★ 4.9/5 Rating
                      </span>
                    </div>


                    <div class="flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-white px-4 py-4 text-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                      <h3 class="text-3xl font-extrabold leading-none tracking-tight text-black sm:text-4xl">
                        10+ Years
                      </h3>

                      <p class="mt-1 text-[10px] font-medium text-gray-600 sm:text-[11px]">
                        Diplomatic Experience
                      </p>

                      <span class="mt-2 rounded-full bg-gray-100 px-2.5 py-1 text-[9px] font-medium text-gray-700">
                        ▣ Est. in Ooty
                      </span>
                    </div>

                  </div>
                </section>
              </div>

              {/* Right Column: Hero Visual Graphic */}
              <div className="lg:col-span-5 relative">
                <ProximityFloat factor={0.03}>
                  <TiltCard maxTilt={10} className="w-full rounded-card overflow-hidden shadow-surface-elevated border border-hairline-gray bg-pure-white p-3">
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                      <img
                        src={HERO_IMAGE}
                        alt="Cinematic luxury travel destination landscape featuring European peaks and azure ocean coastal cliffs — Stitch Yovia Visa Services hero"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-6 text-pure-white">
                        <span className="px-3 py-1 bg-volt text-ink text-xs font-extrabold rounded-full w-max mb-2">
                          Verified Advisory Status
                        </span>
                        <h2 className="text-xl font-bold">Ooty Flagship Consultancy</h2>
                        <p className="text-xs text-sky-tint mt-1">Commercial Road, Charing Cross, Ooty</p>
                      </div>
                    </div>
                  </TiltCard>
                </ProximityFloat>
              </div>

            </div>
          </div>
        </section>

        {/* POPULAR DESTINATIONS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <TiltCard key={idx} maxTilt={8} className="bg-pure-white rounded-card p-6 shadow-surface-resting border border-hairline-gray flex flex-col justify-between h-full">
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

        {/* TOUR PACKAGES FEATURE TEASER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* HIGH TRUST / OOTY OFFICE SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pure-white border border-hairline-gray rounded-card p-8 sm:p-12 shadow-surface-resting">
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
                    Direct Hotline: +91 94431 00000
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

              <div className="lg:col-span-6 bg-studio-off-white rounded-3xl p-6 border border-hairline-gray space-y-4">
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
