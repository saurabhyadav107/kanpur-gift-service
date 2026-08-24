import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { Phone, MessageCircle, MapPin, Shield, Star, Clock, Zap, ArrowRight, Heart } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20want%20to%20book%20an%20escort%20in%20Kanpur.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello,%20I%20want%20to%20book%20an%20escort%20in%20Kanpur.";

const kanpurProfiles: Profile[] = [
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
    bio: "Supermodel-class VIP companion available for exclusive dates in Civil Lines and luxury hotel bookings across Kanpur.",
    tags: ["VIP", "Civil Lines", "High Profile"],
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
    bio: "Charming college model escort in Swaroop Nagar. Friendly, energetic, and perfect for dinner dates & hotel visits.",
    tags: ["College Model", "Swaroop Nagar", "Charming"],
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
    bio: "Independent companion in Kakadeo Kanpur. 100% private, verified, and available for same-day home/hotel delivery.",
    tags: ["Independent", "Kakadeo", "Verified"],
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
    bio: "Luxury companion specialising in Mall Road hotel visits. Sophisticated, elegant, and highly discreet.",
    tags: ["Luxury", "Mall Road", "Elite"],
    city: "Kanpur"
  },
  {
    id: 307,
    name: "Sneha",
    age: 25,
    category: "VIP",
    image: "/images/307.jpg",
    alt: "Sneha - VIP Escort in Govind Nagar Kanpur",
    location: "Govind Nagar",
    rating: 4.8,
    reviewsCount: 89,
    height: "5'5\"",
    languages: ["Hindi", "English"],
    bio: "VIP companion based in Govind Nagar Kanpur. Warm personality, beautiful, and available 24/7.",
    tags: ["VIP", "Govind Nagar", "Discreet"],
    city: "Kanpur"
  },
  {
    id: 308,
    name: "Pooja",
    age: 22,
    category: "College Model",
    image: "/images/308.jpg",
    alt: "Pooja - College Model Call Girl in Kidwai Nagar Kanpur",
    location: "Kidwai Nagar",
    rating: 4.9,
    reviewsCount: 105,
    height: "5'4\"",
    languages: ["Hindi", "English"],
    bio: "College model escort in Kidwai Nagar. Attentive, friendly companion for home visits and quiet hotel dates.",
    tags: ["College Model", "Kidwai Nagar", "Friendly"],
    city: "Kanpur"
  },
  {
    id: 309,
    name: "Meera",
    age: 24,
    category: "Independent",
    image: "/images/309.jpg",
    alt: "Meera - Independent Call Girl in Kanpur Cantt",
    location: "Kanpur Cantt",
    rating: 5.0,
    reviewsCount: 130,
    height: "5'6\"",
    languages: ["English", "Hindi"],
    bio: "Independent escort in Kanpur Cantonment. Absolute confidentiality guaranteed for cantonment and VIP clients.",
    tags: ["Independent", "Kanpur Cantt", "Discreet"],
    city: "Kanpur"
  },
  {
    id: 310,
    name: "Krutika",
    age: 23,
    category: "Luxury Escort",
    image: "/images/310.jpg",
    alt: "Krutika - Luxury Escort in Barra Kanpur",
    location: "Barra",
    rating: 4.9,
    reviewsCount: 94,
    height: "5'5\"",
    languages: ["Hindi", "English"],
    bio: "High-class luxury escort covering Barra sectors 1-8. Punctual, verified, and available for same-day booking.",
    tags: ["Luxury", "Barra", "Same Day"],
    city: "Kanpur"
  }
];

const kanpurAreas = [
  { name: "Civil Lines", slug: "civil-lines", pincode: "208001", popular: true },
  { name: "Swaroop Nagar", slug: "swaroop-nagar", pincode: "208002", popular: true },
  { name: "Govind Nagar", slug: "govind-nagar", pincode: "208006", popular: true },
  { name: "Kidwai Nagar", slug: "kidwai-nagar", pincode: "208011", popular: true },
  { name: "Kakadeo", slug: "kakadeo", pincode: "208025", popular: true },
  { name: "Mall Road", slug: "mall-road", pincode: "208001", popular: true },
  { name: "Rawatpur", slug: "rawatpur", pincode: "208019", popular: false },
  { name: "Indiranagar", slug: "indiranagar", pincode: "208026", popular: false },
  { name: "Shyam Nagar", slug: "shyam-nagar", pincode: "208015", popular: false },
  { name: "Saket Nagar", slug: "saket-nagar", pincode: "208014", popular: false },
  { name: "Kanpur Cantt", slug: "kanpur-cantt", pincode: "208004", popular: false },
  { name: "Barra", slug: "barra", pincode: "208027", popular: false },
];

export default function KanpurEscorts() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const title = "Kanpur Escorts & Call Girls | Escort Service in Kanpur | Call +91 8523045235";
  const desc = "Verified Kanpur escorts and call girls — Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar & Mall Road. 100% pay on arrival, zero advance payment. Fast 45-min home/hotel delivery. Call +91 8523045235 / +91 9621326466.";
  const canonical = "https://joya.kanpureliteservice.com/kanpur-escorts";
  const keywords = "kanpur escorts, escort in kanpur, kanpur call girls, call girl in kanpur, escort service kanpur, civil lines escort kanpur, swaroop nagar call girl, kakadeo escorts, govind nagar call girl";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={title} description={desc} canonicalUrl={canonical} keywords={keywords} />
      <Navbar />

      {/* Hero Header */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #180509 0%, #2b0811 50%, #120306 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.2)", border: "1px solid rgba(233,30,115,0.4)", color: "#ff6b9d" }}>
            <MapPin className="h-4 w-4" /> KANPUR COMPANION SERVICE
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em" }}>
            Kanpur <span className="gradient-text-pink">Escorts &amp; Call Girls</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#d4aab3" }}>
            Kanpur's premier verified escort directory. Covering Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar, Mall Road, Kidwai Nagar &amp; Kanpur Cantt. 100% Cash on Arrival — Zero Advance Deposit.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${phoneNumber}`} className="btn-primary text-sm px-6 py-3">
              <Phone className="h-4 w-4" /> Call: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-primary text-sm px-6 py-3" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
              <Phone className="h-4 w-4" /> Call: +91 9621326466
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm px-6 py-3">
              <MessageCircle className="h-4 w-4" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              Verified Kanpur <span className="gradient-text-pink">Companion Profiles</span>
            </h2>
            <p className="text-xs sm:text-sm" style={{ color: "#c2929a" }}>Select any model profile to inspect bio, rating, details and direct booking links.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kanpurProfiles.map((p) => (
              <article key={p.id} className="profile-card relative overflow-hidden cursor-pointer" style={{ background: "#140509", border: "1px solid #3d1018", borderRadius: "4px" }} onClick={() => setSelectedProfile(p)}>
                <div className="relative overflow-hidden" style={{ height: "300px" }}>
                  <img src={p.image} alt={p.alt} className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #140509 0%, transparent 50%)" }} />
                  <div className="absolute top-3 left-3"><span className="badge-vip">{p.category}</span></div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs" style={{ color: "#d4aab3" }}><MapPin className="h-3 w-3 text-pink-500" /> {p.location}, Kanpur</div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}, <span className="text-pink-500">{p.age}</span></h3>
                  <p className="text-xs line-clamp-2 my-2" style={{ color: "#c2929a" }}>{p.bio}</p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t" style={{ borderColor: "#3d1018", color: "#fcd34d" }}>
                    <span>★ {p.rating} ({p.reviewsCount})</span>
                    <span className="text-pink-400 font-semibold">View Profile →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Kanpur Area Landing Page Quick Links */}
          <div className="p-8 rounded" style={{ background: "#140509", border: "1px solid #3d1018" }}>
            <h3 className="text-xl font-bold uppercase text-white mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>📍 Kanpur Locality Pages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs">
              {kanpurAreas.map((a) => (
                <a key={a.slug} href={`/areas/${a.slug}`} className="p-3 rounded hover:border-pink-500 transition-colors flex items-center gap-2" style={{ background: "#1a0709", border: "1px solid #3d1018", color: "#f5e6ea" }}>
                  <Zap className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white uppercase">{a.name}</div>
                    <div className="text-[10px]" style={{ color: "#c2929a" }}>PIN: {a.pincode} • 45m Delivery</div>
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
