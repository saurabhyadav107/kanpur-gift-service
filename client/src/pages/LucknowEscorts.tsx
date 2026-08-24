import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { Phone, MessageCircle, MapPin, Shield, Star, Clock, Zap, ArrowRight } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello,%20I%20want%20to%20book%20an%20escort%20in%20Lucknow.";

const lucknowProfiles: Profile[] = [
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
    bio: "Elegant VIP companion based in Gomti Nagar Lucknow. Discreet, charming and perfect for hotel dates near Hyatt Regency and upscale Shaheed Path residences.",
    tags: ["VIP", "Gomti Nagar", "Discreet"],
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
    bio: "Independent companion in Hazratganj, the heart of Lucknow. Available for outcall hotel service near Taj Hotel, Mayfair, and Hazratganj Market area 24/7.",
    tags: ["Independent", "Hazratganj", "Verified"],
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
    bio: "Vibrant college model available in Indira Nagar and surrounding Lucknow localities. Friendly, attentive, and ready for private home visits and hotel meetups.",
    tags: ["College Model", "Indira Nagar", "Friendly"],
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
    bio: "High-profile luxury escort serving Aliganj, Mahanagar and North Lucknow. Sophisticated, well-groomed and exclusively available for premium hotel stays.",
    tags: ["Luxury", "Aliganj", "High Profile"],
    city: "Lucknow"
  },
  {
    id: 405,
    name: "Ritika",
    age: 21,
    category: "VIP",
    image: "/images/lucknow-405.jpg",
    alt: "Ritika - VIP Call Girl in Alambagh Lucknow",
    location: "Alambagh",
    rating: 4.8,
    reviewsCount: 95,
    height: "5'5\"",
    languages: ["Hindi", "English"],
    bio: "Stunning VIP companion covering Alambagh, Charbagh Railway Station and surrounding Lucknow areas. Express delivery available within 45 minutes of booking.",
    tags: ["VIP", "Alambagh", "Express Delivery"],
    city: "Lucknow"
  },
  {
    id: 406,
    name: "Zara",
    age: 26,
    category: "Independent",
    image: "/images/lucknow-406.jpg",
    alt: "Zara - Independent Escort Near Shaheed Path Sushant Golf City Lucknow",
    location: "Shaheed Path",
    rating: 5.0,
    reviewsCount: 145,
    height: "5'6\"",
    languages: ["English", "Hindi"],
    bio: "Premium independent companion near Shaheed Path and Sushant Golf City. Caters exclusively to discerning gentlemen in upscale Lucknow neighbourhoods.",
    tags: ["Independent", "Shaheed Path", "Premium"],
    city: "Lucknow"
  }
];

const lucknowAreas = [
  { name: "Gomti Nagar", slug: "lucknow-gomti-nagar", keyword: "call girl in Gomti Nagar" },
  { name: "Hazratganj", slug: "lucknow-hazratganj", keyword: "escort service Hazratganj" },
  { name: "Indira Nagar", slug: "lucknow-indira-nagar", keyword: "call girl Indira Nagar" },
  { name: "Aliganj", slug: "lucknow-aliganj", keyword: "escort service Aliganj" },
  { name: "Alambagh", slug: "lucknow-alambagh", keyword: "call girl Alambagh" },
  { name: "Shaheed Path", slug: "lucknow-shaheed-path", keyword: "escort Shaheed Path" },
  { name: "Mahanagar", slug: "lucknow-mahanagar", keyword: "call girl Mahanagar" },
  { name: "Gomti Nagar Ext.", slug: "lucknow-gomti-nagar-extension", keyword: "escorts Gomti Nagar Ext" },
  { name: "Amausi Airport", slug: "lucknow-amausi-airport", keyword: "escorts near Lucknow Airport" },
];

export default function LucknowEscorts() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const title = "Lucknow Escorts & Call Girls | Escort Service in Lucknow | Call +91 8523045235";
  const desc = "Premium verified Lucknow escorts and call girls — Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh & Shaheed Path. 100% pay cash on arrival, zero advance payment. Fast 45-minute delivery. Call +91 8523045235 / +91 9621326466.";
  const canonical = "https://joya.kanpureliteservice.com/lucknow-escorts";
  const keywords = "lucknow escorts, escort in lucknow, lucknow call girls, call girl in lucknow, escort service lucknow, gomti nagar escort lucknow, hazratganj call girl, indira nagar escort, aliganj escort lucknow";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={title} description={desc} canonicalUrl={canonical} keywords={keywords} />
      <Navbar />

      {/* Hero Header Card */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1c070b 0%, #2d0a12 50%, #140509 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.2)", border: "1px solid rgba(233,30,115,0.4)", color: "#ff6b9d" }}>
            <MapPin className="h-4 w-4 text-pink-500" /> PREMIER ESCORT SERVICE IN LUCKNOW
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em" }}>
            Lucknow <span className="gradient-text-pink">Call Girls &amp; Escorts</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#d4aab3" }}>
            Exclusive 24/7 verified companion service in Lucknow. Express 45-minute doorstep and hotel delivery across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Mahanagar &amp; Shaheed Path. 100% Cash on Arrival.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${phoneNumber}`} className="btn-primary text-sm px-6 py-3">
              <Phone className="h-4 w-4" /> Call Helpline 1: 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-primary text-sm px-6 py-3" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
              <Phone className="h-4 w-4" /> Call Helpline 2: 9621326466
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm px-6 py-3">
              <MessageCircle className="h-4 w-4" /> WhatsApp Lucknow
            </a>
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              Verified Lucknow <span className="gradient-text-pink">Escort Profiles</span>
            </h2>
            <p className="text-xs sm:text-sm" style={{ color: "#c2929a" }}>Select any Lucknow model to view genuine photos, height, languages, and booking CTAs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {lucknowProfiles.map((p) => (
              <article key={p.id} className="profile-card relative overflow-hidden cursor-pointer" style={{ background: "#140509", border: "1px solid #3d1018", borderRadius: "4px" }} onClick={() => setSelectedProfile(p)}>
                <div className="relative overflow-hidden" style={{ height: "300px" }}>
                  <img src={p.image} alt={p.alt} className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #140509 0%, transparent 50%)" }} />
                  <div className="absolute top-3 left-3"><span className="badge-vip">{p.category}</span></div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs" style={{ color: "#d4aab3" }}><MapPin className="h-3 w-3 text-pink-500" /> {p.location}, Lucknow</div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}, <span className="text-pink-500">{p.age}</span></h3>
                  <p className="text-xs line-clamp-2 my-2" style={{ color: "#c2929a" }}>{p.bio}</p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t" style={{ borderColor: "#3d1018", color: "#fcd34d" }}>
                    <span>★ {p.rating} ({p.reviewsCount})</span>
                    <span className="text-pink-400 font-semibold">View Details →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Lucknow Locality Pages Grid */}
          <div className="p-8 rounded" style={{ background: "#140509", border: "1px solid #3d1018" }}>
            <h3 className="text-xl font-bold uppercase text-white mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>📍 Dedicated Lucknow Locality Pages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 text-xs">
              {lucknowAreas.map((a) => (
                <a key={a.slug} href={`/areas/${a.slug}`} className="p-4 rounded hover:border-pink-500 transition-colors flex items-center gap-3" style={{ background: "#1a0709", border: "1px solid #3d1018", color: "#f5e6ea" }}>
                  <Zap className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white uppercase">{a.name}</div>
                    <div className="text-[10px]" style={{ color: "#c2929a" }}>{a.keyword}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}
    </div>
  );
}
