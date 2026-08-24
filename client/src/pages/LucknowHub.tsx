import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { MapPin, Phone, MessageCircle, Zap, ArrowRight } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";

const lucknowLocalities = [
  { name: "Gomti Nagar", slug: "gomti-nagar", pincode: "226010", status: "VIP Corridor • 45 Min Delivery", popular: true, desc: "Lucknow's premier corporate and luxury hotel hub near Hyatt Regency." },
  { name: "Hazratganj", slug: "hazratganj", pincode: "226001", status: "Heritage Heart • 45 Min Delivery", popular: true, desc: "Iconic central heritage, shopping, and business center of Lucknow." },
  { name: "Indira Nagar", slug: "indira-nagar", pincode: "226016", status: "Residential Sector • 45 Min Delivery", popular: true, desc: "Expansive residential township ideal for quiet, private home dates." },
  { name: "Aliganj", slug: "aliganj", pincode: "226024", status: "North Lucknow Hub • 45 Min Delivery", popular: true, desc: "Commercial and residential center featuring student and corporate hubs." },
  { name: "Alambagh", slug: "alambagh", pincode: "226005", status: "Transit Sector • 45 Min Delivery", popular: true, desc: "Bustling commercial corridor near Charbagh Railway Station." },
  { name: "Shaheed Path", slug: "shaheed-path", pincode: "226002", status: "Expressway Corridor • 45 Min Delivery", popular: true, desc: "Luxury corridor near Phoenix Palassio and Sushant Golf City." },
  { name: "Mahanagar", slug: "mahanagar", pincode: "226006", status: "Elite Residential • 45 Min Delivery", popular: false, desc: "Classical high-status residential neighborhood near Gole Market." },
  { name: "Gomti Nagar Ext", slug: "gomti-nagar-extension", pincode: "226010", status: "Riverfront Enclave • 45 Min Delivery", popular: false, desc: "Modern high-rise residential sector along the Gomti riverfront." },
  { name: "Amausi Airport", slug: "amausi-airport", pincode: "226009", status: "Transit Hotels • 45 Min Delivery", popular: false, desc: "Rapid hotel delivery for airport transit guests and air travelers." },
];

const lucknowProfiles: Profile[] = [
  { 
    id: 401, 
    name: "Priya", 
    age: 23, 
    category: "VIP Escort", 
    image: "/images/lucknow-401.jpg", 
    alt: "Priya - VIP Call Girl in Gomti Nagar Lucknow", 
    location: "Gomti Nagar", 
    rating: 5.0, 
    reviewsCount: 156, 
    height: "5'5\"", 
    languages: ["Hindi", "English"], 
    bio: "VIP PREMIUM ESCORT AGENCY SERVICE IN GOMTI NAGAR LUCKNOW ❣️ 100% GENUINE SERVICE WITH GOOD & SAFE HYGIENIC HOTEL ROOM ACCOMMODATION NEAR HYATT REGENCY. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: A-Level 5-Star VIP Call Girl ◾ S-GFE (Special Girlfriend Experience) ◾ Hotel Suite Outcall ◾ Romantic Evening Dinner Date ◾ 100% Discretion & Cash On Arrival.", 
    tags: ["VIP Call Girl", "Gomti Nagar", "Incall/Outcall", "S-GFE"], 
    city: "Lucknow" 
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
    bio: "INDEPENDENT VIP ESCORT SERVICE IN HAZRATGANJ LUCKNOW 🔥 100% PRIVATE DIRECT BOOKING NEAR TAJ HOTEL. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: Independent Call Girl ◾ GFE Companion ◾ Outcall Hotel Delivery ◾ Cozy Romantic Evening ◾ 100% Safe Clean Accommodation & Zero Advance.", 
    tags: ["Independent Escort", "Hazratganj", "Taj Hotel Outcall", "Incall/Outcall"], 
    city: "Lucknow" 
  },
  { 
    id: 403, 
    name: "Nisha", 
    age: 22, 
    category: "College Model", 
    image: "/images/lucknow-403.jpg", 
    alt: "Nisha - College Model Call Girl in Indira Nagar Lucknow", 
    location: "Indira Nagar", 
    rating: 4.9, 
    reviewsCount: 108, 
    height: "5'4\"", 
    languages: ["Hindi", "English"], 
    bio: "COLLEGE MODEL CALL GIRL AGENCY SERVICE IN INDIRA NAGAR LUCKNOW ❣️ 100% REAL PHOTOS & FAST 45-MIN DOORSTEP DELIVERY. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Young College Girl ◾ S-GFE ◾ Sweet Affection ◾ Party Companion ◾ Clean Safe Environment ◾ Pay On Arrival.", 
    tags: ["College Model", "Indira Nagar", "45-Min Fast Delivery", "GFE"], 
    city: "Lucknow" 
  },
  { 
    id: 404, 
    name: "Kavya", 
    age: 25, 
    category: "Luxury Escort", 
    image: "/images/lucknow-404.jpg", 
    alt: "Kavya - Luxury Escort in Aliganj Lucknow", 
    location: "Aliganj", 
    rating: 5.0, 
    reviewsCount: 174, 
    height: "5'7\"", 
    languages: ["English", "Hindi"], 
    bio: "LUXURY 5-STAR VIP ESCORT SERVICE IN ALIGANJ & MAHANAGAR LUCKNOW 👑 HIGH PROFILE SUPERMODEL COMPANION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: 5-Star VIP Escort ◾ S-GFE ◾ Executive Suite Dates ◾ Business Dinner Escort ◾ Complete Discretion & Safe Clean Accommodation.", 
    tags: ["Luxury Escort", "Aliganj", "5-Star Service", "Incall/Outcall"], 
    city: "Lucknow" 
  },
  { 
    id: 405, 
    name: "Ritika", 
    age: 21, 
    category: "VIP Escort", 
    image: "/images/lucknow-405.jpg", 
    alt: "Ritika - VIP Call Girl in Alambagh Lucknow", 
    location: "Alambagh", 
    rating: 4.8, 
    reviewsCount: 95, 
    height: "5'5\"", 
    languages: ["Hindi", "English"], 
    bio: "VIP CALL GIRL SERVICE IN ALAMBAGH LUCKNOW NEAR CHARBAGH 🔥 100% GENUINE & SAFE PLACE COMPANION. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: VIP Call Girl ◾ GFE Experience ◾ Express Transit Delivery ◾ Hotel Outcall ◾ Warm Romance ◾ Pay After Arrival.", 
    tags: ["VIP Call Girl", "Alambagh", "Charbagh Outcall", "24/7 Available"], 
    city: "Lucknow" 
  },
  { 
    id: 406, 
    name: "Zara", 
    age: 26, 
    category: "Independent", 
    image: "/images/lucknow-406.jpg", 
    alt: "Zara - Independent Escort Near Shaheed Path Lucknow", 
    location: "Shaheed Path", 
    rating: 5.0, 
    reviewsCount: 145, 
    height: "5'6\"", 
    languages: ["English", "Hindi"], 
    bio: "PREMIUM INDEPENDENT ESCORT SERVICE NEAR SHAHEED PATH & SUSHANT GOLF CITY LUCKNOW ❣️ AVAILABLE 24/7 INCALL & OUTCALL FOR PHOENIX PALASSIO HOTELS. • SERVICES: Independent Companion ◾ S-GFE ◾ VIP Night Stay ◾ Romantic Dates ◾ 100% Confidential Safe Clean Environment.", 
    tags: ["Independent Escort", "Shaheed Path", "Golf City Outcall", "Incall/Outcall"], 
    city: "Lucknow" 
  },
  { 
    id: 407, 
    name: "Shanaya", 
    age: 22, 
    category: "VIP Escort", 
    image: "/images/lucknow-user-1.jpg", 
    alt: "Shanaya - VIP Call Girl in Gomti Nagar Extension Lucknow", 
    location: "Gomti Nagar Ext", 
    rating: 5.0, 
    reviewsCount: 168, 
    height: "5'6\"", 
    languages: ["Hindi", "English"], 
    bio: "STYLISH VIP CALL GIRL AGENCY SERVICE IN GOMTI NAGAR EXTENSION LUCKNOW ❣️ 100% GENUINE & SAFE ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: VIP Companion ◾ S-GFE ◾ Hotel Suite Outcall ◾ Sensual Conversation ◾ 100% Discretion & Pay On Arrival.", 
    tags: ["VIP Call Girl", "Gomti Nagar Ext", "Incall/Outcall", "GFE"], 
    city: "Lucknow" 
  },
  { 
    id: 408, 
    name: "Kritika", 
    age: 23, 
    category: "College Model", 
    image: "/images/lucknow-user-2.jpg", 
    alt: "Kritika - College Model Escort in Hazratganj Lucknow", 
    location: "Hazratganj", 
    rating: 4.9, 
    reviewsCount: 142, 
    height: "5'5\"", 
    languages: ["Hindi", "English"], 
    bio: "PLAYFUL COLLEGE MODEL ESCORT SERVICE IN HAZRATGANJ LUCKNOW 🔥 100% GENUINE SAFE SERVICE. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: College Girl Escort ◾ S-GFE ◾ Cozy Hotel Dates ◾ Sweet Evening Romance ◾ Zero Advance Deposit.", 
    tags: ["College Model", "Hazratganj", "Sweet Romance", "Incall/Outcall"], 
    city: "Lucknow" 
  },
  { 
    id: 409, 
    name: "Tanisha", 
    age: 24, 
    category: "Luxury Escort", 
    image: "/images/lucknow-user-3.jpg", 
    alt: "Tanisha - Luxury Escort in Shaheed Path Lucknow", 
    location: "Shaheed Path", 
    rating: 5.0, 
    reviewsCount: 185, 
    height: "5'7\"", 
    languages: ["English", "Hindi"], 
    bio: "GLAMOROUS LUXURY 5-STAR ESCORT SERVICE NEAR SHAHEED PATH LUCKNOW 👑 HIGH PROFILE SUPERMODEL. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Supermodel VIP Escort ◾ S-GFE ◾ Executive Suite Outcall ◾ Business Dinner Companion ◾ 100% Privacy & Hygienic Clean Service.", 
    tags: ["Luxury Escort", "Shaheed Path", "Executive Suite", "5-Star Service"], 
    city: "Lucknow" 
  },
  { 
    id: 410, 
    name: "Mehak", 
    age: 25, 
    category: "Independent", 
    image: "/images/lucknow-user-4.jpg", 
    alt: "Mehak - Independent Escort in Aliganj Lucknow", 
    location: "Aliganj", 
    rating: 4.9, 
    reviewsCount: 136, 
    height: "5'6\"", 
    languages: ["Hindi", "English"], 
    bio: "GRACEFUL INDEPENDENT CALL GIRL SERVICE IN ALIGANJ LUCKNOW ❣️ 100% SAFE CLEAN ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Independent Call Girl ◾ GFE Companion ◾ Private Home Visit ◾ Hotel Outcall ◾ 100% Cash On Arrival.", 
    tags: ["Independent Escort", "Aliganj", "Home & Hotel Delivery", "Incall/Outcall"], 
    city: "Lucknow" 
  },
];

export default function LucknowHub() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const pageTitle = "Lucknow Escorts & Escort Service in Lucknow | Call +91 8523045235 / +91 9621326466";
  const pageDesc = "Lucknow escorts & call girls — 100% verified, zero advance payment, pay on arrival. Trusted escort service in Lucknow across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj & all areas. Call +91 8523045235 or +91 9621326466.";
  const canonicalUrl = "https://joya.kanpureliteservice.com/lucknow";
  const keywords = "lucknow escorts, escort in lucknow, lucknow escort service, lucknow call girls, call girl in lucknow, gomti nagar escorts, hazratganj call girl, indira nagar escort lucknow, aliganj escort lucknow, alambagh call girl lucknow, shaheed path escort lucknow";

  const lucknowSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Joya Elite — Lucknow Escort Service",
      "url": canonicalUrl,
      "telephone": ["+91-8523045235", "+91-9621326466"],
      "areaServed": {
        "@type": "City",
        "name": "Lucknow",
        "addressRegion": "Uttar Pradesh"
      },
      "description": pageDesc
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joya.kanpureliteservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Lucknow Escort Service", "item": canonicalUrl }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords={keywords} schema={lucknowSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1c070b 0%, #2d0a12 50%, #0e0407 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.15)", border: "1px solid rgba(233,30,115,0.35)", color: "#ff6b9d" }}>
            <MapPin className="h-4 w-4" style={{ color: "#e91e73" }} />
            <span>LUCKNOW'S PREMIER VERIFIED ESCORT SERVICE DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em" }}>
            PREMIUM <span className="gradient-text-pink">LUCKNOW ESCORTS</span> &amp; CALL GIRLS
          </h1>
          <p className="text-sm sm:text-base max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "#d4aab3" }}>
            Welcome to Joya Elite Lucknow — your official luxury portal for verified escorts and independent companions across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, and Sushant Golf City. 100% Pay on Arrival — No Advance Deposit Required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
            <a href={`tel:${phoneNumber}`} className="btn-primary text-base px-6 py-3.5">
              <Phone className="h-5 w-5" /> Call Line 1: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-primary text-base px-6 py-3.5" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
              <Phone className="h-5 w-5" /> Call Line 2: +91 9621326466
            </a>
            <a href={`https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20Lucknow%20escort.`} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-6 py-3.5">
              <MessageCircle className="h-5 w-5" /> WhatsApp Line 1
            </a>
            <a href={`https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20Lucknow%20escort.`} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-6 py-3.5" style={{ background: "#128C7E" }}>
              <MessageCircle className="h-5 w-5" /> WhatsApp Line 2
            </a>
          </div>
        </div>
      </section>

      {/* Lucknow Locality Navigation Grid */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2 block">LUCKNOW LOCALITY DIRECTORY</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Explore Escort Services by <span className="gradient-text-pink">Lucknow Area</span>
            </h2>
            <p className="text-sm max-w-2xl mx-auto mt-3" style={{ color: "#c2929a" }}>
              Select any Lucknow locality below to view its dedicated landing page with unique area descriptions, landmark guides, and companion booking details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {lucknowLocalities.map((area) => (
              <a
                key={area.slug}
                href={`/lucknow/${area.slug}`}
                className="area-card p-5 rounded transition-all hover:border-pink-500 flex flex-col justify-between group"
                style={{ background: "#1a0709", border: "1px solid #3d1018" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-base group-hover:text-pink-400 transition-colors uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {area.name}
                    </h3>
                    {area.popular && (
                      <span className="text-[9px] px-2 py-0.5 rounded font-bold" style={{ background: "rgba(233,30,115,0.2)", color: "#ff6b9d", border: "1px solid rgba(233,30,115,0.3)" }}>
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#c2929a" }}>{area.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t text-xs" style={{ borderColor: "#2d0d12" }}>
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]"><Zap className="h-3 w-3" /> {area.status}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-pink-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lucknow Companions */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2 block">ALL LUCKNOW MODELS DIRECTORY</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Verified <span className="gradient-text-pink">Lucknow Escorts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lucknowProfiles.map((p) => (
              <div key={p.id} className="rounded overflow-hidden flex flex-col justify-between cursor-pointer group" style={{ background: "#140509", border: "1px solid #3d1018" }} onClick={() => setSelectedProfile(p)}>
                <div>
                  <div className="relative h-80 overflow-hidden">
                    <img src={p.image} alt={`${p.name} - ${p.category} in ${p.location} Lucknow`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #140509 0%, transparent 60%)" }} />
                    <div className="absolute top-3 left-3"><span className="badge-vip">{p.category}</span></div>
                    <div className="absolute bottom-3 left-3 text-xs text-white font-semibold flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-pink-500" /> {p.location}, Lucknow
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-white text-lg uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}, <span className="text-pink-500">{p.age}</span></h3>
                      <span className="text-xs text-amber-400 font-semibold">★ {p.rating} ({p.reviewsCount})</span>
                    </div>
                    <p className="text-xs mb-4 line-clamp-2" style={{ color: "#c2929a" }}>{p.bio}</p>
                  </div>
                </div>

                {/* Both Call and WhatsApp Action Buttons */}
                <div className="p-4 pt-0 space-y-2" onClick={(e) => e.stopPropagation()}>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <a href={`tel:${phoneNumber}`} className="btn-primary py-2 px-1 text-center justify-center">
                      <Phone className="h-3 w-3 inline mr-1" /> Call 1
                    </a>
                    <a href={`tel:${phoneNumber2}`} className="btn-primary py-2 px-1 text-center justify-center" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
                      <Phone className="h-3 w-3 inline mr-1" /> Call 2
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <a href={`https://wa.me/918523045235?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Lucknow.`} target="_blank" rel="noreferrer" className="btn-whatsapp py-2 px-1 text-center justify-center">
                      <MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 1
                    </a>
                    <a href={`https://wa.me/919621326466?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Lucknow.`} target="_blank" rel="noreferrer" className="btn-whatsapp py-2 px-1 text-center justify-center" style={{ background: "#128C7E" }}>
                      <MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 2
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Article for Lucknow Escorts */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 space-y-10 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Lucknow Escorts &amp; Call Girls — <span className="gradient-text-pink">#1 Verified Escort Service in Lucknow</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
              Welcome to the official <strong>Lucknow Escorts Hub</strong> on <strong>Joya Elite</strong>. We offer high-class, 100% verified <strong>Lucknow Call Girls</strong>, VIP escorts, independent companions, college models, and luxury outcall models available 24/7 across Lucknow, Uttar Pradesh. Whether you are staying at a 5-star hotel near Hyatt Regency Gomti Nagar, Taj Hotel Hazratganj, or Phoenix Palassio Shaheed Path, our escort service guarantees 45-minute hotel room delivery with 100% Cash on Arrival and zero advance payment required.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              Lucknow is the capital of Uttar Pradesh, known for its royal culture, luxury hotels, and corporate centers. Our escort agency in Lucknow caters to gentlemen who expect privacy, elegance, clean hygienic accommodation, and authentic companion profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
              <h3 className="text-base font-bold text-pink-400 uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>VIP Escorts in Gomti Nagar &amp; Hazratganj</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Supermodel-class VIP call girls for luxury hotel outcalls in Gomti Nagar, Hazratganj, and Gomti Nagar Extension. Ideal for corporate dinners and VIP suite appointments.
              </p>
            </div>
            <div className="p-5 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
              <h3 className="text-base font-bold text-pink-400 uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>College Models in Indira Nagar &amp; Aliganj</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Youthful, cheerful college model companions near Indira Nagar, Aliganj, and Mahanagar. Perfect for romantic dates, party company, and fun evening outings.
              </p>
            </div>
            <div className="p-5 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
              <h3 className="text-base font-bold text-pink-400 uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>Independent Companions in Shaheed Path &amp; Golf City</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Mature, elegant independent escorts near Shaheed Path, Sushant Golf City, and Phoenix Palassio hotels for confidential outcall hotel stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lucknow FAQs */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Lucknow Escort Service — <span className="gradient-text-pink">Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="space-y-4 text-xs sm:text-sm">
            {[
              { q: "Is advance payment required for booking escorts in Lucknow?", a: "No advance payment is ever required in Lucknow. We operate strictly on a 100% Cash on Arrival / Pay After Meeting policy." },
              { q: "Which Lucknow localities do you deliver to?", a: "24/7 doorstep and hotel room delivery across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, Sushant Golf City, Mahanagar, and Lucknow Airport area." },
              { q: "How to contact Joya Elite for Lucknow companion booking?", a: "Call Helpline 1: +91 8523045235, Helpline 2: +91 9621326466, or send an instant message on WhatsApp." },
            ].map((faq, idx) => (
              <div key={idx} className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                <h3 className="font-bold text-white text-base mb-2">{faq.q}</h3>
                <p style={{ color: "#c2929a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}
    </div>
  );
}
