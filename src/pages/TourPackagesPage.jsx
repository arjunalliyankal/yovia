import React, { useState } from 'react';
import { SeoMeta } from '../components/ui/SeoMeta';
import { TiltCard } from '../components/motion/TiltCard';
import { MagneticButton } from '../components/motion/MagneticButton';

export function TourPackagesPage() {
  const [filterRegion, setFilterRegion] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const tours = [
    {
      id: 1,
      title: "Swiss Alpine Wonders & Paris Romance",
      region: "Europe",
      duration: "9 Days / 8 Nights",
      price: "₹1,95,000",
      perPerson: "per adult twin sharing",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1W6gNZMPERwZmEpYIFtBA6ZjAVztAw5uKb4ABEYOhla8DIT6YjXyv3BtvWcklcspJlmk8Sgm3FstQT-W5jqRegCUctYJPh3UUMyfaskm7EucV43Vl3-ZjoTh9YIkxgYAGPgdbGE_A2FixzdmyETqbUYdkU9nwhypZaPgluXL9v-Gh8oKwtXlr8tHK7O6R57JoszF9PcNcDcCbO2opXKZZqEMZhf0yAORCvqZL8RgAvZrQ4Sg1S3cTATGw",
      highlights: ["Lucerne & Mount Titlis Cable Car", "Jungfraujoch Top of Europe Train", "Eiffel Tower 2nd Tier Access", "Seine River Glass Dinner Cruise"],
      inclusions: ["Schengen Visa Filing", "4-Star Deluxe Hotels", "Daily Breakfast", "Internal Rail Pass"]
    },
    {
      id: 2,
      title: "Japan Cherry Blossom & Bullet Train Expedition",
      region: "Asia",
      duration: "8 Days / 7 Nights",
      price: "₹2,10,000",
      perPerson: "per adult twin sharing",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1VgrX0RmzS22PKvffCLmsO15-3tfsKGIjYtJtrWXlSXULJWv9t1wDTO0dwK6UUdrWKdqll0aOtFZN35TRYNwSGxazZ_zQ9weu02vFi5y-IdutUbGHBL9uwML1ukTS63uD4qJNgOt44AOrCRUDHcrTIJsdRmXlvq4iRPOELOBeyDRU3tWKhCslpv0DVhRYBmjP8K_4C_PXZv--maM-DuRPjeVfj0fvVQhwGXBlpBqfAtDLYwhhNnHs9veg",
      highlights: ["Tokyo Skytree & Senso-ji Temple", "Shinkansen Bullet Train to Kyoto", "Mount Fuji 5th Station Sightseeing", "Kyoto Arashiyama Bamboo Grove"],
      inclusions: ["Japan e-Visa Assistance", "7-Day JR Pass", "Authentic Kaiseki Dinner", "4-Star Tokyo & Kyoto Stay"]
    },
    {
      id: 3,
      title: "Luxury Nilgiris Tea Estate & Ooty Escape",
      region: "India",
      duration: "4 Days / 3 Nights",
      price: "₹38,000",
      perPerson: "per couple luxury stay",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1UmyJmuid58_YX0-wjKbgFdht4Zp93zWuZS-_z_EN3k73R-o8216w-nt0X4Np_48w9-Axw1nZR_xZTBvHF1TVFxSiPjyTbhLWEwdXHiOrqIkiq6i_w3bSTJm6G5_eRvHgRk98QsaPP1L7_AZ8EBJNwBZuEU_JQKG_c3D8L2NXGmSQ2FhIFq2KD6DUeUNpQCh4fPf8oxZOgpq2kfzaNOg-fN40LE0BBFpOARPF6ZqolfLVvaY7MGhmbVFg",
      highlights: ["Heritage Nilgiri Mountain Toy Train", "Private Tea Plantation Tasting Session", "Doddabetta Peak Sunrise Viewpoint", "Pykara Lake Speedboat Ride"],
      inclusions: ["Chauffeur Private Vehicle", "Heritage Bungalow Stay", "All Meals Included", "Ooty Office VIP Concierge"]
    },
    {
      id: 4,
      title: "Dubai Desert Safari & Future Museum",
      region: "Asia",
      duration: "5 Days / 4 Nights",
      price: "₹62,000",
      perPerson: "per adult twin sharing",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1XpTtE4PD4s_dAGWagRdw_9Scxjul1_OAXJY4OSvUnRbBkZf_JNPBNQ7ss9FvoB2-rUaLojAb7pw96gvM_45xbd6RcMBSOoeovWNyGXPHvlyMWjOYSmtBTEDSW9_FXhluf-UFIj76cgXEdts5spkRlWJTFM2W8Ykdr6VzFFyq7LoJaSDZWYdAmLiPeQIIgcS5fMeK5d1JY8sfaTXWmbI2h6SD2RF4lpMr_-GwDfH6GasvjCnbsY2GDsZbI",
      highlights: ["Burj Khalifa 124th Floor Deck", "Museum of the Future Priority Entry", "4x4 Desert Dune Bashing & BBQ", "Marina Dhow Cruise Dinner"],
      inclusions: ["Express UAE 30-Day Visa", "4-Star Hotel Stay", "Airport Transfers", "City Sightseeing Tour"]
    }
  ];

  const filteredTours = filterRegion === 'All'
    ? tours
    : tours.filter(t => t.region === filterRegion);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <>
      <SeoMeta
        title="Tour Packages & Luxury Getaways — Yovia Travel Advisory"
        description="Explore curated international tour packages to Europe, Japan, Dubai, Bali & Nilgiris. End-to-end flight, hotel & visa coordination."
        canonicalUrl="https://yoviavisaservices.com/tours"
      />

      <main className="space-y-16 py-8">
        
        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-4 py-1.5 bg-volt/50 text-ink text-xs font-bold rounded-full uppercase tracking-wider">
            Tailored International Expeditions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight max-w-3xl mx-auto leading-tight">
            Curated World Tour Packages &amp; Getaways
          </h1>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto">
            Experience uncompromised luxury travel with complete embassy visa approvals and 24/7 Nilgiris advisor support.
          </p>
        </section>

        {/* REGION FILTER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            {['All', 'Europe', 'Asia', 'India'].map((r) => (
              <button
                key={r}
                onClick={() => setFilterRegion(r)}
                className={`px-5 py-2 text-sm font-semibold rounded-pill transition-all ${
                  filterRegion === r
                    ? 'bg-ink text-pure-white shadow-md'
                    : 'bg-pure-white text-slate hover:text-ink border border-hairline-gray'
                }`}
              >
                {r === 'All' ? 'All Destinations' : r}
              </button>
            ))}
          </div>
        </section>

        {/* TOURS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <TiltCard key={tour.id} maxTilt={5} className="bg-pure-white border border-hairline-gray rounded-card overflow-hidden shadow-surface-resting flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-ink/80 text-pure-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                      {tour.duration}
                    </div>
                    <div className="absolute top-4 right-4 bg-volt text-ink px-3 py-1 rounded-full text-xs font-extrabold shadow-sm">
                      {tour.region}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-ink leading-snug">{tour.title}</h3>
                        <p className="text-xs text-slate mt-1">{tour.perPerson}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-ink block">{tour.price}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-hairline-gray">
                      <span className="text-xs font-bold text-ink uppercase tracking-wider block">Key Tour Highlights</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-sm">flight_land</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {expandedId === tour.id && (
                      <div className="bg-studio-off-white rounded-2xl p-4 text-xs space-y-2 animate-in fade-in duration-200">
                        <span className="font-bold text-ink block uppercase tracking-wider">Package Inclusions</span>
                        <div className="grid grid-cols-2 gap-2 text-slate">
                          {tour.inclusions.map((inc, incIdx) => (
                            <div key={incIdx} className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-primary text-sm">done</span>
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setExpandedId(expandedId === tour.id ? null : tour.id)}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    {expandedId === tour.id ? 'Hide Inclusions ▲' : 'View Full Inclusions ▼'}
                  </button>

                  <MagneticButton
                    onClick={() => {
                      const element = document.getElementById('tour-custom-form');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary-container text-pure-white font-bold text-xs px-5 py-2.5 rounded-pill hover:bg-primary shadow-sm"
                  >
                    Request Custom Itinerary
                  </MagneticButton>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* CUSTOM ITINERARY INQUIRY FORM */}
        <section id="tour-custom-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ink text-pure-white border border-deep-plum rounded-card p-8 sm:p-12 shadow-surface-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 bg-volt text-ink text-xs font-bold rounded-full uppercase tracking-wider">
                  Tailored Travel Concierge
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  Design Your Private Custom Holiday
                </h2>
                <p className="text-slate text-sm leading-relaxed">
                  Looking for a unique honeymoon package, private family vacation, or executive group retreat? Tell our Ooty specialists your preferences.
                </p>
                <div className="space-y-2 pt-2 text-xs text-sky-tint">
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-volt">star</span>
                    Custom flight &amp; luxury resort bookings
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-volt">verified</span>
                    100% Guaranteed Visa Documentation Included
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                {!bookingSubmitted ? (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full bg-input-dark-fill border border-white/10 rounded-input px-4 py-3 text-sm text-pure-white focus:outline-none focus:ring-2 focus:ring-primary-container"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 94431 00000"
                          className="w-full bg-input-dark-fill border border-white/10 rounded-input px-4 py-3 text-sm text-pure-white focus:outline-none focus:ring-2 focus:ring-primary-container"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Target Destination</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Switzerland & France"
                          className="w-full bg-input-dark-fill border border-white/10 rounded-input px-4 py-3 text-sm text-pure-white focus:outline-none focus:ring-2 focus:ring-primary-container"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Travel Month &amp; Days</label>
                        <input
                          type="text"
                          placeholder="e.g. October 2026 / 8 Days"
                          className="w-full bg-input-dark-fill border border-white/10 rounded-input px-4 py-3 text-sm text-pure-white focus:outline-none focus:ring-2 focus:ring-primary-container"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-volt text-ink font-extrabold py-3.5 rounded-pill hover:bg-white transition-colors text-sm shadow-md"
                      >
                        Submit Tour Customization Request
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-volt text-ink flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold">Custom Request Received!</h3>
                    <p className="text-slate text-sm max-w-sm mx-auto">
                      Our Ooty travel advisor will prepare your tailored itinerary and contact you within 4 business hours.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
