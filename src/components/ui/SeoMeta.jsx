import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SeoMeta({
  title = "Yovia Visa Services — Premier Global Mobility & Tour Advisory",
  description = "Institutional, high-trust visa consulting and luxury travel advisory. Fast Schengen, US, UK, Canada, & Asia visa processing from our flagship Ooty office.",
  canonicalUrl = "https://yoviavisaservices.com",
  ogImage = "https://lh3.googleusercontent.com/aida/AEtjO1UmyJmuid58_YX0-wjKbgFdht4Zp93zWuZS-_z_EN3k73R-o8216w-nt0X4Np_48w9-Axw1nZR_xZTBvHF1TVFxSiPjyTbhLWEwdXHiOrqIkiq6i_w3bSTJm6G5_eRvHgRk98QsaPP1L7_AZ8EBJNwBZuEU_JQKG_c3D8L2NXGmSQ2FhIFq2KD6DUeUNpQCh4fPf8oxZOgpq2kfzaNOg-fN40LE0BBFpOARPF6ZqolfLVvaY7MGhmbVFg",
  schemaJson = null
}) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yovia Visa Services",
    "image": ogImage,
    "url": canonicalUrl,
    "telephone": "+91 94431 00000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Commercial Road, Near Charing Cross",
      "addressLocality": "Ooty",
      "addressRegion": "Tamil Nadu",
      "postalCode": "643001",
      "addressCountry": "IN"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Yovia Visa Services" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaJson || defaultSchema)}
      </script>
    </Helmet>
  );
}
