import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle, Phone, MessageCircle, ShieldCheck, DollarSign, Clock, Lock } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";

export default function FAQ() {
  const pageTitle = "Kanpur Escorts & Lucknow Escorts FAQ — Frequently Asked Questions";
  const pageDesc = "Frequently Asked Questions for Kanpur Escorts & Lucknow Escorts service: zero advance payment policy, 45-minute hotel room delivery, complete discretion, call girl booking guide. Call +91 8523045235.";
  const canonicalUrl = "https://joya.kanpureliteservice.com/faq";

  const faqCategories = [
    {
      category: "Booking & Payments",
      icon: DollarSign,
      faqs: [
        {
          q: "Is any advance payment required to book a companion with Joya Elite?",
          a: "No. Joya Elite strictly operates on a 100% Cash on Arrival / Pay After Meeting policy across Kanpur and Lucknow. You pay only after the companion arrives at your location."
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept cash on arrival directly to the companion. Online payments can be discussed upon request after arrival."
        },
        {
          q: "Are there any hidden fees, registration charges, or travel expenses?",
          a: "No hidden charges. The price quoted during WhatsApp/Phone confirmation is total and final."
        }
      ]
    },
    {
      category: "Locations & Delivery Times",
      icon: Clock,
      faqs: [
        {
          q: "Which cities and localities does Joya Elite serve?",
          a: "We serve Kanpur (Civil Lines, Swaroop Nagar, Govind Nagar, Kidwai Nagar, Kakadeo, Mall Road, Rawatpur, Shyam Nagar, Saket Nagar, Kanpur Cantt, Barra) and Lucknow (Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, Sushant Golf City, Mahanagar, Amausi Airport)."
        },
        {
          q: "How fast will the companion arrive at my location?",
          a: "Average arrival time is 45 minutes to 1 hour from confirmation across major sectors in Kanpur and Lucknow."
        },
        {
          q: "Do you deliver to hotel rooms as well as private residences?",
          a: "Yes, we provide 24/7 delivery to both private homes and all categories of hotels."
        }
      ]
    },
    {
      category: "Privacy & Discretion",
      icon: Lock,
      faqs: [
        {
          q: "How do you guarantee client privacy?",
          a: "All communications are confidential. No personal records or chat histories are stored. Companions arrive discreetly in unbranded civilian attire."
        },
        {
          q: "Are profile photos real and verified?",
          a: "Yes. All profile images shared on WhatsApp are 100% genuine and verified."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(c => c.faqs);
  const faqSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords="faq joya elite, kanpur escorts faq, lucknow escorts faq, booking questions escort kanpur" schema={faqSchema} />
      <Header />

      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1c070b 0%, #2d0a12 50%, #0e0407 100%)", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(233,30,115,0.15)", border: "1px solid rgba(233,30,115,0.35)", color: "#ff6b9d" }}>
            <HelpCircle className="h-4 w-4 text-pink-500" />
            <span>CLEAR, TRANSPARENT &amp; HONEST ANSWERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
            FREQUENTLY ASKED <span className="gradient-text-pink">QUESTIONS</span>
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#d4aab3" }}>
            Find answers to common questions about Joya Elite companion bookings, zero advance policy, privacy protection, and service locations in Kanpur and Lucknow.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16" style={{ background: "#140509", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          {faqCategories.map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b" style={{ borderColor: "#3d1018" }}>
                <cat.icon className="h-6 w-6 text-pink-500" />
                <h2 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {cat.category}
                </h2>
              </div>
              <div className="space-y-4">
                {cat.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                    <h3 className="font-bold text-white text-base mb-2">{faq.q}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#c2929a" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16" style={{ background: "#0e0407", borderBottom: "1px solid #3d1018" }}>
        <div className="mx-auto max-w-5xl px-4 space-y-6 text-left text-xs sm:text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
          <h2 className="text-2xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            Why Trust Joya Elite <span className="gradient-text-pink">Kanpur &amp; Lucknow Escort Service?</span>
          </h2>
          <p>
            When searching for <strong>Kanpur Escorts</strong> or <strong>Lucknow Escorts</strong> online, clients often worry about unverified agency listings or advance deposit scams. Joya Elite eliminates all risk by enforcing a strict <strong>100% Cash on Arrival / Pay After Arrival</strong> policy. You never send any money beforehand — you pay cash only after your companion arrives in person at your hotel room or residence.
          </p>
          <p>
            Our dispatch service operates 24 hours a day, 7 days a week, covering Civil Lines, Swaroop Nagar, Mall Road, Kanpur Cantt, Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, and Shaheed Path near Phoenix Palassio hotels. For direct booking and photo previews, call <strong>+91 8523045235</strong> or WhatsApp <strong>+91 9621326466</strong>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
