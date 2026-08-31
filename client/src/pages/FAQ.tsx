import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle, Phone, MessageCircle, ShieldCheck, DollarSign, Clock, Lock, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20have%20a%20question%20about%20booking.";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  const pageTitle = "Frequently Asked Questions | Kanpur & Lucknow Escorts | Joya Elite";
  const pageDesc = "Frequently Asked Questions for Kanpur & Lucknow Escorts service: zero advance payment policy, 45-minute hotel room delivery, complete discretion, call girl booking guide. Call +91 8523045235.";
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
          a: "Average arrival time is 35 to 45 minutes from confirmation across major sectors in Kanpur and Lucknow."
        },
        {
          q: "Do you deliver to hotel rooms as well as private residences?",
          a: "Yes, we provide 24/7 delivery to both private residences and all categories of 3-star, 4-star, and 5-star luxury hotels."
        }
      ]
    },
    {
      category: "Privacy & Discretion",
      icon: Lock,
      faqs: [
        {
          q: "How do you guarantee client privacy?",
          a: "All communications are encrypted and confidential. No personal records or chat histories are stored. Companions arrive discreetly in unbranded civilian attire."
        },
        {
          q: "Are profile photos real and verified?",
          a: "Yes. All profile images shared on WhatsApp and on our website are 100% genuine and verified."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(c => c.faqs);
  const faqSchema = [
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
          "name": "Frequently Asked Questions",
          "item": canonicalUrl
        }
      ]
    },
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

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords="faq joya elite, kanpur escorts faq, lucknow escorts faq, booking questions escort kanpur" schema={faqSchema} />
      <Header />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-6xl px-4 py-3.5 text-xs w-full text-[#c4bdad]" aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><Link href="/" className="hover:text-[#dfb76c] transition-colors">Home</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-[#dfb76c] font-semibold">FAQs</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden bg-gradient-to-b from-[#180e22] via-[#0b0811] to-[#08070b] border-b border-[#282033]/60">
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[#181220] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider font-bold">TRANSPARENT, VERIFIED &amp; HONEST ANSWERS</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#f6f3ee] mb-6 uppercase"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            FREQUENTLY ASKED <span className="gradient-text-gold">QUESTIONS</span>
          </h1>
          <p className="text-xs sm:text-base max-w-2xl mx-auto leading-relaxed text-[#c4bdad]">
            Find answers to common questions about Joya Elite companion bookings, our strict 100% Cash on Arrival policy, privacy protection, and service locations across Kanpur &amp; Lucknow.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-[#0c0911] border-b border-[#282033]/60">
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          {faqCategories.map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#282033]/60">
                <cat.icon className="h-5 w-5 text-[#dfb76c]" />
                <h2
                  className="text-xl font-bold text-[#f6f3ee] uppercase"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  {cat.category}
                </h2>
              </div>
              <div className="space-y-4">
                {cat.faqs.map((faq, idx) => {
                  const itemId = `${i}-${idx}`;
                  const isOpen = openItem === itemId;
                  return (
                    <div
                      key={idx}
                      className="card-luxury p-5 cursor-pointer transition-all"
                      onClick={() => toggleAccordion(itemId)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-bold text-[#f6f3ee] text-sm sm:text-base uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
                          {faq.q}
                        </h3>
                        <ChevronDown className={`h-4 w-4 text-[#dfb76c] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                      {isOpen && (
                        <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad] mt-3 pt-3 border-t border-[#2d2438]">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 bg-[#08070b]">
        <div className="mx-auto max-w-5xl px-4 space-y-6 text-left text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
          <h2
            className="text-2xl font-bold uppercase text-[#f6f3ee] mb-4"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Why Choose #1 Kanpur Escorts &amp; <span className="gradient-text-gold">Lucknow Call Girls Service?</span>
          </h2>
          <p>
            When searching for <strong>Kanpur Escorts</strong> or <strong>Lucknow Escorts</strong> online, clients often worry about unverified agency listings or advance deposit scams. Joya Elite eliminates all risk by enforcing a strict <strong>100% Cash on Arrival / Pay After Arrival</strong> policy. You never send any money beforehand — you pay cash only after your companion arrives in person at your hotel room or residence.
          </p>
          <p>
            Our dispatch service operates 24 hours a day, 7 days a week, covering Civil Lines, Swaroop Nagar, Mall Road, Kanpur Cantt, Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, and Shaheed Path near Phoenix Palassio hotels. For direct booking and photo previews, call <a href={`tel:${phoneNumber}`} className="text-[#dfb76c] font-bold">+91 8523045235</a> or WhatsApp <a href={whatsappUrl2} className="text-[#dfb76c] font-bold">+91 9621326466</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

