import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is advance payment required to book an escort in Kanpur or Lucknow?",
    a: "No advance payment is ever required — period. We operate 100% on cash on arrival. You pay only after the companion reaches your home or hotel room."
  },
  {
    q: "How do I book an escort service in Kanpur or Lucknow?",
    a: "Call Helpline 1 (+91 8523045235) or Helpline 2 (+91 9621326466) or message us on WhatsApp. Specify your city & location, browse verified profiles, and confirm booking."
  },
  {
    q: "How quickly does a companion arrive after booking?",
    a: "Our standard arrival time is 45 minutes to 1 hour across Civil Lines, Swaroop Nagar, Gomti Nagar, Hazratganj, and all covered sectors."
  },
  {
    q: "Are the escort profiles and photos genuine?",
    a: "Yes. Every profile listed on our site and shared via WhatsApp is 100% verified. The photo you select is the exact person who arrives."
  },
  {
    q: "How is client privacy protected during bookings?",
    a: "Complete confidentiality is guaranteed. No personal data is stored or shared. Companions arrive discreetly in regular civilian clothing."
  },
  {
    q: "Do you deliver escorts to hotels in Lucknow and Kanpur?",
    a: "Yes! We specialize in discreet hotel companion delivery across all major hotels in Kanpur (Civil Lines, Mall Road) and Lucknow (Gomti Nagar, Hazratganj, Airport corridor)."
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead
        title="Frequently Asked Questions (FAQ) | Kanpur & Lucknow Escorts"
        description="Got questions about booking escorts in Kanpur or Lucknow? Read answers on advance payment, privacy, hotel delivery, and booking process."
        canonicalUrl="https://joya.kanpureliteservice.com/faq"
        keywords="escort faq kanpur, how to book call girl lucknow, escort payment questions"
      />
      <Navbar />

      <section className="py-16 text-center border-b" style={{ background: "linear-gradient(135deg, #180509, #2b0811)", borderColor: "#3d1018" }}>
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          Frequently Asked <span className="gradient-text-pink">Questions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-pink-200">
          Everything you need to know about booking companions in Kanpur and Lucknow.
        </p>
      </section>

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded" style={{ background: "#140509", border: "1px solid #3d1018" }}>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-start gap-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                <HelpCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                {f.q}
              </h3>
              <p className="text-sm leading-relaxed pl-7" style={{ color: "#d4aab3" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
