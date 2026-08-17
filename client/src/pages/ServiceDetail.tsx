import { SEOHead } from "@/components/SEOHead";
import { Phone, MessageCircle, Star, CheckCircle2, ShieldCheck, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRoute } from "wouter";

const phoneNumber = "+918523045235";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20am%20interested%20in%20booking%20an%20escort%20service%20in%20Kanpur.";

interface ServiceInfo {
  name: string;
  slug: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  content: string;
  longContent: string;
  features: string[];
  faqs: { q: string; a: string }[];
  relatedAreas: { name: string; slug: string }[];
}

const servicesData: Record<string, ServiceInfo> = {
  "vip-escorts": {
    name: "VIP Escorts",
    slug: "vip-escorts",
    h1: "VIP Escorts in Kanpur — High-Class Escort Service",
    title: "VIP Escorts Kanpur | High-Class Escort Service in Kanpur | Call +91 8523045235",
    description: "VIP escorts in Kanpur — verified high-class companions for luxury hotel stays, private dinners, and exclusive appointments. Zero advance payment, 100% privacy. Call +91 8523045235.",
    keywords: "vip escorts kanpur, high class escorts kanpur, luxury escort service kanpur, escort in kanpur vip, kanpur vip escort booking",
    content: "Our VIP escorts in Kanpur represent the highest tier of companion service. Elegant, well-educated, and stunning, our VIP companions cater to discerning gentlemen seeking supreme discretion and sophisticated charm.",
    longContent: "Our VIP escort category in Kanpur is curated for clients who expect the very best. Each VIP companion is selected through a rigorous personal vetting process — assessed for presentation, communication, social fluency, and professionalism. Whether you require company for a business dinner at a five-star hotel on Mall Road, an exclusive private evening in Civil Lines, or simply a refined companion for your suite at any premium Kanpur hotel, our VIP escorts are prepared to exceed your expectations. Every booking is handled through a private, encrypted channel, and no records are retained. Your identity, location, and preference remain strictly between you and our booking team.",
    features: [
      "Individually vetted, high-class companions",
      "Available for luxury hotel visits across Kanpur",
      "Business dinner and social occasion company",
      "Superior discretion and professional etiquette",
      "Multilingual companions (English & Hindi)",
    ],
    faqs: [
      {
        q: "What makes VIP escorts in Kanpur different from standard companions?",
        a: "Our VIP escorts are selected for high social fluency, professional presentation, and exceptional communication. They are suitable for formal occasions, luxury hotel stays, and private high-profile engagements in Kanpur.",
      },
      {
        q: "Can I book a VIP escort for a hotel stay in Kanpur?",
        a: "Yes. VIP escorts are available for hotel room visits across Kanpur including Civil Lines, Mall Road, Swaroop Nagar, and other hotel zones. Call +91 8523045235 for same-day booking.",
      },
      {
        q: "Is advance payment required for VIP escorts in Kanpur?",
        a: "No advance payment is needed. You pay cash on arrival after meeting your companion at your hotel or home in Kanpur.",
      },
      {
        q: "How do I book a VIP escort service in Kanpur?",
        a: "Call or WhatsApp +91 8523045235. Mention your preference for a VIP companion, your location in Kanpur, and your preferred time. We confirm within minutes and dispatch within 45 minutes.",
      },
    ],
    relatedAreas: [
      { name: "Civil Lines", slug: "civil-lines" },
      { name: "Mall Road", slug: "mall-road" },
      { name: "Kanpur Cantt", slug: "kanpur-cantt" },
    ],
  },
  "college-models": {
    name: "College Girl Escorts",
    slug: "college-models",
    h1: "College Girl Escorts in Kanpur — Young Escort Service",
    title: "College Girl Escorts Kanpur | Young Escort Service in Kanpur | Call +91 8523045235",
    description: "College girl escorts in Kanpur — verified young companions for casual dates, party outings, and home visits. Zero advance payment, genuine profiles. Call +91 8523045235.",
    keywords: "college girl escorts kanpur, college girl escort service kanpur, escort in kanpur college girl, kanpur college girl escort, college escorts kanpur, young escorts kanpur, kanpur college companion",
    content: "Explore youthful and vibrant college model companions in Kanpur. Perfect for casual dates, party company, and fun evening outings across Swaroop Nagar, Kakadeo, and Civil Lines.",
    longContent: "Our college model escort category in Kanpur features young, energetic companions who bring a natural enthusiasm and freshness to every meeting. These companions are based in Kanpur's major residential and academic neighbourhoods — Kakadeo, Swaroop Nagar, Indiranagar — and are familiar with the city's social scene. All profiles are verified: the photographs you receive via WhatsApp are authentic, and the companion's age and details are accurately represented. Whether you are looking for a fun evening companion for a Kanpur restaurant date or a relaxed home visit, college model escorts are available 24/7 with the same 45-minute delivery guarantee that applies across all our service categories.",
    features: [
      "Youthful, energetic companions",
      "Verified profiles with genuine photos",
      "Ideal for casual dates and social outings",
      "Available in Kakadeo, Swaroop Nagar, Indiranagar & more",
      "24/7 same-day booking and delivery",
    ],
    faqs: [
      {
        q: "Are college girl escorts in Kanpur genuine and verified?",
        a: "Yes. All college girl companion profiles are personally verified. The photos you receive via WhatsApp before booking are authentic and accurately represent the companion.",
      },
      {
        q: "Where in Kanpur are college girl escorts available?",
        a: "College girl companions are available across Kanpur including Kakadeo, Swaroop Nagar, Indiranagar, Civil Lines, and all major areas. Call +91 8523045235 for current availability.",
      },
      {
        q: "Is there any advance payment for college girl escorts in Kanpur?",
        a: "No. Zero advance payment. You pay in cash directly upon arrival at your place.",
      },
      {
        q: "Can I book a college girl escort for a home visit in Kanpur?",
        a: "Yes. Home visits are available throughout Kanpur. Companions arrive within 45 minutes of booking confirmation. Call +91 8523045235.",
      },
    ],
    relatedAreas: [
      { name: "Kakadeo", slug: "kakadeo" },
      { name: "Swaroop Nagar", slug: "swaroop-nagar" },
      { name: "Indiranagar", slug: "indiranagar" },
    ],
  },
  "independent": {
    name: "Independent Escorts",
    slug: "independent",
    h1: "Independent Escorts in Kanpur — Private Companion Booking",
    title: "Independent Escorts Kanpur | Independent Escort Service in Kanpur | Call +91 8523045235",
    description: "Independent escorts in Kanpur — verified private companions for discreet home visits and hotel stays. Direct contact, zero advance payment, 100% privacy. Call +91 8523045235.",
    keywords: "independent escorts in kanpur, independent escort service kanpur, kanpur independent escorts, independent escort kanpur, private escort kanpur",
    content: "Connect with verified independent companions in Kanpur. Enjoy quality time with mature, caring, and professional companions available for private home and hotel appointments.",
    longContent: "Our independent escort category in Kanpur is ideal for those who prefer a more natural, unhurried companionship experience. Independent companions bring warmth, maturity, and genuine personality to every meeting — traits that distinguish them from the agency model. Each independent companion listed with us has been personally verified for authenticity, safety, and professionalism. They are based across Kanpur's residential neighbourhoods and are accustomed to private, discreet home visits. If privacy and a genuine personal connection are your priorities, our independent escorts in Kanpur are the ideal choice. Bookings are managed through our secure channel, and companion contact details are shared only after booking confirmation.",
    features: [
      "Verified independent companions in Kanpur",
      "Mature, genuine, and professionally managed",
      "Private home visits and hotel stay bookings",
      "Direct contact after booking confirmation",
      "Absolute discretion — no records kept",
    ],
    faqs: [
      {
        q: "What is an independent escort service in Kanpur?",
        a: "Independent escorts are companions who work privately rather than under an agency structure. Our platform verifies and facilitates bookings for genuine independent companions across Kanpur with full privacy protection.",
      },
      {
        q: "Are independent escorts in Kanpur safe to book?",
        a: "Yes. All independent companions listed with us are personally vetted for safety and authenticity. Bookings are managed through our secure, confidential channel.",
      },
      {
        q: "Do independent escorts require advance payment?",
        a: "No advance payment is needed. Pay only on arrival after meeting your independent companion.",
      },
      {
        q: "Can I get a home visit from an independent escort in Kanpur?",
        a: "Yes. Independent escorts are available for private home visits across Kanpur. Call +91 8523045235 or WhatsApp for availability and immediate booking.",
      },
    ],
    relatedAreas: [
      { name: "Govind Nagar", slug: "govind-nagar" },
      { name: "Kidwai Nagar", slug: "kidwai-nagar" },
      { name: "Rawatpur", slug: "rawatpur" },
    ],
  },
  "luxury-escorts": {
    name: "Luxury Escorts",
    slug: "luxury-escorts",
    h1: "Luxury Escorts in Kanpur — Premium Escort Service",
    title: "Luxury Escorts Kanpur | Premium Escort Service in Kanpur | Call +91 8523045235",
    description: "Luxury escorts in Kanpur — supermodel-class companions for premium hotel visits, exclusive private events, and VIP client entertainment. Zero advance payment. Call +91 8523045235.",
    keywords: "luxury escorts kanpur, premium escort service kanpur, luxury escort kanpur, top escorts kanpur, elite escort service kanpur, escort service in kanpur luxury",
    content: "Indulge in Kanpur's finest luxury escort services. Exceptional beauty, aristocratic charm, and total discretion guaranteed for elite clients and luxury hotel visits across Kanpur.",
    longContent: "Our luxury escort category represents the absolute pinnacle of companion service in Kanpur. These are supermodel-class companions — exceptional in appearance, polished in manner, and experienced in serving the most discerning clientele. Luxury escort bookings are handled with an elevated level of care: comprehensive briefing, preference-matching, and a strict no-disclosure protocol. Whether the occasion is a corporate hospitality event, a private suite at Kanpur's top hotel, or an exclusive social gathering, luxury escorts arrive impeccably presented and conduct themselves with complete professionalism. For clients who will accept nothing but the finest, our luxury escort service in Kanpur is unmatched.",
    features: [
      "Supermodel-class companions in Kanpur",
      "Ideal for luxury hotel suites and private events",
      "Corporate hospitality and VIP entertainment",
      "Highest level of discretion and professionalism",
      "Pre-screened, elite profile selection",
    ],
    faqs: [
      {
        q: "What defines luxury escorts in Kanpur compared to VIP escorts?",
        a: "Luxury escorts represent the absolute top tier — supermodel-class companions with exceptional social presence, suitable for high-profile private events and ultra-luxury hotel stays in Kanpur.",
      },
      {
        q: "Can luxury escorts in Kanpur be booked for corporate events?",
        a: "Yes. Our luxury companion service is appropriate for corporate entertainment, private dinners, and social events. Complete discretion is guaranteed. Call +91 8523045235.",
      },
      {
        q: "Is advance payment required for luxury escorts in Kanpur?",
        a: "No advance deposit or registration fee is required. We maintain a strict cash-on-delivery / pay-on-arrival policy.",
      },
      {
        q: "How do I book a luxury escort in Kanpur?",
        a: "Call or WhatsApp +91 8523045235 and specify your requirements. Luxury bookings receive dedicated handling and companions are dispatched to your Kanpur location within the agreed timeframe.",
      },
    ],
    relatedAreas: [
      { name: "Civil Lines", slug: "civil-lines" },
      { name: "Mall Road", slug: "mall-road" },
      { name: "Kanpur Cantt", slug: "kanpur-cantt" },
    ],
  },
};

export default function ServiceDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";
  const service = servicesData[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    slug: slug,
    h1: `Escort Service in Kanpur — ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
    title: `Escort Service in Kanpur | ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | Call +91 8523045235`,
    description: `Verified escort service in Kanpur. Genuine companion profiles, direct phone number +91 8523045235, zero advance payment, and 24/7 discreet home & hotel delivery.`,
    keywords: `escort service kanpur, escorts in kanpur, kanpur escort`,
    content: `Experience premier escort companion services in Kanpur with 100% verified profiles and instant appointment delivery.`,
    longContent: `Our escort service in Kanpur provides verified companions for home and hotel visits across all major areas. Call +91 8523045235 for immediate booking.`,
    features: ["Verified profiles", "100% privacy", "24/7 availability", "45-minute delivery"],
    faqs: [
      {
        q: "How do I book this escort service in Kanpur?",
        a: "Call or WhatsApp +91 8523045235. We confirm and dispatch within 45 minutes across Kanpur.",
      },
      {
        q: "Is advance payment required?",
        a: "No advance payment is required. You pay cash on arrival.",
      },
    ],
    relatedAreas: [
      { name: "Civil Lines", slug: "civil-lines" },
      { name: "Swaroop Nagar", slug: "swaroop-nagar" },
    ],
  };

  const canonicalUrl = `https://joya.kanpureliteservice.com/services/${service.slug}`;

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.h1,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Kanpur Escorts — Escort Service in Kanpur",
        "telephone": "+91-8523045235",
        "url": "https://joya.kanpureliteservice.com/",
      },
      "areaServed": { "@type": "City", "name": "Kanpur", "sameAs": "https://en.wikipedia.org/wiki/Kanpur" },
      "description": service.description,
      "url": canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joya.kanpureliteservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Escort Services Kanpur", "item": "https://joya.kanpureliteservice.com/#profiles" },
        { "@type": "ListItem", "position": 3, "name": service.name, "item": canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ];


  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={service.title} description={service.description} canonicalUrl={canonicalUrl} keywords={service.keywords} schema={serviceSchema} />

      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            <a href="/" className="flex items-center gap-3">
              <span className="text-lg font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                KANPUR <span className="gradient-text-pink">ESCORTS</span>
              </span>
            </a>
            <div className="flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-xs px-4 py-2">
                <Phone className="h-3.5 w-3.5" /> Call 8523045235
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-5xl px-4 py-3 text-xs w-full" style={{ color: "#d4aab3" }} aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><a href="/" className="hover:text-pink-400">Home</a></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><a href="/#profiles" className="hover:text-pink-400">Escort Services</a></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-white">{service.name}</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            {service.h1}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "#c2929a" }}>
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <a href={`tel:${phoneNumber}`} className="btn-primary px-6 py-3 text-sm">
              <Phone className="h-4 w-4" /> Call: +91 8523045235
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp px-6 py-3 text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp for Profiles
            </a>
          </div>
        </div>
      </section>

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="md:col-span-2 space-y-6">

            {/* About */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-xl font-bold text-white uppercase mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                {service.name} in Kanpur
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
                {service.content}
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#d4aab3" }}>
                {service.longContent}
              </p>
              <h3 className="text-base font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                What You Get
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#c2929a" }}>
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Book */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-lg font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                How to Book — {service.name} in Kanpur
              </h2>
              <ol className="space-y-3 text-sm" style={{ color: "#d4aab3" }}>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-pink-500 font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>01</span>
                  <span>Call or WhatsApp <strong style={{ color: "#e91e73" }}>+91 8523045235</strong> and tell us you want a {service.name} booking in Kanpur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-pink-500 font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>02</span>
                  <span>Share your location (area, hotel name, or neighbourhood) in Kanpur. Browse available companion profiles sent via WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-pink-500 font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>03</span>
                  <span>Confirm your selection. A companion is dispatched and arrives at your Kanpur location within <strong>45 minutes to 1 hour</strong>.</span>
                </li>
              </ol>
            </div>

            {/* FAQ */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-lg font-bold text-white uppercase mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="faq-item">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4"
                      style={{ color: openFaq === idx ? "#e91e73" : "#f5e6ea" }}
                      aria-expanded={openFaq === idx}
                    >
                      <span className="text-sm font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>{faq.q}</span>
                      <ChevronDown
                        className="h-4 w-4 flex-shrink-0 transition-transform duration-300"
                        style={{ color: "#e91e73", transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-sm leading-relaxed" style={{ color: "#d4aab3", borderTop: "1px solid #3d1018", paddingTop: "0.75rem" }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Available areas */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-lg font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                {service.name} Available In
              </h2>
              <p className="text-sm mb-4" style={{ color: "#d4aab3" }}>
                Our {service.name.toLowerCase()} service is available across all major Kanpur areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.relatedAreas.map((area) => (
                  <a
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="text-xs px-3 py-1.5 rounded hover:text-pink-400 transition-colors"
                    style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#c2929a" }}
                  >
                    → Escorts in {area.name}
                  </a>
                ))}
                <a
                  href="/#areas"
                  className="text-xs px-3 py-1.5 rounded hover:text-pink-400 transition-colors"
                  style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#e91e73" }}
                >
                  → All Kanpur Areas
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-5 rounded text-center" style={{ background: "#140509", border: "1px solid #e91e73" }}>
              <Heart className="h-8 w-8 mx-auto mb-2 text-pink-500" fill="currentColor" />
              <h3 className="text-lg font-bold text-white uppercase mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                Book Now
              </h3>
              <p className="text-xs mb-4" style={{ color: "#d4aab3" }}>
                45-minute delivery across Kanpur
              </p>
              <a href={`tel:${phoneNumber}`} className="btn-primary w-full py-3 text-xs mb-2">
                <Phone className="h-3.5 w-3.5" /> Call: 8523045235
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp w-full py-3 text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Booking
              </a>
            </div>

            <div className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h4 className="text-xs uppercase font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Our Guarantees</h4>
              <div className="space-y-2 text-xs" style={{ color: "#d4aab3" }}>
                <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-pink-500" /> 100% Private Booking</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-400" /> Verified Profiles Only</div>
                <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 text-yellow-400" /> 4.9★ Rated Service</div>
              </div>
            </div>

            <div className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h4 className="text-xs uppercase font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Other Escort Services</h4>
              <nav className="flex flex-col gap-1.5 text-xs" style={{ color: "#d4aab3" }} aria-label="Other escort services">
                <a href="/services/vip-escorts" className="hover:text-pink-400">VIP Escorts Kanpur</a>
                <a href="/services/college-models" className="hover:text-pink-400">College Model Escorts</a>
                <a href="/services/independent" className="hover:text-pink-400">Independent Escorts Kanpur</a>
                <a href="/services/luxury-escorts" className="hover:text-pink-400">Luxury Escorts Kanpur</a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs" style={{ background: "#0a0306", borderTop: "1px solid #3d1018", color: "#d4aab3" }}>
        © {new Date().getFullYear()} Kanpur Escorts — {service.name} in Kanpur. All rights reserved.
      </footer>
    </div>
  );
}
