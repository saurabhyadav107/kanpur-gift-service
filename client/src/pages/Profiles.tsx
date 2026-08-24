import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { MapPin, Filter } from "lucide-react";

const allModels: Profile[] = [
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
    bio: "LUXURY 5-STAR ESCORT AGENCY SERVICE ON MALL ROAD KANPUR 👑 HIGH-CLASS SUPERMODEL COMPANION FOR EXECUTIVE GENTLEMEN. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Supermodel VIP Escort ◾ S-GFE ◾ Luxury Hotel Suite Delivery ◾ 100% Confidentiality.",
    tags: ["Luxury Escort", "Mall Road", "5-Star Service", "VIP Outcall"],
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
    bio: "COLLEGE MODEL CALL GIRL AGENCY SERVICE IN INDIRA NAGAR LUCKNOW ❣️ 100% REAL PHOTOS & FAST 45-MIN DOORSTEP DELIVERY. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Young College Girl ◾ S-GFE ◾ Clean Safe Environment ◾ Pay On Arrival.",
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
    bio: "LUXURY 5-STAR VIP ESCORT SERVICE IN ALIGANJ & MAHANAGAR LUCKNOW 👑 HIGH PROFILE SUPERMODEL COMPANION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: 5-Star VIP Escort ◾ S-GFE ◾ Executive Suite Dates ◾ Safe Clean Accommodation.",
    tags: ["Luxury Escort", "Aliganj", "5-Star Service", "Incall/Outcall"],
    city: "Lucknow"
  },
  {
    id: 407,
    name: "Shanaya",
    age: 22,
    category: "VIP",
    image: "/images/lucknow-user-1.jpg",
    alt: "Shanaya - VIP Call Girl in Gomti Nagar Extension Lucknow",
    location: "Gomti Nagar Ext",
    rating: 5.0,
    reviewsCount: 168,
    height: "5'6\"",
    languages: ["Hindi", "English"],
    bio: "STYLISH VIP CALL GIRL AGENCY SERVICE IN GOMTI NAGAR EXTENSION LUCKNOW ❣️ 100% GENUINE & SAFE ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: VIP Companion ◾ S-GFE ◾ Hotel Suite Outcall ◾ 100% Cash On Arrival.",
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
    bio: "PLAYFUL COLLEGE MODEL ESCORT SERVICE IN HAZRATGANJ LUCKNOW 🔥 100% GENUINE SAFE SERVICE. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: College Girl Escort ◾ S-GFE ◾ Cozy Hotel Dates ◾ Zero Advance Deposit.",
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
    bio: "GLAMOROUS LUXURY 5-STAR ESCORT SERVICE NEAR SHAHEED PATH LUCKNOW 👑 HIGH PROFILE SUPERMODEL. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Supermodel VIP Escort ◾ S-GFE ◾ Executive Suite Outcall ◾ 100% Clean Service.",
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
    bio: "GRACEFUL INDEPENDENT CALL GIRL SERVICE IN ALIGANJ LUCKNOW ❣️ 100% SAFE CLEAN ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Independent Call Girl ◾ GFE Companion ◾ Private Home Visit ◾ 100% Cash On Arrival.",
    tags: ["Independent Escort", "Aliganj", "Home & Hotel Delivery", "Incall/Outcall"],
    city: "Lucknow"
  }
];

export default function Profiles() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = allModels.filter((m) => {
    const matchesCity = selectedCity === "All" || m.city === selectedCity;
    const matchesCat = selectedCategory === "All" || m.category === selectedCategory;
    return matchesCity && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead
        title="Escort Profiles & Models Directory | Kanpur & Lucknow Escorts"
        description="Browse all verified escort profiles & models in Kanpur and Lucknow. Filter by VIP, College Model, Independent, Luxury escorts with genuine photos and reviews."
        canonicalUrl="https://joya.kanpureliteservice.com/profiles"
        keywords="escort profiles kanpur, model directory lucknow, call girl photos kanpur, verified escorts lucknow"
      />
      <Header />

      <section className="py-12 text-center border-b" style={{ background: "linear-gradient(135deg, #180509, #2b0811)", borderColor: "#3d1018" }}>
        <h1 className="text-3xl sm:text-4xl font-bold uppercase text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
          All Models &amp; <span className="gradient-text-pink">Companion Directory</span>
        </h1>
        <p className="text-xs sm:text-sm text-pink-200">Verified companion profiles across Kanpur &amp; Lucknow</p>
      </section>

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded mb-10 text-xs" style={{ background: "#140509", border: "1px solid #3d1018" }}>
            <div className="flex items-center gap-2 text-white font-bold uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              <Filter className="h-4 w-4 text-pink-500" /> Filter Companions
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span style={{ color: "#c2929a" }}>City:</span>
                {["All", "Kanpur", "Lucknow"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCity(c)}
                    className={`px-3 py-1 rounded font-semibold transition-colors ${
                      selectedCity === c ? "bg-pink-600 text-white" : "bg-zinc-900 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span style={{ color: "#c2929a" }}>Category:</span>
                {["All", "VIP", "College Model", "Independent", "Luxury Escort"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded font-semibold transition-colors ${
                      selectedCategory === cat ? "bg-pink-600 text-white" : "bg-zinc-900 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="profile-card relative overflow-hidden cursor-pointer" style={{ background: "#140509", border: "1px solid #3d1018", borderRadius: "4px" }} onClick={() => setSelectedProfile(p)}>
                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <img src={p.image} alt={p.alt} className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #140509 0%, transparent 50%)" }} />
                  <div className="absolute top-3 left-3"><span className="badge-vip">{p.category}</span></div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs" style={{ color: "#d4aab3" }}>
                    <MapPin className="h-3 w-3 text-pink-500" /> {p.location}, {p.city}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}, <span className="text-pink-500">{p.age}</span></h3>
                  <p className="text-xs line-clamp-2 my-2" style={{ color: "#c2929a" }}>{p.bio}</p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t" style={{ borderColor: "#3d1018", color: "#fcd34d" }}>
                    <span>★ {p.rating} ({p.reviewsCount})</span>
                    <span className="text-pink-400 font-semibold">Inspect →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Rich SEO Content Section */}
          <section className="mt-16 pt-12 border-t text-left" style={{ borderColor: "#3d1018" }}>
            <div className="max-w-5xl mx-auto space-y-6 text-xs sm:text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              <h2 className="text-2xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                Kanpur Escorts &amp; Lucknow Escorts — <span className="gradient-text-pink">Verified Profiles Directory</span>
              </h2>
              <p>
                The <strong>Joya Elite Profiles Directory</strong> showcases verified <strong>Kanpur Escorts</strong> and <strong>Lucknow Escorts</strong> available for same-day outcall hotel stays and private home appointments. Every companion listed in our directory undergoes individual profile verification so that the photographs, age, location, and companion attributes you see on our site match the companion who arrives at your doorstep.
              </p>
              <p>
                Filter profiles by city (<strong>Kanpur Hub</strong> vs. <strong>Lucknow Hub</strong>) or category (VIP Escorts, College Models, Independent Companions, Luxury Outcalls). All bookings feature 100% Cash on Arrival with 45-minute express delivery to all hotel zones including Civil Lines, Swaroop Nagar, Mall Road, Kanpur Cantt, Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, and Shaheed Path.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}
    </div>
  );
}
