import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Heart, Lock, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

export default function About() {
  const pageTitle = "Kanpur Escorts & Lucknow Escorts — Premier Escort Service Directory";
  const pageDesc = "Verified Kanpur Escorts & Lucknow Escorts directory. Operating across Kanpur and Lucknow with 100% discretion, zero advance payment, verified call girls, and express 45-minute delivery. Call +91 8523045235.";
  const canonicalUrl = "https://joya.kanpureliteservice.com/about";

  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": pageTitle,
      "description": pageDesc,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": "Joya Elite — Kanpur & Lucknow Escorts",
        "url": "https://joya.kanpureliteservice.com/",
        "telephone": ["+91-8523045235", "+91-9621326466"]
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords="kanpur escorts about, lucknow escorts directory, kanpur call girls, lucknow call girls, escort service kanpur lucknow" schema={aboutSchema} />
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1c070b 0%, #2d0a12 50%, #0e0407 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.15)", border: "1px solid rgba(233,30,115,0.35)", color: "#ff6b9d" }}>
            <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
            <span>KANPUR &amp; LUCKNOW'S #1 VERIFIED ESCORT DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
            ABOUT <span className="gradient-text-pink">KANPUR &amp; LUCKNOW ESCORTS</span>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#d4aab3" }}>
            Joya Elite is North India's foremost high-class Kanpur &amp; Lucknow escort directory, dedicated to delivering discrete, verified, and professional companion experiences across all major Kanpur and Lucknow localities.
          </p>
        </div>
      </section>

      {/* Our 4 Core Pillars */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              Our Four Guiding <span className="gradient-text-pink">Pillars</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {[
              { icon: ShieldCheck, title: "100% Real Verification", desc: "Every companion profile on Joya Elite is individually vetted. What you see in profile previews is exactly who arrives." },
              { icon: CheckCircle2, title: "Zero Advance Deposit", desc: "We enforce a strict Cash on Arrival policy. You never pay a single rupee until your companion reaches your location." },
              { icon: Lock, title: "Ironclad Privacy", desc: "Your identity and personal details are never stored or shared. Companions arrive in unbranded, discreet civilian attire." },
              { icon: Clock, title: "Express 45-Min Delivery", desc: "Operating 24 hours a day, 365 days a year across Kanpur & Lucknow with average arrival times of under 45 minutes." },
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded flex flex-col justify-between" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                <div>
                  <pillar.icon className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-base font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>{pillar.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#c2929a" }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Brand Story */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4 space-y-6 text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
          <h2 className="text-2xl font-bold text-white uppercase text-center mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
            The Joya Elite <span className="gradient-text-pink">Standard</span>
          </h2>
          <p>
            Founded to elevate the companion directory landscape in Uttar Pradesh, Joya Elite bridges the gap between discerning guests and verified independent companions. Whether you are a business executive visiting Kanpur's industrial corridors or a corporate traveller staying in Lucknow's luxury hotel sector in Gomti Nagar, we provide an unmatched level of privacy, punctuality, and charm.
          </p>
          <p>
            Unlike unverified online classifieds, Joya Elite operates with absolute transparency. We do not charge registration fees, consultation charges, or advance deposits. Our clients enjoy complete peace of mind knowing that every date is handled with dignity, respect, and zero financial risk.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4 text-center">
            <a href="/kanpur" className="btn-primary text-xs px-6 py-3">Explore Kanpur Hub (/kanpur)</a>
            <a href="/lucknow" className="btn-primary text-xs px-6 py-3" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>Explore Lucknow Hub (/lucknow)</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
