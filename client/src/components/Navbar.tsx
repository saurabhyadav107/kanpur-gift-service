import React, { useState } from "react";
import { Phone, MessageCircle, Heart, ArrowRight, Menu, X } from "lucide-react";
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
    { name: "Kanpur Escorts", href: "/kanpur-escorts" },
    { name: "Lucknow Escorts", href: "/lucknow-escorts", badge: "NEW" },
    { name: "All Models", href: "/profiles" },
    { name: "Why Us", href: "/about" },
    { name: "Reviews", href: "/reviews" },
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
      {/* FLOATING SIDEBAR */}
      <div className="float-sidebar hidden md:flex" aria-label="Quick contact">
        <a href={`tel:${phoneNumber}`} className="float-phone" title="Call Helpline 1: 8523045235" aria-label="Call Helpline 1">
          <Phone size={18} />
        </a>
        <a href={`tel:${phoneNumber2}`} className="float-phone" title="Call Helpline 2: 9621326466" aria-label="Call Helpline 2" style={{ background: "#c0134e" }}>
          <Phone size={18} />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="float-wa" title="WhatsApp 1" aria-label="WhatsApp 1">
          <MessageCircle size={18} />
        </a>
        <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="float-wa" title="WhatsApp 2" aria-label="WhatsApp 2" style={{ background: "#128C7E" }}>
          <MessageCircle size={18} />
        </a>
      </div>

      {/* LUCKNOW TOP ANNOUNCEMENT BAR */}
      <div style={{ background: "linear-gradient(90deg, #1a0709, #3d1018, #1a0709)", borderBottom: "1px solid rgba(233,30,115,0.4)" }} className="py-2 px-4 text-center text-xs font-semibold text-white flex flex-wrap items-center justify-center gap-2 z-50 relative">
        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider" style={{ background: "linear-gradient(135deg, #ad0c46, #e91e73)", color: "#fff" }}>
          LUCKNOW SERVICE
        </span>
        <span style={{ color: "#f5e6ea" }}>
          🔥 Lucknow Escort Service Live! Gomti Nagar, Hazratganj, Indira Nagar &amp; Aliganj — 24/7 Delivery
        </span>
        <a href="/lucknow-escorts" className="font-bold underline hover:text-pink-400 text-pink-300 ml-1 transition-colors flex items-center gap-1">
          Explore Lucknow Escorts <ArrowRight className="h-3 w-3 inline" />
        </a>
      </div>

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div
                className="flex h-9 w-9 items-center justify-center rounded"
                style={{ background: "linear-gradient(135deg, #ad0c46, #e91e73)" }}
              >
                <Heart className="h-4 w-4 text-white" fill="white" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white leading-tight" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>
                  KANPUR &amp; LUCKNOW <span className="gradient-text-pink">ESCORTS</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest" style={{ color: "#d4aab3" }}>
                  Verified Companions • Escort Service Kanpur &amp; Lucknow
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors uppercase flex items-center gap-1 ${
                    isActive(item.href)
                      ? "text-pink-400 font-bold border-b-2 border-pink-500 pb-0.5"
                      : "text-[#c2929a] hover:text-pink-400"
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold" style={{ background: "#e91e73", color: "#fff" }}>
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Header CTA buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-xs px-3.5 py-2">
                <Phone className="h-3.5 w-3.5" />
                <span>Call 8523045235</span>
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-primary text-xs px-3.5 py-2 hidden xl:inline-flex" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
                <Phone className="h-3.5 w-3.5" />
                <span>9621326466</span>
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs px-3.5 py-2">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-white hover:text-pink-400 focus:outline-none"
              style={{ background: "#1a0709", border: "1px solid #3d1018" }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t px-4 py-4 space-y-3" style={{ background: "#140509", borderColor: "#3d1018" }}>
            <nav className="flex flex-col space-y-2 text-sm font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded flex items-center justify-between uppercase ${
                    isActive(item.href) ? "bg-pink-900/40 text-pink-400 font-bold" : "text-[#c2929a] hover:bg-pink-900/20"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-600 text-white">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t grid grid-cols-2 gap-2" style={{ borderColor: "#3d1018" }}>
              <a href={`tel:${phoneNumber}`} className="btn-primary text-xs py-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-primary text-xs py-2.5 justify-center" style={{ background: "#8e24aa" }}>
                <Phone className="h-3.5 w-3.5" /> 9621326466
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp text-xs py-2.5 justify-center col-span-2">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Chat
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden"
        style={{ borderTop: "1px solid #3d1018", background: "rgba(14,4,7,0.97)" }}
      >
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-white"
          style={{ background: "#e91e73", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          <Phone className="h-3.5 w-3.5" /> 8523045235
        </a>
        <a
          href={`tel:${phoneNumber2}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-white"
          style={{ background: "#8e24aa", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          <Phone className="h-3.5 w-3.5" /> 9621326466
        </a>
        <a
          href={whatsappUrl2}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-white"
          style={{ background: "#15803d", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          <MessageCircle className="h-3.5 w-3.5" /> WHATSAPP
        </a>
      </div>
    </>
  );
}
