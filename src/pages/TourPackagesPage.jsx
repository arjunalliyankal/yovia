import React, { useState } from 'react';
import { SeoMeta } from '../components/ui/SeoMeta';
import { TiltCard } from '../components/motion/TiltCard';
import { MagneticButton } from '../components/motion/MagneticButton';

export function TourPackagesPage() {
  const [filterRegion, setFilterRegion] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [activeCustomizingId, setActiveCustomizingId] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [customRequestPackage, setCustomRequestPackage] = useState('');

  const tours = [
    {
      id: 1,
      title: "Swiss Alpine Wonders & Paris Romance",
      region: "Europe",
      duration: "9 Days / 8 Nights",
      basePrice: 105000,
      perPerson: "per adult twin sharing",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1W6gNZMPERwZmEpYIFtBA6ZjAVztAw5uKb4ABEYOhla8DIT6YjXyv3BtvWcklcspJlmk8Sgm3FstQT-W5jqRegCUctYJPh3UUMyfaskm7EucV43Vl3-ZjoTh9YIkxgYAGPgdbGE_A2FixzdmyETqbUYdkU9nwhypZaPgluXL9v-Gh8oKwtXlr8tHK7O6R57JoszF9PcNcDcCbO2opXKZZqEMZhf0yAORCvqZL8RgAvZrQ4Sg1S3cTATGw",
      highlights: ["Lucerne & Mount Titlis Cable Car", "Jungfraujoch Top of Europe Train", "Eiffel Tower 2nd Tier Access", "Seine River Glass Dinner Cruise"],
      customServices: [
        { id: "visa", name: "Schengen Visa Fast-Track Filing", price: 8500, defaultSelected: true },
        { id: "flight", name: "Roundtrip International Flights", price: 46000, defaultSelected: true },
        { id: "hotel", name: "4-Star Hotel Accommodation & Breakfast", price: 24500, defaultSelected: true },
        { id: "rail", name: "Swiss Rail Pass & Glacier Express", price: 11000, defaultSelected: true },
        { id: "transfer", name: "Private Airport & Hotel Transfers", price: 5000, defaultSelected: false }
      ]
    },
    {
      id: 2,
      title: "Japan Cherry Blossom & Bullet Train Expedition",
      region: "Asia",
      duration: "8 Days / 7 Nights",
      basePrice: 120000,
      perPerson: "per adult twin sharing",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1VgrX0RmzS22PKvffCLmsO15-3tfsKGIjYtJtrWXlSXULJWv9t1wDTO0dwK6UUdrWKdqll0aOtFZN35TRYNwSGxazZ_zQ9weu02vFi5y-IdutUbGHBL9uwML1ukTS63uD4qJNgOt44AOrCRUDHcrTIJsdRmXlvq4iRPOELOBeyDRU3tWKhCslpv0DVhRYBmjP8K_4C_PXZv--maM-DuRPjeVfj0fvVQhwGXBlpBqfAtDLYwhhNnHs9veg",
      highlights: ["Tokyo Skytree & Senso-ji Temple", "Shinkansen Bullet Train to Kyoto", "Mount Fuji 5th Station Sightseeing", "Kyoto Arashiyama Bamboo Grove"],
      customServices: [
        { id: "visa", name: "Japan e-Visa Protocol Assistance", price: 4500, defaultSelected: true },
        { id: "flight", name: "Roundtrip Tokyo Flights", price: 53000, defaultSelected: true },
        { id: "pass", name: "7-Day JR Bullet Train Pass", price: 19500, defaultSelected: true },
        { id: "dinner", name: "Authentic Kaiseki Dinner & Onsen", price: 13000, defaultSelected: true },
        { id: "guide", name: "English-Speaking Private Guide", price: 8000, defaultSelected: false }
      ]
    },
    {
      id: 3,
      title: "Luxury Nilgiris Tea Estate & Ooty Escape",
      region: "India",
      duration: "4 Days / 3 Nights",
      basePrice: 21000,
      perPerson: "per couple luxury stay",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1UmyJmuid58_YX0-wjKbgFdht4Zp93zWuZS-_z_EN3k73R-o8216w-nt0X4Np_48w9-Axw1nZR_xZTBvHF1TVFxSiPjyTbhLWEwdXHiOrqIkiq6i_w3bSTJm6G5_eRvHgRk98QsaPP1L7_AZ8EBJNwBZuEU_JQKG_c3D8L2NXGmSQ2FhIFq2KD6DUeUNpQCh4fPf8oxZOgpq2kfzaNOg-fN40LE0BBFpOARPF6ZqolfLVvaY7MGhmbVFg",
      highlights: ["Heritage Nilgiri Mountain Toy Train", "Private Tea Plantation Tasting Session", "Doddabetta Peak Sunrise Viewpoint", "Pykara Lake Speedboat Ride"],
      customServices: [
        { id: "bungalow", name: "Heritage Bungalow Room Upgrade", price: 8500, defaultSelected: true },
        { id: "car", name: "Private Chauffeur Sedan Vehicle", price: 5500, defaultSelected: true },
        { id: "toytrain", name: "Toy Train First Class VIP Pass", price: 3000, defaultSelected: true },
        { id: "concierge", name: "Ooty Office 24/7 VIP Concierge", price: 2000, defaultSelected: false }
      ]
    },
    {
      id: 4,
      title: "Dubai Desert Safari & Future Museum",
      region: "Asia",
      duration: "5 Days / 4 Nights",
      basePrice: 32000,
      perPerson: "per adult twin sharing",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1XpTtE4PD4s_dAGWagRdw_9Scxjul1_OAXJY4OSvUnRbBkZf_JNPBNQ7ss9FvoB2-rUaLojAb7pw96gvM_45xbd6RcMBSOoeovWNyGXPHvlyMWjOYSmtBTEDSW9_FXhluf-UFIj76cgXEdts5spkRlWJTFM2W8Ykdr6VzFFyq7LoJaSDZWYdAmLiPeQIIgcS5fMeK5d1JY8sfaTXWmbI2h6SD2RF4lpMr_-GwDfH6GasvjCnbsY2GDsZbI",
      highlights: ["Burj Khalifa 124th Floor Deck", "Museum of the Future Priority Entry", "4x4 Desert Dune Bashing & BBQ", "Marina Dhow Cruise Dinner"],
      customServices: [
        { id: "visa", name: "Express UAE 30-Day Visa", price: 6500, defaultSelected: true },
        { id: "flight", name: "Return India-Dubai Flights", price: 17500, defaultSelected: true },
        { id: "hotel", name: "4-Star Hotel Stay & Breakfast", price: 12000, defaultSelected: true },
        { id: "burjkhalifa", name: "Burj Khalifa 124th Floor Entry", price: 4000, defaultSelected: true },
        { id: "safari", name: "VIP Desert Safari Upgrade", price: 3500, defaultSelected: false }
      ]
    }
  ];

  // State to track selected services for each tour card
  const [selectedServices, setSelectedServices] = useState(() => {
    const initial = {};
    tours.forEach((t) => {
      initial[t.id] = t.customServices.filter(s => s.defaultSelected).map(s => s.id);
    });
    return initial;
  });

  const toggleService = (tourId, serviceId) => {
    setSelectedServices(prev => {
      const current = prev[tourId] || [];
      const updated = current.includes(serviceId)
        ? current.filter(id => id !== serviceId)
        : [...current, serviceId];
      return { ...prev, [tourId]: updated };
    });
  };

  const selectAllServices = (tourId, tourServices) => {
    setSelectedServices(prev => ({
      ...prev,
      [tourId]: tourServices.map(s => s.id)
    }));
  };

  const resetServices = (tourId, tourServices) => {
    setSelectedServices(prev => ({
      ...prev,
      [tourId]: tourServices.filter(s => s.defaultSelected).map(s => s.id)
    }));
  };

  const calculateTotal = (tour) => {
    const selected = selectedServices[tour.id] || [];
    const addOnTotal = tour.customServices
      .filter(s => selected.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0);
    return tour.basePrice + addOnTotal;
  };

  const formatCurrency = (val) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const filteredTours = filterRegion === 'All'
    ? tours
    : tours.filter(t => t.region === filterRegion);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const handleInitiateCustomization = (tour) => {
    const total = calculateTotal(tour);
    const selectedNames = tour.customServices
      .filter(s => (selectedServices[tour.id] || []).includes(s.id))
      .map(s => s.name)
      .join(', ');

    setCustomRequestPackage(`${tour.title} (Customized Total: ${formatCurrency(total)}) — Services: ${selectedNames}`);

    const element = document.getElementById('tour-custom-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SeoMeta
        title="Customizable Tour Packages & Luxury Getaways — Yovia Travel Advisory"
        description="Explore customizable international tour packages to Europe, Japan, Dubai & Nilgiris. Select/unselect services, see real-time price updates & get instant visa coordination."
        canonicalUrl="https://yoviavisaservices.com/tours"
      />

      <main className="space-y-16 py-8">

        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight max-w-3xl mx-auto leading-tight">
            Curated World Tour Packages &amp; Getaways
          </h1>
          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto">
            Experience uncompromised luxury travel. Customize inclusions on any package, toggle individual services, and get live real-time price updates.
          </p>
        </section>

        {/* REGION FILTER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            {['All', 'Europe', 'Asia', 'India'].map((r) => (
              <button
                key={r}
                onClick={() => setFilterRegion(r)}
                className={`px-5 py-2 text-sm font-semibold rounded-pill transition-all ${filterRegion === r
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
            {filteredTours.map((tour) => {
              const totalAmount = calculateTotal(tour);
              const isCustomizing = activeCustomizingId === tour.id;
              const activeServicesCount = (selectedServices[tour.id] || []).length;

              return (
                <TiltCard key={tour.id} maxTilt={4} className="bg-pure-white border border-hairline-gray rounded-card overflow-hidden shadow-surface-resting flex flex-col justify-between transition-all">
                  <div>
                    {/* Image & Header Badges */}
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-ink/85 text-pure-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                        {tour.duration}
                      </div>

                    </div>

                    <div className="p-6 space-y-5">
                      {/* Title & Live Pricing Box */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-extrabold text-ink leading-snug">{tour.title}</h3>
                          <p className="text-xs text-slate mt-1">{tour.perPerson}</p>
                        </div>
                        <div className="sm:text-right bg-studio-off-white sm:bg-transparent p-3 sm:p-0 rounded-2xl border sm:border-0 border-hairline-gray">
                          <span className="text-[10px] uppercase font-bold text-slate block tracking-wider">Live Total Price</span>
                          <span className="text-2xl font-black text-ink block transition-all">{formatCurrency(totalAmount)}</span>
                          <span className="text-[11px] font-semibold text-secondary block sm:text-right mt-0.5">
                            Base: {formatCurrency(tour.basePrice)}
                          </span>
                        </div>
                      </div>

                      {/* Key Tour Highlights */}
                      <div className="space-y-2 pt-3 border-t border-hairline-gray/60">
                        <span className="text-xs font-bold text-ink uppercase tracking-wider block">Key Tour Highlights</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate">
                          {tour.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-secondary text-sm shrink-0">flight_land</span>
                              <span className="leading-tight">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CUSTOMIZABLE SERVICES PANEL (Interactive Checklist) */}
                      {isCustomizing && (
                        <div className="bg-surface-container rounded-2xl p-4 sm:p-5 border border-hairline-gray space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="flex items-center justify-between border-b border-hairline-gray/80 pb-2.5">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-base">tune</span>
                              <span className="font-bold text-ink text-xs uppercase tracking-wider">
                                Select Included Services ({activeServicesCount}/{tour.customServices.length})
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-[11px]">
                              <button
                                type="button"
                                onClick={() => selectAllServices(tour.id, tour.customServices)}
                                className="text-primary font-bold hover:underline"
                              >
                                Select All
                              </button>
                              <span className="text-hairline-gray">|</span>
                              <button
                                type="button"
                                onClick={() => resetServices(tour.id, tour.customServices)}
                                className="text-slate font-semibold hover:underline"
                              >
                                Reset
                              </button>
                            </div>
                          </div>

                          {/* Checkbox List */}
                          <div className="space-y-2.5">
                            {tour.customServices.map((service) => {
                              const isChecked = (selectedServices[tour.id] || []).includes(service.id);

                              return (
                                <label
                                  key={service.id}
                                  onClick={() => toggleService(tour.id, service.id)}
                                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none text-xs ${isChecked
                                    ? 'bg-pure-white border-primary/40 shadow-xs text-ink'
                                    : 'bg-studio-off-white/60 border-hairline-gray text-slate opacity-70 hover:opacity-100'
                                    }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div
                                      className={`w-4 h-4 rounded flex items-center justify-center border transition-colors shrink-0 ${isChecked
                                        ? 'bg-primary border-primary text-pure-white'
                                        : 'border-slate/40 bg-pure-white'
                                        }`}
                                    >
                                      {isChecked && <span className="material-symbols-outlined text-xs">check</span>}
                                    </div>
                                    <span className={`font-semibold ${isChecked ? 'text-ink' : 'text-slate'}`}>
                                      {service.name}
                                    </span>
                                  </div>

                                  <span className={`font-extrabold text-[11px] px-2 py-0.5 rounded-md ${isChecked ? 'bg-volt/40 text-ink' : 'bg-hairline-gray/40 text-slate line-through'
                                    }`}>
                                    +{formatCurrency(service.price)}
                                  </span>
                                </label>
                              );
                            })}
                          </div>

                          {/* Live Price Summary Bar */}
                          <div className="pt-3 border-t border-hairline-gray/80 flex items-center justify-between text-xs bg-pure-white p-3 rounded-xl border border-hairline-gray">
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-bold uppercase text-slate block">Customized Package Total</span>
                              <span className="text-xs text-slate">Base ({formatCurrency(tour.basePrice)}) + Services ({activeServicesCount})</span>
                            </div>
                            <span className="text-xl font-black text-ink">{formatCurrency(totalAmount)}</span>
                          </div>
                        </div>
                      )}

                      {/* Standard Inclusions Dropdown */}
                      {expandedId === tour.id && !isCustomizing && (
                        <div className="bg-studio-off-white rounded-2xl p-4 text-xs space-y-2 animate-in fade-in duration-200 border border-hairline-gray">
                          <span className="font-bold text-ink block uppercase tracking-wider">Package Inclusions</span>
                          <div className="grid grid-cols-2 gap-2 text-slate">
                            {tour.customServices.map((inc, incIdx) => (
                              <div key={incIdx} className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-primary text-sm">done</span>
                                <span>{inc.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CARD FOOTER BUTTONS */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveCustomizingId(isCustomizing ? null : tour.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-pill transition-all ${isCustomizing
                          ? 'bg-ink text-pure-white shadow-xs'
                          : 'bg-volt/40 hover:bg-volt text-ink border border-volt/60'
                          }`}
                      >
                        <span className="material-symbols-outlined text-sm">tune</span>
                        <span>{isCustomizing ? 'Done Customizing ▲' : 'Customize Package ⚙'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedId(expandedId === tour.id ? null : tour.id)}
                        className="text-xs font-bold text-slate hover:text-ink transition-colors"
                      >
                        {expandedId === tour.id ? 'Hide Details ▲' : 'View Details ▼'}
                      </button>
                    </div>

                    <MagneticButton
                      onClick={() => handleInitiateCustomization(tour)}
                      className="w-full bg-primary-container text-pure-white font-bold text-xs py-3 rounded-pill hover:bg-primary shadow-sm text-center flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Book Customized Package ({formatCurrency(totalAmount)})</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </MagneticButton>
                  </div>
                </TiltCard>
              );
            })}
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
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Target Destination &amp; Package</label>
                        <input
                          type="text"
                          required
                          value={customRequestPackage}
                          onChange={(e) => setCustomRequestPackage(e.target.value)}
                          placeholder="e.g. Switzerland & France (Customized)"
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
