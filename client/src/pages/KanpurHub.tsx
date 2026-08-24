import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { MapPin, Phone, MessageCircle, Zap, ArrowRight } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";

const kanpurLocalities = [
  { name: "Civil Lines", slug: "civil-lines", pincode: "208001", status: "VIP Corridor • 45 Min Delivery", popular: true, desc: "Kanpur's premier administrative and high-profile hotel district." },
  { name: "Swaroop Nagar", slug: "swaroop-nagar", pincode: "208002", status: "Upscale District • 45 Min Delivery", popular: true, desc: "High-end residential neighborhood near GSVM Medical College." },
  { name: "Govind Nagar", slug: "govind-nagar", pincode: "208006", status: "South-West Hub • 45 Min Delivery", popular: true, desc: "Active commercial and residential sector in South Kanpur." },
  { name: "Kidwai Nagar", slug: "kidwai-nagar", pincode: "208011", status: "Planned Township • 45 Min Delivery", popular: true, desc: "Organized residential blocks with maximum privacy." },
  { name: "Kakadeo", slug: "kakadeo", pincode: "208025", status: "Coaching Hub • 45 Min Delivery", popular: true, desc: "Dynamic student and modern apartment hub." },
  { name: "Mall Road", slug: "mall-road", pincode: "208001", status: "Hotel Strip • 45 Min Delivery", popular: true, desc: "Prime commercial hotel corridor for business travelers." },
  { name: "Rawatpur", slug: "rawatpur", pincode: "208019", status: "Railway Zone • 45 Min Delivery", popular: false, desc: "Convenient transit location near Rawatpur station." },
  { name: "Shyam Nagar", slug: "shyam-nagar", pincode: "208015", status: "GT Road Corridor • 45 Min Delivery", popular: false, desc: "Well-connected residential locality in South-East Kanpur." },
  { name: "Saket Nagar", slug: "saket-nagar", pincode: "208014", status: "Residential Colony • 45 Min Delivery", popular: false, desc: "Quiet residential colony for discreet home visits." },
  { name: "Kanpur Cantt", slug: "kanpur-cantt", pincode: "208004", status: "Cantonment Zone • 45 Min Delivery", popular: false, desc: "Exclusive cantonment district for high-confidentiality dates." },
  { name: "Barra", slug: "barra", pincode: "208027", status: "Barra 1-8 • 45 Min Delivery", popular: false, desc: "Expansive South Kanpur sector with 24/7 delivery." },
];

const kanpurProfiles: Profile[] = [
  { 
    id: 301, 
    name: "Aarohi", 
    age: 22, 
    category: "VIP Escort", 
    image: "/images/301.jpg", 
    alt: "Aarohi - VIP Call Girl in Civil Lines Kanpur", 
    location: "Civil Lines", 
    rating: 5.0, 
    reviewsCount: 142, 
    height: "5'6\"", 
    languages: ["Hindi", "English"], 
    bio: "VIP PREMIUM ESCORT AGENCY SERVICE IN CIVIL LINES KANPUR ❣️ 100% GENUINE & SAFE SERVICE WITH CLEAN HYGIENIC ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: A-Level 5-Star VIP Escort ◾ S-GFE (Special Girlfriend Experience) ◾ Hotel Suite Outcall ◾ Romantic Dinner Companion ◾ Night Out Party Escort ◾ Duo Threesome Option ◾ 100% Cash On Arrival.", 
    tags: ["VIP Escort", "Civil Lines", "Incall/Outcall", "GFE"], 
    city: "Kanpur" 
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
    bio: "COLLEGE MODEL ESCORT SERVICE IN SWAROOP NAGAR KANPUR 🔥 100% REAL & VERIFIED COMPANION. AVAILABLE 24/7 INCALL & OUTCALL BOTH WITH 45-MIN FAST DELIVERY. • SERVICES: Young College Companion ◾ S-GFE (Girlfriend Experience) ◾ Dinner Date Company ◾ Cozy Hotel Dates ◾ 100% Discretion & Safe Hygienic Experience.", 
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
    bio: "INDEPENDENT VIP ESCORT SERVICE IN KAKADEO KANPUR ❣️ 100% PRIVATE DIRECT BOOKING WITH ZERO ADVANCE DEPOSIT. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: Independent Companion ◾ GFE Experience ◾ Private Home Visit ◾ Hotel Outcall ◾ Unhurried Sensual Romance ◾ Safe Hygienic Environment.", 
    tags: ["Independent Escort", "Kakadeo", "Direct Booking", "Incall/Outcall"], 
    city: "Kanpur" 
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
    bio: "LUXURY 5-STAR ESCORT AGENCY SERVICE ON MALL ROAD KANPUR 👑 HIGH-CLASS SUPERMODEL COMPANION FOR EXECUTIVE GENTLEMEN. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Supermodel VIP Escort ◾ S-GFE ◾ Luxury Hotel Suite Delivery ◾ Business Dinner Date ◾ VIP Night Stay ◾ 100% Confidentiality & Satisfaction.", 
    tags: ["Luxury Escort", "Mall Road", "5-Star Service", "VIP Outcall"], 
    city: "Kanpur" 
  },
  { 
    id: 307, 
    name: "Komal", 
    age: 22, 
    category: "VIP Escort", 
    image: "/images/307.jpg", 
    alt: "Komal - VIP Escort in Govind Nagar Kanpur", 
    location: "Govind Nagar", 
    rating: 4.8, 
    reviewsCount: 104, 
    height: "5'5\"", 
    languages: ["Hindi", "English"], 
    bio: "VIP CALL GIRL SERVICE IN GOVIND NAGAR KANPUR ❣️ 100% GENUINE SERVICE WITH SAFE & CLEAN ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: VIP Call Girl ◾ GFE Companion ◾ Doorstep Delivery ◾ Hotel Outcall ◾ Sweet Romantic Conversation ◾ Pay After Arrival Guarantee.", 
    tags: ["VIP Call Girl", "Govind Nagar", "Doorstep Delivery", "24/7 Available"], 
    city: "Kanpur" 
  },
  { 
    id: 308, 
    name: "Pooja", 
    age: 23, 
    category: "Independent", 
    image: "/images/308.jpg", 
    alt: "Pooja - Independent Call Girl in Kidwai Nagar Kanpur", 
    location: "Kidwai Nagar", 
    rating: 4.9, 
    reviewsCount: 112, 
    height: "5'6\"", 
    languages: ["Hindi", "English"], 
    bio: "ROMANTIC INDEPENDENT ESCORT SERVICE IN KIDWAI NAGAR KANPUR 🔥 100% GENUINE & SAFE PLACE COMPANION. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: Independent Companion ◾ S-GFE ◾ Private Home Delivery ◾ Hotel Suite Outcall ◾ Warm Affectionate Company ◾ 100% Cash On Arrival.", 
    tags: ["Independent Escort", "Kidwai Nagar", "Home Delivery", "Safe Place"], 
    city: "Kanpur" 
  },
  { 
    id: 309, 
    name: "Sneha", 
    age: 25, 
    category: "Luxury Escort", 
    image: "/images/309.jpg", 
    alt: "Sneha - Luxury Escort in Kanpur Cantt", 
    location: "Kanpur Cantt", 
    rating: 5.0, 
    reviewsCount: 135, 
    height: "5'7\"", 
    languages: ["English", "Hindi"], 
    bio: "EXCLUSIVE LUXURY ESCORT AGENCY SERVICE IN KANPUR CANTT 👑 5-STAR HIGH PROFILE COMPANION. AVAILABLE 24/7 INCALL & OUTCALL FOR GUEST HOUSES & HOTELS. • SERVICES: High Profile Escort ◾ GFE Romance ◾ Cantonment VIP Delivery ◾ Executive Suite Dates ◾ 100% Privacy & Hygienic Clean Service.", 
    tags: ["Luxury Escort", "Kanpur Cantt", "High Profile", "VIP Guest House"], 
    city: "Kanpur" 
  },
  { 
    id: 310, 
    name: "Ananya", 
    age: 21, 
    category: "College Model", 
    image: "/images/310.jpg", 
    alt: "Ananya - College Model Escort in Rawatpur Kanpur", 
    location: "Rawatpur", 
    rating: 4.8, 
    reviewsCount: 88, 
    height: "5'4\"", 
    languages: ["Hindi", "English"], 
    bio: "EXPRESS COLLEGE MODEL ESCORT SERVICE IN RAWATPUR KANPUR 🔥 100% REAL PHOTOS WITH 45-MIN FAST INCALL & OUTCALL DELIVERY. • SERVICES: College Girl Companion ◾ S-GFE ◾ Hotel Outcall ◾ Fun Evening Date ◾ Sweet Affection ◾ Zero Advance Payment.", 
    tags: ["College Model", "Rawatpur", "Express Delivery", "Real Photos"], 
    city: "Kanpur" 
  },
];

export default function KanpurHub() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const pageTitle = "Kanpur Escorts & Escort Service in Kanpur | Call +91 8523045235 / +91 9621326466";
  const pageDesc = "Kanpur escorts & call girls — 100% verified, zero advance payment, pay on arrival. Trusted escort service in Kanpur with genuine profiles, 24/7 home & hotel delivery across Civil Lines, Swaroop Nagar, Kakadeo & all areas. Call +91 8523045235.";
  const canonicalUrl = "https://joya.kanpureliteservice.com/kanpur";
  const keywords = "kanpur escorts, escort in kanpur, kanpur escort service, kanpur call girls, call girl in kanpur, civil lines escort kanpur, swaroop nagar escort, kakadeo escorts kanpur, govind nagar call girl, mall road escort kanpur, kidwai nagar escort, barra call girl kanpur";

  const kanpurSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Joya Elite — Kanpur Escort Service",
      "url": canonicalUrl,
      "telephone": ["+91-8523045235", "+91-9621326466"],
      "areaServed": {
        "@type": "City",
        "name": "Kanpur",
        "addressRegion": "Uttar Pradesh"
      },
      "description": pageDesc
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joya.kanpureliteservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Kanpur Escort Service", "item": canonicalUrl }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords={keywords} schema={kanpurSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1c070b 0%, #2d0a12 50%, #0e0407 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.15)", border: "1px solid rgba(233,30,115,0.35)", color: "#ff6b9d" }}>
            <MapPin className="h-4 w-4" style={{ color: "#e91e73" }} />
            <span>KANPUR'S #1 VERIFIED ESCORT SERVICE DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em" }}>
            PREMIUM <span className="gradient-text-pink">KANPUR ESCORTS</span> &amp; CALL GIRLS
          </h1>
          <p className="text-sm sm:text-base max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "#d4aab3" }}>
            Welcome to Joya Elite Kanpur — your trusted destination for elite, verified companions across Civil Lines, Swaroop Nagar, Govind Nagar, Kakadeo, Mall Road, and all Kanpur sectors. Express 45-minute doorstep delivery, 100% Cash on Arrival, and complete privacy guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
            <a href={`tel:${phoneNumber}`} className="btn-primary text-base px-6 py-3.5">
              <Phone className="h-5 w-5" /> Call Line 1: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-primary text-base px-6 py-3.5" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
              <Phone className="h-5 w-5" /> Call Line 2: +91 9621326466
            </a>
            <a href={`https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20Kanpur%20escort.`} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-6 py-3.5">
              <MessageCircle className="h-5 w-5" /> WhatsApp Line 1
            </a>
            <a href={`https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20Kanpur%20escort.`} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-6 py-3.5" style={{ background: "#128C7E" }}>
              <MessageCircle className="h-5 w-5" /> WhatsApp Line 2
            </a>
          </div>
        </div>
      </section>

      {/* Kanpur Locality Navigation Grid */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2 block">LOCALITY DIRECTORY</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Explore Escort Services by <span className="gradient-text-pink">Kanpur Area</span>
            </h2>
            <p className="text-sm max-w-2xl mx-auto mt-3" style={{ color: "#c2929a" }}>
              Click any Kanpur locality below to access its dedicated service landing page with unique area descriptions, landmark guides, and local companion dispatch details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {kanpurLocalities.map((area) => (
              <a
                key={area.slug}
                href={`/kanpur/${area.slug}`}
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
                        HOT
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

      {/* Featured Kanpur Companions */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-2 block">ALL KANPUR MODELS DIRECTORY</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Verified <span className="gradient-text-pink">Kanpur Companions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kanpurProfiles.map((p) => (
              <div key={p.id} className="rounded overflow-hidden flex flex-col justify-between cursor-pointer group" style={{ background: "#140509", border: "1px solid #3d1018" }} onClick={() => setSelectedProfile(p)}>
                <div>
                  <div className="relative h-72 overflow-hidden">
                    <img src={p.image} alt={`${p.name} - ${p.category} in ${p.location} Kanpur`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #140509 0%, transparent 60%)" }} />
                    <div className="absolute top-3 left-3"><span className="badge-vip">{p.category}</span></div>
                    <div className="absolute bottom-3 left-3 text-xs text-white font-semibold flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-pink-500" /> {p.location}, Kanpur
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
                    <a href={`https://wa.me/918523045235?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Kanpur.`} target="_blank" rel="noreferrer" className="btn-whatsapp py-2 px-1 text-center justify-center">
                      <MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 1
                    </a>
                    <a href={`https://wa.me/919621326466?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Kanpur.`} target="_blank" rel="noreferrer" className="btn-whatsapp py-2 px-1 text-center justify-center" style={{ background: "#128C7E" }}>
                      <MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 2
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Article for Kanpur Escorts */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 space-y-10 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Kanpur Escorts &amp; Call Girls — <span className="gradient-text-pink">#1 Verified Escort Service in Kanpur</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
              Welcome to the official <strong>Kanpur Escorts Hub</strong> on <strong>Joya Elite</strong>. We offer high-class, 100% verified <strong>Kanpur Call Girls</strong>, VIP escorts, independent companions, college models, and housewife call girls available for 24/7 Incall and Outcall bookings across Kanpur, Uttar Pradesh. Whether you are staying at a luxury 5-star hotel on Mall Road, a private residence in Civil Lines, or a cozy apartment in Swaroop Nagar, our escort service guarantees doorstep arrival within 45 minutes with 100% Cash on Arrival and zero advance payment required.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              Kanpur is Uttar Pradesh's commercial hub, attracting business travelers, corporate delegates, and luxury seekers. Our escort agency in Kanpur caters to gentlemen who value privacy, elegance, clean hygienic accommodation, and authentic companion profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
              <h3 className="text-base font-bold text-pink-400 uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>VIP Escorts in Civil Lines &amp; Mall Road</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Supermodel-class VIP call girls for luxury hotel outcalls along Mall Road and Civil Lines hotel corridor. Ideal for corporate dinners and VIP suite appointments.
              </p>
            </div>
            <div className="p-5 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
              <h3 className="text-base font-bold text-pink-400 uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>College Models in Swaroop Nagar &amp; Kakadeo</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Youthful, sweet-tempered college model companions near Swaroop Nagar restaurants and Kakadeo coaching hub. Perfect for fun casual dates and romantic outings.
              </p>
            </div>
            <div className="p-5 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
              <h3 className="text-base font-bold text-pink-400 uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>Independent Companions in Govind Nagar &amp; Kidwai Nagar</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Mature, affectionate independent escorts and housewife companions in South Kanpur (Govind Nagar, Kidwai Nagar, Barra) for discreet home visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kanpur FAQs */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Kanpur Escort Service — <span className="gradient-text-pink">Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="space-y-4 text-xs sm:text-sm">
            {[
              { q: "Is advance payment required for escort booking in Kanpur?", a: "Never. Joya Elite operates on a 100% Cash on Arrival / Pay After Arrival policy across all Kanpur localities. You pay only after meeting your companion." },
              { q: "Which areas in Kanpur do you cover for hotel and home delivery?", a: "We provide 24/7 delivery across Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Mall Road, Rawatpur, Shyam Nagar, Saket Nagar, Kanpur Cantt, and Barra." },
              { q: "How long does it take for a companion to arrive in Kanpur?", a: "Dispatch time is typically 45 minutes to 1 hour from booking confirmation to any hotel or residence in Kanpur." },
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
