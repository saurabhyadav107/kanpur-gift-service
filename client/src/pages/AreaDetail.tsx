import { SEOHead } from "@/components/SEOHead";
import { Phone, MessageCircle, MapPin, CheckCircle2, Shield, Star, Clock, Zap } from "lucide-react";
import { useRoute } from "wouter";

const phoneNumber = "+918523045235";
const displayPhone = "+91 8523045235";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20want%20to%20book%20an%20escort%20service%20in%20Kanpur.";

interface AreaInfo {
  name: string;
  slug: string;
  pincode: string;
  description: string;
  longDescription: string;
  landmarks: string[];
  nearbyAreas: string[];
  faqs: { q: string; a: string }[];
}

const areasData: Record<string, AreaInfo> = {
  "civil-lines": {
    name: "Civil Lines",
    slug: "civil-lines",
    pincode: "208001",
    description: "Civil Lines is Kanpur's premier VIP and commercial district, home to luxury hotels, government offices, and upscale residences. Our escort service in Civil Lines offers verified companions with fast 45-minute delivery.",
    longDescription: "Civil Lines is the most prestigious address in Kanpur — a leafy, well-planned area flanked by luxury hotels, top restaurants, and the Green Park Stadium. As Kanpur's administrative and business hub, Civil Lines attracts business travellers, government officials, and high-profile visitors who require absolute discretion. Our escort service in Civil Lines is tailored to meet this demand. Whether you are staying at a five-star hotel near Mall Road or at your private bungalow in Civil Lines, our verified companions arrive promptly and professionally within 45 minutes of booking confirmation.",
    landmarks: ["Mall Road Crossing", "Green Park Stadium Area", "Civil Lines Hotels", "VIP Road", "Collectorate"],
    nearbyAreas: ["swaroop-nagar", "mall-road", "kanpur-cantt"],
    faqs: [
      {
        q: "Is escort service available in Civil Lines Kanpur hotels?",
        a: "Yes. We provide discreet companion delivery to all major hotels in Civil Lines, Kanpur. Contact us at +91 8523045235 for hotel room visits.",
      },
      {
        q: "How quickly can an escort arrive in Civil Lines?",
        a: "Our standard dispatch time from confirmation is 45 minutes to 1 hour across Civil Lines and the surrounding VIP zone.",
      },
    ],
  },
  "swaroop-nagar": {
    name: "Swaroop Nagar",
    slug: "swaroop-nagar",
    pincode: "208002",
    description: "Swaroop Nagar is an upscale residential neighbourhood in North Kanpur with a vibrant commercial strip and premium hotels. We offer verified escort services in Swaroop Nagar with same-day 45-minute delivery.",
    longDescription: "Swaroop Nagar is one of Kanpur's most sought-after residential and commercial localities, known for its premium apartments, health facilities near GSVM Medical College Road, and a lively market hub. The area draws professionals and business visitors who value privacy and quality. Our escorts in Swaroop Nagar are thoroughly verified — you receive genuine photos, direct contact details, and a companion who arrives punctually. We cover every lane, guesthouse, and apartment block in Swaroop Nagar for both home and hotel companion delivery.",
    landmarks: ["GSVM Medical College Road", "Ravindra Hospital Road", "Swaroop Nagar Market", "Naubasta Road"],
    nearbyAreas: ["civil-lines", "kidwai-nagar", "rawatpur"],
    faqs: [
      {
        q: "Do you provide escort service near GSVM Medical College Road, Swaroop Nagar?",
        a: "Yes, we cover all parts of Swaroop Nagar including the medical college road area. Call +91 8523045235 for same-day booking.",
      },
      {
        q: "Can I book a companion for a home visit in Swaroop Nagar?",
        a: "Absolutely. We offer 100% discreet home delivery in Swaroop Nagar, Kanpur. Companions arrive within 45 minutes of booking confirmation.",
      },
    ],
  },
  "govind-nagar": {
    name: "Govind Nagar",
    slug: "govind-nagar",
    pincode: "208006",
    description: "Govind Nagar is a vibrant mixed residential and commercial locality in South-West Kanpur. Our verified escort service in Govind Nagar delivers companions directly to your home or hotel within 45 minutes.",
    longDescription: "Govind Nagar is a densely populated and commercially active locality in Kanpur, well-connected to the rest of the city. Home to a busy market, cinema halls, and a large residential population, Govind Nagar is a popular area for both locals and visitors looking for companion services. Our escort service in Govind Nagar prioritises speed, privacy, and profile authenticity. Every companion listed is individually verified — the photo you see is the person who arrives. We serve private apartments, guesthouses, and hotels across all sectors of Govind Nagar.",
    landmarks: ["Govind Nagar Market", "Labor Colony", "Deep Cinema Area", "Babu Purwa"],
    nearbyAreas: ["kakadeo", "barra", "saket-nagar"],
    faqs: [
      {
        q: "Is there a call girl or escort service available in Govind Nagar, Kanpur?",
        a: "Yes. We offer verified companion delivery throughout Govind Nagar, Kanpur. Call or WhatsApp +91 8523045235 for fast booking.",
      },
      {
        q: "Are companions available for late-night bookings in Govind Nagar?",
        a: "Our service operates 24 hours a day, 7 days a week in Govind Nagar and across Kanpur.",
      },
    ],
  },
  "kidwai-nagar": {
    name: "Kidwai Nagar",
    slug: "kidwai-nagar",
    pincode: "208011",
    description: "Kidwai Nagar is a well-developed South Kanpur residential township with wide roads and quiet neighbourhoods. Our escort service in Kidwai Nagar provides verified companion profiles and 45-minute home delivery.",
    longDescription: "Kidwai Nagar is a planned residential township in South Kanpur, named after freedom fighter Rafi Ahmed Kidwai. The area comprises organised colony blocks, quiet lanes, and quality residential accommodations — an ideal setting for those who prize privacy. Our escort service in Kidwai Nagar matches this preference. We maintain strict discretion for every booking: no records kept, no third-party sharing. Companions are verified, attentive, and experienced in making guests feel comfortable. We deliver to every block within Kidwai Nagar and adjacent areas.",
    landmarks: ["Kidwai Nagar Block M", "Gaushala Chauraha", "Site No 1", "Kidwai Nagar Police Station Road"],
    nearbyAreas: ["swaroop-nagar", "saket-nagar", "govind-nagar"],
    faqs: [
      {
        q: "Do you provide escort services in Kidwai Nagar colony blocks?",
        a: "Yes, we cover all blocks within Kidwai Nagar, Kanpur for home companion delivery. Call +91 8523045235.",
      },
      {
        q: "How is privacy maintained for escort bookings in Kidwai Nagar?",
        a: "All bookings are completely confidential. No information is stored or shared. Our companions arrive discreetly in civilian clothing.",
      },
    ],
  },
  "kakadeo": {
    name: "Kakadeo",
    slug: "kakadeo",
    pincode: "208025",
    description: "Kakadeo is Kanpur's famous educational and coaching hub packed with modern apartments and active residential life. Our escort service in Kakadeo offers verified companions available for same-day home and hotel delivery.",
    longDescription: "Kakadeo has evolved into one of Kanpur's most dynamic localities — originally known as a coaching centre hub, it now features upscale apartments, modern restaurants, and a young, active residential demographic. Our escorts in Kakadeo cater to a clientele that values efficiency and authenticity. Booking via WhatsApp takes under 2 minutes. Profile photos are genuine, ages are accurate, and companions are punctual. Whether you need company at your Kakadeo apartment or require a companion for a hotel stay nearby, we dispatch reliably within 45 minutes.",
    landmarks: ["Deoki Palace", "Coaching Hub Road", "Geeta Nagar Crossing", "Kakadeo Market"],
    nearbyAreas: ["govind-nagar", "indiranagar", "barra"],
    faqs: [
      {
        q: "Can I book an escort in Kakadeo, Kanpur for a home visit?",
        a: "Yes. Home delivery in Kakadeo is available 24/7. Our companions arrive within 45 minutes of booking confirmation.",
      },
      {
        q: "Are there verified escort profiles specific to Kakadeo area?",
        a: "We have companions based in and around Kakadeo. WhatsApp us at +91 8523045235 for current availability and profile previews.",
      },
    ],
  },
  "rawatpur": {
    name: "Rawatpur",
    slug: "rawatpur",
    pincode: "208019",
    description: "Rawatpur is a North Kanpur locality near the railway station, popular with travellers and working professionals. Our escort service in Rawatpur delivers verified companions to home addresses and guesthouses 24/7.",
    longDescription: "Rawatpur is conveniently located near Rawatpur Railway Station and serves as a connector between North Kanpur's residential colonies and the city centre. The area hosts many working professionals, railway employees, and transit travellers who require companionship during extended stays. Our escort service in Rawatpur is designed for quick, hassle-free booking — one call or WhatsApp message is all it takes. Companions are verified, discreet, and available any time of day or night. We cover Rawatpur proper, Moti Jheel Road, and surrounding neighbourhoods.",
    landmarks: ["Rawatpur Railway Station", "Moti Jheel Road", "Gutaiya", "Rawatpur Main Road"],
    nearbyAreas: ["swaroop-nagar", "indiranagar", "civil-lines"],
    faqs: [
      {
        q: "Is escort service available near Rawatpur Railway Station, Kanpur?",
        a: "Yes. We serve Rawatpur and areas near the railway station. Call +91 8523045235 for immediate booking.",
      },
      {
        q: "Can travellers staying in Rawatpur guesthouses book a companion?",
        a: "Absolutely. We provide discreet companion delivery to guesthouses and private stays across Rawatpur, Kanpur.",
      },
    ],
  },
  "indiranagar": {
    name: "Indiranagar",
    slug: "indiranagar",
    pincode: "208026",
    description: "Indiranagar in West Kanpur is a spacious residential township near IIT Kanpur with large plots and peaceful neighbourhoods. Our escort service in Indiranagar provides verified companions with complete confidentiality.",
    longDescription: "Indiranagar is a well-planned, expansive residential locality in Western Kanpur, developed around IIT Kanpur and Kalyanpur. It is known for large independent bungalows, academic institutions, and a peaceful, private environment — making it ideal for discreet companion visits. Our escort service in Indiranagar is trusted by residents who value both quality and absolute privacy. All bookings are handled through a confidential channel. Companions arrive in regular civilian clothing with no identifying markers, ensuring complete discretion for your Indiranagar home or apartment.",
    landmarks: ["Kalyanpur Crossing", "IIT Kanpur Gate Area", "Indiranagar Main Road", "Sector H"],
    nearbyAreas: ["rawatpur", "kakadeo", "swaroop-nagar"],
    faqs: [
      {
        q: "Do you provide escort service in Indiranagar, Kanpur near IIT?",
        a: "Yes, we cover all of Indiranagar including sectors near IIT Kanpur Gate. Call +91 8523045235 for booking.",
      },
      {
        q: "How do you maintain discretion in a residential area like Indiranagar?",
        a: "Companions arrive in regular civilian attire without any signage or branding. All communication is encrypted and no records are kept.",
      },
    ],
  },
  "mall-road": {
    name: "Mall Road",
    slug: "mall-road",
    pincode: "208001",
    description: "Mall Road is the premium commercial and hospitality corridor of Kanpur, lined with luxury hotels, shopping centres, and restaurants. Our escort service on Mall Road specialises in hotel companion delivery.",
    longDescription: "Mall Road is the beating heart of Kanpur's commercial and hotel district — a prime address hosting multiple star hotels, upscale restaurants, and flagship retail stores. Business travellers, corporate clients, and tourists frequently stay along Mall Road and its adjacent hotel clusters. Our escort service on Mall Road is optimised for hotel visits: companions are experienced in handling hotel check-in protocols discreetly, carry no visible identifiers, and can be at your door within 45 minutes of booking. We cover every major hotel property on and around Mall Road, Kanpur.",
    landmarks: ["Z Square Mall", "Phool Bagh", "LIC Building Crossing", "Mall Road Hotels"],
    nearbyAreas: ["civil-lines", "swaroop-nagar", "kanpur-cantt"],
    faqs: [
      {
        q: "Can I book an escort to my hotel room on Mall Road, Kanpur?",
        a: "Yes. We specialise in hotel companion delivery on Mall Road. Companions arrive discreetly within 45 minutes. Call +91 8523045235.",
      },
      {
        q: "Are escort services available at 5-star hotels on Mall Road Kanpur?",
        a: "We provide companion services to all hotel categories on Mall Road, Kanpur, including luxury and business hotels.",
      },
    ],
  },
  "shyam-nagar": {
    name: "Shyam Nagar",
    slug: "shyam-nagar",
    pincode: "208015",
    description: "Shyam Nagar is a residential locality in South-East Kanpur near the GT Road corridor. Our escort service in Shyam Nagar offers verified companions available for home and hotel visits around the clock.",
    longDescription: "Shyam Nagar is a well-established residential locality in South-East Kanpur, easily accessible via the GT Road. Home to middle and upper-middle-class households, government employees, and working professionals, Shyam Nagar is one of Kanpur's steadily growing residential pockets. Our escort service in Shyam Nagar is built around reliability and discretion. Bookings via call or WhatsApp are acknowledged within minutes, and companions are dispatched promptly. We serve all sub-localities within Shyam Nagar, including the PAC Line area and GT Road junction.",
    landmarks: ["PAC Line", "Shyam Nagar Flyover", "G T Road Junction", "Shyam Nagar Market"],
    nearbyAreas: ["saket-nagar", "barra", "govind-nagar"],
    faqs: [
      {
        q: "Is there a verified escort or call girl service in Shyam Nagar, Kanpur?",
        a: "Yes. We serve Shyam Nagar with verified companion delivery. Call +91 8523045235 for same-day booking.",
      },
      {
        q: "What is the delivery time for escort service in Shyam Nagar?",
        a: "Our standard arrival time in Shyam Nagar is 45 minutes to 1 hour from booking confirmation.",
      },
    ],
  },
  "saket-nagar": {
    name: "Saket Nagar",
    slug: "saket-nagar",
    pincode: "208014",
    description: "Saket Nagar is a quiet, well-maintained residential colony in Central-South Kanpur. Our escort service in Saket Nagar delivers verified companions discreetly to home addresses within 45 minutes.",
    longDescription: "Saket Nagar is a calm, well-planned residential colony in Kanpur, characterised by organised blocks, tree-lined streets, and a strong community. Residents here prize privacy and tranquillity, which is exactly what our escort service in Saket Nagar delivers. Companions arrive discreetly, without any visible identification, and engage with full professionalism. Our booking process is straightforward: a single call or WhatsApp message with your preferred location within Saket Nagar, and a companion is dispatched within 45 minutes.",
    landmarks: ["Saket Nagar Block 4", "Deepu Chauhan Chauraha", "Saket Nagar Main Road"],
    nearbyAreas: ["kidwai-nagar", "shyam-nagar", "govind-nagar"],
    faqs: [
      {
        q: "Can I book a discreet escort visit in Saket Nagar, Kanpur?",
        a: "Yes. Saket Nagar is fully covered. Companions arrive in 45 minutes with complete discretion. Call +91 8523045235.",
      },
      {
        q: "Is the escort service in Saket Nagar available 24 hours?",
        a: "Our service operates 24/7 throughout Saket Nagar and all of Kanpur.",
      },
    ],
  },
  "kanpur-cantt": {
    name: "Kanpur Cantt",
    slug: "kanpur-cantt",
    pincode: "208004",
    description: "Kanpur Cantt is Kanpur's prestigious cantonment area with premium residential zones, golf clubs, and defence establishments. Our escort service in Kanpur Cantt offers the highest level of confidentiality.",
    longDescription: "Kanpur Cantonment is one of the oldest and most prestigious cantonments in India, home to senior defence personnel, government officials, and a well-established civilian residential community. The area demands the highest standards of discretion — something our escort service in Kanpur Cantt is specifically equipped to deliver. Companions are selected for their professionalism, etiquette, and ability to blend seamlessly into upscale social settings. We serve private residences, guest houses, and hotel suites within and adjacent to the cantonment area, always with absolute confidentiality.",
    landmarks: ["Cantonment Board", "Golf Course Road", "Club Road", "Cantt Railway Station"],
    nearbyAreas: ["civil-lines", "mall-road", "swaroop-nagar"],
    faqs: [
      {
        q: "Is escort service available in Kanpur Cantonment area?",
        a: "Yes. We provide highly discreet companion services in Kanpur Cantt. Call +91 8523045235 for private booking.",
      },
      {
        q: "How do you ensure complete privacy for bookings in Kanpur Cantt?",
        a: "All bookings are handled through encrypted private communication. Companions arrive in plain civilian clothing with no branding.",
      },
    ],
  },
  "barra": {
    name: "Barra",
    slug: "barra",
    pincode: "208027",
    description: "Barra is a large, rapidly developing residential locality in South Kanpur with a thriving commercial zone. Our escort service in Barra provides verified companions available for 24/7 home and hotel delivery.",
    longDescription: "Barra is one of South Kanpur's most expansive and fast-growing localities, comprising multiple sub-sectors (Barra 1 through 8), a busy bypass corridor, and a growing commercial infrastructure. Its large population of working professionals, business owners, and young residents makes it one of the highest-demand areas for companion services in Kanpur. Our escort service in Barra covers every sector and sub-locality. Booking is simple — call or WhatsApp +91 8523045235, specify your Barra sector or address, and a verified companion reaches you within 45 minutes to 1 hour.",
    landmarks: ["Barra Bypass", "Barra 2 Chauraha", "Barra World Bank Colony", "Barra Market"],
    nearbyAreas: ["govind-nagar", "shyam-nagar", "kakadeo"],
    faqs: [
      {
        q: "Is escort service available in all Barra sectors in Kanpur?",
        a: "Yes. We cover Barra 1–8 and the bypass area. Call +91 8523045235 for fast, verified companion delivery.",
      },
      {
        q: "What is the cost of escort service in Barra, Kanpur?",
        a: "Pricing varies by profile category. Contact us at +91 8523045235 or WhatsApp for current rates and availability in Barra.",
      },
    ],
  },
};

// Sidebar area links (excluding current area)
const allAreaLinks = [
  { name: "Civil Lines", slug: "civil-lines" },
  { name: "Swaroop Nagar", slug: "swaroop-nagar" },
  { name: "Govind Nagar", slug: "govind-nagar" },
  { name: "Kakadeo", slug: "kakadeo" },
  { name: "Mall Road", slug: "mall-road" },
  { name: "Kidwai Nagar", slug: "kidwai-nagar" },
  { name: "Rawatpur", slug: "rawatpur" },
  { name: "Indiranagar", slug: "indiranagar" },
];

export default function AreaDetail() {
  const [, params] = useRoute("/areas/:slug");
  const slug = params?.slug || "";
  const area = areasData[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    slug: slug,
    pincode: "208001",
    description: `Verified escort service in ${slug.replace(/-/g, " ")} Kanpur. 100% privacy, genuine profiles, and 24/7 home/hotel companion delivery.`,
    longDescription: `Our escort service covers ${slug.replace(/-/g, " ")} Kanpur with verified companion profiles, mobile contact numbers, and discreet home or hotel delivery within 45 minutes.`,
    landmarks: ["Main Market", "Hotel Zone"],
    nearbyAreas: ["civil-lines", "swaroop-nagar"],
    faqs: [
      {
        q: `Is escort service available in ${slug.replace(/-/g, " ")} Kanpur?`,
        a: `Yes. We provide verified companion delivery in ${slug.replace(/-/g, " ")}, Kanpur. Call +91 8523045235 for booking.`,
      },
    ],
  };

  const pageTitle = `Escorts in ${area.name} Kanpur | Escort Service ${area.name} | Call Girls`;
  const pageDesc = `Verified escorts in ${area.name} Kanpur. Trusted escort service with 100% privacy and 45-minute home & hotel delivery across ${area.name}. Call +91 8523045235.`;
  const canonicalUrl = `https://joya.kanpureliteservice.com/areas/${area.slug}`;
  const keywords = `escorts in ${area.name.toLowerCase()} kanpur, escort service ${area.name.toLowerCase()} kanpur, ${area.name.toLowerCase()} escorts, ${area.name.toLowerCase()} escort kanpur, call girl ${area.name.toLowerCase()} kanpur, ${area.name.toLowerCase()} call girl kanpur, escort in kanpur ${area.name.toLowerCase()}`;

  const areaSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Escort Service in ${area.name} Kanpur`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Kanpur Escorts — Escort Service in Kanpur",
        "telephone": "+91-8523045235",
        "url": "https://joya.kanpureliteservice.com/",
      },
      "areaServed": {
        "@type": "Place",
        "name": `${area.name}, Kanpur, Uttar Pradesh`,
      },
      "description": area.description,
      "url": canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joya.kanpureliteservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Kanpur Escorts by Area", "item": "https://joya.kanpureliteservice.com/#areas" },
        { "@type": "ListItem", "position": 3, "name": `Escorts in ${area.name}`, "item": canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": area.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ];

  const sidebarAreas = allAreaLinks.filter((a) => a.slug !== slug).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords={keywords} schema={areaSchema} />

      {/* Header */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            <a href="/" className="flex items-center gap-3">
              <span className="text-lg font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                KANPUR <span className="gradient-text-pink">ESCORTS</span>
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
      <nav className="mx-auto max-w-5xl px-4 py-3 text-xs w-full" style={{ color: "#d4aab3" }} aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><a href="/" className="hover:text-pink-400">Home</a></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><a href="/#areas" className="hover:text-pink-400">Kanpur Escorts</a></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-white">{area.name}</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded text-xs" style={{ background: "rgba(233,30,115,0.15)", color: "#ff6b9d", border: "1px solid rgba(233,30,115,0.3)" }}>
            <MapPin className="h-3.5 w-3.5" /> Escorts in {area.name}, Kanpur (PIN: {area.pincode})
          </div>
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            Escorts in <span className="gradient-text-pink">{area.name} Kanpur</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "#c2929a" }}>
            {area.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <a href={`tel:${phoneNumber}`} className="btn-primary px-6 py-3 text-sm">
              <Phone className="h-4 w-4" /> Call: +91 8523045235
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp px-6 py-3 text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp for Profiles
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left / Central Copy */}
          <div className="md:col-span-2 space-y-6">

            {/* About this area */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-xl font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                Escort Service in {area.name} Kanpur
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
                {area.longDescription}
              </p>
              <h3 className="text-base font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                Why Choose Our Escort Service in {area.name}?
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "#c2929a" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5" />
                  <span><strong>Verified escorts in {area.name} Kanpur:</strong> Every companion profile is authenticated. Genuine photos, accurate age, no fake listings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5" />
                  <span><strong>Fast 45-minute delivery in {area.name}:</strong> Companions dispatched immediately after confirmation. Home visits and hotel stays covered.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-500 mt-0.5" />
                  <span><strong>100% private escort booking:</strong> No records kept, no data shared, no third-party involvement. Your privacy is our priority.</span>
                </li>
              </ul>
            </div>

            {/* Landmarks */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-lg font-bold text-white uppercase mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                Key Landmarks & Coverage in {area.name}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {area.landmarks.map((lm) => (
                  <span key={lm} className="text-xs px-3 py-1 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#ff6b9d" }}>
                    📍 {lm}
                  </span>
                ))}
              </div>
              <p className="text-sm" style={{ color: "#d4aab3" }}>
                Our escort service covers all hotels, guesthouses, private residences, and apartments across {area.name} Kanpur (PIN: {area.pincode}). Call <strong style={{ color: "#e91e73" }}>+91 8523045235</strong> for immediate dispatch.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h2 className="text-lg font-bold text-white uppercase mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                Frequently Asked Questions — {area.name} Escort Service
              </h2>
              <div className="space-y-4">
                {area.faqs.map((faq, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>{faq.a}</p>
                  </div>
                ))}
                <div>
                  <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>How do I book an escort in {area.name}, Kanpur?</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
                    Call or WhatsApp <strong style={{ color: "#e91e73" }}>+91 8523045235</strong>. Tell us your location within {area.name} and your preferred companion category. We confirm the booking and dispatch within 45 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Search keyword cloud */}
            <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h3 className="text-sm font-bold text-white uppercase mb-3 tracking-wider" style={{ fontFamily: "Oswald, sans-serif" }}>
                Popular Search Terms — {area.name} Kanpur
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  `Escorts in ${area.name} Kanpur`,
                  `${area.name} escort service Kanpur`,
                  `${area.name} escorts`,
                  `Escort in Kanpur ${area.name}`,
                  `${area.name} call girl Kanpur`,
                  `Independent escort ${area.name}`,
                  `Female escort ${area.name} Kanpur`,
                  `${area.name} companion service`,
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
                45-Min Delivery
              </h3>
              <p className="text-xs mb-4" style={{ color: "#d4aab3" }}>
                Active in {area.name}, Kanpur. Book instantly.
              </p>
              <a href={`tel:${phoneNumber}`} className="btn-primary w-full py-3 text-xs mb-2">
                <Phone className="h-3.5 w-3.5" /> Call: 8523045235
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp w-full py-3 text-xs">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Booking
              </a>
            </div>

            {/* Trust signals */}
            <div className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h4 className="text-xs uppercase font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Why Trust Us?</h4>
              <div className="space-y-2 text-xs" style={{ color: "#d4aab3" }}>
                <div className="flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-pink-500" /> 100% Private Bookings</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-400" /> Verified Escort Profiles</div>
                <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-yellow-400" /> Available 24/7</div>
                <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 text-yellow-400" /> 4.9★ Rated Service</div>
              </div>
            </div>

            {/* Other areas */}
            <div className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h4 className="text-xs uppercase font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Other Kanpur Escort Areas</h4>
              <nav className="flex flex-col gap-1.5 text-xs" style={{ color: "#d4aab3" }} aria-label="Other service areas">
                {sidebarAreas.map((a) => (
                  <a key={a.slug} href={`/areas/${a.slug}`} className="hover:text-pink-400">
                    Escorts in {a.name} Kanpur
                  </a>
                ))}
                <a href="/#areas" className="hover:text-pink-400 mt-1" style={{ color: "#e91e73" }}>→ View All Areas</a>
              </nav>
            </div>

            {/* Service categories */}
            <div className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
              <h4 className="text-xs uppercase font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Escort Categories</h4>
              <nav className="flex flex-col gap-1.5 text-xs" style={{ color: "#d4aab3" }} aria-label="Service categories">
                <a href="/services/vip-escorts" className="hover:text-pink-400">VIP Escorts Kanpur</a>
                <a href="/services/college-models" className="hover:text-pink-400">College Model Escorts</a>
                <a href="/services/independent" className="hover:text-pink-400">Independent Escorts Kanpur</a>
                <a href="/services/luxury-escorts" className="hover:text-pink-400">Luxury Escorts Kanpur</a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs" style={{ background: "#0a0306", borderTop: "1px solid #3d1018", color: "#d4aab3" }}>
        © {new Date().getFullYear()} Kanpur Escorts — Escort Service in {area.name} Kanpur. All rights reserved.
      </footer>
    </div>
  );
}
