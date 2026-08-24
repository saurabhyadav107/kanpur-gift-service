import { Phone, MessageCircle, ShieldCheck, Heart, Sparkles, MapPin } from "lucide-react";
import { Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";

export function Footer() {
  const kanpurAreas = [
    { name: "Civil Lines", slug: "civil-lines" },
    { name: "Swaroop Nagar", slug: "swaroop-nagar" },
    { name: "Govind Nagar", slug: "govind-nagar" },
    { name: "Kidwai Nagar", slug: "kidwai-nagar" },
    { name: "Kakadeo", slug: "kakadeo" },
    { name: "Mall Road", slug: "mall-road" },
    { name: "Rawatpur", slug: "rawatpur" },
    { name: "Shyam Nagar", slug: "shyam-nagar" },
    { name: "Saket Nagar", slug: "saket-nagar" },
    { name: "Kanpur Cantt", slug: "kanpur-cantt" },
    { name: "Barra", slug: "barra" },
  ];

  const lucknowAreas = [
    { name: "Gomti Nagar", slug: "gomti-nagar" },
    { name: "Hazratganj", slug: "hazratganj" },
    { name: "Indira Nagar", slug: "indira-nagar" },
    { name: "Aliganj", slug: "aliganj" },
    { name: "Alambagh", slug: "alambagh" },
    { name: "Shaheed Path", slug: "shaheed-path" },
    { name: "Mahanagar", slug: "mahanagar" },
    { name: "Gomti Nagar Ext", slug: "gomti-nagar-extension" },
    { name: "Amausi Airport", slug: "amausi-airport" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0d0a13 0%, #060508 100%)",
        borderTop: "1px solid rgba(223, 183, 108, 0.2)",
      }}
      className="pt-16 pb-20 md:pb-12 text-xs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded"
                style={{ background: "linear-gradient(135deg, #c59739, #dfb76c)" }}
              >
                <Sparkles className="h-4 w-4 text-[#08070b]" />
              </div>
              <div
                className="text-lg font-bold text-[#f6f3ee] uppercase tracking-wider"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                KANPUR &amp; LUCKNOW <span className="gradient-text-gold">VIP ESCORTS</span>
              </div>
            </div>
            <p className="leading-relaxed text-[#c4bdad]">
              North India's premier verified call girls and high-class escort directory for Kanpur and Lucknow. Enjoy 100% Cash on Arrival, zero advance deposits, and express 45-minute hotel suite or private residence delivery.
            </p>
            <div className="space-y-2 pt-2 text-[#e4decb]">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#dfb76c]" />
                <span>Helpline 1: <a href={`tel:${phoneNumber}`} className="text-[#dfb76c] font-bold hover:underline">+91 8523045235</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#dfb76c]" />
                <span>Helpline 2: <a href={`tel:${phoneNumber2}`} className="text-[#dfb76c] font-bold hover:underline">+91 9621326466</a></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">100% Verified Profiles &amp; Complete Discretion</span>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4 font-bold text-[#f6f3ee] flex items-center gap-2"
              style={{ fontFamily: "Oswald, Poppins, sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#dfb76c]" /> Verified Escort Service Portals
            </h4>
            <div className="flex flex-col gap-2.5 text-[#c4bdad]">
              <Link href="/" className="hover:text-[#dfb76c] transition-colors">Home Page</Link>
              <Link href="/kanpur" className="hover:text-[#dfb76c] transition-colors">Kanpur Hub (/kanpur)</Link>
              <Link href="/lucknow" className="hover:text-[#dfb76c] transition-colors">Lucknow Hub (/lucknow)</Link>
              <Link href="/profiles" className="hover:text-[#dfb76c] transition-colors">All Models Directory</Link>
              <Link href="/services/vip-escorts" className="hover:text-[#dfb76c] transition-colors">VIP Companion Services</Link>
              <Link href="/services/college-models" className="hover:text-[#dfb76c] transition-colors">College Models Directory</Link>
              <Link href="/services/independent" className="hover:text-[#dfb76c] transition-colors">Independent Companions</Link>
              <Link href="/services/luxury-escorts" className="hover:text-[#dfb76c] transition-colors">Luxury Escorts Directory</Link>
              <Link href="/reviews" className="hover:text-[#dfb76c] transition-colors">Client Reviews &amp; Ratings</Link>
              <Link href="/about" className="hover:text-[#dfb76c] transition-colors">About Us &amp; Standards</Link>
              <Link href="/contact" className="hover:text-[#dfb76c] transition-colors">Contact Us &amp; Helplines</Link>
              <Link href="/faq" className="hover:text-[#dfb76c] transition-colors">Frequently Asked Questions</Link>
            </div>
          </div>

          {/* Kanpur Localities */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4 font-bold text-[#f6f3ee] flex items-center gap-2"
              style={{ fontFamily: "Oswald, Poppins, sans-serif" }}
            >
              <MapPin className="h-3 w-3 text-[#dfb76c]" /> Kanpur Locations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-[#c4bdad]">
              {kanpurAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/kanpur/${area.slug}`}
                  className="hover:text-[#dfb76c] transition-colors truncate"
                  title={`Escorts in ${area.name} Kanpur`}
                >
                  • {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Lucknow Localities */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4 font-bold text-[#f6f3ee] flex items-center gap-2"
              style={{ fontFamily: "Oswald, Poppins, sans-serif" }}
            >
              <MapPin className="h-3 w-3 text-[#dfb76c]" /> Lucknow Locations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-[#c4bdad]">
              {lucknowAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/lucknow/${area.slug}`}
                  className="hover:text-[#dfb76c] transition-colors truncate"
                  title={`Escorts in ${area.name} Lucknow`}
                >
                  • {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#282033] flex flex-col md:flex-row items-center justify-between gap-4 text-[#a89f8f] text-[11px]">
          <div>
            © {new Date().getFullYear()} Joya Elite (`joya.kanpureliteservice.com`). All rights reserved. <span className="inline-block px-2 py-0.5 ml-2 rounded bg-amber-950/40 text-[#dfb76c] border border-amber-600/30 text-[10px] font-bold">18+ Adults Only</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#dfb76c] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[#dfb76c] transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-[#dfb76c] transition-colors">Disclaimers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

