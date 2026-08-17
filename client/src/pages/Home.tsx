import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Shield,
  Clock,
  MapPin,
  Star,
  Search,
  CheckCircle2,
  ChevronDown,
  X,
  Lock,
  Award,
  ShieldCheck,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";

const phoneNumber = "+918523045235";
const displayPhone = "+91 8523045235";
const whatsappUrl =
  "https://wa.me/918523045235?text=Hello%20Kanpur%20Elite%20Companions,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

interface Profile {
  id: number;
  name: string;
  age: number;
  category: "VIP" | "College Model" | "Independent" | "Luxury Escort";
  image: string;
  alt: string;
  location: string;
  rating: number;
  reviewsCount: number;
  height: string;
  languages: string[];
  bio: string;
  tags: string[];
}

const profiles: Profile[] = [
  {
    id: 301,
    name: "Aarohi",
    age: 20,
    category: "VIP",
    image: "/images/301.jpg",
    alt: "Aarohi - VIP Call Girl in Civil Lines Kanpur",
    location: "Civil Lines",
    rating: 5.0,
    reviewsCount: 142,
    height: "5'6\"",
    languages: ["English", "Hindi"],
    bio: "Sophisticated, warm, and elegant VIP companion with a gentle demeanor. Perfect for dinner dates, luxury stays, and private companion services in Civil Lines.",
    tags: ["High Society", "Glamorous", "Discreet"],
  },
  {
    id: 302,
    name: "Bhoomi",
    age: 22,
    category: "College Model",
    image: "/images/302.jpg",
    alt: "Bhoomi - College Model Escort in Swaroop Nagar Kanpur",
    location: "Swaroop Nagar",
    rating: 4.9,
    reviewsCount: 118,
    height: "5'5\"",
    languages: ["Hindi", "English"],
    bio: "Charming college model with a vivacious personality. Full of energy, attentive, and dedicated to creating memorable experiences.",
    tags: ["Youthful", "Friendly", "Bubbly"],
  },
  {
    id: 304,
    name: "Disha",
    age: 25,
    category: "Independent",
    image: "/images/304.jpg",
    alt: "Disha - Independent Escort in Govind Nagar Kanpur",
    location: "Govind Nagar",
    rating: 4.9,
    reviewsCount: 96,
    height: "5'7\"",
    languages: ["Hindi", "English"],
    bio: "Stunning independent companion offering absolute privacy and high-class companionship. Experienced, courteous, and very respectful.",
    tags: ["Independent", "Classy", "Subtle"],
  },
  {
    id: 305,
    name: "Ekta",
    age: 27,
    category: "Luxury Escort",
    image: "/images/305.jpg",
    alt: "Ekta - Luxury Escort Service in Kidwai Nagar Kanpur",
    location: "Kidwai Nagar",
    rating: 5.0,
    reviewsCount: 165,
    height: "5'8\"",
    languages: ["English", "Hindi"],
    bio: "Exquisite high-profile model with captivating style. Ideal for discerning gentleman seeking elite company and utmost secrecy.",
    tags: ["Supermodel", "VIP Luxury", "Premium"],
  },
  {
    id: 307,
    name: "Gaurika",
    age: 23,
    category: "VIP",
    image: "/images/307.jpg",
    alt: "Gaurika - VIP Call Girl in Kakadeo Kanpur",
    location: "Kakadeo",
    rating: 4.8,
    reviewsCount: 89,
    height: "5'4\"",
    languages: ["Hindi", "English"],
    bio: "Playful and passionate companion with a lovely smile. Great conversationalist who knows how to make you feel completely relaxed.",
    tags: ["Passionate", "Charming", "Attentive"],
  },
  {
    id: 308,
    name: "Harini",
    age: 29,
    category: "Independent",
    image: "/images/308.jpg",
    alt: "Harini - Independent Escort Companion in Rawatpur Kanpur",
    location: "Rawatpur",
    rating: 5.0,
    reviewsCount: 134,
    height: "5'6\"",
    languages: ["Hindi", "English"],
    bio: "Mature, caring, and sensual companion. Knows how to pamper you with warm hospitality and unhurried quality time.",
    tags: ["Sensual", "Mature", "Comforting"],
  },
  {
    id: 309,
    name: "Ipsita",
    age: 21,
    category: "College Model",
    image: "/images/309.jpg",
    alt: "Ipsita - Young College Model Escort in Indiranagar Kanpur",
    location: "Indiranagar",
    rating: 4.9,
    reviewsCount: 104,
    height: "5'5\"",
    languages: ["English", "Hindi"],
    bio: "Trendy fashion model with sweet manners and radiant energy. Available for express hotel or home visits across Kanpur.",
    tags: ["Trendy", "Sweet", "Express Delivery"],
  },
  {
    id: 310,
    name: "Jivika",
    age: 26,
    category: "Luxury Escort",
    image: "/images/310.jpg",
    alt: "Jivika - Luxury Escort in Mall Road Kanpur",
    location: "Mall Road",
    rating: 5.0,
    reviewsCount: 178,
    height: "5'7\"",
    languages: ["English", "Hindi"],
    bio: "Breathtaking beauty with aristocratic grace. Provides top-tier luxury companionship for gentlemen who demand the finest in life.",
    tags: ["Elite Class", "Luxury", "Top Rated"],
  },
];

const serviceAreas = [
  { name: "Civil Lines", slug: "civil-lines", status: "Active • 45 Min – 1 Hr Delivery", popular: true },
  { name: "Swaroop Nagar", slug: "swaroop-nagar", status: "Active • 45 Min – 1 Hr Delivery", popular: true },
  { name: "Govind Nagar", slug: "govind-nagar", status: "Active • 45 Min – 1 Hr Delivery", popular: true },
  { name: "Kidwai Nagar", slug: "kidwai-nagar", status: "Active • 45 Min – 1 Hr Delivery", popular: true },
  { name: "Kakadeo", slug: "kakadeo", status: "Active • 45 Min – 1 Hr Delivery", popular: true },
  { name: "Rawatpur", slug: "rawatpur", status: "Active • 45 Min – 1 Hr Delivery", popular: false },
  { name: "Indiranagar", slug: "indiranagar", status: "Active • 45 Min – 1 Hr Delivery", popular: false },
  { name: "Mall Road", slug: "mall-road", status: "Active • 45 Min – 1 Hr Delivery", popular: true },
  { name: "Shyam Nagar", slug: "shyam-nagar", status: "Active • 45 Min – 1 Hr Delivery", popular: false },
  { name: "Saket Nagar", slug: "saket-nagar", status: "Active • 45 Min – 1 Hr Delivery", popular: false },
  { name: "Kanpur Cantt", slug: "kanpur-cantt", status: "Active • 45 Min – 1 Hr Delivery", popular: false },
  { name: "Barra", slug: "barra", status: "Active • 45 Min – 1 Hr Delivery", popular: false },
];

const reviews = [
  {
    text: "Unequalled professionalism and utmost discretion. Booking via WhatsApp was seamless and Aarohi arrived right on time in Civil Lines. Highly recommended!",
    name: "Vikram R.",
    location: "Civil Lines, Kanpur",
    rating: 5,
    date: "2 days ago",
  },
  {
    text: "Extremely beautiful companions and 100% verified profiles. What you see is what you get. Prompt home delivery service in Swaroop Nagar.",
    name: "Anand M.",
    location: "Swaroop Nagar, Kanpur",
    rating: 5,
    date: "1 week ago",
  },
  {
    text: "Very polite, charming, and courteous. Absolute privacy guaranteed. Calling 8523045235 was super fast and easy.",
    name: "Sunil K.",
    location: "Govind Nagar, Kanpur",
    rating: 5,
    date: "2 weeks ago",
  },
];

const faqs = [
  {
    q: "Is advance payment required to book escorts in Kanpur?",
    a: "No advance payment is required — ever. We operate on a 100% pay-on-arrival / cash-on-delivery basis. You pay only after the companion arrives at your home or hotel in Kanpur. There is no registration fee, no advance deposit, and no hidden charges. If anyone asks for advance payment in our name, please do not pay — call +91 8523045235 to verify directly.",
  },
  {
    q: "How do I book an escort service in Kanpur?",
    a: "Booking an escort in Kanpur is simple: Step 1 — Call or WhatsApp +91 8523045235. Step 2 — Tell us your location in Kanpur (area, hotel name, or home address) and preferred companion type. Step 3 — Browse verified profiles we share on WhatsApp, confirm your selection, and the companion arrives within 45 minutes to 1 hour. Payment is made in cash directly to the companion after arrival.",
  },
  {
    q: "Can I find escorts near me in Kanpur?",
    a: "Yes. We have verified companions based across all major Kanpur areas — Civil Lines, Swaroop Nagar, Govind Nagar, Kakadeo, Mall Road, Kanpur Cantt, and more. Whichever part of Kanpur you are in, we dispatch the nearest available companion within 45 minutes. Call +91 8523045235 for instant availability check.",
  },
  {
    q: "Are the escort profiles on this site 100% real and verified?",
    a: "Yes. All companion profiles are personally verified by our team. The photographs you receive on WhatsApp before booking are genuine and up-to-date — no fake or stock images. What you see is exactly who arrives.",
  },
  {
    q: "What areas in Kanpur do you cover for home and hotel escort delivery?",
    a: "We provide 24/7 express escort delivery across all prime Kanpur locations including Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Rawatpur, Indiranagar, Mall Road, Shyam Nagar, Saket Nagar, Kanpur Cantt, and Barra.",
  },
  {
    q: "Is my personal identity and privacy protected?",
    a: "Absolute confidentiality is guaranteed. We never store, record, or share any client information. Companions arrive in plain civilian clothing with no visible branding. Your booking is known only to you and our discreet booking team.",
  },
  {
    q: "What are the working hours for escort service in Kanpur?",
    a: "Our escort service and companion delivery operates 24 hours a day, 7 days a week, 365 days a year across Kanpur. Late-night and early-morning bookings are fully supported.",
  },
];

function getCategoryTagClass(cat: Profile["category"]) {
  switch (cat) {
    case "VIP": return "tag-pill tag-vip";
    case "College Model": return "tag-pill tag-college";
    case "Independent": return "tag-pill tag-independent";
    case "Luxury Escort": return "tag-pill tag-luxury";
    default: return "tag-pill tag-vip";
  }
}

import { SEOHead } from "@/components/SEOHead";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [areaSearch, setAreaSearch] = useState<string>("");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const categories = ["All", "VIP", "College Model", "Independent", "Luxury Escort"];

  const filteredProfiles = profiles.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredAreas = serviceAreas.filter((a) =>
    a.name.toLowerCase().includes(areaSearch.toLowerCase())
  );

  const homeTitle = "Kanpur Escorts & Escort Service in Kanpur | Call +91 8523045235";
  const homeDesc = "Kanpur escorts & call girls — 100% verified, zero advance payment, pay on arrival. Trusted escort service in Kanpur with genuine profiles, 24/7 home & hotel delivery across Civil Lines, Swaroop Nagar, Kakadeo & all areas. Call +91 8523045235.";
  const homeKeywords = "kanpur escorts, escort in kanpur, kanpur escort service, kanpur escort services, kanpur call girls, call girl in kanpur, kanpur call girl service, escort service in kanpur, independent escorts in kanpur, kanpur female escorts, kanpur escort booking, escorts in kanpur, kanpur companion service, kanpur local escorts, kanpur escort directory, civil lines escort kanpur, swaroop nagar escort, kakadeo escorts kanpur, govind nagar call girl";

  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://joya.kanpureliteservice.com/#webpage",
      "url": "https://joya.kanpureliteservice.com/",
      "name": "Kanpur Escorts & Escort Service in Kanpur",
      "description": "Kanpur escorts and call girls — 100% verified, zero advance payment, pay on arrival. 24/7 home & hotel escort delivery across all Kanpur areas.",
      "isPartOf": { "@id": "https://joya.kanpureliteservice.com/#organization" },
      "inLanguage": "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joya.kanpureliteservice.com/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is advance payment required to book escorts in Kanpur?",
          "acceptedAnswer": { "@type": "Answer", "text": "No advance payment is required — ever. We operate on a 100% pay-on-arrival / cash-on-delivery basis. You pay only after the companion arrives at your home or hotel in Kanpur. There is no registration fee, no advance deposit, and no hidden charges." }
        },
        {
          "@type": "Question",
          "name": "How do I book an escort service in Kanpur?",
          "acceptedAnswer": { "@type": "Answer", "text": "Step 1 — Call or WhatsApp +91 8523045235. Step 2 — Tell us your location in Kanpur and preferred companion type. Step 3 — Browse verified profiles on WhatsApp, confirm, and the companion arrives within 45 minutes to 1 hour. Payment is cash on arrival." }
        },
        {
          "@type": "Question",
          "name": "Can I find escorts near me in Kanpur?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Verified companions are available across Civil Lines, Swaroop Nagar, Govind Nagar, Kakadeo, Mall Road, Kanpur Cantt, and all major Kanpur areas. Nearest available companion dispatched within 45 minutes." }
        },
        {
          "@type": "Question",
          "name": "Are the escort profiles on this site 100% real and verified?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. All companion profiles are personally verified. Profile photographs shared before booking are genuine and current — no fake or stock images." }
        },
        {
          "@type": "Question",
          "name": "What areas in Kanpur do you cover for escort delivery?",
          "acceptedAnswer": { "@type": "Answer", "text": "24/7 escort delivery across Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Rawatpur, Indiranagar, Mall Road, Shyam Nagar, Saket Nagar, Kanpur Cantt, and Barra." }
        },
        {
          "@type": "Question",
          "name": "Is my privacy protected when booking an escort in Kanpur?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolute confidentiality is guaranteed. We never store, record, or share any client information. Companions arrive in plain civilian clothing with no visible branding." }
        },
        {
          "@type": "Question",
          "name": "What are the working hours for escort service in Kanpur?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our escort service operates 24 hours a day, 7 days a week, 365 days a year across Kanpur. Late-night and early-morning bookings are fully supported." }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={homeTitle} description={homeDesc} canonicalUrl="https://joya.kanpureliteservice.com/" keywords={homeKeywords} schema={homeSchema} />

      {/* ═══════════════════════════════════════
          FLOATING SIDEBAR (kokaqueen style)
      ═══════════════════════════════════════ */}
      <div className="float-sidebar hidden md:flex" aria-label="Quick contact">
        <a href={`tel:${phoneNumber}`} className="float-phone" title="Call Now" aria-label="Call us now">
          <Phone size={18} />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="float-wa" title="WhatsApp" aria-label="WhatsApp us">
          <MessageCircle size={18} />
        </a>
      </div>

      {/* ═══════════════════════════════════════
          HEADER
      ═══════════════════════════════════════ */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className="flex h-9 w-9 items-center justify-center rounded"
                style={{ background: "linear-gradient(135deg, #ad0c46, #e91e73)" }}
              >
                <Heart className="h-4 w-4 text-white" fill="white" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white leading-tight" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>
                  KANPUR <span className="gradient-text-pink">ESCORTS</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest" style={{ color: "#d4aab3" }}>
                  Verified Companions • Escort Service Kanpur
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-semibold" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.12em", color: "#c2929a" }}>
              <a href="#profiles" className="hover:text-pink-400 transition-colors uppercase">Profiles</a>
              <a href="#about"    className="hover:text-pink-400 transition-colors uppercase">Why Us</a>
              <a href="#areas"    className="hover:text-pink-400 transition-colors uppercase">Areas</a>
              <a href="#reviews"  className="hover:text-pink-400 transition-colors uppercase">Reviews</a>
              <a href="#faq"      className="hover:text-pink-400 transition-colors uppercase">FAQ</a>
            </nav>

            {/* CTA buttons */}
            <div className="flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-xs px-4 py-2">
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Call 8523045235</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs px-4 py-2 hidden sm:inline-flex">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">

        {/* ═══════════════════════════════════════
            HERO — Full cinematic banner
        ═══════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
          {/* BG Image */}
          <div className="absolute inset-0">
            <img
              src="/images/banner-2.avif"
              alt="Kanpur Elite Companions – Premium Escort Service Kanpur"
              className="h-full w-full object-cover object-center"
              style={{ filter: "brightness(0.45) saturate(0.8)" }}
              loading="eager"
              decoding="async"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(14,4,7,0.97) 0%, rgba(14,4,7,0.80) 55%, rgba(14,4,7,0.25) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-40"
              style={{ background: "linear-gradient(to top, #0e0407, transparent)" }}
            />
          </div>

          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute top-1/4 left-1/4"
            style={{
              width: "500px", height: "500px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(233,30,115,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 w-full">
            <div className="max-w-2xl">

              {/* Badge strip */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-semibold"
                  style={{ background: "rgba(233,30,115,0.12)", border: "1px solid rgba(233,30,115,0.35)", color: "#ff6b9d", fontFamily: "Poppins" }}
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  100% Verified Profiles
                </div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-semibold"
                  style={{ background: "rgba(110,231,183,0.10)", border: "1px solid rgba(110,231,183,0.3)", color: "#6ee7b7", fontFamily: "Poppins" }}
                >
                  ✓ Zero Advance — Pay On Arrival
                </div>
              </div>

              {/* H1 */}
              <h1
                className="mb-5 leading-none"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(2.4rem, 7vw, 5rem)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                Premium{" "}
                <span className="gradient-text-pink">Call Girls</span>
                <br />
                &amp; Escorts in
                <br />
                <span style={{ color: "#e91e73" }}>Kanpur</span>
              </h1>

              <p className="mb-8 text-base sm:text-lg font-light leading-relaxed" style={{ color: "#c2929a", maxWidth: "520px" }}>
                Experience unmatched elegance, confidentiality, and luxury companionship.
                Direct express home &amp; hotel delivery across Civil Lines, Swaroop Nagar,
                Govind Nagar &amp; all Kanpur areas — 24 hours, 7 days.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href={`tel:${phoneNumber}`} className="btn-primary text-base px-8 py-4">
                  <Phone className="h-5 w-5" />
                  Call Now: +91 8523045235
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-8 py-4">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Chat
                </a>
              </div>

              {/* Stats strip */}
              <div
                className="flex items-center gap-8 pt-6"
                style={{ borderTop: "1px solid rgba(233,30,115,0.2)" }}
              >
                <div>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>3500+</div>
                  <div className="text-xs" style={{ color: "#d4aab3" }}>Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text-pink" style={{ fontFamily: "Oswald, sans-serif" }}>100%</div>
                  <div className="text-xs" style={{ color: "#d4aab3" }}>Privacy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "#6ee7b7" }}>45m–1h</div>
                  <div className="text-xs" style={{ color: "#d4aab3" }}>Fast Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "#fcd34d" }}>4.9★</div>
                  <div className="text-xs" style={{ color: "#d4aab3" }}>Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
            <span className="text-[10px] uppercase tracking-widest" style={{ color: "#d4aab3", fontFamily: "Poppins" }}>Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" style={{ color: "#e91e73" }} />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FEATURES BAR
        ═══════════════════════════════════════ */}
        <section style={{ background: "#140509", borderTop: "1px solid #3d1018", borderBottom: "1px solid #3d1018" }} className="py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Lock className="h-5 w-5" />, label: "100% Privacy", sub: "Total Secrecy Assured", color: "#e91e73" },
                { icon: <Award className="h-5 w-5" />, label: "Zero Advance", sub: "Pay Only After Arrival", color: "#6ee7b7" },
                { icon: <Clock className="h-5 w-5" />, label: "24/7 Available", sub: "Day & Night Delivery", color: "#ff6b9d" },
                { icon: <MapPin className="h-5 w-5" />, label: "45-Min Delivery", sub: "Home & Hotel Service", color: "#fcd34d" },
              ].map(({ icon, label, sub, color }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded" style={{ background: `${color}18`, color }}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>{label}</div>
                    <div className="text-xs" style={{ color: "#d4aab3" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SEO INTRO TEXT (like kokaqueen)
        ═══════════════════════════════════════ */}
        <section style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }} className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2
              className="mb-4"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(1.4rem, 4vw, 2rem)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Kanpur Escort Service — Premium Companion Delivery
            </h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#d4aab3" }}>
              Welcome to <strong style={{ color: "#e91e73" }}>KanpurEliteService.com</strong> — Kanpur's most trusted premium
              escort and companion service. Browse our wide range of verified, high-class companion profiles including VIP escorts,
              college models, independent companions, and luxury escort services available for home delivery and hotel visits
              across Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Mall Road, and all major Kanpur localities.
              Call or WhatsApp <strong style={{ color: "#e91e73" }}>+91 8523045235</strong> for immediate booking.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROFILES — HORIZONTAL LISTING STYLE
        ═══════════════════════════════════════ */}
        <section id="profiles" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }} className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">

            {/* Section heading */}
            <div className="mb-10">
              <span className="section-label">✦ Verified Selection</span>
              <h2
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Featured <span className="gradient-text-pink">Companion Profiles</span>
              </h2>
              <div className="divider-pink" />
              <p className="text-sm" style={{ color: "#d4aab3", maxWidth: "560px" }}>
                Top-rated companions in Kanpur. Click any profile to view full bio or book instantly via Call (+91 8523045235).
              </p>
            </div>

            {/* Filter + Search bar */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 rounded"
              style={{ background: "#140509", border: "1px solid #3d1018" }}
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2" style={{ color: "#d4aab3" }} />
                <input
                  type="text"
                  placeholder="Search name, tag, area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded py-2 pl-9 pr-8 text-xs text-white placeholder-transparent focus:outline-none"
                  style={{
                    background: "#1a0709",
                    border: "1px solid #3d1018",
                    color: "#f5e6ea",
                  }}
                />
                <span className="absolute left-9 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: "#d4aab3", display: searchQuery ? "none" : "block" }}>
                  Search name, tag, area...
                </span>
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#d4aab3" }}>
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Listings */}
            {filteredProfiles.length === 0 ? (
              <div className="text-center py-14 rounded" style={{ background: "#140509", border: "1px solid #3d1018" }}>
                <p className="mb-3" style={{ color: "#d4aab3" }}>No profiles match your search.</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                  className="text-sm font-semibold" style={{ color: "#e91e73" }}
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div>
                {filteredProfiles.map((profile) => (
                  <article key={profile.id} className="listing-card">
                    {/* ── Image ── */}
                    <div className="listing-img" onClick={() => setSelectedProfile(profile)} style={{ cursor: "pointer" }}>
                      <img
                        src={profile.image}
                        alt={profile.alt}
                        width={170}
                        height={227}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                        style={{ display: "block", minHeight: "200px" }}
                      />
                      {/* Category badge on image */}
                      <div
                        className="absolute top-2 left-2"
                        style={{ zIndex: 2 }}
                      >
                        <span className={getCategoryTagClass(profile.category)}>
                          {profile.category}
                        </span>
                      </div>
                      {/* Rating on image */}
                      <div
                        className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold"
                        style={{ background: "rgba(14,4,7,0.85)", color: "#fbbf24", zIndex: 2 }}
                      >
                        <Star className="h-3 w-3 star-filled" />
                        {profile.rating.toFixed(1)}
                      </div>
                    </div>

                    {/* ── Content ── */}
                    <div className="flex flex-col justify-between p-4 flex-1 min-w-0">
                      <div>
                        {/* Name + Location */}
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <h3
                              className="text-white leading-tight"
                              style={{
                                fontFamily: "Oswald, sans-serif",
                                fontSize: "clamp(1rem, 3vw, 1.3rem)",
                                fontWeight: 700,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                              }}
                            >
                              {profile.name},{" "}
                              <span style={{ color: "#e91e73" }}>{profile.age}</span>
                            </h3>
                            <div className="flex items-center gap-1 mt-0.5 text-xs" style={{ color: "#d4aab3" }}>
                              <MapPin className="h-3 w-3" style={{ color: "#e91e73" }} />
                              {profile.location}, Kanpur
                            </div>
                          </div>
                          {/* Available dot */}
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400 hidden sm:block">Available</span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="divider-pink my-2" style={{ width: "40px", marginTop: "0.5rem" }} />

                        {/* Bio */}
                        <p
                          className="text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3"
                          style={{ color: "#d4aab3" }}
                        >
                          {profile.bio}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {profile.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2 py-0.5 rounded"
                              style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#c2929a" }}
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#d4aab3" }}>
                            Height: {profile.height}
                          </span>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#d4aab3" }}>
                            ★ {profile.reviewsCount} Reviews
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => setSelectedProfile(profile)}
                          className="text-xs px-4 py-2 rounded font-semibold transition-all"
                          style={{
                            fontFamily: "Oswald, sans-serif",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            background: "transparent",
                            border: "1px solid #3d1018",
                            color: "#c2929a",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e91e73";
                            (e.currentTarget as HTMLButtonElement).style.color = "#ff6b9d";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#3d1018";
                            (e.currentTarget as HTMLButtonElement).style.color = "#c2929a";
                          }}
                        >
                          View Bio
                        </button>
                        <a href={`tel:${phoneNumber}`} className="btn-primary text-xs px-4 py-2">
                          <Phone className="h-3.5 w-3.5" />
                          Call Now
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs px-4 py-2">
                          <MessageCircle className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROFILE DETAIL MODAL
        ═══════════════════════════════════════ */}
        {selectedProfile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(14,4,7,0.92)", backdropFilter: "blur(12px)" }}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded flex flex-col md:flex-row"
              style={{ background: "#1a0709", border: "1px solid #3d1018", maxHeight: "90vh" }}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded"
                style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#d4aab3" }}
                aria-label="Close profile"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image */}
              <div className="md:w-2/5 relative" style={{ minHeight: "280px" }}>
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.alt}
                  className="h-full w-full object-cover"
                  style={{ maxHeight: "500px" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1a0709 0%, transparent 50%)" }} />
              </div>

              {/* Details */}
              <div className="md:w-3/5 p-5 overflow-y-auto flex flex-col justify-between">
                <div>
                  <span className={`${getCategoryTagClass(selectedProfile.category)} mb-3 inline-block`}>
                    {selectedProfile.category} • Verified
                  </span>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}
                  >
                    {selectedProfile.name}, <span style={{ color: "#e91e73" }}>{selectedProfile.age}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-xs mb-4" style={{ color: "#d4aab3" }}>
                    <MapPin className="h-3.5 w-3.5" style={{ color: "#e91e73" }} />
                    {selectedProfile.location}, Kanpur
                  </div>

                  <div className="divider-pink mb-4" />

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Height", value: selectedProfile.height },
                      { label: "Languages", value: selectedProfile.languages.join(", ") },
                      { label: "Rating", value: `★ ${selectedProfile.rating} (${selectedProfile.reviewsCount})` },
                    ].map(({ label, value }) => (
                      <div key={label} className="p-2 rounded text-center" style={{ background: "#2d0d12", border: "1px solid #3d1018" }}>
                        <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#d4aab3", fontFamily: "Poppins" }}>{label}</div>
                        <div className="text-xs font-semibold text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs uppercase tracking-wider mb-2" style={{ color: "#d4aab3", fontFamily: "Poppins", fontWeight: 700 }}>
                    About {selectedProfile.name}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#c2929a" }}>{selectedProfile.bio}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {selectedProfile.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#c2929a" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a href={`tel:${phoneNumber}`} className="btn-primary w-full py-3.5 text-sm">
                    <Phone className="h-4 w-4" /> Book Call: +91 8523045235
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp w-full py-3.5 text-sm">
                    <MessageCircle className="h-4 w-4" /> WhatsApp {selectedProfile.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            SERVICE AREAS
        ═══════════════════════════════════════ */}
        <section id="areas" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }} className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">

            <div className="mb-10">
              <span className="section-label">✦ Coverage Map</span>
              <h2
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Express Delivery <span className="gradient-text-pink">Kanpur Areas</span>
              </h2>
              <div className="divider-pink" />
              <p className="text-sm" style={{ color: "#d4aab3", maxWidth: "520px" }}>
                45 min – 1 hour guaranteed home &amp; hotel doorstep delivery across all major Kanpur zones.
              </p>
            </div>

            {/* Area search */}
            <div className="max-w-sm mb-8">
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "#e91e73" }} />
                <input
                  type="text"
                  placeholder="Search your area in Kanpur..."
                  value={areaSearch}
                  onChange={(e) => setAreaSearch(e.target.value)}
                  className="w-full rounded py-2.5 pl-10 pr-4 text-sm text-white placeholder-transparent focus:outline-none"
                  style={{ background: "#1a0709", border: "1px solid #3d1018" }}
                />
                <span
                  className="absolute left-10 top-1/2 -translate-y-1/2 text-sm pointer-events-none"
                  style={{ color: "#d4aab3", display: areaSearch ? "none" : "block" }}
                >
                  Search your area in Kanpur...
                </span>
              </div>
            </div>

            {/* Area grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredAreas.map((area) => (
                <a
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="area-card flex items-center justify-between group transition-all hover:border-pink-500"
                  title={`View ${area.name} Kanpur Call Girl & Escort Service Page`}
                >
                  <div>
                    <h3
                      className="font-bold text-white text-sm group-hover:text-pink-400 transition-colors"
                      style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}
                    >
                      {area.name}
                      {area.popular && (
                        <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded" style={{ background: "rgba(233,30,115,0.2)", color: "#ff6b9d", border: "1px solid rgba(233,30,115,0.3)" }}>
                          HOT
                        </span>
                      )}
                    </h3>
                    <span className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "#6ee7b7" }}>
                      <Zap className="h-3 w-3" /> {area.status}
                    </span>
                  </div>
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded transition-all group-hover:bg-pink-600 group-hover:text-white"
                    style={{ background: "rgba(233,30,115,0.1)", color: "#e91e73", border: "1px solid rgba(233,30,115,0.25)" }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHY CHOOSE US
        ═══════════════════════════════════════ */}
        <section id="about" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }} className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10">
              <span className="section-label">✦ Our Commitments</span>
              <h2
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Why Choose <span className="gradient-text-pink">Kanpur Escorts</span>
              </h2>
              <div className="divider-pink" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <ShieldCheck className="h-6 w-6" />,
                  title: "Absolute Confidentiality",
                  body: "We guarantee 100% privacy for every booking. Your personal information, contact number, and stay details remain strictly protected and encrypted.",
                  color: "#e91e73",
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  title: "Verified High-Class Companions",
                  body: "Every profile is authentic and background-checked. Enjoy the highest standards of beauty, etiquette, warmth, and engaging conversation.",
                  color: "#6ee7b7",
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "24/7 Rapid Response",
                  body: "Our dispatch line (+91 8523045235) is open 24 hours a day. Prompt companion arrival guaranteed at any hour at your home or hotel.",
                  color: "#fcd34d",
                },
              ].map(({ icon, title, body, color }) => (
                <div
                  key={title}
                  className="p-6 rounded"
                  style={{ background: "#1a0709", border: "1px solid #3d1018", borderTop: `3px solid ${color}` }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded mb-5"
                    style={{ background: `${color}18`, color }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="mb-3 text-white"
                    style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            REVIEWS
        ═══════════════════════════════════════ */}
        <section id="reviews" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }} className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10">
              <span className="section-label">✦ Testimonials</span>
              <h2
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                What Our Clients Say
              </h2>
              <div className="divider-pink" />
              <p style={{ color: "#e91e73", fontFamily: "Oswald, sans-serif", fontSize: "1.1rem", letterSpacing: "0.04em" }}>
                3,542+ Verified 5-Star Ratings in Kanpur
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reviews.map((rev, idx) => (
                <div key={idx} className="review-card">
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 star-filled" />
                      ))}
                    </div>
                    <p className="text-sm italic leading-relaxed" style={{ color: "#c2929a" }}>"{rev.text}"</p>
                  </div>
                  <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid #3d1018" }}>
                    <div>
                      <h4 className="font-bold text-white text-sm" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em" }}>{rev.name}</h4>
                      <p className="text-xs" style={{ color: "#d4aab3" }}>{rev.location}</p>
                    </div>
                    <span className="text-[11px]" style={{ color: "#d4aab3" }}>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ
        ═══════════════════════════════════════ */}
        <section id="faq" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }} className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <span className="section-label">✦ Got Questions?</span>
              <h2
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Frequently Asked Questions
              </h2>
              <div className="divider-pink mx-auto" />
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 transition-colors"
                    style={{ color: openFaq === idx ? "#e91e73" : "#f5e6ea" }}
                  >
                    <span
                      className="text-sm sm:text-base font-semibold"
                      style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 flex-shrink-0 transition-transform duration-300"
                      style={{ color: "#e91e73", transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-sm leading-relaxed" style={{ color: "#d4aab3", borderTop: "1px solid #3d1018", paddingTop: "0.75rem" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SKOKRA-STYLE RICH KEYWORD DIRECTORY GUIDE
        ═══════════════════════════════════════ */}
        <section style={{ background: "#140509", borderBottom: "1px solid #3d1018" }} className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <span className="section-label">✦ Directory Guide</span>
              <h2
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Kanpur Escorts &amp; <span className="gradient-text-pink">Call Girl Directory</span>
              </h2>
              <div className="divider-pink mx-auto" />
              <p className="text-sm max-w-2xl mx-auto" style={{ color: "#d4aab3" }}>
                Kanpur's #1 verified companion directory. Explore independent call girls, college models, VIP escorts, and 24/7 doorstep delivery across Kanpur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                <h3 className="text-lg font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Verified Kanpur Call Girl Number &amp; Photo Booking
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
                  At <strong style={{ color: "#e91e73" }}>KanpurEliteService.com</strong>, every companion profile is 100% verified with authentic photos, age details, height, and genuine reviews. Contact our 24/7 booking line at <strong style={{ color: "#e91e73" }}>+91 8523045235</strong> or text us on WhatsApp to receive real-time call girl mobile numbers and image previews.
                </p>
                <div className="flex flex-wrap gap-2 text-xs" style={{ color: "#ff6b9d" }}>
                  <span>✓ Genuine Photos</span> • <span>✓ 100% Privacy</span> • <span>✓ 45-Min Arrival</span>
                </div>
              </div>

              <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                <h3 className="text-lg font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Independent Bhabhi &amp; College Model Escorts in Kanpur
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
                  Whether you are seeking youthful college model companions for a night out or independent house-wife bhabhi call girls for a relaxed, sensual evening, our directory offers the widest selection of companions available for home delivery and hotel visits across Kanpur.
                </p>
                <div className="flex flex-wrap gap-2 text-xs" style={{ color: "#6ee7b7" }}>
                  <span>✓ VIP Models</span> • <span>✓ Independent Bhabhi</span> • <span>✓ 5-Star Hotel Visits</span>
                </div>
              </div>
            </div>

            {/* Popular Search Tags Cloud (Skokra style) */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-wider" style={{ fontFamily: "Oswald, sans-serif" }}>
                Popular Kanpur Escort Search Categories &amp; Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Call girl kanpur",
                  "Kanpur call girl number",
                  "Kanpur call girl pic",
                  "Kanpur call girl no",
                  "Kanpur call girl contact number",
                  "Kanpur call girl image",
                  "Kanpur call girl phone number",
                  "Call girl cell phone number in kanpur",
                  "Call girl mobile number in kanpur",
                  "Call girl no in kanpur",
                  "Kanpur call girl mobile no",
                  "Kanpur call girl mobile number",
                  "Kanpur ki call girl",
                  "Best sexy call girls in kanpur",
                  "Bhabhi call girl kanpur",
                  "Book call girl in kanpur",
                  "Call girl appointment kanpur",
                  "Call girl area in kanpur",
                  "Call girl at kanpur",
                  "Civil Lines Call Girl Kanpur",
                  "Swaroop Nagar Escort Service",
                  "Govind Nagar Call Girl Number",
                  "Kakadeo Escorts Kanpur",
                  "Indiranagar Call Girl Kanpur",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded font-medium"
                    style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#c2929a" }}
                  >
                    🔍 {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA BANNER
        ═══════════════════════════════════════ */}
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0709 0%, #2d0d12 50%, #1a0709 100%)" }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(233,30,115,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <h2
              className="mb-4 text-white"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Ready to Book Your{" "}
              <span className="gradient-text-pink">Companion?</span>
            </h2>
            <p className="text-base mb-8 font-light" style={{ color: "#d4aab3" }}>
              Contact our confidential booking helpline now. Instant response guaranteed within 1 minute.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-lg px-10 py-5">
                <Phone className="h-5 w-5" /> Call +91 8523045235
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp text-lg px-10 py-5">
                <MessageCircle className="h-5 w-5" /> WhatsApp 8523045235
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer style={{ background: "#0a0306", borderTop: "1px solid #3d1018" }} className="py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">

            {/* Brand */}
            <div>
              <div className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}>
                KANPUR <span className="gradient-text-pink">ESCORTS &amp; CALL GIRLS</span>
              </div>
              <p className="text-xs mb-3" style={{ color: "#d4aab3" }}>
                Kanpur Escort Service — 24/7 Verified Companions &amp; Escorts across all Kanpur Areas
              </p>
              <p className="text-xs" style={{ color: "#d4aab3" }}>
                Helpline: <a href={`tel:${phoneNumber}`} style={{ color: "#e91e73" }}>+91 8523045235</a>
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: "#d4aab3", fontFamily: "Oswald, sans-serif" }}>Quick Links</h4>
              <div className="flex flex-col gap-2 text-xs" style={{ color: "#d4aab3" }}>
                {["#profiles", "#areas", "#reviews", "#faq"].map((href) => (
                  <a key={href} href={href} className="hover:text-pink-400 transition-colors capitalize">
                    {href.replace("#", "")}
                  </a>
                ))}
              </div>
            </div>

            {/* Service areas */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: "#d4aab3", fontFamily: "Oswald, sans-serif" }}>Service Areas</h4>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs leading-relaxed" style={{ color: "#d4aab3", maxWidth: "260px" }}>
                {serviceAreas.map((area, idx) => (
                  <span key={area.slug}>
                    <a href={`/areas/${area.slug}`} className="hover:text-pink-400 transition-colors">
                      {area.name}
                    </a>
                    {idx < serviceAreas.length - 1 && " • "}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-8 pt-6 text-center text-xs"
            style={{ borderTop: "1px solid #3d1018", color: "#d4aab3" }}
          >
            <span id="terms">
              © {new Date().getFullYear()} KanpurEliteService.com — All Rights Reserved.
              This website contains adult content and is intended for users aged 18 and above only.
              All services are for companionship purposes.{" "}
              <a href="#terms" style={{ color: "#e91e73" }}>Terms &amp; Conditions</a>
            </span>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════
          MOBILE STICKY BOTTOM BAR
      ═══════════════════════════════════════ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden"
        style={{ borderTop: "1px solid #3d1018", background: "rgba(14,4,7,0.97)" }}
      >
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
          style={{ background: "#e91e73", fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
        >
          <Phone className="h-4 w-4" /> CALL 8523045235
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
          style={{ background: "#15803d", fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
        >
          <MessageCircle className="h-4 w-4" /> WHATSAPP
        </a>
      </div>

    </div>
  );
}
