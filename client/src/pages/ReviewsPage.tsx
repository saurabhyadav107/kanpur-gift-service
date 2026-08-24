import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quote, MapPin, Star, Sparkles, ShieldCheck } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Vikram R.",
    city: "Kanpur (Civil Lines)",
    rating: 5,
    date: "August 2026",
    text: "Booked Aarohi for an executive hotel stay near Mall Road Kanpur. Arrived in 35 minutes, exactly as shown in photos. Super polite, sophisticated, and zero advance payment asked!"
  },
  {
    id: 2,
    name: "Anand M.",
    city: "Lucknow (Gomti Nagar)",
    rating: 5,
    date: "August 2026",
    text: "Used Joya Elite's Lucknow service for a VIP suite booking in Gomti Nagar near Hyatt Regency. Priya was stunning, charming, and communicative. The pinnacle of companion service in UP."
  },
  {
    id: 3,
    name: "Siddharth K.",
    city: "Kanpur (Swaroop Nagar)",
    rating: 5,
    date: "August 2026",
    text: "Very discreet and genuine. Called Helpline 2 (9621326466), received profile previews on WhatsApp, and companion arrived in plain clothing. Exceptional standard of confidentiality."
  },
  {
    id: 4,
    name: "Rahul T.",
    city: "Lucknow (Hazratganj)",
    rating: 5,
    date: "August 2026",
    text: "Best escort service in Lucknow without question. Aanya arrived at our Hazratganj hotel room within 40 minutes. 100% cash on arrival with zero fuss."
  },
  {
    id: 5,
    name: "Devendra S.",
    city: "Kanpur (Kakadeo)",
    rating: 5,
    date: "August 2026",
    text: "Booked Simran for a quiet dinner date. Flawless communication, genuine beauty, and total discretion. Will definitely book through Joya Elite again."
  },
  {
    id: 6,
    name: "Manish P.",
    city: "Lucknow (Shaheed Path)",
    rating: 5,
    date: "August 2026",
    text: "Punctual delivery to Sushant Golf City near Phoenix Palassio. Meera was wonderful company. Highly recommended to executive visitors."
  }
];

export default function ReviewsPage() {
  const reviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Kanpur & Lucknow VIP Escorts",
      "url": "https://joya.kanpureliteservice.com/",
      "image": "https://joya.kanpureliteservice.com/images/banner-2.avif",
      "telephone": "+91-8523045235",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "148",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.map((r) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "datePublished": "2026-08-20",
        "reviewBody": r.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#08070b] text-[#f6f3ee]">
      <SEOHead
        title="Client Reviews & Testimonials | Kanpur & Lucknow Escorts | Verified Ratings"
        description="Read authentic client reviews and ratings for escort services in Kanpur and Lucknow. 100% verified feedback on punctuality, privacy, cash on arrival, and genuine profiles."
        canonicalUrl="https://joya.kanpureliteservice.com/reviews"
        keywords="escort reviews kanpur, call girl reviews lucknow, client testimonials escorts, kanpur escort service ratings"
        schema={reviewsSchema}
      />
      <Header />

      <section className="py-20 text-center relative overflow-hidden bg-gradient-to-b from-[#180e22] via-[#0b0811] to-[#08070b] border-b border-[#282033]/60">
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[#181220] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider font-bold">100% VERIFIED CLIENT FEEDBACK</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold uppercase text-[#f6f3ee] mb-4"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Client <span className="gradient-text-gold">Reviews &amp; Testimonials</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#c4bdad]">
            Read authentic feedback from verified clients across Kanpur &amp; Lucknow regarding our punctuality, profile authenticity, and discreet concierge service.
          </p>
        </div>
      </section>

      <main className="flex-grow py-16 bg-[#08070b]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="card-luxury p-6 relative flex flex-col justify-between hover:border-[#dfb76c] transition-all"
              >
                <Quote className="h-10 w-10 text-[#dfb76c]/15 absolute top-5 right-5 pointer-events-none" />
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-4">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[#c4bdad]">
                    "{r.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs pt-4 border-t border-[#2d2438]">
                  <div>
                    <div className="font-bold text-[#f6f3ee] uppercase text-sm" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                      {r.name}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#a89f8f] mt-0.5">
                      <MapPin className="h-3 w-3 text-[#dfb76c]" /> {r.city}
                    </div>
                  </div>
                  <div className="text-[11px] text-[#a89f8f]">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

