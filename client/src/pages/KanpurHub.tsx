import { useState } from "react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles, Crown, ChevronDown } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion%20in%20Kanpur.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion%20in%20Kanpur.";

const kanpurLocalities = [
  { name: "Civil Lines", slug: "civil-lines", pincode: "208001", status: "VIP Corridor • 45 Min Delivery", popular: true, desc: "Kanpur's premier administrative and high-profile hotel district." },
  { name: "Swaroop Nagar", slug: "swaroop-nagar", pincode: "208002", status: "Upscale District • 45 Min Delivery", popular: true, desc: "High-end residential neighborhood near GSVM Medical College." },
  { name: "Govind Nagar", slug: "govind-nagar", pincode: "208006", status: "South-West Hub • 45 Min Delivery", popular: true, desc: "Active commercial and residential sector in South Kanpur." },
  { name: "Kidwai Nagar", slug: "kidwai-nagar", pincode: "208011", status: "Planned Township • 45 Min Delivery", popular: true, desc: "Organized residential blocks with maximum privacy." },
  { name: "Kakadeo", slug: "kakadeo", pincode: "208025", status: "Coaching Hub • 45 Min Delivery", popular: true, desc: "Dynamic student and modern apartment hub." },
  { name: "Mall Road", slug: "mall-road", pincode: "208001", status: "Hotel Strip • 45 Min Delivery", popular: true, desc: "Prime commercial hotel corridor for business travelers." },
  { name: "Rawatpur", slug: "rawatpur", pincode: "208019", status: "Railway Zone • 45 Min Delivery", popular: false, desc: "Convenient transit location near Rawatpur station." },
  { name: "Shyam Nagar", slug: "shyam-nagar", pincode: "208013", status: "GT Road Sector • 45 Min Delivery", popular: false, desc: "Fast-developing residential area along the GT Road corridor." },
  { name: "Saket Nagar", slug: "saket-nagar", pincode: "208014", status: "Suburban Haven • 45 Min Delivery", popular: false, desc: "Quiet residential colony with verified home outcall options." },
  { name: "Kanpur Cantt", slug: "kanpur-cantt", pincode: "208004", status: "Cantonment Zone • 45 Min Delivery", popular: false, desc: "Prestigious green zone with strict security and complete privacy." },
  { name: "Barra", slug: "barra", pincode: "208027", status: "Sprawling Sector • 45 Min Delivery", popular: false, desc: "Large township with broad coverage for outcall hotel stays." },
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
    bio: "VIP PREMIUM ESCORT AGENCY SERVICE IN CIVIL LINES KANPUR ❣️ 100% GENUINE & SAFE SERVICE WITH CLEAN HYGIENIC ACCOMMODATION. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: A-Level 5-Star VIP Escort ◾ S-GFE (Special Girlfriend Experience) ◾ Hotel Suite Outcall ◾ Romantic Dinner Companion ◾ Night Out Party Escort ◾ 100% Cash On Arrival.", 
    tags: ["VIP Escort", "Civil Lines", "Incall/Outcall", "GFE"], 
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
    bio: "VIP CALL GIRL SERVICE IN GOVIND NAGAR KANPUR ❣️ CHARMING & SWEET-NATURED VIP COMPANION FOR RELAXING HOTEL & HOME DATES. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: VIP Call Girl ◾ GFE Romantic Companion ◾ South Kanpur Outcall ◾ 100% Cash On Arrival.", 
    tags: ["VIP Escort", "Govind Nagar", "South Kanpur", "Incall/Outcall"], 
    city: "Kanpur" 
  },
  { 
    id: 308, 
    name: "Shreya", 
    age: 23, 
    category: "College Model", 
    image: "/images/308.jpg", 
    alt: "Shreya - College Model in Kidwai Nagar Kanpur", 
    location: "Kidwai Nagar", 
    rating: 4.9, 
    reviewsCount: 88, 
    height: "5'4\"", 
    languages: ["Hindi", "English"], 
    bio: "COLLEGE MODEL COMPANION IN KIDWAI NAGAR KANPUR 🔥 STUNNING & LIVELY COMPANION FOR CASUAL DATING, DINNER OUTINGS, & HOTEL VISITS. AVAILABLE 24/7 WITH EXPRESS 45-MIN DELIVERY. • 100% CASH ON ARRIVAL.", 
    tags: ["College Model", "Kidwai Nagar", "Direct Booking", "Incall/Outcall"], 
    city: "Kanpur" 
  },
];

const kanpurFaqs = [
  {
    q: "Is advance payment required for escort booking in Kanpur?",
    a: "Never. Joya Elite operates on a 100% Cash on Arrival policy across all Kanpur localities. You pay only after meeting your companion in person at your hotel or residence."
  },
  {
    q: "Which areas in Kanpur do you cover for 45-minute delivery?",
    a: "We provide 24/7 express delivery across Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Mall Road, Rawatpur, Shyam Nagar, Saket Nagar, Kanpur Cantt, and Barra."
  },
  {
    q: "Can I book companion outcalls to hotels on Mall Road and Civil Lines?",
    a: "Yes. We regularly serve clients at top luxury hotels including The Landmark Hotel (Mall Road), Best Western Plus, Hotel Royal Cliff (Swaroop Nagar), and Mandakini Group hotels."
  },
  {
    q: "Are the companion profile photos authentic?",
    a: "Yes, 100%. All profiles featured on Joya Elite Kanpur Hub have undergone verification. What you preview on WhatsApp is exactly who arrives."
  }
];

export default function KanpurHub() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const title = "Kanpur Escorts | #1 Escort Service in Kanpur | Verified Call Girls | Joya Elite";
  const desc = "Premier Kanpur Escorts Hub. Verified call girls, VIP companions & independent models across Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar & Mall Road. 100% Cash on Arrival, 45-min delivery. Call +91 8523045235.";
  const keywords = "kanpur escorts, escort in kanpur, kanpur call girls, escort service in kanpur, independent escorts kanpur, civil lines escort, swaroop nagar call girl, kakadeo escort, mall road escort, govind nagar call girl";

  const kanpurSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://joya.kanpureliteservice.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kanpur Escorts Hub",
          "item": "https://joya.kanpureliteservice.com/kanpur"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Kanpur VIP Escorts & Call Girls Service",
      "url": "https://joya.kanpureliteservice.com/kanpur",
      "telephone": "+91-8523045235",
      "image": "https://joya.kanpureliteservice.com/images/301.jpg",
      "areaServed": {
        "@type": "City",
        "name": "Kanpur"
      },
      "priceRange": "₹₹₹"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={title} description={desc} canonicalUrl="https://joya.kanpureliteservice.com/kanpur" keywords={keywords} schema={kanpurSchema} />
      <Header />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 py-3.5 text-xs w-full text-[#c4bdad]" aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><Link href="/" className="hover:text-[#dfb76c] transition-colors">Home</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-[#dfb76c] font-semibold">Kanpur Escorts Hub</span></li>
        </ol>
      </nav>

      {/* ─── KANPUR HERO BANNER ─── */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-[#282033]/60 bg-gradient-to-b from-[#150f1e] via-[#0b0811] to-[#08070b]">
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[#181220] border border-[#dfb76c]/40">
            <Sparkles className="h-3.5 w-3.5 text-[#dfb76c]" />
            <span className="text-[#dfb76c] uppercase font-bold tracking-wider">
              KANPUR CITY ESCORTS DIRECTORY (/kanpur)
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#f6f3ee] mb-6 leading-tight max-w-5xl mx-auto"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Kanpur Escorts &amp; <span className="gradient-text-gold">Call Girls Service</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-[#c4bdad] mb-10">
            Premier verified escort directory for Kanpur, Uttar Pradesh. Discover VIP companions, independent escorts, and college models across Civil Lines, Swaroop Nagar, Mall Road, and Kakadeo. Guaranteed <strong className="text-[#dfb76c]">100% Cash on Arrival</strong> &amp; express 45-minute hotel room delivery.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phoneNumber}`} className="btn-luxury-gold text-xs sm:text-sm px-6 py-3.5">
              <Phone className="h-4 w-4 inline mr-2" /> Helpline 1: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy text-xs sm:text-sm px-6 py-3.5">
              <Phone className="h-4 w-4 inline mr-2" /> Helpline 2: +91 9621326466
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-xs sm:text-sm px-6 py-3.5">
              <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp Kanpur Concierge
            </a>
          </div>
        </div>
      </section>

      {/* ─── KANPUR 11 LOCALITY HUBS MATRIX ─── */}
      <section className="py-16 bg-[#0c0911] border-b border-[#282033]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
              11 Kanpur Locality Hubs
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee]"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Browse By <span className="gradient-text-gold">Kanpur Neighborhood</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#c4bdad] mt-2">
              Select a locality below to view dedicated companions, pricing, and hotel outcall coverage:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {kanpurLocalities.map((loc) => (
              <Link
                key={loc.slug}
                href={`/kanpur/${loc.slug}`}
                className="card-luxury p-5 flex flex-col justify-between hover:border-[#dfb76c] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#dfb76c] uppercase">PIN: {loc.pincode}</span>
                    {loc.popular && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/70 text-[#dfb76c] border border-amber-600/40">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#f6f3ee] group-hover:text-[#dfb76c] transition-colors mb-1.5" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                    {loc.name} Escorts
                  </h3>
                  <p className="text-xs text-[#c4bdad] line-clamp-2 leading-relaxed mb-3">
                    {loc.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2d2438] flex items-center justify-between text-xs">
                  <span className="text-emerald-400 text-[10px] font-semibold">{loc.status}</span>
                  <span className="text-[#dfb76c] font-bold flex items-center gap-1">
                    Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KANPUR COMPANIONS DIRECTORY ─── */}
      <section className="py-20 bg-[#08070b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">
              Verified Profiles
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee] mb-3"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Verified Escorts in <span className="gradient-text-gold">Kanpur</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#c4bdad]">
              Click any model profile to preview full details, stats, bio, and instant booking channels:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kanpurProfiles.map((p) => (
              <div
                key={p.id}
                className="card-luxury overflow-hidden flex flex-col justify-between cursor-pointer group"
                onClick={() => setSelectedProfile(p)}
              >
                <div>
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} - ${p.category} in ${p.location} Kanpur`}
                      className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a13] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-3 left-3">
                      <span className="badge-vip shadow-md">{p.category}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs text-[#f6f3ee] font-semibold flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#dfb76c]" /> {p.location}, Kanpur
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-center mb-1.5">
                      <h3
                        className="font-bold text-[#f6f3ee] text-xl uppercase tracking-wide"
                        style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                      >
                        {p.name}, <span className="gradient-text-gold">{p.age}</span>
                      </h3>
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {p.rating} ({p.reviewsCount})
                      </span>
                    </div>
                    <p className="text-xs text-[#c4bdad] line-clamp-2 leading-relaxed mb-4">{p.bio}</p>
                  </div>
                </div>

                {/* Direct Action triggers */}
                <div className="p-5 pt-0 space-y-2 border-t border-[#2d2438]" onClick={(e) => e.stopPropagation()}>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-3">
                    <a href={`tel:${phoneNumber}`} className="btn-luxury-gold py-2 px-1 text-center justify-center">
                      <Phone className="h-3 w-3 inline mr-1" /> Call 1
                    </a>
                    <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy py-2 px-1 text-center justify-center">
                      <Phone className="h-3 w-3 inline mr-1" /> Call 2
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a href={`https://wa.me/918523045235?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Kanpur.`} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2 px-1 text-center justify-center">
                      <MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 1
                    </a>
                    <a href={`https://wa.me/919621326466?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Kanpur.`} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2 px-1 text-center justify-center">
                      <MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 2
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RICH EDITORIAL KANPUR LOCAL SEO CONTENT ─── */}
      <section className="py-16 bg-[#0c0911] border-y border-[#282033]/60">
        <div className="mx-auto max-w-5xl px-4 space-y-10 text-left">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold uppercase text-[#f6f3ee] mb-4"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Kanpur Escorts &amp; Call Girls — <span className="gradient-text-gold">#1 Verified Escort Service in Kanpur</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mb-4">
              Welcome to the official <strong>Kanpur Escorts Hub</strong> on <strong>Joya Elite</strong>. We offer high-class, 100% verified <strong>Kanpur Call Girls</strong>, VIP escorts, independent companions, college models, and housewife call girls available for 24/7 Incall and Outcall bookings across Kanpur, Uttar Pradesh. Whether you are staying at a luxury 5-star hotel on Mall Road, a private residence in Civil Lines, or a cozy apartment in Swaroop Nagar, our escort service guarantees doorstep arrival within 45 minutes with 100% Cash on Arrival and zero advance payment required.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
              Kanpur is Uttar Pradesh's commercial capital, attracting business travelers, corporate delegates, and luxury seekers. Our escort agency in Kanpur caters to gentlemen who value privacy, elegance, clean hygienic accommodation, and authentic companion profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-luxury p-5">
              <h3 className="text-sm font-bold text-[#dfb76c] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                VIP Escorts in Civil Lines &amp; Mall Road
              </h3>
              <p className="text-xs leading-relaxed text-[#c4bdad]">
                Supermodel-class VIP call girls for luxury hotel outcalls along Mall Road and Civil Lines hotel corridor. Ideal for corporate dinners and VIP suite appointments.
              </p>
            </div>
            <div className="card-luxury p-5">
              <h3 className="text-sm font-bold text-[#dfb76c] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                College Models in Swaroop Nagar &amp; Kakadeo
              </h3>
              <p className="text-xs leading-relaxed text-[#c4bdad]">
                Youthful, sweet-tempered college model companions near Swaroop Nagar restaurants and Kakadeo coaching hub. Perfect for fun casual dates and romantic outings.
              </p>
            </div>
            <div className="card-luxury p-5">
              <h3 className="text-sm font-bold text-[#dfb76c] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Independent Companions in Govind Nagar
              </h3>
              <p className="text-xs leading-relaxed text-[#c4bdad]">
                Mature, affectionate independent escorts and housewife companions in South Kanpur (Govind Nagar, Kidwai Nagar, Barra) for discreet home visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KANPUR FAQ SECTION ─── */}
      <section className="py-16 bg-[#08070b]">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#f6f3ee] uppercase"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Kanpur Escort Service — <span className="gradient-text-gold">Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {kanpurFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-luxury p-5 cursor-pointer transition-all"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-[#f6f3ee] text-sm sm:text-base uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
                      {faq.q}
                    </h3>
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
        </div>
      </section>

      <Footer />
      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}
    </div>
  );
}
