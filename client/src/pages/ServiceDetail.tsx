import { SEOHead } from "@/components/SEOHead";
import { Phone, MessageCircle, Star, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { useRoute } from "wouter";

const phoneNumber = "+918523045235";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20am%20interested%20in%20booking%20a%20service.";

interface ServiceInfo {
  name: string;
  slug: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  content: string;
}

const servicesData: Record<string, ServiceInfo> = {
  "vip-escorts": {
    name: "VIP Call Girls",
    slug: "vip-escorts",
    h1: "VIP Call Girls in Kanpur — High Class VIP Escort Service",
    title: "VIP Call Girl Kanpur | High Class VIP Escort Service & Phone Number",
    description: "Book VIP call girls in Kanpur. Verified VIP call girl pic, mobile number +91 8523045235, high-class companions for luxury hotel stays & 24/7 appointment delivery.",
    keywords: "vip call girl kanpur, high class escort kanpur, kanpur call girl number, kanpur call girl pic, best sexy call girls in kanpur, kanpur call girl contact number",
    content: "Our VIP call girls in Kanpur represent the absolute pinnacle of luxury companionship. Elegant, well-educated, and stunning, our VIP escorts cater to high-profile gentlemen seeking supreme discretion and high-society charm.",
  },
  "college-models": {
    name: "College Model Escorts",
    slug: "college-models",
    h1: "College Model Call Girls in Kanpur — Young & Bubbly Companions",
    title: "College Model Call Girl Kanpur | Young Escorts & Mobile Number",
    description: "Book young college model call girls in Kanpur. Real college girl pics, WhatsApp contact number +91 8523045235, fresh & bubbly companion appointment delivery.",
    keywords: "college model call girl kanpur, young call girl kanpur, kanpur call girl mobile number, kanpur call girl pic, kanpur ki call girl, book call girl in kanpur",
    content: "Explore youthful and vibrant college model companions in Kanpur. Perfect for casual dates, party company, and fun evening outings across Swaroop Nagar, Kakadeo, and Civil Lines.",
  },
  "independent": {
    name: "Independent Companions",
    slug: "independent",
    h1: "Independent Call Girls in Kanpur — Private Companion Booking",
    title: "Independent Call Girl Kanpur | Direct Contact Number & Genuine Pics",
    description: "Book independent call girls in Kanpur. Verified independent companion photos, direct phone number +91 8523045235, 100% private home & hotel appointments.",
    keywords: "independent call girl kanpur, bhabhi call girl kanpur, call girl mobile number in kanpur, kanpur call girl no, call girl appointment kanpur",
    content: "Connect directly with independent companions and attractive bhabhi call girls in Kanpur. Enjoy unhurried quality time with respectful, mature, and passionate companions.",
  },
  "luxury-escorts": {
    name: "Luxury Escorts",
    slug: "luxury-escorts",
    h1: "Luxury Escort Service Kanpur — Supermodel Class Call Girls",
    title: "Luxury Escort Service Kanpur | VIP Supermodels & Mobile Contact",
    description: "Premier luxury escort service in Kanpur. Elite supermodel call girls, verified photos, direct phone number +91 8523045235, 24/7 luxury hotel delivery.",
    keywords: "luxury escort kanpur, best sexy call girls in kanpur, kanpur call girl contact number, call girl cell phone number in kanpur, call girl at kanpur",
    content: "Indulge in Kanpur's finest luxury escort services. Exceptional glamour, breathtaking beauty, and total secrecy guaranteed for elite clients and luxury hotel visits.",
  },
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";
  const service = servicesData[slug] || {
    name: slug.replace(/-/g, " ").toUpperCase(),
    slug: slug,
    h1: `Call Girl Service in Kanpur — ${slug.replace(/-/g, " ")}`,
    title: `Call Girl in Kanpur | ${slug.replace(/-/g, " ")} Service & Phone Number`,
    description: `Book call girl in Kanpur. Verified companion pictures, call girl phone numbers +91 8523045235, mobile details & fast appointment delivery.`,
    keywords: `call girl kanpur, kanpur call girl number, kanpur call girl pic, kanpur call girl mobile number, best sexy call girls in kanpur`,
    content: `Experience premier call girl and escort companion services in Kanpur with 100% verified profiles and instant appointment delivery.`,
  };

  const canonicalUrl = `https://joya.kanpureliteservice.com/services/${service.slug}`;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={service.title} description={service.description} canonicalUrl={canonicalUrl} keywords={service.keywords} />

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

      <nav className="mx-auto max-w-5xl px-4 py-3 text-xs w-full" style={{ color: "#d4aab3" }}>
        <a href="/" className="hover:text-pink-400">Home</a> &gt; <a href="/#profiles" className="hover:text-pink-400">Services</a> &gt; <span className="text-white">{service.name}</span>
      </nav>

      <section className="py-12" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
            {service.h1}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "#c2929a" }}>
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <a href={`tel:${phoneNumber}`} className="btn-primary px-6 py-3 text-sm">
              <Phone className="h-4 w-4" /> Call Number: +91 8523045235
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp px-6 py-3 text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp for Pics
            </a>
          </div>
        </div>
      </section>

      <main className="flex-grow py-12">
        <div className="mx-auto max-w-4xl px-4 space-y-8">
          <div className="p-6 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
            <h2 className="text-xl font-bold text-white uppercase mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              About {service.name} in Kanpur
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>
              {service.content}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              Our agency provides instant access to verified call girl contact numbers, mobile details, genuine image previews, and 24/7 home or hotel companion appointment delivery in Civil Lines, Swaroop Nagar, Govind Nagar, Kakadeo, and all major Kanpur areas.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs" style={{ background: "#0a0306", borderTop: "1px solid #3d1018", color: "#d4aab3" }}>
        © {new Date().getFullYear()} Joya Elite Service — {service.name} Kanpur. All rights reserved.
      </footer>
    </div>
  );
}
