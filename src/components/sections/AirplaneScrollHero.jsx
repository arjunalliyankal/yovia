import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../motion/MagneticButton';
import { AirplaneCanvas } from '../motion/AirplaneCanvas';

export function AirplaneScrollHero({ onOpenEligibility }) {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const fastFilingTags = ['Schengen 29', 'USA B1/B2', 'UK Visitor', 'Canada & Australia'];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener?.('change', handleChange);
    return () => mediaQuery.removeEventListener?.('change', handleChange);
  }, []);

  const isTransitioningRef = useRef(false);

  // Smooth scroll event listener
  useEffect(() => {
    if (isReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (isTransitioningRef.current) return;
      if (!heroRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroElement = heroRef.current;
          if (!heroElement) return;

          const rect = heroElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalScrollableHeight = rect.height - windowHeight;

          if (totalScrollableHeight <= 0) {
            setScrollProgress(0);
            ticking = false;
            return;
          }

          const currentScroll = -rect.top;
          const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));

          setScrollProgress(progress);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);

  // Auto-scroll smooth helper function
  const scrollToNextSection = () => {
    if (!heroRef.current) return;
    const heroElement = heroRef.current;
    const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;

    window.scrollTo({
      top: heroBottom,
      behavior: 'smooth',
    });
  };

  const handleApplyForVisa = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    // Smoothly animate airplane frame to the last frame (progress 1.0)
    const startProgress = scrollProgress;
    const targetProgress = 1.0;
    const duration = 950; // duration in ms for cinematic flight to horizon
    const startTime = performance.now();

    const animateToLastFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(1, elapsed / duration);
      // Smooth cubic ease out
      const easedT = 1 - Math.pow(1 - t, 3);
      const current = startProgress + (targetProgress - startProgress) * easedT;

      setScrollProgress(current);

      if (t < 1) {
        requestAnimationFrame(animateToLastFrame);
      } else {
        // Airplane reached the final frame; smoothly scroll to Featured Visa Programs
        const targetElement = document.getElementById('featured-visa-programs');
        if (targetElement) {
          const navOffset = 85;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 850);
      }
    };

    requestAnimationFrame(animateToLastFrame);
  };

  // Compute text fade and move transforms based on scrollProgress
  const textOpacity = isReducedMotion
    ? 1
    : scrollProgress < 0.12
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.12) / 0.48);

  const textTranslateY = isReducedMotion
    ? 0
    : scrollProgress < 0.12
      ? 0
      : -((scrollProgress - 0.12) / 0.48) * 35;

  const contentPointerEvents = textOpacity < 0.05 ? 'none' : 'auto';

  return (
    <div ref={heroRef} className="relative w-full h-[185vh] bg-ink">
      {/* Sticky viewport area */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">

        {/* Background Airplane Canvas */}
        <div className="absolute inset-0 z-0">
          <AirplaneCanvas progress={scrollProgress} isReducedMotion={isReducedMotion} />
        </div>

        {/* Foreground Content Container (z-20) */}
        <div
          className="relative z-20 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 pb-8 flex flex-col justify-between h-full will-change-[opacity,transform]"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            pointerEvents: contentPointerEvents,
          }}
        >
          {/* Top Status Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-12 sm:pt-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-ink/70 px-4 py-2 text-volt shadow-lg backdrop-blur-md border border-volt/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-volt"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-pure-white">
                Nilgiris Authorized Global Mobility Desk
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-pure-white/90">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink/70 border border-white/10 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-volt" />
                <span className="font-semibold text-pure-white">VFS &amp; Embassy Compliant</span>
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-white/20" />
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink/70 border border-white/10 font-semibold text-pure-white shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-sm text-volt">location_on</span>
                <span>Direct Office in Ooty</span>
              </div>
            </div>
          </div>

          {/* Main Hero Copy & Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">

            {/* Left Copy Column */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-pure-white tracking-tight leading-[1.1] drop-shadow-md">
                <span className="relative inline-block">
                  <span className="relative z-10 text-ink px-2 py-0.5 rounded-md bg-volt">Hassle-Free</span>
                </span>{' '}
                Visa &amp; Travel Solutions
              </h1>

              <p className="text-base sm:text-lg text-pure-white/90 max-w-xl leading-relaxed drop-shadow-sm font-normal">
                Premier international visa documentation, embassy protocol compliance, and bespoke global travel itineraries engineered right from our Ooty advisory desk.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <MagneticButton
                  onClick={handleApplyForVisa}
                  className="bg-primary-container hover:bg-primary text-pure-white font-bold text-sm px-8 py-4 rounded-pill shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Apply for Visa</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </MagneticButton>

                <Link
                  to="/tours"
                  className="inline-flex items-center justify-center gap-2 bg-pure-white/15 hover:bg-pure-white/25 text-pure-white border border-white/20 font-semibold text-sm px-7 py-4 rounded-pill backdrop-blur-md transition-colors text-center shadow-sm"
                >
                  <span>Explore Tour Packages</span>
                  <span className="material-symbols-outlined text-lg">travel_explore</span>
                </Link>
              </div>

              {/* Fast Filing Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/15">
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-pure-white/70 mr-1">
                  Fast Filing For:
                </span>
                {fastFilingTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-ink/60 border border-white/15 text-xs font-semibold text-pure-white shadow-xs backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Card Column: Ooty Consultancy Badge Card */}
            <div className="lg:col-span-4 hidden sm:block max-w-md mx-auto lg:max-w-none w-full">
              <div className="rounded-2xl p-4 bg-ink/60 border border-white/15 backdrop-blur-md shadow-2xl text-pure-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-volt text-ink text-[11px] font-extrabold rounded-full shadow-xs">
                    Verified Flagship Desk
                  </span>
                  <span className="material-symbols-outlined text-volt">verified</span>
                </div>
                <h3 className="text-base font-bold">Ooty Global Consultancy Hub</h3>
                <p className="text-xs text-pure-white/80 leading-relaxed">
                  Commercial Road, Near Charing Cross, Ooty, Nilgiris, Tamil Nadu.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-volt font-semibold">
                  <span>★ 4.9 Direct Client Rating</span>
                  <span>10+ Yrs Service</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Scroll Indicator Prompt */}
          <button
            onClick={scrollToNextSection}
            type="button"
            className="flex flex-col items-center justify-center pb-2 text-pure-white/80 hover:text-volt transition-colors cursor-pointer group mx-auto bg-transparent border-0 outline-none"
            aria-label="Auto scroll to explore services"
          >
            <span className="text-[11px] uppercase tracking-widest font-semibold mb-1 group-hover:underline">
              {scrollProgress > 0.8 ? 'Scroll down for services' : 'Scroll or Click to Explore'}
            </span>
            <span className="material-symbols-outlined text-xl animate-bounce text-volt group-hover:scale-125 transition-transform">
              expand_more
            </span>
          </button>

        </div>

      </div>
    </div>
  );
}
