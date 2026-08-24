import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20book%20a%20companion.";

export default function Contact() {
  const pageTitle = "Contact Kanpur Escorts & Lucknow Escorts | Call +91 8523045235 / +91 9621326466";
  const pageDesc = "Contact Kanpur Escorts & Lucknow Escorts 24/7. Call +91 8523045235 or +91 9621326466 for instant companion booking in Kanpur & Lucknow. WhatsApp available, 100% Pay on Arrival.";
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords="contact kanpur escorts, contact lucknow escorts, kanpur call girl number, lucknow call girl number, phone number escort kanpur lucknow" schema={contactSchema} />
      <Header />

      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1c070b 0%, #2d0a12 50%, #0e0407 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.15)", border: "1px solid rgba(233,30,115,0.35)", color: "#ff6b9d" }}>
            <Clock className="h-4 w-4 text-pink-500" />
            <span>24/7 INSTANT BOOKING HELPLINE — KANPUR &amp; LUCKNOW</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
            CONTACT <span className="gradient-text-pink">KANPUR &amp; LUCKNOW ESCORTS</span>
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#d4aab3" }}>
            Have questions or ready to book a companion in Kanpur or Lucknow? Our confidential dispatch team is available 24/7 via call or WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Direct Action Contact Cards */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Helpline 1 */}
          <div className="p-8 rounded flex flex-col justify-between text-center" style={{ background: "#1a0709", border: "1px solid #e91e73" }}>
            <div>
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(233,30,115,0.2)", color: "#e91e73" }}>
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>Helpline Line 1</h2>
              <p className="text-xs mb-6" style={{ color: "#c2929a" }}>Direct voice call for immediate Kanpur &amp; Lucknow bookings.</p>
              <div className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>+91 8523045235</div>
            </div>
            <a href={`tel:${phoneNumber}`} className="btn-primary py-3.5 text-sm w-full">
              <Phone className="h-4 w-4 inline mr-2" /> Call 8523045235 Now
            </a>
          </div>

          {/* Helpline 2 */}
          <div className="p-8 rounded flex flex-col justify-between text-center" style={{ background: "#1a0709", border: "1px solid #8e24aa" }}>
            <div>
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(142,36,170,0.2)", color: "#c0134e" }}>
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>Helpline Line 2</h2>
              <p className="text-xs mb-6" style={{ color: "#c2929a" }}>Secondary dispatch line &amp; WhatsApp photo preview requests.</p>
              <div className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>+91 9621326466</div>
            </div>
            <div className="space-y-2">
              <a href={`tel:${phoneNumber2}`} className="btn-primary py-3 text-sm w-full block" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
                <Phone className="h-4 w-4 inline mr-2" /> Call 9621326466 Now
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp py-3 text-sm w-full block">
                <MessageCircle className="h-4 w-4 inline mr-2" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Simple Booking Guide */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              How to Book in <span className="gradient-text-pink">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {[
              { step: "01", title: "Contact Us", desc: "Call +91 8523045235 or send a WhatsApp message with your location in Kanpur or Lucknow." },
              { step: "02", title: "Select Profile", desc: "Receive genuine, verified profile previews on WhatsApp and select your preferred companion." },
              { step: "03", title: "45-Min Arrival", desc: "Your companion is dispatched directly to your hotel room or residence within 45 minutes." },
              { step: "04", title: "Pay Cash on Arrival", desc: "Pay cash after your companion arrives. Zero advance deposit required — ever." },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded" style={{ background: "#140509", border: "1px solid #3d1018" }}>
                <span className="text-2xl font-bold text-pink-500 block mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>STEP {s.step}</span>
                <h3 className="text-base font-bold text-white uppercase mb-2">{s.title}</h3>
                <p style={{ color: "#c2929a" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 space-y-6 text-left text-xs sm:text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
          <h2 className="text-2xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            Kanpur &amp; Lucknow Escort Booking — <span className="gradient-text-pink">Instant 24/7 Helpline</span>
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
