import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Shield,
  Clock,
  MapPin,
  Users,
  Star,
  Search,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  X,
  Lock,
  Award,
  Heart,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const phoneNumber = "+918523045235";
const displayPhone = "+91 8523045235";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Kanpur%20Elite%20Escorts,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

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
  { name: "Civil Lines", status: "Active • 45 Min - 1 Hr Delivery", popular: true },
  { name: "Swaroop Nagar", status: "Active • 45 Min - 1 Hr Delivery", popular: true },
  { name: "Govind Nagar", status: "Active • 45 Min - 1 Hr Delivery", popular: true },
  { name: "Kidwai Nagar", status: "Active • 45 Min - 1 Hr Delivery", popular: true },
  { name: "Kakadeo", status: "Active • 45 Min - 1 Hr Delivery", popular: true },
  { name: "Rawatpur", status: "Active • 45 Min - 1 Hr Delivery", popular: false },
  { name: "Indiranagar", status: "Active • 45 Min - 1 Hr Delivery", popular: false },
  { name: "Mall Road", status: "Active • 45 Min - 1 Hr Delivery", popular: true },
  { name: "Shyam Nagar", status: "Active • 45 Min - 1 Hr Delivery", popular: false },
  { name: "Saket Nagar", status: "Active • 45 Min - 1 Hr Delivery", popular: false },
  { name: "Kanpur Cantt", status: "Active • 45 Min - 1 Hr Delivery", popular: false },
  { name: "Barra", status: "Active • 45 Min - 1 Hr Delivery", popular: false },
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
    q: "How do I book a companion or call girl service in Kanpur?",
    a: "Booking is fast and straightforward. Simply call our direct customer line at +91 8523045235 or message us on WhatsApp (+91 8523045235). Tell us your preferred location in Kanpur and choice of profile, and we will confirm instant delivery within 45 minutes - 1hrs.",
  },
  {
    q: "Are the profiles on the website 100% real and verified?",
    a: "Yes! All companion profiles displayed on Kanpur Elite Escorts are 100% genuine, personally verified, and updated regularly to guarantee complete customer satisfaction.",
  },
  {
    q: "What areas in Kanpur do you cover for home and hotel delivery?",
    a: "We provide 24/7 express delivery across all prime Kanpur locations including Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Rawatpur, Indiranagar, Mall Road, Shyam Nagar, Saket Nagar, and Kanpur Cantt.",
  },
  {
    q: "Is my personal identity and privacy protected?",
    a: "Strict confidentiality and discretion are our highest priorities. We never share or store any client information. Your privacy is 100% safe and secure with us.",
  },
  {
    q: "What are the working hours?",
    a: "Our customer team and companion delivery services operate 24 hours a day, 7 days a week, 365 days a year across Kanpur.",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [areaSearch, setAreaSearch] = useState<string>("");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = ["All", "VIP", "College Model", "Independent", "Luxury Escort"];

  const filteredProfiles = profiles.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredAreas = serviceAreas.filter((a) =>
    a.name.toLowerCase().includes(areaSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-pink-600 selection:text-white">
      {/* Header & Sticky Glass Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 glass-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-600 to-rose-400 text-white shadow-lg shadow-pink-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-tight font-serif sm:text-2xl">
                Kanpur Elite <span className="gradient-text-pink">Escorts</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-sans block">
                24/7 Verified Companion Delivery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#profiles" className="hover:text-pink-400 transition-colors">
              Profiles
            </a>
            <a href="#about" className="hover:text-pink-400 transition-colors">
              Why Us
            </a>
            <a href="#areas" className="hover:text-pink-400 transition-colors">
              Service Areas
            </a>
            <a href="#reviews" className="hover:text-pink-400 transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-pink-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-pink-500 sm:px-5 sm:py-2.5 sm:text-sm transition-all hover:shadow-pink-500/25 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span>Call 8523045235</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-500 sm:text-sm transition-all hover:shadow-emerald-500/25 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-zinc-950 py-16 lg:py-24 border-b border-zinc-800/60">
          {/* Background Ambient Glow Effects */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-pink-600/15 blur-[140px]" />
          <div className="pointer-events-none absolute top-1/3 right-10 h-[300px] w-[300px] rounded-full bg-rose-600/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-medium text-pink-300 backdrop-blur-md mb-6">
                  <ShieldCheck className="h-4 w-4 text-pink-400" />
                  <span>100% Discretion & Verified Profiles in Kanpur</span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] mb-6 font-serif">
                  Premium <span className="gradient-text-pink">Call Girls</span> &amp; Elite Escorts in Kanpur
                </h1>

                <p className="text-lg text-zinc-300 sm:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
                  Experience unmatched elegance, confidentiality, and luxury companionship. Direct express home and hotel delivery across Civil Lines, Swaroop Nagar, Govind Nagar &amp; all Kanpur areas 24/7.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-pink-600/25 hover:from-pink-500 hover:to-rose-500 transition-all hover:scale-105 active:scale-95 glow-pink"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now: +91 8523045235</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 px-8 py-4 text-lg font-semibold text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all hover:scale-105 active:scale-95 backdrop-blur-md glow-green"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6 text-center lg:text-left">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">3500+</div>
                    <div className="text-xs text-zinc-400 mt-1">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-pink-400 font-serif">100%</div>
                    <div className="text-xs text-zinc-400 mt-1">Privacy Guaranteed</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-serif">45m - 1h</div>
                    <div className="text-xs text-zinc-400 mt-1">Fast Delivery</div>
                  </div>
                </div>
              </div>

              {/* Hero Image / Banner Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <img
                      src="/images/banner-2.avif"
                      alt="Kanpur Elite Escorts & Call Girls Banner"
                      width={500}
                      height={625}
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-zinc-950/85 p-4 backdrop-blur-md border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                          </span>
                          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Available Now</span>
                        </div>
                        <span className="text-xs text-zinc-400">Kanpur Localities</span>
                      </div>
                      <p className="text-sm font-medium text-white mt-1">Direct Call/WhatsApp: <span className="text-pink-400 font-bold">8523045235</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Banner */}
        <section className="bg-zinc-900/60 py-8 border-b border-zinc-800/60 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">100% Privacy</h3>
                  <p className="text-xs text-zinc-400">Total Secrecy Assured</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Verified Profiles</h3>
                  <p className="text-xs text-zinc-400">Genuine &amp; Real Photos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">24/7 Availability</h3>
                  <p className="text-xs text-zinc-400">Day &amp; Night Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Express Delivery</h3>
                  <p className="text-xs text-zinc-400">Home &amp; Hotel Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section id="profiles" className="py-20 bg-zinc-950 border-b border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest block mb-2">Verified Selection</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-serif">
                Featured Companion <span className="gradient-text-pink">Profiles</span>
              </h2>
              <p className="mt-4 text-zinc-400 text-base sm:text-lg">
                Explore top-rated companions in Kanpur. Click any profile to view full bio or book instantly via call (+91 8523045235).
              </p>
            </div>

            {/* Filter Bar & Search */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800">
              {/* Category Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                      selectedCategory === cat
                        ? "bg-pink-600 text-white shadow-md shadow-pink-600/30"
                        : "bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Live Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search by name, tag, area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-2 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Profiles Grid */}
            {filteredProfiles.length === 0 ? (
              <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-zinc-800">
                <p className="text-zinc-400 text-lg">No profiles match your search criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-pink-400 text-sm font-semibold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="group relative overflow-hidden rounded-3xl bg-zinc-900/80 border border-zinc-800 glass-card-hover flex flex-col"
                  >
                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-pink-300 border border-pink-500/30">
                      <Sparkles className="h-3.5 w-3.5 text-pink-400" />
                      <span>{profile.category}</span>
                    </div>

                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/30">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{profile.rating.toFixed(1)}</span>
                    </div>

                    {/* Profile Image */}
                    <div
                      className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950 cursor-pointer"
                      onClick={() => setSelectedProfile(profile)}
                    >
                      <img
                        src={profile.image}
                        alt={profile.alt}
                        width={300}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-xl font-bold font-serif">{profile.name}, {profile.age}</h3>
                        <div className="flex items-center gap-1 text-xs text-zinc-300 mt-0.5">
                          <MapPin className="h-3.5 w-3.5 text-pink-400" />
                          <span>{profile.location}, Kanpur</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {profile.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-zinc-800/80 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedProfile(profile)}
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800/60 py-2.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all text-center"
                        >
                          View Bio
                        </button>
                        <a
                          href={`tel:${phoneNumber}`}
                          className="w-full rounded-xl bg-pink-600 py-2.5 text-xs font-semibold text-white hover:bg-pink-500 transition-all text-center flex items-center justify-center gap-1"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Profile Detail Modal */}
        {selectedProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-700 shadow-2xl max-h-[90vh] flex flex-col md:flex-row">
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950/80 text-zinc-400 hover:text-white border border-zinc-700"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="md:w-1/2 relative aspect-[3/4] md:aspect-auto">
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 md:hidden" />
              </div>

              <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
                <div>
                  <div className="inline-block rounded-full bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400 mb-2">
                    {selectedProfile.category} • Verified
                  </div>
                  <h3 className="text-3xl font-bold text-white font-serif">{selectedProfile.name}, {selectedProfile.age}</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                    <MapPin className="h-4 w-4 text-pink-400" />
                    <span>{selectedProfile.location}, Kanpur</span>
                  </div>

                  <div className="mt-4 space-y-2 border-y border-zinc-800 py-3 text-xs text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Height:</span>
                      <span className="font-semibold">{selectedProfile.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Languages:</span>
                      <span className="font-semibold">{selectedProfile.languages.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Rating:</span>
                      <span className="font-semibold text-amber-400 flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400" /> {selectedProfile.rating} ({selectedProfile.reviewsCount} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-1">About {selectedProfile.name}</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">{selectedProfile.bio}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-pink-600 py-3.5 text-sm font-semibold text-white hover:bg-pink-500 transition-all"
                  >
                    <Phone className="h-4 w-4" /> Book Call: +91 8523045235
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp {selectedProfile.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Areas Section with Search */}
        <section id="areas" className="py-20 bg-zinc-900/50 border-b border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-2">Coverage Map</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-serif">
                Express Delivery <span className="gradient-text-pink">Kanpur Areas</span>
              </h2>
              <p className="mt-4 text-zinc-400 text-base sm:text-lg">
                We guarantee 45 minutes - 1hrs home and hotel doorstep delivery across all major Kanpur residential &amp; commercial zones.
              </p>
            </div>

            {/* Area Search Box */}
            <div className="max-w-md mx-auto mb-10">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400" />
                <input
                  type="text"
                  placeholder="Type your area or locality in Kanpur..."
                  value={areaSearch}
                  onChange={(e) => setAreaSearch(e.target.value)}
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 py-3.5 pl-12 pr-4 text-sm text-white placeholder-zinc-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-inner"
                />
              </div>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredAreas.map((area) => (
                <div
                  key={area.name}
                  className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 transition-all hover:border-pink-500/40 hover:bg-zinc-850 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold text-white text-base">{area.name}</h3>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <Zap className="h-3 w-3" /> {area.status}
                    </span>
                  </div>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-600/10 text-pink-400 hover:bg-pink-600 hover:text-white transition-all"
                    title={`Call for delivery in ${area.name}`}
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-20 bg-zinc-950 border-b border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest block mb-2">Our Commitments</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-serif">
                Why Choose <span className="gradient-text-pink">Kanpur Elite</span> Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 glass-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-600/10 text-pink-400 mb-6">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">Absolute Confidentiality</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We guarantee 100% privacy for every booking. Your personal information, contact number, and stay details remain strictly protected and encrypted.
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 glass-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-400 mb-6">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">Verified High-Class Companions</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every profile is authentic and background-checked. Enjoy the highest standards of beauty, etiquette, warmth, and engaging conversation.
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 glass-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600/10 text-amber-400 mb-6">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">24/7 Rapid Response</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Our dispatch line (+91 8523045235) is open 24 hours a day. Prompt companion arrival guaranteed at any hour at your home or hotel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section id="reviews" className="py-20 bg-zinc-900/50 border-b border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-2">Testimonials</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-serif">
                What Our Clients Say
              </h2>
              <p className="mt-3 text-pink-400 text-xl font-bold">3,542+ Verified 5-Star Ratings in Kanpur</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((rev, idx) => (
                <div key={idx} className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-zinc-300 text-sm italic leading-relaxed">"{rev.text}"</p>
                  </div>
                  <div className="mt-6 border-t border-zinc-800 pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                      <p className="text-xs text-zinc-400">{rev.location}</p>
                    </div>
                    <span className="text-[11px] text-zinc-500">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq" className="py-20 bg-zinc-950 border-b border-zinc-800/60">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest block mb-2">Got Questions?</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-serif">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base hover:text-pink-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-pink-400 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Book CTA Footer Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-pink-950 via-zinc-950 to-purple-950 py-20 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-serif mb-6">
              Ready to Book Your Companion?
            </h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-xl mx-auto font-light">
              Contact our confidential booking helpline now. Instant response guaranteed within 1 minute.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 rounded-2xl bg-pink-600 px-10 py-5 text-lg font-bold text-white shadow-2xl hover:bg-pink-500 transition-all hover:scale-105 glow-pink"
              >
                <Phone className="h-6 w-6" /> Call +91 8523045235
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 text-lg font-bold text-white shadow-2xl hover:bg-emerald-500 transition-all hover:scale-105 glow-green"
              >
                <MessageCircle className="h-6 w-6" /> WhatsApp 8523045235
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-left">
              <div className="text-lg font-bold text-white font-serif">Kanpur Elite Escorts</div>
              <p className="text-xs text-zinc-400 mt-1">Direct Companion Delivery in Kanpur • Helpline: +91 8523045235</p>
            </div>
            <div className="flex gap-6 text-zinc-400">
              <a href="#profiles" className="hover:text-white">Profiles</a>
              <a href="#areas" className="hover:text-white">Areas</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-900 pt-6 text-zinc-500">
            &copy; {new Date().getFullYear()} Kanpur Elite Escorts. All Rights Reserved. Confidential &amp; Verified Services.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-2 border-t border-zinc-800 bg-zinc-950/95 p-3 backdrop-blur-lg md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-pink-600 py-3 text-sm font-bold text-white shadow-lg active:scale-95"
        >
          <Phone className="h-4 w-4" /> Call 8523045235
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg active:scale-95"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
