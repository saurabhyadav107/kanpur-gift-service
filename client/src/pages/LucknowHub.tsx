import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileModal, Profile } from "@/components/ProfileModal";
import { MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles, Crown, ChevronDown } from "lucide-react";
import { Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion%20in%20Lucknow.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion%20in%20Lucknow.";

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
  { id: 401, name: "Priya", age: 23, category: "VIP Escort", image: "/images/lucknow-401.jpg", alt: "Priya - VIP Call Girl in Gomti Nagar Lucknow", location: "Gomti Nagar", rating: 5.0, reviewsCount: 156, height: "5'5\"", languages: ["Hindi", "English"], bio: "VIP PREMIUM ESCORT AGENCY SERVICE IN GOMTI NAGAR LUCKNOW ❣️ 100% GENUINE SERVICE WITH GOOD & SAFE HYGIENIC HOTEL ROOM ACCOMMODATION NEAR HYATT REGENCY. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: A-Level 5-Star VIP Call Girl ◾ S-GFE (Special Girlfriend Experience) ◾ Hotel Suite Outcall ◾ Romantic Evening Dinner Date ◾ 100% Discretion & Cash On Arrival.", tags: ["VIP Call Girl", "Gomti Nagar", "Incall/Outcall", "S-GFE"], city: "Lucknow" },
  { id: 402, name: "Aanya", age: 24, category: "Independent", image: "/images/lucknow-402.jpg", alt: "Aanya - Independent Escort in Hazratganj Lucknow", location: "Hazratganj", rating: 4.9, reviewsCount: 132, height: "5'6\"", languages: ["Hindi", "English"], bio: "INDEPENDENT VIP ESCORT SERVICE IN HAZRATGANJ LUCKNOW 🔥 100% PRIVATE DIRECT BOOKING NEAR TAJ HOTEL. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: Independent Call Girl ◾ GFE Companion ◾ Outcall Hotel Delivery ◾ Cozy Romantic Evening ◾ 100% Safe Clean Accommodation & Zero Advance.", tags: ["Independent Escort", "Hazratganj", "Taj Hotel Outcall", "Incall/Outcall"], city: "Lucknow" },
  { id: 403, name: "Nisha", age: 22, category: "College Model", image: "/images/lucknow-403.jpg", alt: "Nisha - College Model Call Girl in Indira Nagar Lucknow", location: "Indira Nagar", rating: 4.9, reviewsCount: 108, height: "5'4\"", languages: ["Hindi", "English"], bio: "COLLEGE MODEL CALL GIRL AGENCY SERVICE IN INDIRA NAGAR LUCKNOW ❣️ 100% REAL PHOTOS & FAST 45-MIN DOORSTEP DELIVERY. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Young College Girl ◾ S-GFE ◾ Sweet Affection ◾ Party Companion ◾ Clean Safe Environment ◾ Pay On Arrival.", tags: ["College Model", "Indira Nagar", "45-Min Fast Delivery", "GFE"], city: "Lucknow" },
  { id: 404, name: "Kavya", age: 25, category: "Luxury Escort", image: "/images/lucknow-404.jpg", alt: "Kavya - Luxury Escort in Aliganj Lucknow", location: "Aliganj", rating: 5.0, reviewsCount: 174, height: "5'7\"", languages: ["English", "Hindi"], bio: "LUXURY 5-STAR VIP ESCORT SERVICE IN ALIGANJ & MAHANAGAR LUCKNOW 👑 HIGH PROFILE SUPERMODEL COMPANION. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: 5-Star VIP Escort ◾ S-GFE ◾ Executive Suite Dates ◾ Business Dinner Escort ◾ Complete Discretion & Safe Clean Accommodation.", tags: ["Luxury Escort", "Aliganj", "5-Star Service", "Incall/Outcall"], city: "Lucknow" },
  { id: 405, name: "Ritika", age: 21, category: "VIP Escort", image: "/images/lucknow-405.jpg", alt: "Ritika - VIP Call Girl in Alambagh Lucknow", location: "Alambagh", rating: 4.8, reviewsCount: 95, height: "5'5\"", languages: ["Hindi", "English"], bio: "VIP CALL GIRL SERVICE IN ALAMBAGH LUCKNOW NEAR CHARBAGH 🔥 100% GENUINE & SAFE PLACE COMPANION. AVAILABLE 24/7 INCALL & OUTCALL BOTH. • SERVICES: VIP Call Girl ◾ GFE Experience ◾ Express Transit Delivery ◾ Hotel Outcall ◾ Warm Romance ◾ Pay After Arrival.", tags: ["VIP Call Girl", "Alambagh", "Transit Escort", "Pay On Arrival"], city: "Lucknow" },
  { id: 406, name: "Meera", age: 24, category: "Independent", image: "/images/lucknow-406.jpg", alt: "Meera - Independent Escort in Shaheed Path Lucknow", location: "Shaheed Path", rating: 4.9, reviewsCount: 121, height: "5'6\"", languages: ["Hindi", "English"], bio: "INDEPENDENT VIP ESCORT SERVICE NEAR SHAHEED PATH & SUSHANT GOLF CITY LUCKNOW ❣️ 100% PRIVATE ESCORT FOR LUXURY SUITES & VILLAS. AVAILABLE 24/7 INCALL & OUTCALL. • SERVICES: Independent Companion ◾ Romantic S-GFE ◾ High Profile Outcall ◾ 100% Cash On Arrival.", tags: ["Independent Escort", "Shaheed Path", "Sushant Golf City", "Incall/Outcall"], city: "Lucknow" },
];

const lucknowFaqs = [
  { q: "Is advance payment required for escort booking in Lucknow?", a: "No. Joya Elite operates on a strict 100% Cash on Arrival policy across all Lucknow localities. You pay nothing until meeting your companion in person." },
  { q: "Which areas in Lucknow do you cover for hotel and home delivery?", a: "We provide 24/7 express delivery across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, Gomti Nagar Extension, Mahanagar, and Amausi Airport." },
  { q: "Can I book outcalls to luxury hotels in Gomti Nagar & Hazratganj?", a: "Yes. We regularly serve clients at top luxury hotels including Hyatt Regency Gomti Nagar, Taj Mahal Lucknow (Hazratganj), Renaissance Lucknow, Novotel, and Hilton Garden Inn." },
  { q: "How fast will my companion arrive in Lucknow?", a: "Companions typically arrive at your hotel suite or residence within 35 to 45 minutes of booking confirmation." }
];

export default function LucknowHub() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const title = "Lucknow Escorts | #1 Escort Service in Lucknow | Verified Call Girls | Joya Elite";
  const desc = "Premier Lucknow Escorts Hub. Verified call girls, VIP companions & independent models across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj & Shaheed Path. 100% Cash on Arrival, 45-min delivery. Call +91 8523045235.";
  const keywords = "lucknow escorts, escort in lucknow, lucknow call girls, escort service in lucknow, independent escorts lucknow, gomti nagar escort, hazratganj call girl, aliganj escort, shaheed path escort, indira nagar call girl";

  const lucknowSchema = [
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
          "name": "Lucknow Escorts Hub",
          "item": "https://joya.kanpureliteservice.com/lucknow"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Lucknow VIP Escorts & Call Girls Service",
      "url": "https://joya.kanpureliteservice.com/lucknow",
      "telephone": "+91-8523045235",
      "image": "https://joya.kanpureliteservice.com/images/lucknow-401.jpg",
      "areaServed": {
        "@type": "City",
        "name": "Lucknow"
      },
      "priceRange": "₹₹₹"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={title} description={desc} canonicalUrl="https://joya.kanpureliteservice.com/lucknow" keywords={keywords} schema={lucknowSchema} />
      <Header />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 py-3.5 text-xs w-full text-[#c4bdad]" aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><Link href="/" className="hover:text-[#dfb76c] transition-colors">Home</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-[#dfb76c] font-semibold">Lucknow Escorts Hub</span></li>
        </ol>
      </nav>

      <section className="relative pt-20 pb-24 overflow-hidden border-b border-[#282033]/60 bg-gradient-to-b from-[#180e22] via-[#0b0811] to-[#08070b]">
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[#181220] border border-[#dfb76c]/40">
            <Sparkles className="h-3.5 w-3.5 text-[#dfb76c]" />
            <span className="text-[#dfb76c] uppercase font-bold tracking-wider">LUCKNOW CITY ESCORTS DIRECTORY (/lucknow)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#f6f3ee] mb-6 leading-tight max-w-5xl mx-auto" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
            Lucknow Escorts &amp; <span className="gradient-text-gold">VIP Call Girls Service</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-[#c4bdad] mb-10">
            Welcome to Lucknow's elite companion directory. Discover top-rated VIP escorts, independent companions, and college models in Gomti Nagar, Hazratganj, Indira Nagar, and Shaheed Path. Guaranteed <strong className="text-[#dfb76c]">100% Cash on Arrival</strong> &amp; express 45-minute hotel suite delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phoneNumber}`} className="btn-luxury-gold text-xs sm:text-sm px-6 py-3.5">
              <Phone className="h-4 w-4 inline mr-2" /> Helpline 1: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy text-xs sm:text-sm px-6 py-3.5">
              <Phone className="h-4 w-4 inline mr-2" /> Helpline 2: +91 9621326466
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-xs sm:text-sm px-6 py-3.5">
              <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp Lucknow Concierge
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c0911] border-b border-[#282033]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">9 Lucknow Locality Hubs</span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee]" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
              Browse By <span className="gradient-text-gold">Lucknow Neighborhood</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#c4bdad] mt-2">Select a locality below to view dedicated companions, pricing, and hotel outcall coverage:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lucknowLocalities.map((loc) => (
              <Link key={loc.slug} href={`/lucknow/${loc.slug}`} className="card-luxury p-5 flex flex-col justify-between hover:border-[#dfb76c] transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#dfb76c] uppercase">PIN: {loc.pincode}</span>
                    {loc.popular && <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/70 text-[#dfb76c] border border-amber-600/40">POPULAR</span>}
                  </div>
                  <h3 className="text-lg font-bold text-[#f6f3ee] group-hover:text-[#dfb76c] transition-colors mb-1.5" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>{loc.name} Escorts</h3>
                  <p className="text-xs text-[#c4bdad] line-clamp-2 leading-relaxed mb-3">{loc.desc}</p>
                </div>
                <div className="pt-3 border-t border-[#2d2438] flex items-center justify-between text-xs">
                  <span className="text-emerald-400 text-[10px] font-semibold">{loc.status}</span>
                  <span className="text-[#dfb76c] font-bold flex items-center gap-1">Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#08070b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#dfb76c] mb-2 block">Verified Lucknow Profiles</span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-[#f6f3ee] mb-3" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
              Verified Escorts in <span className="gradient-text-gold">Lucknow</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#c4bdad]">Click any model profile to preview full details, stats, bio, and instant booking channels:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lucknowProfiles.map((p) => (
              <div key={p.id} className="card-luxury overflow-hidden flex flex-col justify-between cursor-pointer group" onClick={() => setSelectedProfile(p)}>
                <div>
                  <div className="relative h-80 overflow-hidden">
                    <img src={p.image} alt={`${p.name} - ${p.category} in ${p.location} Lucknow`} className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a13] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-3 left-3"><span className="badge-vip shadow-md">{p.category}</span></div>
                    <div className="absolute bottom-3 left-3 text-xs text-[#f6f3ee] font-semibold flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-[#dfb76c]" /> {p.location}, Lucknow</div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-1.5">
                      <h3 className="font-bold text-[#f6f3ee] text-xl uppercase tracking-wide" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>{p.name}, <span className="gradient-text-gold">{p.age}</span></h3>
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {p.rating} ({p.reviewsCount})</span>
                    </div>
                    <p className="text-xs text-[#c4bdad] line-clamp-2 leading-relaxed mb-4">{p.bio}</p>
                  </div>
                </div>
                <div className="p-5 pt-0 space-y-2 border-t border-[#2d2438]" onClick={(e) => e.stopPropagation()}>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-3">
                    <a href={`tel:${phoneNumber}`} className="btn-luxury-gold py-2 px-1 text-center justify-center"><Phone className="h-3 w-3 inline mr-1" /> Call 1</a>
                    <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy py-2 px-1 text-center justify-center"><Phone className="h-3 w-3 inline mr-1" /> Call 2</a>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a href={`https://wa.me/918523045235?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Lucknow.`} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2 px-1 text-center justify-center"><MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 1</a>
                    <a href={`https://wa.me/919621326466?text=Hello%20${p.name},%20I%20want%20to%20book%20a%20companion%20in%20Lucknow.`} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2 px-1 text-center justify-center"><MessageCircle className="h-3 w-3 inline mr-1" /> WhatsApp 2</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c0911] border-y border-[#282033]/60">
        <div className="mx-auto max-w-5xl px-4 space-y-10 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#f6f3ee] mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
              Lucknow Escorts &amp; VIP Call Girls — <span className="gradient-text-gold">#1 Companion Agency in Lucknow</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mb-4">
              Welcome to the official <strong>Lucknow Escorts Hub</strong> on <strong>Joya Elite</strong>. We offer high-profile, 100% verified <strong>Lucknow Call Girls</strong>, VIP models, independent escorts, and college student companions available 24/7 across Lucknow, Uttar Pradesh. Whether you are staying at a 5-star hotel in Gomti Nagar, attending conferences near Shaheed Path, or visiting Hazratganj, our agency guarantees express 45-minute hotel room delivery with 100% Cash on Arrival and zero advance deposit.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">Lucknow is the cultural and administrative heart of Uttar Pradesh. Our luxury escort service caters to high-profile travelers, executive delegates, and discerning gentlemen who require absolute discretion, verified beauty, and zero financial risks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-luxury p-5">
              <h3 className="text-sm font-bold text-[#dfb76c] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>VIP Escorts in Gomti Nagar</h3>
              <p className="text-xs leading-relaxed text-[#c4bdad]">Supermodel-class VIP companions for luxury hotel suite appointments near Hyatt Regency, Renaissance, and Novotel Lucknow.</p>
            </div>
            <div className="card-luxury p-5">
              <h3 className="text-sm font-bold text-[#dfb76c] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>Independent Escorts in Hazratganj</h3>
              <p className="text-xs leading-relaxed text-[#c4bdad]">Mature, elegant independent call girls offering private dates and romantic evenings near Taj Hotel Hazratganj.</p>
            </div>
            <div className="card-luxury p-5">
              <h3 className="text-sm font-bold text-[#dfb76c] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>College Models in Indira Nagar &amp; Aliganj</h3>
              <p className="text-xs leading-relaxed text-[#c4bdad]">Charming, youthful companions for casual dinners, city tours, and private hotel suite dates with zero advance fees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#08070b]">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f6f3ee] uppercase" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
              Lucknow Escort Service — <span className="gradient-text-gold">Frequently Asked Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {lucknowFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="card-luxury p-5 cursor-pointer transition-all" onClick={() => toggleFaq(idx)}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-[#f6f3ee] text-sm sm:text-base uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>{faq.q}</h3>
                    <ChevronDown className={`h-4 w-4 text-[#dfb76c] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  {isOpen && <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mt-3 pt-3 border-t border-[#2d2438]">{faq.a}</p>}
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
