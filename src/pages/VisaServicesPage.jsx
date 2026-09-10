import React, { useState } from 'react';
import { SeoMeta } from '../components/ui/SeoMeta';
import { MagneticButton } from '../components/motion/MagneticButton';

// Exact image URLs from Stitch project 5576737861905440358 — Visa Services & Immigration screen
const STITCH_IMAGES = {
  schengen: "https://lh3.googleusercontent.com/aida-public/AB6AXuACh3INJNmoo6GHgdP3rwFRoGOcFfx-iUfcOd7LLdvBqe2IFDUaxQ471NViOlEfyC1pQSf6WX0V12HVS05dB_-kDPUqv_IXV6vrciAiTgt_uKpDZhFowvB4ACDojmlAnx4Rak1r3nQhhBpl3TDK9uP2EqE2TOJeRHeicDNHLhmwgk01kjPwQICIyN3QTfmrVpDwf5TLglH6wdcunT7SmtY0hgd6PkSzqIJ83h5ebYW-NYoGKzgWeymI",
  usa: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0v4LnoBldwKAOJtrlCK5-z1OzjTpl5AJX29KkT40PZ67IksLVoIBHNz6QRTWUnO_ngzoxJ1lyCP3eW-tmKOP20tIp3ycn6njk6zvaVxVjxTxKMndzaZCcRvkXmyzxCDaTuluvYNqllghh24Rx0EmYI8GzVb8Ol24k_hISmWALhD-s15DPvQn53RU-gO-_f_ExTlWOyZj5s8mCBsU-qXT5KZ_3UAa6zc8Riy7JRSjMncL8AN5sf6eF",
  canada: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdbcP6wpyldqnmqjNdV3liWHr7_iS-LenXAmAdvg63hQFxKciADyhXldX0DDkwIGxY5MPiafXVE8gUH5rDXu_4-MPwLTrdGJU_yH45tmHRzzs0zvVr_Qzk_G6LyaJWXCQFr_td4VUDf60tVcSmSqv-wyig6QCt-kuA4DjydvZXMCkf8Qp5fYXIF6KQTvv14TSRZEdHZDDc8iF43o1aaT0KhlQcswnnUiia5K7Q8A2EIMqdYw_pyVLx",
  australia: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbKAC_yJCfGf158q3cW1KLUqpuyISW9rgZlxrJnnOKD38GL7Pi0WJJCv63nk5wdtNa0xdl6VAv_z4aub7Y6vNiqJFR51u6YNOX49efjRU49VJajWdkPDs-AULx0eqpWtcbX5rYSJL_ljJVKlPLzy-cYvhK9Q6dCqwyS5uNQBTO5a0hU4AoohZoizjenJclGXHl3dG-VxZnaTEONNEOE8JD9gIDYPB6N5mM88tVd3OuaqopCaqeIKtj",
  uk: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy8LbFDy5wWi04_k7wgpJnX53WkrgFLrqvVNKnnDDWmB_U3VSHMti8KyFf8IGD3AKn9B9jk0Ad_CF4OFcmrB0epqHj2W2O4qCdpyqZbgPiTikWJQY0O-bDvB81Cey-Q3--aHVSY8oGgxlk_LofAEQ_Bkd7g5TN9yZXia4B-cRKDDTa2N4VBRKkrh00f2d1qsOvD21k1SEQX82mlsLv5SSOZU43D9q99j0o80BvUFfyxg2Jh6KM-b9S",
  turkey: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoplKjLarAplHY_9x-UTiK3LWTzfHtDx5f1dBCCZHR13q592nzy5tgAjqOE2kDMHoc15wzlqi9RV2gDwzIlZ1SS0SQJ3p4GaR7_GKu6CkcEG4btKU8PNvWmDABnjXwsIdp5-UHkjnqKxtaciMaxGb4R3FpDHMvleuafIEoUqqb-27znpCjMngOnV-ZUflG1BhLyYkRShdvyLLTmg7a9Jey5yZXlpEpRWuIOQ_8-Eusu1x5_11YtAR-",
};

const filterTabs = [
  { label: 'All Destinations', value: 'all' },
  { label: 'Schengen Zone', value: 'schengen' },
  { label: 'United States', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Australia', value: 'australia' },
  { label: 'Turkey & Armenia', value: 'eurasia' },
];

const visaCards = [
  {
    region: 'schengen',
    badge: 'Category A & B',
    badgeClass: 'bg-sky-tint text-secondary',
    subBadge: '29 European States',
    image: STITCH_IMAGES.schengen,
    imageAlt: 'High quality aerial shot of European architectural landmark with soft morning light representing elegant travel across Europe',
    subType: 'Short Stay Type C',
    title: 'Schengen Visa',
    validity: '90 Days',
    description: 'Full compliance coverage for tourist, commercial delegations, and transit. Direct slot acquisition across VFS Global, TLScontact, and BLS.',
    features: [
      'Mandatory €30k Embassy-approved insurance',
      'Multi-entry 1 to 5 year travel history structuring',
      'Vetted day-wise flight and hotel itineraries',
    ],
    footerLabel: 'Processing Time',
    footerValue: '10 - 15 Working Days',
    ctaLabel: 'Book Dossier',
    ctaClass: 'bg-ink hover:bg-input-dark-fill',
    enquiry: 'Schengen Tourist & Business Visa',
  },
  {
    region: 'usa',
    badge: 'Sub-Divisions A, B, C',
    badgeClass: 'bg-lavender-mist/40 text-primary',
    subBadge: 'US Embassy & Consulates',
    image: STITCH_IMAGES.usa,
    imageAlt: 'Iconic clean architectural framing of New York Manhattan skyline with warm morning glow representing US business and travel',
    subType: 'B1 / B2 / F1 / H1B',
    title: 'United States',
    validity: '10-Yr Multi',
    description: 'Rigorous DS-160 application drafting, high-frequency appointment slot tracking, and personalized mock consular interview sessions.',
    features: [
      'Consular interview preparation & mock Q&A',
      'Expedited & emergency appointment bot tracking',
      '221(g) refusal remediation & re-application',
    ],
    footerLabel: 'Slot Monitoring',
    footerValue: 'Active 24/7 Watch',
    ctaLabel: 'Slot Hunting',
    ctaClass: 'bg-primary hover:bg-primary-container',
    enquiry: 'USA B1/B2 Non-Immigrant Visa',
  },
  {
    region: 'canada',
    badge: 'Category A & B',
    badgeClass: 'bg-sky-tint text-secondary',
    subBadge: 'IRCC Authorized',
    image: STITCH_IMAGES.canada,
    imageAlt: 'Majestic Canadian pine forest reflected in crystalline turquoise glacial waters representing high quality Canadian travel',
    subType: 'Visitor & Super Visa',
    title: 'Canada Visa',
    validity: 'Passport Validity',
    description: 'Single/Multi-entry visitor visas and 5-year Super Visas for parents/grandparents with biometrics scheduling and tie-to-home country defense.',
    features: [
      'Super Visa medical insurance compliance',
      'VFS Global Biometric Appointment fast-booking',
      'Sponsorship & proof of financial adequacy audits',
    ],
    footerLabel: 'Approval Benchmark',
    footerValue: '97.8% Historic',
    ctaLabel: 'Apply Canada',
    ctaClass: 'bg-ink hover:bg-input-dark-fill',
    enquiry: 'Canada Visitor & Super Visa',
  },
  {
    region: 'australia',
    badge: 'Subclass 600 (A-D)',
    badgeClass: 'bg-volt text-ink',
    subBadge: 'ImmiAccount Electronic',
    image: STITCH_IMAGES.australia,
    imageAlt: 'Dramatic architectural view of the Sydney Opera House along Sydney Harbour during golden hour representing Australian travel',
    subType: 'Tourist & Business Streams',
    title: 'Australia',
    validity: 'Up to 12 Mos',
    description: 'End-to-end electronic lodging with Department of Home Affairs. Genuine Temporary Entrant (GTE) statement formulation and asset corroboration.',
    features: [
      'Specialized GTE statement editorial review',
      'Paperless digital e-Visa grant linkage',
      'Fast-track 48-hour priority processing options',
    ],
    footerLabel: 'Format',
    footerValue: '100% Digital e-Grant',
    ctaLabel: 'Lodgement',
    ctaClass: 'bg-ink hover:bg-input-dark-fill',
    enquiry: 'Australia Subclass 600',
  },
  {
    region: 'uk',
    badge: 'UKVI Official Standard',
    badgeClass: 'bg-sky-tint text-secondary',
    subBadge: 'VFS UK Centers',
    image: STITCH_IMAGES.uk,
    imageAlt: 'Classic London scene with Big Ben and Westminster Bridge over the Thames River in morning fog representing UK travel',
    subType: 'Standard Visitor Visa',
    title: 'United Kingdom',
    validity: '6 Mo / 2 / 5 / 10 Yr',
    description: 'Comprehensive UK Visas & Immigration support for leisure, family reunions, and high-level commercial partnerships.',
    features: [
      'Financial bank statement cash-flow sanitization',
      'Super Priority & Priority 5-day appointment access',
      'Invitation letter & accommodation sponsor auditing',
    ],
    footerLabel: 'Priority Options',
    footerValue: '5-Day Fast-Track',
    ctaLabel: 'UK Filing',
    ctaClass: 'bg-ink hover:bg-input-dark-fill',
    enquiry: 'UK Standard Visitor Visa',
  },
  {
    region: 'eurasia',
    badge: 'Express e-Visa & Sticker',
    badgeClass: 'bg-volt text-ink',
    subBadge: 'Eurasian Corridor',
    image: STITCH_IMAGES.turkey,
    imageAlt: 'Hot air balloons floating over Cappadocia landscape in Turkey at sunrise with warm pink and gold illumination representing Turkey travel',
    subType: 'Express Portal Processing',
    title: 'Turkey & Armenia',
    validity: 'Instant e-Visa',
    description: 'Rapid single and multiple entry solutions. Official government portal approvals, sticker submission support for direct passports, and cross-border touring.',
    features: [
      'Turkey conditional e-Visa (with US/Schengen/UK base)',
      'Armenia electronic visa grant in under 72 hours',
      'On-arrival protocol & entry voucher verification',
    ],
    footerLabel: 'Express Turnaround',
    footerValue: '24 to 48 Hours',
    ctaLabel: 'Instant Dispatch',
    ctaClass: 'bg-ink hover:bg-input-dark-fill',
    enquiry: 'Turkey & Armenia e-Visa',
  },
];

const comparisonRows = [
  { dot: 'bg-primary', dest: 'Schengen 29', passport: '6+ months beyond return', financial: '€70 / day / person', biometrics: 'In-person (VFS/BLS)', insurance: '€30,000 Zero Excess', lead: '15 Days' },
  { dot: 'bg-secondary', dest: 'USA (B1/B2)', passport: '6+ months beyond stay', financial: 'Audit of ties & liquid', biometrics: 'VAC Biometric + Consular', insurance: 'Recommended ($100k)', lead: 'Slot dependent' },
  { dot: 'bg-primary-container', dest: 'Canada (Visitor)', passport: 'Validity of duration', financial: '6-month verified ledger', biometrics: 'VFS biometric appointment', insurance: 'Mandatory for Super Visa', lead: '25 - 40 Days' },
  { dot: 'bg-volt', dest: 'Australia 600', passport: '6+ months valid', financial: 'AUD $5,000+ indicative', biometrics: 'Digital Biometrics (India)', insurance: 'Highly Advised', lead: '12 - 20 Days' },
];

const steps = [
  {
    num: '1',
    color: 'bg-ink text-pure-white',
    title: 'Profile Evaluation',
    desc: 'Comprehensive case assessment: prior travel history, immigration refusals, employment status, and target visa category fitment.',
    icon: 'policy',
    iconLabel: 'Refusal risk assessment',
  },
  {
    num: '2',
    color: 'bg-primary text-pure-white',
    title: 'Document Checklist & Vetting',
    desc: 'Bespoke document collection, ITR notarization, bank balance certificate verification, and Schengen-compliant cover letters.',
    icon: 'fact_check',
    iconLabel: 'Zero-defect audit',
  },
  {
    num: '3',
    color: 'bg-input-dark-fill text-volt',
    title: 'Slot Booking & Submission',
    desc: 'Priority scheduling at VFS/BLS/Consular VACs. Digital file transmission or physical biometric escort in Coimbatore, Bangalore, & Chennai.',
    icon: 'calendar_today',
    iconLabel: 'Priority calendar sync',
  },
  {
    num: '4',
    color: 'bg-volt text-ink',
    title: 'Visa Stamping & Delivery',
    desc: 'Real-time consignment tracking. Physical passport secure dispatch to your doorstep in Nilgiris or anywhere across Tamil Nadu.',
    icon: 'local_shipping',
    iconLabel: 'Insured blue-dart return',
  },
];

function VisaCard({ card, onEnquiry }) {
  return (
    <article
      className="group bg-pure-white rounded-xl p-8 shadow-surface-resting hover:shadow-surface-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top tag row */}
        <div className="flex items-center justify-between mb-5">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${card.badgeClass}`}>
            {card.badge}
          </span>
          <span className="text-xs text-slate">{card.subBadge}</span>
        </div>

        {/* Image with overlay */}
        <div className="relative h-44 w-full rounded-lg overflow-hidden mb-6 bg-surface-container">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-pure-white text-xs block opacity-90">{card.subType}</span>
              <h3 className="text-pure-white text-lg font-bold leading-tight">{card.title}</h3>
            </div>
            <span className="bg-volt text-ink text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap">{card.validity}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate mb-5 leading-relaxed">{card.description}</p>

        {/* Feature checklist */}
        <ul className="space-y-3 mb-6">
          {card.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-ink text-sm">
              <span className="material-symbols-outlined text-lg text-primary shrink-0">verified</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div className="bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-xl flex items-center justify-between">
        <div>
          <span className="text-[11px] text-slate block">{card.footerLabel}</span>
          <span className="text-sm font-bold text-ink">{card.footerValue}</span>
        </div>
        <MagneticButton
          onClick={() => onEnquiry(card.enquiry)}
          className={`${card.ctaClass} text-pure-white px-5 py-2.5 rounded-pill text-sm font-semibold shadow-sm`}
        >
          {card.ctaLabel}
        </MagneticButton>
      </div>
    </article>
  );
}

export function VisaServicesPage({ onOpenEligibility }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? visaCards
    : visaCards.filter(c => c.region === activeFilter);

  const handleEnquiry = () => {
    if (onOpenEligibility) onOpenEligibility();
  };

  return (
    <>
      <SeoMeta
        title="Visa Services & Immigration — Yovia Visa Advisory, Ooty"
        description="Kinetic precision visa filing across 26+ consular authorities. Schengen, USA, Canada, UK, Australia & Turkey visa assistance with zero-defect dossier vetting."
        canonicalUrl="https://yoviavisaservices.com/visa-services"
      />

      <main className="w-full min-h-screen bg-studio-off-white">
        <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 pb-20">

          {/* Ambient Glow Orbs */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-tr from-lavender-mist/20 via-sky-tint/30 to-volt/20 blur-3xl pointer-events-none -z-10 rounded-full" />

          {/* === EDITORIAL HEADER === */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-mist/40 text-deep-plum mb-5 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-xs uppercase tracking-wider font-bold">Embassies & Immigration Clearance</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-ink tracking-tight mb-4 leading-[1.05]">
              Global Visa Assistance &amp; Processing
            </h1>

            <p className="text-base md:text-lg text-slate max-w-2xl leading-relaxed">
              Kinetic precision filing across 26+ consular authorities. Accredited biometric coordination, DS-160 dossier drafting, and zero-defect immigration vetting.
            </p>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-8 p-3 rounded-xl bg-pure-white/70 backdrop-blur-md shadow-sm">
              {[
                { val: '99.2%', label: 'Consular Clearance' },
                { val: '48 hrs', label: 'Dossier Turnaround' },
                { val: '14,200+', label: 'Approved Visas' },
                { val: '100%', label: 'VFS/BLS Compliant' },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center py-2 px-3">
                  <span className="text-2xl font-bold text-ink">{m.val}</span>
                  <span className="text-xs text-slate mt-0.5 text-center">{m.label}</span>
                </div>
              ))}

            </div>

          </div>

          {/* === FILTER PILL BAR === */}
          <div className="w-full mb-10 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 md:justify-center min-w-max p-2 bg-pure-white/80 backdrop-blur-md rounded-full shadow-sm">
              {filterTabs.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeFilter === tab.value
                    ? 'bg-ink text-pure-white shadow-sm'
                    : 'text-slate hover:text-ink hover:bg-surface-container'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* === VISA CARDS GRID === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((card) => (
              <VisaCard key={card.region} card={card} onEnquiry={handleEnquiry} />
            ))}
          </div>

          {/* === REQUIREMENTS COMPARISON TABLE === */}
          <div className="mt-20 bg-pure-white rounded-xl p-8 md:p-12 shadow-surface-resting">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-bold">Consular Requirements Matrix</span>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mt-2">Compare Mandatory Submissions</h2>
              </div>
              <p className="text-sm text-slate max-w-md">
                Standardized prerequisites across core consulates. Every submission is double-verified by our senior case officers in Ooty before lodging.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[700px]">
                <thead>
                  <tr className="bg-surface-container text-ink font-semibold text-sm">
                    <th className="py-4 px-5 rounded-l-full">Destination</th>
                    <th className="py-4 px-5">Passport Validity</th>
                    <th className="py-4 px-5">Financial Minimum</th>
                    <th className="py-4 px-5">Biometrics Mode</th>
                    <th className="py-4 px-5">Mandatory Insurance</th>
                    <th className="py-4 px-5 rounded-r-full text-right">Standard Lead</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline-gray/50">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-5 font-bold text-ink">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${row.dot}`} />
                          {row.dest}
                        </div>
                      </td>
                      <td className="py-4 px-5 text-slate">{row.passport}</td>
                      <td className="py-4 px-5 text-slate">{row.financial}</td>
                      <td className="py-4 px-5 text-slate">{row.biometrics}</td>
                      <td className="py-4 px-5 text-ink font-semibold">{row.insurance}</td>
                      <td className="py-4 px-5 text-right font-bold text-ink">{row.lead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* === 4-STEP PROCESSING FLOW === */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Standard Operating Procedure</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mt-2">How Yovia Delivers Your Stamped Visa</h2>
              <p className="text-sm text-slate mt-2">A four-stage systematic protocol that strips away embassy friction, delays, and unnecessary document rejections.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="bg-pure-white rounded-xl p-8 shadow-surface-resting flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-full ${step.color} text-xl font-bold flex items-center justify-center mb-6 shadow-md`}>
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-3">{step.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-primary text-xs font-semibold">
                    <span className="material-symbols-outlined text-base">{step.icon}</span>
                    <span>{step.iconLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === CTA STRIP === */}
          <div className="mt-20 bg-ink text-pure-white rounded-[40px] p-10 md:p-16 text-center space-y-6 shadow-surface-elevated">
            <span className="px-4 py-1.5 bg-volt text-ink text-xs font-extrabold rounded-full uppercase tracking-wider">
              Ooty Helpline Active
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Begin Your Visa Application?
            </h2>
            <p className="text-slate text-sm max-w-xl mx-auto">
              Speak directly to our Nilgiris case officers. Zero-cost initial consultation. All documents reviewed within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <MagneticButton
                onClick={onOpenEligibility}
                className="bg-primary-container hover:bg-primary text-pure-white font-bold px-8 py-4 rounded-pill shadow-md text-sm"
              >
                Check Eligibility Free
              </MagneticButton>
              <a
                href="tel:+919345860732"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-pure-white font-semibold px-6 py-4 rounded-pill text-sm transition-colors border border-white/20"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                +91 93458 60732
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
