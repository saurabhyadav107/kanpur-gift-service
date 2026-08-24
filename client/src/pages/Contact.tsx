import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin, CheckCircle2, Sparkles } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion.";

export default function Contact() {
  const pageTitle = "Contact Kanpur & Lucknow Escorts | Joya Elite 24/7 Helpline | +91 8523045235";
  const pageDesc = "Contact Joya Elite VIP Concierge 24/7. Call +91 8523045235 or +91 9621326466 for instant companion booking in Kanpur & Lucknow. WhatsApp available, 100% Cash on Arrival.";
  const canonicalUrl = "https://joya.kanpureliteservice.com/contact";

  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": pageTitle,
      "description": pageDesc,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": "Joya Elite — Kanpur & Lucknow Escorts",
        "telephone": ["+91-8523045235", "+91-9621326466"],
        "url": "https://joya.kanpureliteservice.com/"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords="contact kanpur escorts, contact lucknow escorts, kanpur call girl number, lucknow call girl number, phone number escort kanpur lucknow" schema={contactSchema} />
      <Header />

      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden bg-gradient-to-b from-[#180e22] via-[#0b0811] to-[#08070b] border-b border-[#282033]/60">
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[#181220] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg">
            <Clock className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider font-bold">24/7 INSTANT VIP CONCIERGE — KANPUR &amp; LUCKNOW</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#f6f3ee] mb-6 uppercase"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            BOOK KANPUR &amp; LUCKNOW ESCORTS — <span className="gradient-text-gold">24/7 VIP HELPLINE</span>
          </h1>
          <p className="text-xs sm:text-base max-w-2xl mx-auto leading-relaxed text-[#c4bdad]">
            Have questions or ready to book a verified call girl or escort in Kanpur or Lucknow? Our confidential dispatch team is available 24/7 via direct call or encrypted WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Direct Action Contact Cards */}
      <section className="py-16 bg-[#0c0911] border-b border-[#282033]/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Helpline 1 */}
          <div className="card-luxury p-8 flex flex-col justify-between text-center border-[#dfb76c]/50 shadow-2xl">
            <div>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#1c1626] border border-[#dfb76c]/40 text-[#dfb76c] shadow-md">
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-[#f6f3ee] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>Helpline Line 1</h2>
              <p className="text-xs mb-6 text-[#c4bdad]">Direct priority voice line for express Kanpur &amp; Lucknow bookings.</p>
              <div className="text-2xl font-bold text-[#dfb76c] mb-6" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>+91 8523045235</div>
            </div>
            <div className="space-y-3">
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold py-3.5 text-xs sm:text-sm w-full block">
                <Phone className="h-4 w-4 inline mr-2" /> Call 8523045235 Now
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-3.5 text-xs sm:text-sm w-full block">
                <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp Line 1
              </a>
            </div>
          </div>

          {/* Helpline 2 */}
          <div className="card-luxury p-8 flex flex-col justify-between text-center border-[#881337]/60 shadow-2xl">
            <div>
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#1c1626] border border-[#dfb76c]/40 text-[#dfb76c] shadow-md">
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-[#f6f3ee] uppercase mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>Helpline Line 2</h2>
              <p className="text-xs mb-6 text-[#c4bdad]">Secondary dispatch desk &amp; instant photo preview channel.</p>
              <div className="text-2xl font-bold text-[#dfb76c] mb-6" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>+91 9621326466</div>
            </div>
            <div className="space-y-3">
              <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy py-3.5 text-xs sm:text-sm w-full block">
                <Phone className="h-4 w-4 inline mr-2" /> Call 9621326466 Now
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-3.5 text-xs sm:text-sm w-full block">
                <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp Line 2
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Simple Booking Guide */}
      <section className="py-16 bg-[#08070b] border-b border-[#282033]/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#dfb76c] mb-2 block">
              EFFORTLESS DISPATCH
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#f6f3ee] uppercase"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              How to Book in <span className="gradient-text-gold">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {[
              { step: "01", title: "Contact Concierge", desc: "Call +91 8523045235 or send a WhatsApp message with your location in Kanpur or Lucknow." },
              { step: "02", title: "Select Companion", desc: "Receive genuine, verified profile previews on WhatsApp and select your preferred companion." },
              { step: "03", title: "45-Min Arrival", desc: "Your companion is dispatched directly to your hotel suite or residence within 45 minutes." },
              { step: "04", title: "Cash on Arrival", desc: "Pay cash after your companion arrives. Zero advance deposit required — ever." },
            ].map((s, idx) => (
              <div key={idx} className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#dfb76c] block mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>STEP {s.step}</span>
                  <h3 className="text-base font-bold text-[#f6f3ee] uppercase mb-2">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-[#c4bdad]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 bg-[#0c0911]">
        <div className="mx-auto max-w-5xl px-4 space-y-6 text-left text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
          <h2
            className="text-2xl font-bold uppercase text-[#f6f3ee] mb-4"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Kanpur &amp; Lucknow Escort Booking — <span className="gradient-text-gold">Instant 24/7 Helpline</span>
          </h2>
          <p>
            When booking an escort service in Kanpur or Lucknow, direct contact and authentic verification are essential. Joya Elite provides 24/7 phone helplines (<strong>+91 8523045235</strong> and <strong>+91 9621326466</strong>) and direct WhatsApp support so you can speak to our private dispatch manager, request genuine companion photo previews, and schedule 45-minute doorstep or hotel room delivery.
          </p>
          <p>
            Our dispatch service covers all key commercial and hotel zones including Civil Lines Kanpur, Swaroop Nagar, Mall Road, Kanpur Cantt, Gomti Nagar Lucknow, Hazratganj, Indira Nagar, Aliganj, and Shaheed Path near Phoenix Palassio. All bookings are strictly 100% Cash on Arrival — zero advance fees.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

