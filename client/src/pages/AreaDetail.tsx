import { SEOHead } from "@/components/SEOHead";
import { Phone, MessageCircle, MapPin, CheckCircle2, Shield, Star, Clock, Zap } from "lucide-react";
import { useRoute } from "wouter";

const phoneNumber = "+918523045235";
const displayPhone = "+91 8523045235";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20want%20to%20book%20a%20call%20girl%20service%20in%20Kanpur.";

interface AreaInfo {
  name: string;
  slug: string;
  pincode: string;
  description: string;
  landmarks: string[];
}

const areasData: Record<string, AreaInfo> = {
  "civil-lines": {
    name: "Civil Lines",
    slug: "civil-lines",
    pincode: "208001",
    description: "Civil Lines is Kanpur's premier commercial and VIP residential district. Joya Elite Service provides rapid 45-minute home and hotel companion delivery across Civil Lines with 100% privacy.",
    landmarks: ["Mall Road Crossing", "Green Park Stadium Area", "Civil Lines Hotels", "VIP Road"],
  },
  "swaroop-nagar": {
    name: "Swaroop Nagar",
    slug: "swaroop-nagar",
    pincode: "208002",
    description: "Swaroop Nagar is an upscale neighborhood in Kanpur known for top dining and luxury residences. Our verified companions arrive discreetly within 45 minutes for home & hotel bookings.",
    landmarks: ["GSVM Medical College", "Ravindra Hospital Road", "Swaroop Nagar Market"],
  },
  "govind-nagar": {
    name: "Govind Nagar",
    slug: "govind-nagar",
    pincode: "208006",
    description: "Govind Nagar is a vibrant center in Kanpur. Get verified call girl contact numbers, photos, and fast doorstep appointment delivery 24/7.",
    landmarks: ["Govind Nagar Market", "Labor Colony", "Deep Cinema Area"],
  },
  "kidwai-nagar": {
    name: "Kidwai Nagar",
    slug: "kidwai-nagar",
    pincode: "208011",
    description: "Kidwai Nagar offers prime residential locations in South Kanpur. Our agency provides genuine companion profile pictures, mobile numbers, and discreet hotel visits.",
    landmarks: ["Kidwai Nagar Block M", "Gaushala Chauraha", "Site No 1"],
  },
  "kakadeo": {
    name: "Kakadeo",
    slug: "kakadeo",
    pincode: "208025",
    description: "Kakadeo is Kanpur's famous educational and coaching hub. Instant booking for young college model escorts with photo verification and express 45-min arrival.",
    landmarks: ["Deoki Palace", "Coaching Hub Road", "Geeta Nagar Crossing"],
  },
  "rawatpur": {
    name: "Rawatpur",
    slug: "rawatpur",
    pincode: "208019",
    description: "Rawatpur and surrounding areas enjoy 24/7 companion services. Verified call girl mobile numbers and genuine photos available on request.",
    landmarks: ["Rawatpur Railway Station", "Moti Jheel Road", "Gutaiya"],
  },
  "indiranagar": {
    name: "Indiranagar",
    slug: "indiranagar",
    pincode: "208026",
    description: "Indiranagar Kanpur call girl service booking with verified profile images, mobile contact numbers, and 100% confidential door delivery.",
    landmarks: ["Kalyanpur Crossing", "IIT Kanpur Gate Area", "Indiranagar Main Road"],
  },
  "mall-road": {
    name: "Mall Road",
    slug: "mall-road",
    pincode: "208001",
    description: "Mall Road Kanpur luxury companion appointments for hotel visits and private dates. Verified call girls with instant WhatsApp contact.",
    landmarks: ["Z Square Mall", "Phool Bagh", "LIC Building Crossing"],
  },
  "shyam-nagar": {
    name: "Shyam Nagar",
    slug: "shyam-nagar",
    pincode: "208015",
    description: "Shyam Nagar Kanpur call girl phone number & image verification. Discreet 24/7 home delivery escort companions.",
    landmarks: ["PAC Line", "Shyam Nagar Flyover", "G T Road Junction"],
  },
  "saket-nagar": {
    name: "Saket Nagar",
    slug: "saket-nagar",
    pincode: "208014",
    description: "Saket Nagar Kanpur companion service with verified call girl pics, mobile no, and fast hotel appointment booking.",
    landmarks: ["Saket Nagar Block 4", "Deepu Chauhan Chauraha"],
  },
  "kanpur-cantt": {
    name: "Kanpur Cantt",
    slug: "kanpur-cantt",
    pincode: "208004",
    description: "Kanpur Cantt premium escort service with complete confidentiality. High-class companions available for luxury hotel stays.",
    landmarks: ["Cantonment Board", "Golf Course Road", "Club Road"],
  },
  "barra": {
    name: "Barra",
    slug: "barra",
    pincode: "208027",
    description: "Barra Kanpur call girl service. Direct phone number contact, verified pics, and 24/7 home delivery companion appointments.",
    landmarks: ["Barra Bypass", "Barra 2 Chauraha", "Barra World Bank Colony"],
  },
};

export default function AreaDetail() {
  const [, params] = useRoute("/areas/:slug");
  const slug = params?.slug || "";
  const area = areasData[slug] || {
    name: slug.replace(/-/g, " ").toUpperCase(),
    slug: slug,
    pincode: "208001",
    description: `Call girl service in ${slug.replace(/-/g, " ")} Kanpur with verified mobile numbers, images, and 24/7 home/hotel appointment delivery.`,
    landmarks: ["Main Market", "Hotel Zone"],
  };

  const pageTitle = `Call Girl in ${area.name} Kanpur | Phone Number & Verified Pics | Joya Elite`;
  const pageDesc = `Book call girl in ${area.name} Kanpur. Verified call girl pic, phone number +91 8523045235, mobile no, and 24/7 home/hotel appointment delivery in ${area.name}.`;
  const canonicalUrl = `https://joya.kanpureliteservice.com/areas/${area.slug}`;
  const keywords = `call girl ${area.name.toLowerCase()} kanpur, kanpur call girl number, kanpur call girl pic, kanpur call girl contact number, kanpur call girl phone number, call girl mobile number in kanpur, call girl area in kanpur, call girl at kanpur`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Call Girl & Companion Service in ${area.name} Kanpur`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Joya Elite Service",
      "telephone": "+91-8523045235",
      "url": "https://joya.kanpureliteservice.com/",
    },
    "areaServed": {
      "@type": "Place",
      "name": `${area.name}, Kanpur, Uttar Pradesh`,
    },
    "description": area.description,
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords={keywords} schema={schema} />

      {/* Header */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            <a href="/" className="flex items-center gap-3">
              <span className="text-lg font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                KANPUR <span className="gradient-text-pink">ELITE</span>
              </span>
            </a>
            <div className="flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-xs px-4 py-2">
                <Phone className="h-3.5 w-3.5" /> Call 8523045235
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-5xl px-4 py-3 text-xs w-full" style={{ color: "#d4aab3" }}>
        <a href="/" className="hover:text-pink-400">Home</a> &gt; <a href="/#areas" className="hover:text-pink-400">Kanpur Areas</a> &gt; <span className="text-white">{area.name}</span>
      </nav>

      {/* Hero */}
      <section className="py-12" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded text-xs" style={{ background: "rgba(233,30,115,0.15)", color: "#ff6b9d", border: "1px solid rgba(233,30,115,0.3)" }}>
            <MapPin className="h-3.5 w-3.5" /> Service Area: {area.name}, Kanpur (PIN: {area.pincode})
          </div>
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            Call Girl Service in <span className="gradient-text-pink">{area.name} Kanpur</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "#c2929a" }}>
            Looking for verified call girls in {area.name} Kanpur? Get authentic companion pics, direct phone numbers, cell phone contact details, and fast 45-minute home or hotel appointment delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <a href={`tel:${phoneNumber}`} className="btn-primary px-6 py-3 text-sm">
              <Phone className="h-4 w-4" /> Call Number: +91 8523045235
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp px-6 py-3 text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp for Pics &amp; Booking
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left / Central Copy */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-xl font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                Book Call Girl in {area.name} Kanpur — Verified Mobile No &amp; Pics
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
                At Joya Elite Service, we make booking a companion or call girl in {area.name} Kanpur simple, safe, and 100% confidential. Whether you are staying at a local hotel or your private residence in {area.name}, our verified models arrive promptly within 45 minutes of booking confirmation.
              </p>
              <h3 className="text-base font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                Why Book Call Girl at {area.name} Kanpur With Us?
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#c2929a" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5" />
                  <span><strong>Genuine Kanpur call girl pics &amp; image verification:</strong> No fake or stolen photos. What you see is who arrives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5" />
                  <span><strong>Direct call girl contact number in Kanpur:</strong> Dial <strong>+91 8523045235</strong> or text us on WhatsApp for real-time mobile numbers and instant companion scheduling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5" />
                  <span><strong>100% Privacy &amp; Secrecy:</strong> No registration, no identity logging. Complete client confidentiality.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-lg font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                Key Landmarks Covered in {area.name}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {area.landmarks.map((lm) => (
                  <span key={lm} className="text-xs px-3 py-1 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#ff6b9d" }}>
                    📍 {lm}
                  </span>
                ))}
              </div>
              <p className="text-sm" style={{ color: "#d4aab3" }}>
                Our call girl mobile numbers and companion appointment dispatch line (+91 8523045235) covers all hotels, guest houses, and private residential areas around {area.name} Kanpur.
              </p>
            </div>

            {/* Skokra style local keyword cloud */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h3 className="text-sm font-bold text-white uppercase mb-3 tracking-wider" style={{ fontFamily: "Oswald, sans-serif" }}>
                Popular Search Keywords in {area.name} Kanpur
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  `Call girl ${area.name.toLowerCase()} kanpur`,
                  `${area.name.toLowerCase()} call girl number`,
                  `${area.name.toLowerCase()} call girl pic`,
                  `${area.name.toLowerCase()} call girl contact number`,
                  `${area.name.toLowerCase()} escort service`,
                  `book call girl in ${area.name.toLowerCase()} kanpur`,
                  `independent call girl ${area.name.toLowerCase()}`,
                  `bhabhi call girl ${area.name.toLowerCase()}`,
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#c2929a" }}>
                    🔍 {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="p-5 rounded text-center" style={{ background: "#140509", border: "1px solid #e91e73" }}>
              <Zap className="h-8 w-8 mx-auto mb-2 text-pink-500" />
              <h3 className="text-lg font-bold text-white uppercase mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                Fast 45-Min Delivery
              </h3>
              <p className="text-xs mb-4" style={{ color: "#d4aab3" }}>
                Active dispatch in {area.name} Kanpur. Call or WhatsApp now.
              </p>
              <a href={`tel:${phoneNumber}`} className="btn-primary w-full py-3 text-xs mb-2">
                <Phone className="h-3.5 w-3.5" /> Call: 8523045235
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp w-full py-3 text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Pics
              </a>
            </div>

            <div className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h4 className="text-xs uppercase font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Other Kanpur Service Areas</h4>
              <div className="flex flex-col gap-1.5 text-xs" style={{ color: "#d4aab3" }}>
                <a href="/areas/civil-lines" className="hover:text-pink-400">Civil Lines Escorts &amp; Call Girls</a>
                <a href="/areas/swaroop-nagar" className="hover:text-pink-400">Swaroop Nagar Escorts &amp; Call Girls</a>
                <a href="/areas/govind-nagar" className="hover:text-pink-400">Govind Nagar Escorts &amp; Call Girls</a>
                <a href="/areas/kakadeo" className="hover:text-pink-400">Kakadeo Escorts &amp; Call Girls</a>
                <a href="/areas/mall-road" className="hover:text-pink-400">Mall Road Escorts &amp; Call Girls</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs" style={{ background: "#0a0306", borderTop: "1px solid #3d1018", color: "#d4aab3" }}>
        © {new Date().getFullYear()} Joya Elite Service — Call Girl Service in {area.name} Kanpur. All rights reserved.
      </footer>
    </div>
  );
}
