import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Sparkles, Lock, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

export default function About() {
  const pageTitle = "About Joya Elite | Kanpur & Lucknow Escorts Agency | High-Class Companions";
  const pageDesc = "Learn about Joya Elite — North India's premier verified companion service across Kanpur and Lucknow. Strict 100% Cash on Arrival, 45-minute hotel delivery, and complete privacy.";
  const canonicalUrl = "https://joya.kanpureliteservice.com/about";

  const aboutSchema = [
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
          "name": "About Kanpur & Lucknow Escorts",
          "item": canonicalUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": pageTitle,
      "description": pageDesc,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": "Kanpur & Lucknow VIP Escorts",
        "url": "https://joya.kanpureliteservice.com/",
        "logo": "https://joya.kanpureliteservice.com/images/banner-2.avif",
      },
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords="about joya elite, kanpur escorts agency, lucknow escorts agency, verified escorts up" schema={aboutSchema} />
      <Header />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-6xl px-4 py-3.5 text-xs w-full text-[#c4bdad]" aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><Link href="/" className="hover:text-[#dfb76c] transition-colors">Home</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-[#dfb76c] font-semibold">About Agency</span></li>
        </ol>
      </nav>

      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-b from-[#180f22] via-[#0d0914] to-[#08070b] border-b border-[#282033]/60 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[#181220] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider font-bold">KANPUR &amp; LUCKNOW'S #1 VERIFIED ESCORT DIRECTORY</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#f6f3ee] mb-6 uppercase"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            ABOUT <span className="gradient-text-gold">KANPUR &amp; LUCKNOW ESCORTS SERVICE</span>
          </h1>
          <p className="text-xs sm:text-base leading-relaxed text-[#c4bdad] max-w-2xl mx-auto">
            North India's foremost luxury Kanpur &amp; Lucknow companion directory, dedicated to delivering discreet, verified, and professional outcall experiences across all premier hotel zones.
          </p>
        </div>
      </section>

      {/* Our 4 Core Pillars */}
      <section className="py-16 bg-[#0c0911] border-b border-[#282033]/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#dfb76c] mb-2 block">
              OUR FOUNDATION
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#f6f3ee] uppercase"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Our Four Guiding <span className="gradient-text-gold">Pillars</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "100% Real Verification", desc: "Every companion profile on our directory is individually vetted. What you see in profile previews is exactly who arrives." },
              { icon: CheckCircle2, title: "Zero Advance Deposit", desc: "We enforce a strict Cash on Arrival policy. You never pay a single rupee until your companion reaches your location." },
              { icon: Lock, title: "Ironclad Privacy", desc: "Your identity and personal details are never stored or shared. Companions arrive in unbranded, discreet civilian attire." },
              { icon: Clock, title: "Express 45-Min Delivery", desc: "Operating 24 hours a day, 365 days a year across Kanpur & Lucknow with average arrival times of under 45 minutes." },
            ].map((pillar, i) => (
              <div key={i} className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <pillar.icon className="h-8 w-8 text-[#dfb76c] mb-4" />
                  <h3 className="text-base font-bold text-[#f6f3ee] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-[#c4bdad]">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Brand Story */}
      <section className="py-16 bg-[#08070b]">
        <div className="mx-auto max-w-4xl px-4 space-y-6 text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#f6f3ee] uppercase text-center mb-6"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            The #1 Escort Service &amp; Call Girls <span className="gradient-text-gold">Standard in Kanpur &amp; Lucknow</span>
          </h2>
          <p>
            Founded to elevate the companion directory landscape in Uttar Pradesh, Joya Elite bridges the gap between discerning guests and verified independent companions. Whether you are a business executive visiting Kanpur's industrial corridors or a corporate traveller staying in Lucknow's luxury hotel sector in Gomti Nagar, we provide an unmatched level of privacy, punctuality, and charm.
          </p>
          <p>
            Unlike unverified online classifieds, Joya Elite operates with absolute transparency. We do not charge registration fees, consultation charges, or advance deposits. Our clients enjoy complete peace of mind knowing that every date is handled with dignity, respect, and zero financial risk.
          </p>

          <div className="pt-8 flex flex-wrap justify-center gap-4 text-center">
            <Link href="/kanpur" className="btn-luxury-gold text-xs px-6 py-3.5">
              Explore Kanpur Hub
            </Link>
            <Link href="/lucknow" className="btn-luxury-burgundy text-xs px-6 py-3.5">
              Explore Lucknow Hub
            </Link>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-xs px-6 py-3.5">
              <MessageCircle className="h-4 w-4 inline mr-1.5" /> WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
