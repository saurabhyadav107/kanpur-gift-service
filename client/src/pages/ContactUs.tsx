import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello,%20I%20want%20to%20book%20a%20companion%20service.";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead
        title="Contact Us & Booking Helplines | Kanpur & Lucknow Escorts"
        description="Contact Kanpur & Lucknow Escorts for fast 24/7 companion booking. Call Helpline 1: +91 8523045235 or Helpline 2: +91 9621326466."
        canonicalUrl="https://joya.kanpureliteservice.com/contact"
        keywords="contact kanpur escorts, call girl number lucknow, companion helpline kanpur"
      />
      <Navbar />

      <section className="py-16 text-center border-b" style={{ background: "linear-gradient(135deg, #180509, #2b0811)", borderColor: "#3d1018" }}>
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          Contact Us &amp; <span className="gradient-text-pink">Booking Helplines</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-pink-200">
          Available 24 Hours a Day, 7 Days a Week across Kanpur &amp; Lucknow.
        </p>
      </section>

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded space-y-6" style={{ background: "#140509", border: "1px solid #3d1018" }}>
            <h2 className="text-2xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
              24/7 Phone &amp; WhatsApp Helplines
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              Connect directly with our booking coordinator for instant profile previews, rates, and 45-minute dispatch.
            </p>

            <div className="space-y-4">
              <a href={`tel:${phoneNumber}`} className="btn-primary py-4 px-6 text-sm w-full justify-center">
                <Phone className="h-5 w-5" /> Call Helpline 1: +91 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-primary py-4 px-6 text-sm w-full justify-center" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
                <Phone className="h-5 w-5" /> Call Helpline 2: +91 9621326466
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp py-4 px-6 text-sm w-full justify-center">
                <MessageCircle className="h-5 w-5" /> WhatsApp Direct Chat
              </a>
            </div>
          </div>

          <div className="p-8 rounded space-y-6" style={{ background: "#140509", border: "1px solid #3d1018" }}>
            <h2 className="text-2xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
              City Coverage Areas
            </h2>
            
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                <div className="font-bold text-white text-sm uppercase mb-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-pink-500" /> Kanpur Service Zone
                </div>
                <p style={{ color: "#c2929a" }}>Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar, Mall Road, Kidwai Nagar, Rawatpur, Indiranagar, Kanpur Cantt, Barra.</p>
              </div>

              <div className="p-4 rounded" style={{ background: "#1a0709", border: "1px solid #3d1018" }}>
                <div className="font-bold text-white text-sm uppercase mb-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-pink-500" /> Lucknow Service Zone
                </div>
                <p style={{ color: "#c2929a" }}>Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Alambagh, Shaheed Path, Mahanagar, Gomti Nagar Extension, Amausi Airport.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
