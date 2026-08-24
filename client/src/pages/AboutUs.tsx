import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Clock, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead
        title="Why Choose Us | 100% Verified Escort Service Kanpur & Lucknow"
        description="Learn why Kanpur & Lucknow Escorts is the most trusted companion agency. Zero advance payment, 100% verified profiles, 45-minute home & hotel delivery."
        canonicalUrl="https://joya.kanpureliteservice.com/about"
        keywords="about kanpur escorts, trusted escort service lucknow, genuine call girl agency kanpur"
      />
      <Navbar />

      <section className="py-16 text-center border-b" style={{ background: "linear-gradient(135deg, #180509, #2b0811)", borderColor: "#3d1018" }}>
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          Why Choose <span className="gradient-text-pink">Kanpur &amp; Lucknow Escorts</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-pink-200">
          The most trusted, verified, and confidential companion agency in Uttar Pradesh.
        </p>
      </section>

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-5xl px-4 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded text-center" style={{ background: "#140509", border: "1px solid #3d1018" }}>
              <div className="h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-4 text-pink-500 bg-pink-950/40 border border-pink-800/40">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>Zero Advance Payment</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                We operate 100% on Pay Cash On Arrival. You pay only after meeting your verified companion at your home or hotel room. Zero deposits.
              </p>
            </div>

            <div className="p-6 rounded text-center" style={{ background: "#140509", border: "1px solid #3d1018" }}>
              <div className="h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-4 text-pink-500 bg-pink-950/40 border border-pink-800/40">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>100% Verified Models</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Every photo and profile listed is personally verified. What you see on WhatsApp and on our website is the exact companion who arrives.
              </p>
            </div>

            <div className="p-6 rounded text-center" style={{ background: "#140509", border: "1px solid #3d1018" }}>
              <div className="h-12 w-12 mx-auto rounded-full flex items-center justify-center mb-4 text-pink-500 bg-pink-950/40 border border-pink-800/40">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>45-Min Express Delivery</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#c2929a" }}>
                Our dispatch network guarantees rapid 45-minute companion arrival across all major sectors in Kanpur and Lucknow 24 hours a day.
              </p>
            </div>
          </div>

          <div className="p-8 rounded space-y-6" style={{ background: "#140509", border: "1px solid #3d1018" }}>
            <h2 className="text-2xl font-bold uppercase text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
              Our Commitment to <span className="gradient-text-pink">Excellence &amp; Privacy</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              Founded to revolutionize the companion industry in Uttar Pradesh, Kanpur &amp; Lucknow Escorts is built on three unbreakable pillars: <strong>Absolute Discretion, Verified Profiles, and Zero Advance Payment</strong>.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#d4aab3" }}>
              Whether you are a visiting business traveller staying at a 5-star hotel in Civil Lines Kanpur or Gomti Nagar Lucknow, or a local resident requiring quiet companionship, we treat every booking with complete confidentiality. No personal information is stored or shared with third parties.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
