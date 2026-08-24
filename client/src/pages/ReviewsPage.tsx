import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote, MapPin } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Vikram R.",
    city: "Kanpur (Civil Lines)",
    rating: 5,
    date: "August 2026",
    text: "Booked Aarohi for a hotel stay near Mall Road Kanpur. Arrived in 35 minutes, exactly as shown in photos. Super polite, professional, and zero advance payment asked!"
  },
  {
    id: 2,
    name: "Anand M.",
    city: "Lucknow (Gomti Nagar)",
    rating: 5,
    date: "August 2026",
    text: "Used their new Lucknow service for Gomti Nagar near Hyatt. Priya was stunning and extremely well mannered. Outstanding companion service in UP."
  },
  {
    id: 3,
    name: "Siddharth K.",
    city: "Kanpur (Swaroop Nagar)",
    rating: 5,
    date: "August 2026",
    text: "Very discreet and genuine. Called Helpline 2 (9621326466), received profile previews on WhatsApp, and companion arrived in plain clothing. Highly recommended."
  },
  {
    id: 4,
    name: "Rahul T.",
    city: "Lucknow (Hazratganj)",
    rating: 5,
    date: "August 2026",
    text: "Best escort service in Lucknow hands down. Aanya arrived at Mayfair Hazratganj hotel room within 40 minutes. 100% cash on arrival."
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead
        title="Client Reviews & Testimonials | Kanpur & Lucknow Escorts"
        description="Read authentic client reviews and ratings for escort services in Kanpur and Lucknow. Verified feedback on punctuality, privacy, and genuine profiles."
        canonicalUrl="https://joya.kanpureliteservice.com/reviews"
        keywords="escort reviews kanpur, call girl reviews lucknow, client testimonials escorts"
      />
      <Navbar />

      <section className="py-16 text-center border-b" style={{ background: "linear-gradient(135deg, #180509, #2b0811)", borderColor: "#3d1018" }}>
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          Client <span className="gradient-text-pink">Reviews &amp; Testimonials</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-pink-200">
          Read genuine feedback from verified clients in Kanpur and Lucknow.
        </p>
      </section>

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.id} className="p-6 rounded relative" style={{ background: "#140509", border: "1px solid #3d1018" }}>
                <Quote className="h-8 w-8 text-pink-900/40 absolute top-4 right-4" />
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                  {"★".repeat(r.rating)}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#d4aab3" }}>"{r.text}"</p>
                <div className="flex items-center justify-between text-xs pt-3 border-t" style={{ borderColor: "#3d1018" }}>
                  <div>
                    <div className="font-bold text-white uppercase">{r.name}</div>
                    <div className="flex items-center gap-1 text-[11px]" style={{ color: "#c2929a" }}><MapPin className="h-3 w-3 text-pink-500" /> {r.city}</div>
                  </div>
                  <div style={{ color: "#c2929a" }}>{r.date}</div>
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
