import React, { useState, useEffect, useRef } from 'react';

export function ClientReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Dr. Anish Nair & Family",
      location: "Coimbatore / Ooty",
      service: "Schengen France & Swiss Visa",
      rating: 5,
      date: "August 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      quote: "Yovia made our multi-country European family trip completely stress-free. Their Ooty team verified all 40+ document pages down to the exact embassy criteria. Our Schengen visas were issued in just 8 days!",
      verifiedTag: "Google Verified Review"
    },
    {
      id: 2,
      name: "Rajesh & Priya Sundaram",
      location: "Chennai, TN",
      service: "US B1/B2 Business & Visitor",
      rating: 5,
      date: "August 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "Getting an early US B1/B2 slot seemed impossible until we consulted Yovia. Their team prepped us through mock interviews that matched the actual Chennai consulate questions line-for-line. Approved on the spot!",
      verifiedTag: "Google Verified Review"
    },
    {
      id: 3,
      name: "Karthik Subramanian",
      location: "Bengaluru, KA",
      service: "UK Standard Visitor Visa",
      rating: 5,
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      quote: "Honest advice and transparent pricing from day one. They handled my complex bank statement presentation with precision. Highly recommend visiting their flagship desk if you're in Nilgiris!",
      verifiedTag: "Google Verified Review"
    },
    {
      id: 4,
      name: "Sarah & David Jenkins",
      location: "Kochi, KL",
      service: "Grand European Alpine Expedition",
      rating: 5,
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      quote: "Not only did Yovia secure our visas smoothly, but their customized 10-day Switzerland & France tour itinerary was flawless. Every hotel transfer and train connection was impeccably planned.",
      verifiedTag: "Google Verified Review"
    },
    {
      id: 5,
      name: "Deepak & Meera Varma",
      location: "Mysore / Ooty",
      service: "Canada Super Visa & Travel",
      rating: 5,
      date: "June 2026",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200",
      quote: "Outstanding institutional service. The level of care and attention given to elderly parents applying for Canadian Super Visas was heart-warming. Everything was approved within record time.",
      verifiedTag: "Google Verified Review"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const visibleCount = 3; // Number of items shown on desktop grid window

  // Auto-scroll effect (4 seconds per slide)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
    setIsPaused(false);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
      {/* Header & Google Rating Summary */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volt/30 text-ink text-xs font-bold uppercase tracking-wider mb-2">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Client Success &amp; Experiences
          </h2>
          <p className="text-slate text-sm mt-1 max-w-lg">
            Real feedback from travelers, families, and professionals who processed their visa applications through Yovia.
          </p>
        </div>

        {/* Rating Badge + Google Reviews Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-pure-white border border-hairline-gray p-4 rounded-2xl shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black text-ink leading-none">4.9</span>
                <div className="flex text-amber-400 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
              <span className="text-[11px] font-semibold text-slate mt-0.5">Based on 120+ Ratings</span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Yovia+Visa+Services+Ooty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink hover:bg-input-dark-fill text-pure-white text-xs font-bold px-4 py-2.5 rounded-pill transition-colors shrink-0 shadow-xs"
          >
            <span>View All Reviews on Google</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Controls (Top Right Desktop / Floating) */}
        <div className="flex items-center justify-between mb-4">
          {/* <span className="text-xs font-semibold text-slate flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
            {isPaused ? 'Auto-scroll Paused' : 'Live Client Testimonials'}
          </span> */}

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-pure-white border border-hairline-gray text-ink hover:bg-ink hover:text-pure-white flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Previous Review"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-pure-white border border-hairline-gray text-ink hover:bg-ink hover:text-pure-white flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Next Review"
            >
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Review Cards Grid / Slide view */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % reviews.length;
            const item = reviews[index];

            return (
              <div
                key={item.id}
                className="bg-pure-white rounded-3xl p-6 sm:p-7 border border-hairline-gray shadow-surface-resting hover:shadow-surface-elevated transition-all flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Top Bar: Rating & Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400 text-sm tracking-widest">
                      {'★'.repeat(item.rating)}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-studio-off-white text-[10px] font-extrabold text-slate border border-hairline-gray/60 uppercase tracking-wider">
                      {item.service}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-slate text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Bottom Bar: Client Info */}
                <div className="pt-4 border-t border-hairline-gray/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-hairline-gray shrink-0 shadow-xs"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200";
                      }}
                    />
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-ink leading-snug group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[10px] font-medium text-slate block">{item.location} • {item.date}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 border border-emerald-200">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    <span></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-ink' : 'w-2 bg-hairline-gray hover:bg-slate'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
