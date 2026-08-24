import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { Phone, MessageCircle, MapPin, Sparkles, ArrowRight } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello,%20I%20want%20to%20book%20a%20companion.";

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
  }
];

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const homeTitle = "Kanpur Escorts & Lucknow Escorts | Call Girls Service Kanpur Lucknow | Call +91 8523045235";
  const homeDesc = "Premier Kanpur Escorts & Lucknow Escorts directory. Verified call girls, independent companions, VIP escorts in Kanpur & Lucknow with 100% Cash on Arrival, zero advance deposit, and fast 45-minute hotel delivery. Call +91 8523045235 / +91 9621326466.";
  const homeKeywords = "kanpur escorts, lucknow escorts, escort in kanpur, escort in lucknow, kanpur call girls, lucknow call girls, escort service kanpur, escort service lucknow, kanpur vip escorts, lucknow vip escorts, independent call girl kanpur, independent call girl lucknow, cash on arrival escort kanpur";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={homeTitle} description={homeDesc} canonicalUrl="https://joya.kanpureliteservice.com/" keywords={homeKeywords} />
      <Header />

      <section className="relative py-20 overflow-hidden" style={{ background: "radial-gradient(ellipse at top, #2d0a12 0%, #0e0407 70%)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(233,30,115,0.2)", border: "1px solid rgba(233,30,115,0.4)", color: "#ff6b9d" }}>
            <Sparkles className="h-4 w-4 text-pink-500" /> #1 VERIFIED KANPUR &amp; LUCKNOW ESCORTS DIRECTORY
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold uppercase text-white mb-6 leading-tight" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.03em" }}>
            Kanpur Escorts &amp; <span className="gradient-text-pink">Lucknow Escorts &amp; Call Girls</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg mb-8 leading-relaxed" style={{ color: "#d4aab3" }}>
            Top rated 24/7 escort service &amp; verified call girls across Kanpur &amp; Lucknow. 100% Cash on Arrival — Zero Advance Payment. Express 45-Minute Home &amp; Hotel Delivery Guaranteed.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/kanpur" className="btn-primary text-sm px-6 py-3.5">
              Explore Kanpur Hub (/kanpur) →
            </a>
            <a href="/lucknow" className="btn-primary text-sm px-6 py-3.5" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
              Explore Lucknow Hub (/lucknow) →
            </a>
            <a href="/services/vip-escorts" className="btn-whatsapp text-sm px-6 py-3.5">
              VIP Companion Categories
            </a>
          </div>
        </div>
      </section>

      {/* City Hub Portals */}
      <section className="py-14 border-y" style={{ borderColor: "#3d1018" }}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded relative overflow-hidden" style={{ background: "linear-gradient(135deg, #180509, #290810)", border: "1px solid #3d1018" }}>
              <h2 className="text-2xl font-bold uppercase text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                Kanpur Escorts <span className="gradient-text-pink">Hub</span>
              </h2>
              <p className="text-xs mb-4" style={{ color: "#c2929a" }}>
                Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar, Mall Road &amp; Kanpur Cantt.
              </p>
              <a href="/kanpur" className="inline-flex items-center gap-2 font-bold text-xs uppercase text-pink-400 hover:text-pink-300">
                View Kanpur City Page (/kanpur) <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="p-8 rounded relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1c070b, #330b14)", border: "1px solid rgba(233,30,115,0.4)" }}>
              <div className="absolute top-4 right-4"><span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-pink-600 text-white">NEW</span></div>
              <h2 className="text-2xl font-bold uppercase text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                Lucknow Escorts <span className="gradient-text-pink">Hub</span>
              </h2>
              <p className="text-xs mb-4" style={{ color: "#c2929a" }}>
                Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh &amp; Shaheed Path.
              </p>
              <a href="/lucknow" className="inline-flex items-center gap-2 font-bold text-xs uppercase text-pink-400 hover:text-pink-300">
                View Lucknow City Page (/lucknow) <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              Featured <span className="gradient-text-pink">VIP Companions</span>
            </h2>
            <p className="text-xs sm:text-sm" style={{ color: "#c2929a" }}>Top rated models available today in Kanpur &amp; Lucknow.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredModels.map((p) => (
              <article 
                key={p.id} 
                className="profile-card relative overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1.5" 
                style={{ 
                  background: "rgba(20, 5, 9, 0.85)", 
                  border: "1px solid rgba(233, 30, 115, 0.25)", 
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                }} 
                onClick={() => setSelectedProfile(p)}
              >
                {/* Top Gold Shimmer Border Accent */}
                <div className="h-0.5 w-full bg-gradient-to-r from-pink-500 via-amber-400 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <img src={p.image} alt={p.alt} className="h-full w-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #140509 0%, transparent 60%)" }} />
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="badge-vip shadow-md">{p.category}</span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 45-Min Outcall
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-medium" style={{ color: "#f5e6ea" }}>
                    <MapPin className="h-3.5 w-3.5 text-pink-400" /> {p.location}, {p.city}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-lg uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {p.name}, <span className="text-pink-400">{p.age}</span>
                    </h3>
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30">
                      ★ {p.rating}
                    </span>
                  </div>

                  <p className="text-xs line-clamp-2 my-2 leading-relaxed" style={{ color: "#c2929a" }}>{p.bio}</p>
                  
                  <div className="flex items-center justify-between text-xs pt-3 border-t mt-2 transition-colors group-hover:border-pink-500/40" style={{ borderColor: "rgba(233, 30, 115, 0.15)" }}>
                    <span className="text-amber-400/90 text-[11px] font-medium">100% Cash On Arrival</span>
                    <span className="text-pink-400 font-bold group-hover:text-pink-300 flex items-center gap-1">
                      Inspect Profile <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a href="/profiles" className="btn-primary text-xs px-6 py-3">
              View All Verified Models Directory →
            </a>
          </div>

          {/* ═══════════════════════════════════════════
               RICH SEO CONTENT SECTION — Kanpur & Lucknow
             ═══════════════════════════════════════════ */}
          <section className="mt-20 pt-12 border-t" style={{ borderColor: "#3d1018" }}>
            <div className="max-w-5xl mx-auto text-left space-y-12">
              
              {/* Article 1: Brand & Service Overview */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Kanpur Escorts &amp; Lucknow Escorts — <span className="gradient-text-pink">#1 Premier Companion Service</span>
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
                  Welcome to <strong>Joya Elite</strong>, North India's premier agency directory for <strong>Kanpur Escorts</strong> and <strong>Lucknow Escorts</strong>. We provide genuine, verified call girls, VIP companions, independent escorts, and college model companions available 24/7 across Kanpur and Lucknow. Whether you are staying at a luxury hotel on Mall Road Kanpur or attending business meetings near Gomti Nagar Lucknow, our escort service guarantees 100% privacy, zero advance payment, and express 45-minute home and hotel room delivery.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
                  Our agency model prioritizes client safety, hygienic clean accommodation, direct companion contact, and flexible 24/7 Incall and Outcall bookings. You never have to pay any advance deposit or online registration fee — you pay 100% cash on arrival after meeting your companion in person.
                </p>
              </div>

              {/* Grid 2: 4 Category SEO Breakdowns */}
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Explore Companion Categories in <span className="gradient-text-pink">Kanpur &amp; Lucknow</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="p-6 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <h4 className="text-lg font-bold text-pink-400 mb-2 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
                      1. VIP Escorts in Kanpur &amp; Lucknow
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                      Our <strong>VIP Escorts in Kanpur</strong> and <strong>VIP Call Girls in Lucknow</strong> represent supermodel-class companions for luxury hotel stays, corporate dinners, and high-profile private events. Available near Mall Road, Civil Lines, Hyatt Regency Gomti Nagar, and Taj Hotel Hazratganj.
                    </p>
                    <a href="/services/vip-escorts" className="inline-block text-xs font-semibold text-pink-400 hover:underline mt-3">
                      Browse VIP Companions →
                    </a>
                  </div>

                  <div className="p-6 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <h4 className="text-lg font-bold text-pink-400 mb-2 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
                      2. College Model Escorts
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                      Youthful, energetic, and bubbly companions in Swaroop Nagar, Kakadeo, Indira Nagar, and Hazratganj. Perfect for dinner dates, evening outings, and fun casual companionship with 100% genuine verified photos.
                    </p>
                    <a href="/services/college-models" className="inline-block text-xs font-semibold text-pink-400 hover:underline mt-3">
                      Browse College Models →
                    </a>
                  </div>

                  <div className="p-6 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <h4 className="text-lg font-bold text-pink-400 mb-2 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
                      3. Independent Escorts &amp; Bhabhi Call Girls
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                      Warm, mature, and caring independent companions offering unhurried romantic companionship across Kidwai Nagar, Govind Nagar, Aliganj, and Shaheed Path. Direct booking with absolute discretion guaranteed.
                    </p>
                    <a href="/services/independent" className="inline-block text-xs font-semibold text-pink-400 hover:underline mt-3">
                      Browse Independent Escorts →
                    </a>
                  </div>

                  <div className="p-6 rounded" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <h4 className="text-lg font-bold text-pink-400 mb-2 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
                      4. Luxury &amp; High-Profile Outcall Escorts
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                      Exclusive companions for business executives and discerning gentlemen visiting guest houses in Kanpur Cantt, Sushant Golf City Lucknow, and Phoenix Palassio hotels. 100% private and confidential.
                    </p>
                    <a href="/services/luxury-escorts" className="inline-block text-xs font-semibold text-pink-400 hover:underline mt-3">
                      Browse Luxury Escorts →
                    </a>
                  </div>

                </div>
              </div>

              {/* Feature 3: Locality Coverage SEO Sitemap Grid */}
              <div className="p-6 rounded" style={{ background: "#140509", border: "1px solid #3d1018" }}>
                <h3 className="text-xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Complete City Coverage — <span className="gradient-text-pink">Kanpur &amp; Lucknow Localities</span>
                </h3>
                <p className="text-xs mb-6" style={{ color: "#c2929a" }}>
                  Fast 45-minute companion outcall delivery is available across all major residential sectors and hotel corridors:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-pink-400 uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                      📍 Kanpur Service Localities (/kanpur)
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs" style={{ color: "#d4aab3" }}>
                      <a href="/kanpur/civil-lines" className="hover:text-pink-400">• Civil Lines Escorts</a>
                      <a href="/kanpur/swaroop-nagar" className="hover:text-pink-400">• Swaroop Nagar Call Girls</a>
                      <a href="/kanpur/govind-nagar" className="hover:text-pink-400">• Govind Nagar Escorts</a>
                      <a href="/kanpur/kidwai-nagar" className="hover:text-pink-400">• Kidwai Nagar Call Girls</a>
                      <a href="/kanpur/kakadeo" className="hover:text-pink-400">• Kakadeo Escort Service</a>
                      <a href="/kanpur/rawatpur" className="hover:text-pink-400">• Rawatpur Call Girls</a>
                      <a href="/kanpur/mall-road" className="hover:text-pink-400">• Mall Road Escorts</a>
                      <a href="/kanpur/kanpur-cantt" className="hover:text-pink-400">• Kanpur Cantt Escorts</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-pink-400 uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                      📍 Lucknow Service Localities (/lucknow)
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs" style={{ color: "#d4aab3" }}>
                      <a href="/lucknow/gomti-nagar" className="hover:text-pink-400">• Gomti Nagar Escorts</a>
                      <a href="/lucknow/hazratganj" className="hover:text-pink-400">• Hazratganj Call Girls</a>
                      <a href="/lucknow/indira-nagar" className="hover:text-pink-400">• Indira Nagar Escorts</a>
                      <a href="/lucknow/aliganj" className="hover:text-pink-400">• Aliganj Call Girls</a>
                      <a href="/lucknow/alambagh" className="hover:text-pink-400">• Alambagh Escort Service</a>
                      <a href="/lucknow/shaheed-path" className="hover:text-pink-400">• Shaheed Path Escorts</a>
                      <a href="/lucknow/gomti-nagar-extension" className="hover:text-pink-400">• Gomti Nagar Ext Escorts</a>
                      <a href="/lucknow/mahanagar" className="hover:text-pink-400">• Mahanagar Call Girls</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Why Choose Joya Elite Grid */}
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-6 text-center" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Why Choose <span className="gradient-text-pink">Joya Elite Kanpur &amp; Lucknow Service?</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-5 rounded text-center" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <div className="text-2xl mb-2">💵</div>
                    <h4 className="text-sm font-bold uppercase text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>100% Cash On Arrival</h4>
                    <p className="text-xs" style={{ color: "#c2929a" }}>Zero advance deposit or online fees required. Pay cash after meeting your companion in person.</p>
                  </div>
                  <div className="p-5 rounded text-center" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="text-sm font-bold uppercase text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>45-Min Express Delivery</h4>
                    <p className="text-xs" style={{ color: "#c2929a" }}>Fast doorstep and hotel room delivery across all Kanpur and Lucknow localities.</p>
                  </div>
                  <div className="p-5 rounded text-center" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <div className="text-2xl mb-2">✅</div>
                    <h4 className="text-sm font-bold uppercase text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>100% Verified Profiles</h4>
                    <p className="text-xs" style={{ color: "#c2929a" }}>Authentic photographs and genuine details. What you select via WhatsApp is what you get.</p>
                  </div>
                  <div className="p-5 rounded text-center" style={{ background: "#180509", border: "1px solid #3d1018" }}>
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="text-sm font-bold uppercase text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Absolute Discretion</h4>
                    <p className="text-xs" style={{ color: "#c2929a" }}>Complete privacy protection. Zero personal client records are stored or shared.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="p-8 rounded text-center" style={{ background: "linear-gradient(135deg, #2d0a12, #180509)", border: "1px solid rgba(233,30,115,0.4)" }}>
                <h3 className="text-2xl font-bold uppercase text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Ready to Book a Companion in <span className="gradient-text-pink">Kanpur or Lucknow?</span>
                </h3>
                <p className="text-sm max-w-2xl mx-auto mb-6" style={{ color: "#d4aab3" }}>
                  Call our 24/7 helplines or send a direct WhatsApp message to receive instant genuine photos, availability, and doorstep arrival within 45 minutes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={`tel:${phoneNumber}`} className="btn-primary text-sm px-6 py-3">
                    <Phone className="h-4 w-4 inline mr-2" /> Helpline 1: +91 8523045235
                  </a>
                  <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-6 py-3">
                    <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp: +91 9621326466
                  </a>
                </div>
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
