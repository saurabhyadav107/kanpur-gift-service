import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { Phone, MessageCircle, MapPin, Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle2, Star, Crown, ChevronDown } from "lucide-react";
import { Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion.";

const featuredModels: Profile[] = [
  {
    id: 301,
    name: "Aarohi",
    age: 22,
    category: "VIP",
    image: "/images/301.jpg",
    alt: "Aarohi - VIP Call Girl in Civil Lines Kanpur",
    location: "Civil Lines",
    rating: 5.0,
    reviewsCount: 142,
    height: "5'6\"",
    languages: ["Hindi", "English"],
    bio: "VIP PREMIUM ESCORT AGENCY SERVICE IN CIVIL LINES KANPUR ❣️ 100% GENUINE & SAFE SERVICE WITH CLEAN HYGIENIC ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: A-Level 5-Star VIP Escort ◾ S-GFE (Special Girlfriend Experience) ◾ Hotel Suite Outcall ◾ 100% Cash On Arrival.",
    tags: ["VIP Escort", "Civil Lines", "Incall/Outcall", "GFE"],
    city: "Kanpur"
  },
  {
    id: 401,
    name: "Priya",
    age: 23,
    category: "VIP",
    image: "/images/lucknow-401.jpg",
    alt: "Priya - VIP Call Girl in Gomti Nagar Lucknow",
    location: "Gomti Nagar",
    rating: 5.0,
    reviewsCount: 156,
    height: "5'5\"",
    languages: ["Hindi", "English"],
    bio: "VIP PREMIUM ESCORT AGENCY SERVICE IN GOMTI NAGAR LUCKNOW ❣️ 100% GENUINE SERVICE WITH GOOD & SAFE HYGIENIC HOTEL ROOM ACCOMMODATION NEAR HYATT REGENCY. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: A-Level 5-Star VIP Call Girl ◾ S-GFE ◾ Hotel Suite Outcall ◾ 100% Cash On Arrival.",
    tags: ["VIP Call Girl", "Gomti Nagar", "Incall/Outcall", "S-GFE"],
    city: "Lucknow"
  },
  {
    id: 305,
    name: "Tanya",
    age: 21,
    category: "Luxury Escort",
    image: "/images/305.jpg",
    alt: "Tanya - Luxury Escort on Mall Road Kanpur",
    location: "Mall Road",
    rating: 5.0,
    reviewsCount: 164,
    height: "5'7\"",
    languages: ["English", "Hindi"],
    bio: "LUXURY 5-STAR ESCORT AGENCY SERVICE ON MALL ROAD KANPUR 👑 HIGH-CLASS SUPERMODEL COMPANION FOR EXECUTIVE GENTLEMEN. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Supermodel VIP Escort ◾ S-GFE ◾ Luxury Hotel Suite Delivery ◾ 100% Cash On Arrival.",
    tags: ["Luxury Escort", "Mall Road", "5-Star Service", "VIP Outcall"],
    city: "Kanpur"
  },
  {
    id: 402,
    name: "Aanya",
    age: 24,
    category: "Independent",
    image: "/images/lucknow-402.jpg",
    alt: "Aanya - Independent Escort in Hazratganj Lucknow",
    location: "Hazratganj",
    rating: 4.9,
    reviewsCount: 132,
    height: "5'6\"",
    languages: ["Hindi", "English"],
    bio: "INDEPENDENT VIP ESCORT SERVICE IN HAZRATGANJ LUCKNOW 🔥 100% PRIVATE DIRECT BOOKING NEAR TAJ HOTEL. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: Independent Call Girl ◾ GFE Companion ◾ Outcall Hotel Delivery ◾ 100% Cash On Arrival.",
    tags: ["Independent Escort", "Hazratganj", "Taj Hotel Outcall", "Incall/Outcall"],
    city: "Lucknow"
  },
  {
    id: 302,
    name: "Riya",
    age: 23,
    category: "College Model",
    image: "/images/302.jpg",
    alt: "Riya - College Model Escort in Swaroop Nagar Kanpur",
    location: "Swaroop Nagar",
    rating: 4.9,
    reviewsCount: 118,
    height: "5'4\"",
    languages: ["Hindi", "English"],
    bio: "COLLEGE MODEL ESCORT SERVICE IN SWAROOP NAGAR KANPUR 🔥 100% REAL & VERIFIED COMPANION. AVAILABLE 24/7 INCALL & OUTCALL BOTH WITH 45-MIN FAST DELIVERY. • SERVICES: Young College Companion ◾ S-GFE ◾ Cozy Hotel Dates ◾ 100% Discretion.",
    tags: ["College Model", "Swaroop Nagar", "Incall/Outcall", "Verified"],
    city: "Kanpur"
  },
  {
    id: 304,
    name: "Simran",
    age: 24,
    category: "Independent",
    image: "/images/304.jpg",
    alt: "Simran - Independent Escort in Kakadeo Kanpur",
    location: "Kakadeo",
    rating: 4.9,
    reviewsCount: 96,
    height: "5'5\"",
    languages: ["Hindi", "English"],
    bio: "INDEPENDENT VIP ESCORT SERVICE IN KAKADEO KANPUR ❣️ 100% PRIVATE DIRECT BOOKING WITH ZERO ADVANCE DEPOSIT. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: Independent Companion ◾ GFE Experience ◾ Private Home Visit ◾ Safe Hygienic Environment.",
    tags: ["Independent Escort", "Kakadeo", "Direct Booking", "Incall/Outcall"],
    city: "Kanpur"
  }
];

const homeFaqs = [
  {
    q: "How can I book an escort or companion service in Kanpur or Lucknow?",
    a: "Booking with Joya Elite is fast, discreet, and simple. Call our 24/7 concierge helplines at +91 8523045235 or +91 9621326466, or send a direct WhatsApp message. Specify your city (Kanpur or Lucknow), preferred locality or hotel, and companion category. We confirm dispatch within minutes and your companion arrives within 45 minutes."
  },
  {
    q: "Is any advance deposit or online registration required?",
    a: "No. We enforce a strict 100% Cash on Arrival policy. You never pay any advance deposit, card swipe, or registration fee before meeting your verified companion in person."
  },
  {
    q: "What areas in Kanpur and Lucknow do you cover?",
    a: "In Kanpur, we cover Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Rawatpur, Mall Road, Shyam Nagar, Saket Nagar, Kanpur Cantt, and Barra. In Lucknow, we cover Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, Gomti Nagar Extension, Mahanagar, and Amausi Airport."
  },
  {
    q: "How fast is companion outcall delivery to hotels or homes?",
    a: "Our companions typically arrive within 35 to 45 minutes of booking confirmation across all major sectors and hotel zones in both Kanpur and Lucknow."
  },
  {
    q: "Are the companion profile photos authentic and verified?",
    a: "Yes, 100%. All profiles featured on Joya Elite are personally verified with real photo sessions. The companion you select on WhatsApp is the exact person who arrives at your doorstep."
  },
  {
    q: "How is my privacy and discretion maintained?",
    a: "We maintain zero permanent customer records, use end-to-end encrypted messaging, and all companions arrive in stylish, discreet civilian attire without attracting unwanted attention."
  }
];

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const homeTitle = "Kanpur Escorts & Lucknow Escorts | Premier Escort Service Kanpur Lucknow | Call +91 8523045235";
  const homeDesc = "Premier Kanpur Escorts & Lucknow Escorts directory. Verified call girls, VIP companions & independent models in Kanpur & Lucknow with 100% Cash on Arrival, zero advance deposit, and express 45-minute hotel delivery. Call +91 8523045235 / +91 9621326466.";
  const homeKeywords = "kanpur escorts, lucknow escorts, escort in kanpur, escort in lucknow, kanpur call girls, lucknow call girls, escort service kanpur, escort service lucknow, kanpur vip escorts, lucknow vip escorts, independent call girl kanpur, independent call girl lucknow, cash on arrival escort kanpur";

  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://joya.kanpureliteservice.com/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={homeTitle} description={homeDesc} canonicalUrl="https://joya.kanpureliteservice.com/" keywords={homeKeywords} schema={homeSchema} />
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-24 pb-28 overflow-hidden border-b border-[#282033]/60">
        {/* Ambient lighting effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#881337]/25 via-[#dfb76c]/10 to-transparent blur-[120px]" />
          <div className="absolute -top-20 left-10 w-96 h-96 bg-[#c59739]/10 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#881337]/15 rounded-full blur-[110px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 bg-[#181220]/90 border border-[#dfb76c]/40 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#dfb76c] font-bold tracking-wider uppercase">
              #1 VERIFIED COMPANION DIRECTORY • KANPUR &amp; LUCKNOW
            </span>
          </div>
          
          {/* Main H1 */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#f6f3ee] mb-6 leading-tight tracking-wide max-w-5xl mx-auto"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Kanpur Escorts &amp; <span className="gradient-text-gold">Lucknow Escorts</span> <span className="block text-2xl sm:text-4xl mt-2 font-normal text-[#e4decb]">Premier VIP Companion Service</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-10 leading-relaxed text-[#c4bdad]">
            Experience luxury companionship across Kanpur &amp; Lucknow with high-class verified models, independent companions, and 5-star VIP escorts. Guaranteed <strong className="text-[#dfb76c]">100% Cash on Arrival</strong> with zero advance payment and express <strong className="text-[#dfb76c]">45-minute hotel suite delivery</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a href="/kanpur" className="btn-luxury-gold text-sm px-7 py-3.5 shadow-2xl">
              Explore Kanpur Hub →
            </a>
            <a href="/lucknow" className="btn-luxury-burgundy text-sm px-7 py-3.5 shadow-2xl">
              Explore Lucknow Hub →
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-sm px-7 py-3.5 shadow-2xl">
              <MessageCircle className="h-4 w-4" /> VIP WhatsApp Booking
            </a>
          </div>

          {/* 4 Trust Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-[#130e1a]/80 border border-[#2d2438] backdrop-blur-md">
              <div className="text-xl mb-1 text-[#dfb76c]">💵</div>
              <div className="text-xs font-bold uppercase text-[#f6f3ee]">100% Cash On Arrival</div>
              <div className="text-[11px] text-[#a89f8f]">Zero advance or fees</div>
            </div>
            <div className="p-4 rounded-xl bg-[#130e1a]/80 border border-[#2d2438] backdrop-blur-md">
              <div className="text-xl mb-1 text-[#dfb76c]">⚡</div>
              <div className="text-xs font-bold uppercase text-[#f6f3ee]">45-Min Express Arrival</div>
              <div className="text-[11px] text-[#a89f8f]">Doorstep &amp; hotel delivery</div>
            </div>
            <div className="p-4 rounded-xl bg-[#130e1a]/80 border border-[#2d2438] backdrop-blur-md">
              <div className="text-xl mb-1 text-[#dfb76c]">✅</div>
              <div className="text-xs font-bold uppercase text-[#f6f3ee]">100% Verified Profiles</div>
              <div className="text-[11px] text-[#a89f8f]">Genuine recent photos</div>
            </div>
            <div className="p-4 rounded-xl bg-[#130e1a]/80 border border-[#2d2438] backdrop-blur-md">
              <div className="text-xl mb-1 text-[#dfb76c]">🔒</div>
              <div className="text-xs font-bold uppercase text-[#f6f3ee]">Ironclad Discretion</div>
              <div className="text-[11px] text-[#a89f8f]">Total privacy protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITY FLAGSHIP PORTALS SHOWCASE ─── */}
      <section className="py-16 bg-[#0c0911] border-b border-[#282033]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
              Flagship Regional Portals
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee]"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Select Your <span className="gradient-text-gold">City of Choice</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kanpur Flagship Card */}
            <div className="card-luxury p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#dfb76c]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <span className="badge-vip">Kanpur Destination Hub</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Active 24/7
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase text-[#f6f3ee] mb-3"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Kanpur Escorts <span className="gradient-text-gold">Hub</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#c4bdad] mb-6 leading-relaxed">
                Covering Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar, Mall Road, Kidwai Nagar, Rawatpur, and Kanpur Cantt. Express 45-minute hotel suite and residence outcall.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-[11px] text-[#a89f8f]">
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Civil Lines</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Swaroop Nagar</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Kakadeo</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Mall Road</span>
              </div>
              <Link href="/kanpur" className="btn-luxury-gold text-xs px-5 py-2.5 w-full sm:w-auto text-center justify-center">
                Explore Kanpur Escorts Portal (/kanpur) →
              </Link>
            </div>

            {/* Lucknow Flagship Card */}
            <div className="card-luxury p-8 relative overflow-hidden group border-[#dfb76c]/30">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#881337]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <span className="badge-vip bg-[#881337]/30 border-[#881337]/50 text-pink-200">Lucknow Flagship Hub</span>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-[#c59739] text-[#08070b]">
                  NEW EXPANSION
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase text-[#f6f3ee] mb-3"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Lucknow Escorts <span className="gradient-text-gold">Hub</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#c4bdad] mb-6 leading-relaxed">
                Covering Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, Gomti Nagar Extension, and Mahanagar. Premier high-class 5-star companions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-[11px] text-[#a89f8f]">
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Gomti Nagar</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Hazratganj</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Indira Nagar</span>
                <span className="px-2.5 py-1 rounded bg-[#1c1524] border border-[#2d2438]">• Shaheed Path</span>
              </div>
              <Link href="/lucknow" className="btn-luxury-burgundy text-xs px-5 py-2.5 w-full sm:w-auto text-center justify-center">
                Explore Lucknow Escorts Portal (/lucknow) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED COMPANIONS SHOWCASE ─── */}
      <main className="flex-grow py-20 bg-[#08070b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
              Curated Selection
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee] mb-3"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Featured <span className="gradient-text-gold">VIP Companions</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#c4bdad] max-w-2xl mx-auto">
              Handpicked genuine profiles available for same-day booking in Kanpur and Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredModels.map((p) => (
              <article 
                key={p.id} 
                className="card-luxury overflow-hidden cursor-pointer group flex flex-col justify-between"
                onClick={() => setSelectedProfile(p)}
              >
                <div>
                  {/* Top Shimmer Border Accent */}
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="relative overflow-hidden" style={{ height: "320px" }}>
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a13] via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-3.5 left-3.5 flex gap-2">
                      <span className="badge-vip shadow-lg backdrop-blur-md">
                        <Crown className="h-3 w-3 inline text-[#dfb76c]" /> {p.category}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 45-Min Outcall
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1 text-xs font-semibold text-[#f6f3ee]">
                      <MapPin className="h-3.5 w-3.5 text-[#dfb76c]" /> {p.location}, {p.city}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="text-[#f6f3ee] font-bold text-xl uppercase tracking-wide"
                        style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                      >
                        {p.name}, <span className="gradient-text-gold">{p.age}</span>
                      </h3>
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {p.rating}
                      </span>
                    </div>

                    <p className="text-xs line-clamp-2 my-2.5 leading-relaxed text-[#c4bdad]">
                      {p.bio}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-[#2d2438] flex items-center justify-between text-xs">
                  <span className="text-[#dfb76c] text-[11px] font-semibold">100% Pay On Arrival</span>
                  <span className="text-[#dfb76c] font-bold group-hover:text-[#faebd7] flex items-center gap-1 transition-colors">
                    View Profile <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link href="/profiles" className="btn-luxury-outline text-xs px-8 py-3.5 shadow-xl">
              View All Verified Models Directory ({featuredModels.length}+ Available) →
            </Link>
          </div>

          {/* ─── 4 CATEGORY SHOWCASE ─── */}
          <section className="mt-24 pt-16 border-t border-[#282033]/60">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
                Exclusive Tiers
              </span>
              <h3
                className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee]"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Companion Categories in <span className="gradient-text-gold">Kanpur &amp; Lucknow</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-3 text-[#dfb76c]">👑</div>
                  <h4 className="text-base font-bold text-[#dfb76c] mb-2 uppercase" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                    1. VIP Escorts
                  </h4>
                  <p className="text-xs leading-relaxed text-[#c4bdad]">
                    Supermodel-class companions for luxury hotel suite visits, executive dinners, and corporate events across Mall Road, Civil Lines, and Gomti Nagar.
                  </p>
                </div>
                <Link href="/services/vip-escorts" className="inline-flex items-center gap-1 text-xs font-bold text-[#dfb76c] hover:underline mt-4">
                  Explore VIP Escorts <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-3 text-[#dfb76c]">🎓</div>
                  <h4 className="text-base font-bold text-[#dfb76c] mb-2 uppercase" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                    2. College Model Escorts
                  </h4>
                  <p className="text-xs leading-relaxed text-[#c4bdad]">
                    Youthful, charming, and energetic companions in Swaroop Nagar, Kakadeo, Indira Nagar, and Hazratganj. Perfect for dinner dates and casual outings.
                  </p>
                </div>
                <Link href="/services/college-models" className="inline-flex items-center gap-1 text-xs font-bold text-[#dfb76c] hover:underline mt-4">
                  Explore College Models <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-3 text-[#dfb76c]">💎</div>
                  <h4 className="text-base font-bold text-[#dfb76c] mb-2 uppercase" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                    3. Independent Escorts
                  </h4>
                  <p className="text-xs leading-relaxed text-[#c4bdad]">
                    Warm, mature, and caring independent companions offering unhurried romantic companionship across Kidwai Nagar, Govind Nagar, and Aliganj.
                  </p>
                </div>
                <Link href="/services/independent" className="inline-flex items-center gap-1 text-xs font-bold text-[#dfb76c] hover:underline mt-4">
                  Explore Independent <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-3 text-[#dfb76c]">⭐</div>
                  <h4 className="text-base font-bold text-[#dfb76c] mb-2 uppercase" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                    4. Luxury 5-Star Escorts
                  </h4>
                  <p className="text-xs leading-relaxed text-[#c4bdad]">
                    High-profile companions for elite gentlemen visiting luxury hotels like Landmark Kanpur, Hyatt Regency Gomti Nagar, and Taj Hazratganj.
                  </p>
                </div>
                <Link href="/services/luxury-escorts" className="inline-flex items-center gap-1 text-xs font-bold text-[#dfb76c] hover:underline mt-4">
                  Explore Luxury Escorts <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* ─── COMPLETE LOCALITY SITEMAP MATRIX ─── */}
          <section className="mt-20 p-8 rounded-2xl bg-[#0e0a14] border border-[#2d2438]">
            <div className="text-center mb-8">
              <h3
                className="text-xl sm:text-3xl font-bold uppercase text-[#f6f3ee] mb-2"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Comprehensive Locality Coverage — <span className="gradient-text-gold">Kanpur &amp; Lucknow</span>
              </h3>
              <p className="text-xs text-[#a89f8f]">
                Express 45-minute companion outcall delivery is guaranteed across all key residential sectors and luxury hotel corridors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kanpur Localities */}
              <div className="p-6 rounded-xl bg-[#140f1c] border border-[#2d2438]">
                <h4 className="text-sm font-bold text-[#dfb76c] uppercase mb-4 flex items-center gap-2" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
                  <MapPin className="h-4 w-4" /> Kanpur Service Localities (/kanpur)
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-[#c4bdad]">
                  <Link href="/kanpur/civil-lines" className="hover:text-[#dfb76c] transition-colors">• Civil Lines Escorts</Link>
                  <Link href="/kanpur/swaroop-nagar" className="hover:text-[#dfb76c] transition-colors">• Swaroop Nagar Call Girls</Link>
                  <Link href="/kanpur/govind-nagar" className="hover:text-[#dfb76c] transition-colors">• Govind Nagar Escorts</Link>
                  <Link href="/kanpur/kidwai-nagar" className="hover:text-[#dfb76c] transition-colors">• Kidwai Nagar Call Girls</Link>
                  <Link href="/kanpur/kakadeo" className="hover:text-[#dfb76c] transition-colors">• Kakadeo Escort Service</Link>
                  <Link href="/kanpur/rawatpur" className="hover:text-[#dfb76c] transition-colors">• Rawatpur Call Girls</Link>
                  <Link href="/kanpur/mall-road" className="hover:text-[#dfb76c] transition-colors">• Mall Road Escorts</Link>
                  <Link href="/kanpur/kanpur-cantt" className="hover:text-[#dfb76c] transition-colors">• Kanpur Cantt Escorts</Link>
                  <Link href="/kanpur/barra" className="hover:text-[#dfb76c] transition-colors">• Barra Escort Service</Link>
                  <Link href="/kanpur/shyam-nagar" className="hover:text-[#dfb76c] transition-colors">• Shyam Nagar Escorts</Link>
                </div>
              </div>

              {/* Lucknow Localities */}
              <div className="p-6 rounded-xl bg-[#140f1c] border border-[#2d2438]">
                <h4 className="text-sm font-bold text-[#dfb76c] uppercase mb-4 flex items-center gap-2" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
                  <MapPin className="h-4 w-4" /> Lucknow Service Localities (/lucknow)
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-[#c4bdad]">
                  <Link href="/lucknow/gomti-nagar" className="hover:text-[#dfb76c] transition-colors">• Gomti Nagar Escorts</Link>
                  <Link href="/lucknow/hazratganj" className="hover:text-[#dfb76c] transition-colors">• Hazratganj Call Girls</Link>
                  <Link href="/lucknow/indira-nagar" className="hover:text-[#dfb76c] transition-colors">• Indira Nagar Escorts</Link>
                  <Link href="/lucknow/aliganj" className="hover:text-[#dfb76c] transition-colors">• Aliganj Call Girls</Link>
                  <Link href="/lucknow/alambagh" className="hover:text-[#dfb76c] transition-colors">• Alambagh Escort Service</Link>
                  <Link href="/lucknow/shaheed-path" className="hover:text-[#dfb76c] transition-colors">• Shaheed Path Escorts</Link>
                  <Link href="/lucknow/gomti-nagar-extension" className="hover:text-[#dfb76c] transition-colors">• Gomti Nagar Ext Escorts</Link>
                  <Link href="/lucknow/mahanagar" className="hover:text-[#dfb76c] transition-colors">• Mahanagar Call Girls</Link>
                  <Link href="/lucknow/amausi-airport" className="hover:text-[#dfb76c] transition-colors">• Amausi Airport Escorts</Link>
                </div>
              </div>
            </div>
          </section>

          {/* ─── CLIENT REVIEWS ─── */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
                Real Client Feedback
              </span>
              <h3
                className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee]"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Verified <span className="gradient-text-gold">Testimonials</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-xs leading-relaxed text-[#c4bdad] mb-4">
                    "Booked Aarohi for a suite stay near Mall Road Kanpur. She arrived in exactly 35 minutes, verified photos, impeccably groomed, and zero advance deposit asked. Joya Elite is true luxury."
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2d2438] flex items-center justify-between text-xs text-[#a89f8f]">
                  <span className="font-bold text-[#f6f3ee]">Vikram R.</span>
                  <span>Kanpur (Civil Lines)</span>
                </div>
              </div>

              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-xs leading-relaxed text-[#c4bdad] mb-4">
                    "Used their Lucknow service for Gomti Nagar near Hyatt Regency. Priya was stunning, polite, and very articulate. The entire process was smooth, private, and 100% cash on arrival."
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2d2438] flex items-center justify-between text-xs text-[#a89f8f]">
                  <span className="font-bold text-[#f6f3ee]">Anand M.</span>
                  <span>Lucknow (Gomti Nagar)</span>
                </div>
              </div>

              <div className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-xs leading-relaxed text-[#c4bdad] mb-4">
                    "Called Helpline 2 (9621326466), received profile previews on WhatsApp, and companion arrived in plain civilian attire within 40 minutes at Swaroop Nagar. Best escort service in UP."
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2d2438] flex items-center justify-between text-xs text-[#a89f8f]">
                  <span className="font-bold text-[#f6f3ee]">Siddharth K.</span>
                  <span>Kanpur (Swaroop Nagar)</span>
                </div>
              </div>
            </div>
          </section>

          {/* ─── RICH EDITORIAL SEO ARTICLE ─── */}
          <section className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#0c0911] border border-[#2d2438] text-left space-y-8">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase text-[#f6f3ee] mb-4"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Kanpur Escorts &amp; Lucknow Escorts — <span className="gradient-text-gold">#1 Premier Companion Service</span>
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mb-4">
                Welcome to <strong>Joya Elite</strong>, North India's foremost directory for verified <strong>Kanpur Escorts</strong> and <strong>Lucknow Escorts</strong>. We provide authentic, high-class call girls, VIP companions, independent models, and college student escorts available 24 hours a day across Kanpur and Lucknow. Whether you are staying at a 5-star hotel on Mall Road Kanpur or attending executive business conferences near Gomti Nagar Lucknow, our escort agency guarantees 100% privacy, zero advance fees, and express 45-minute hotel room delivery.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
                Our business model prioritizes client safety, hygienic clean accommodation, direct companion contact, and flexible 24/7 Incall and Outcall bookings. You never have to pay any advance deposit or online registration fee — you pay 100% cash on arrival after meeting your companion in person.
              </p>
            </div>

            <div>
              <h4
                className="text-lg sm:text-xl font-bold uppercase text-[#dfb76c] mb-3"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                How to Book Kanpur &amp; Lucknow Escorts Discretely
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
                Booking a verified companion is effortless. Simply call our 24/7 helplines at <strong>+91 8523045235</strong> or <strong>+91 9621326466</strong>, or connect directly via WhatsApp. Our dispatch team will share current authentic photos, answer any specific preferences, and send your chosen model directly to your hotel room or private residence in Kanpur or Lucknow within 45 minutes.
              </p>
            </div>
          </section>

          {/* ─── FAQ ACCORDION SECTION ─── */}
          <section className="mt-20">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
                Answers to Your Questions
              </span>
              <h3
                className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee]"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Frequently Asked <span className="gradient-text-gold">Questions</span>
              </h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {homeFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="card-luxury p-5 cursor-pointer transition-all"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-sm sm:text-base font-bold text-[#f6f3ee] uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
                        {faq.q}
                      </h4>
                      <ChevronDown className={`h-4 w-4 text-[#dfb76c] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                    {isOpen && (
                      <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mt-3 pt-3 border-t border-[#2d2438]">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ─── HIGH CONVERTING CONCIERGE BANNER ─── */}
          <section className="mt-20 p-8 sm:p-12 rounded-2xl text-center relative overflow-hidden bg-gradient-to-br from-[#1a1224] via-[#0e0a14] to-[#1a1224] border border-[#dfb76c]/40 shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="badge-vip mb-4">24/7 VIP Concierge</span>
              <h3
                className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee] mb-4"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Ready to Book a Verified Companion in <span className="gradient-text-gold">Kanpur or Lucknow?</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#c4bdad] mb-8 leading-relaxed">
                Connect with our 24/7 booking helplines or send a direct WhatsApp message to receive instant genuine photos, real rates, and doorstep arrival within 45 minutes. 100% Cash on Arrival.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${phoneNumber}`} className="btn-luxury-gold text-xs sm:text-sm px-6 py-3.5">
                  <Phone className="h-4 w-4 inline mr-2" /> Helpline 1: +91 8523045235
                </a>
                <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy text-xs sm:text-sm px-6 py-3.5">
                  <Phone className="h-4 w-4 inline mr-2" /> Helpline 2: +91 9621326466
                </a>
                <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-xs sm:text-sm px-6 py-3.5">
                  <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp VIP Booking
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}
    </div>
  );
}

