import React, { useState } from "react";
import { Phone, MessageCircle, Sparkles, ArrowRight, Menu, X, Crown } from "lucide-react";
import { useLocation } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Kanpur%20%26%20Lucknow%20Escorts,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Kanpur%20%26%20Lucknow%20Escorts,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Kanpur Escorts", href: "/kanpur" },
    { name: "Lucknow Escorts", href: "/lucknow", badge: "NEW" },
    { name: "All Models", href: "/profiles" },
    { name: "Services", href: "/services/vip-escorts" },
    { name: "Reviews", href: "/reviews" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* ─── FLOATING DESKTOP CONCIERGE DOCK ─── */}
      <div className="float-sidebar hidden lg:flex" aria-label="Quick contact">
        <a href={`tel:${phoneNumber}`} className="float-phone" title="Call Helpline 1: 8523045235" aria-label="Call Helpline 1">
          <Phone size={18} />
        </a>
        <a href={`tel:${phoneNumber2}`} className="float-phone-2" title="Call Helpline 2: 9621326466" aria-label="Call Helpline 2">
          <Phone size={18} />
        </a>
        <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="float-wa" title="WhatsApp Concierge" aria-label="WhatsApp Concierge">
          <MessageCircle size={18} />
        </a>
      </div>

      {/* ─── TOP ANNOUNCEMENT BAR ─── */}
      <div
        style={{
          background: "linear-gradient(90deg, #0d0a12 0%, #1e1424 50%, #0d0a12 100%)",
          borderBottom: "1px solid rgba(223, 183, 108, 0.25)",
        }}
        className="py-2 px-4 text-center text-xs font-semibold text-white flex flex-wrap items-center justify-center gap-2 z-50 relative"
      >
        <span
          className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1"
          style={{ background: "linear-gradient(135deg, #c59739, #e5c158)", color: "#08070b" }}
        >
          <Crown className="h-3 w-3" /> 24/7 ESCORTS
        </span>
        <span className="text-[#d8d1c3]">
          🔥 Lucknow &amp; Kanpur Escort Service Live! Gomti Nagar, Civil Lines, Swaroop Nagar &amp; Hazratganj — 100% Pay on Arrival
        </span>
        <a
          href="/lucknow"
          className="font-bold underline hover:text-[#faebd7] text-[#dfb76c] ml-1 transition-colors flex items-center gap-1"
        >
          Explore Lucknow Hub <ArrowRight className="h-3 w-3 inline" />
        </a>
      </div>

      {/* ─── HEADER NAVBAR ─── */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3.5">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #dfb76c 0%, #c59739 50%, #881337 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <Sparkles className="h-5 w-5 text-[#08070b]" />
              </div>
              <div>
                <span
                  className="block text-base sm:text-lg font-bold text-white leading-tight tracking-wider uppercase"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  KANPUR &amp; LUCKNOW <span className="gradient-text-gold">ESCORTS</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-[#b8b0a2]">
                  VIP Escort Service &amp; Call Girls Agency • 24/7 Discretion
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-bold" style={{ fontFamily: "Oswald, Poppins, sans-serif", letterSpacing: "0.08em" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors uppercase flex items-center gap-1 py-1 ${
                    isActive(item.href)
                      ? "text-[#dfb76c] font-bold border-b-2 border-[#dfb76c]"
                      : "text-[#c4bdad] hover:text-[#dfb76c]"
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded text-[8px] font-bold" style={{ background: "#c59739", color: "#08070b" }}>
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Header CTA buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold text-xs px-3.5 py-2">
                <Phone className="h-3.5 w-3.5" />
                <span>Call 8523045235</span>
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy text-xs px-3.5 py-2 hidden xl:inline-flex">
                <Phone className="h-3.5 w-3.5" />
                <span>9621326466</span>
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-xs px-3.5 py-2">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-white hover:text-[#dfb76c] focus:outline-none"
              style={{ background: "#15101d", border: "1px solid #2d2438" }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t px-4 py-4 space-y-3" style={{ background: "#0e0a14", borderColor: "rgba(223, 183, 108, 0.2)" }}>
            <nav className="flex flex-col space-y-2 text-sm font-semibold uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg flex items-center justify-between uppercase ${
                    isActive(item.href) ? "bg-[#dfb76c]/15 text-[#dfb76c] font-bold border border-[#dfb76c]/30" : "text-[#c4bdad] hover:bg-[#1a1322]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{ background: "#c59739", color: "#08070b" }}>
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t grid grid-cols-2 gap-2" style={{ borderColor: "#282033" }}>
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold text-xs py-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy text-xs py-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> 9621326466
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald text-xs py-2.5 justify-center col-span-2">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp VIP Booking
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── MOBILE STICKY BOTTOM BAR ─── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden shadow-2xl"
        style={{ borderTop: "1px solid rgba(223, 183, 108, 0.3)", background: "rgba(8, 7, 11, 0.98)" }}
      >
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-[#08070b]"
          style={{ background: "linear-gradient(135deg, #c59739, #e5c158)", fontFamily: "Oswald, Poppins, sans-serif" }}
        >
          <Phone className="h-3.5 w-3.5" /> 8523045235
        </a>
        <a
          href={`tel:${phoneNumber2}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-white"
          style={{ background: "#701a75", fontFamily: "Oswald, Poppins, sans-serif" }}
        >
          <Phone className="h-3.5 w-3.5" /> 9621326466
        </a>
        <a
          href={whatsappUrl2}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-white"
          style={{ background: "#059669", fontFamily: "Oswald, Poppins, sans-serif" }}
        >
          <MessageCircle className="h-3.5 w-3.5" /> WHATSAPP
        </a>
      </div>
    </>
  );
}

