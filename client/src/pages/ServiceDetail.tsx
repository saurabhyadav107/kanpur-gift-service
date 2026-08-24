import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, Star, CheckCircle2, ShieldCheck, Heart, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { useRoute, Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20am%20interested%20in%20booking%20an%20escort%20service%20in%20Kanpur.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello,%20I%20am%20interested%20in%20booking%20an%20escort%20service%20in%20Kanpur.";

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
        a: "Call or WhatsApp +91 8523045235 and specify your requirements. Luxury bookings receive dedicated handling and companions are dispatched to your Kanpur location within 45 minutes.",
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
        a: "No advance payment is required. You pay 100% cash on arrival.",
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
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={service.title} description={service.description} canonicalUrl={canonicalUrl} keywords={service.keywords} schema={serviceSchema} />
      <Header />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-6xl px-4 py-4 text-xs w-full text-[#c4bdad]" aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><Link href="/" className="hover:text-[#dfb76c] transition-colors">Home</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><Link href="/services/vip-escorts" className="hover:text-[#dfb76c] transition-colors">Companion Categories</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-[#f6f3ee] font-semibold">{service.name}</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#150f1e] via-[#0b0811] to-[#08070b] border-b border-[#282033]/60">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181220] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg">
            <Sparkles className="h-3.5 w-3.5" /> Premier Companion Category
          </div>
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase text-[#f6f3ee]" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
            {service.name} in <span className="gradient-text-gold">Kanpur &amp; Lucknow</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
            {service.content}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mt-8">
            <a href={`tel:${phoneNumber}`} className="btn-luxury-gold px-6 py-3 text-xs sm:text-sm">
              <Phone className="h-4 w-4" /> Call 1: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy px-6 py-3 text-xs sm:text-sm">
              <Phone className="h-4 w-4" /> Call 2: +91 9621326466
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald px-6 py-3 text-xs sm:text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp VIP Booking
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-grow py-14 bg-[#08070b]">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">

            {/* About */}
            <div className="card-luxury p-7">
              <h2 className="text-xl sm:text-2xl font-bold text-[#f6f3ee] uppercase mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                {service.name} Services Overview
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 text-[#c4bdad]">
                {service.content}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[#c4bdad]">
                {service.longContent}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-[#dfb76c] uppercase mb-3" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Key Highlights &amp; Standards
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#c4bdad]">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Book */}
            <div className="card-luxury p-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6f3ee] uppercase mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                How to Book — {service.name}
              </h2>
              <ol className="space-y-3.5 text-xs sm:text-sm text-[#c4bdad]">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 text-[#dfb76c] font-bold text-base" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>01</span>
                  <span>Call or WhatsApp <a href={`tel:${phoneNumber}`} className="text-[#dfb76c] font-bold hover:underline">+91 8523045235</a> and specify your interest in our {service.name} category.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 text-[#dfb76c] font-bold text-base" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>02</span>
                  <span>Share your location (area, luxury hotel, or residence) in Kanpur or Lucknow to browse current available companion profiles on WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 text-[#dfb76c] font-bold text-base" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>03</span>
                  <span>Confirm your choice. Your companion is dispatched and arrives at your suite or residence within <strong className="text-[#dfb76c]">45 minutes</strong>. Pay 100% cash on arrival.</span>
                </li>
              </ol>
            </div>

            {/* FAQ */}
            <div className="card-luxury p-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6f3ee] uppercase mb-5" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="card-luxury p-4 cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xs sm:text-sm font-bold text-[#f6f3ee] uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>{faq.q}</h3>
                      <ChevronDown className={`h-4 w-4 text-[#dfb76c] shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                    </div>
                    {openFaq === idx && (
                      <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mt-3 pt-3 border-t border-[#2d2438]">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Available areas */}
            <div className="card-luxury p-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6f3ee] uppercase mb-3" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                {service.name} Available Across All Hubs
              </h2>
              <p className="text-xs sm:text-sm mb-4 text-[#c4bdad]">
                Our {service.name.toLowerCase()} service is available with 45-minute delivery across all major Kanpur and Lucknow areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.relatedAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/kanpur/${area.slug}`}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#181220] border border-[#2d2438] text-[#c4bdad] hover:text-[#dfb76c] transition-colors"
                  >
                    → Escorts in {area.name}
                  </Link>
                ))}
                <Link
                  href="/kanpur"
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#181220] border border-[#dfb76c]/40 text-[#dfb76c] font-bold hover:underline"
                >
                  → All Kanpur Areas
                </Link>
                <Link
                  href="/lucknow"
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#181220] border border-[#dfb76c]/40 text-[#dfb76c] font-bold hover:underline"
                >
                  → All Lucknow Areas
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-luxury p-6 text-center border-[#dfb76c]/40 shadow-2xl">
              <div className="text-2xl mb-2 text-[#dfb76c]">👑</div>
              <h3 className="text-lg font-bold text-[#f6f3ee] uppercase mb-1" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Book {service.name}
              </h3>
              <p className="text-xs mb-5 text-[#c4bdad]">
                45-minute delivery in Kanpur &amp; Lucknow
              </p>
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold w-full py-3 text-xs mb-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> Call Helpline 1: 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy w-full py-3 text-xs mb-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> Call Helpline 2: 9621326466
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald w-full py-3 text-xs justify-center">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp VIP Booking
              </a>
            </div>

            <div className="card-luxury p-6">
              <h4 className="text-xs uppercase font-bold text-[#dfb76c] mb-3.5" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>Our Guarantees</h4>
              <div className="space-y-2.5 text-xs text-[#c4bdad]">
                <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-[#dfb76c]" /> 100% Private Booking</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Verified Profiles Only</div>
                <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 text-amber-400" /> 4.9★ Rated Service</div>
              </div>
            </div>

            <div className="card-luxury p-6">
              <h4 className="text-xs uppercase font-bold text-[#dfb76c] mb-3.5" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>Other Companion Categories</h4>
              <nav className="flex flex-col gap-2 text-xs text-[#c4bdad]" aria-label="Other escort services">
                <Link href="/services/vip-escorts" className="hover:text-[#dfb76c] transition-colors">• VIP Escorts</Link>
                <Link href="/services/college-models" className="hover:text-[#dfb76c] transition-colors">• College Model Escorts</Link>
                <Link href="/services/independent" className="hover:text-[#dfb76c] transition-colors">• Independent Companions</Link>
                <Link href="/services/luxury-escorts" className="hover:text-[#dfb76c] transition-colors">• Luxury 5-Star Escorts</Link>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
