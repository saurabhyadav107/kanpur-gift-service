import { Sparkles, Phone, MessageCircle, ArrowRight, Menu, X, ShieldCheck, Crown } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello%20Joya%20Elite,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Kanpur Hub", href: "/kanpur" },
    { label: "Lucknow Hub", href: "/lucknow", isNew: true },
    { label: "Verified Models", href: "/profiles" },
    { label: "Services", href: "/services/vip-escorts" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      {/* ─── FLOATING DESKTOP CONCIERGE DOCK ─── */}
      <div className="float-sidebar hidden lg:flex" aria-label="Quick Concierge Access">
        <a href={`tel:${phoneNumber}`} className="float-phone" title="Call Helpline 1: 8523045235" aria-label="Call Helpline 1">
          <Phone size={18} />
        </a>
        <a href={`tel:${phoneNumber2}`} className="float-phone-2" title="Call Helpline 2: 9621326466" aria-label="Call Helpline 2">
          <Phone size={18} />
        </a>
        <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="float-wa" title="WhatsApp 24/7 Concierge" aria-label="WhatsApp Concierge">
          <MessageCircle size={18} />
        </a>
      </div>

      {/* ─── TOP LUXURY ANNOUNCEMENT BAR ─── */}
      <div
        style={{
          background: "linear-gradient(90deg, #0d0a12 0%, #1e1424 50%, #0d0a12 100%)",
          borderBottom: "1px solid rgba(223, 183, 108, 0.25)",
        }}
        className="py-2 px-4 text-center text-xs font-medium text-[#f6f3ee] flex flex-wrap items-center justify-center gap-2 z-50 relative"
      >
        <span
          className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1"
          style={{ background: "linear-gradient(135deg, #c59739, #e5c158)", color: "#08070b" }}
        >
          <Crown className="h-3 w-3" /> LUXURY COMPANIONS
        </span>
        <span className="text-[#d8d1c3] hidden sm:inline">
          Kanpur &amp; Lucknow Premier Escort Directory • 100% Cash On Arrival • Zero Advance
        </span>
        <span className="text-[#d8d1c3] sm:hidden">
          100% Cash On Arrival • 45-Min Delivery
        </span>
        <Link
          href="/lucknow"
          className="font-bold underline hover:text-[#faebd7] text-[#dfb76c] ml-1 transition-colors inline-flex items-center gap-1"
        >
          Explore Lucknow Hub <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* ─── MAIN LUXURY HEADER NAVBAR ─── */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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
                  className="block text-base sm:text-lg font-bold text-[#f6f3ee] leading-tight tracking-wider uppercase"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  KANPUR &amp; LUCKNOW <span className="gradient-text-gold">ESCORTS</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-[#b8b0a2]">
                  VIP Escort Service &amp; Call Girls Agency • 24/7 Discretion
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden xl:flex items-center gap-5 text-xs font-bold"
              style={{ fontFamily: "Oswald, Poppins, sans-serif", letterSpacing: "0.08em" }}
            >
              {navItems.map((item) => {
                const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-all uppercase flex items-center gap-1.5 py-1 ${
                      isActive
                        ? "text-[#dfb76c] font-bold border-b-2 border-[#dfb76c]"
                        : "text-[#c4bdad] hover:text-[#dfb76c]"
                    }`}
                  >
                    {item.label}
                    {item.isNew && (
                      <span
                        className="px-1.5 py-0.2 rounded text-[8px] font-bold"
                        style={{ background: "#c59739", color: "#08070b" }}
                      >
                        NEW
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold text-xs px-3.5 py-2">
                <Phone className="h-3.5 w-3.5 inline mr-1" />
                <span className="hidden sm:inline">Call 1</span>
              </a>
              <a
                href={`tel:${phoneNumber2}`}
                className="btn-luxury-burgundy text-xs px-3.5 py-2"
              >
                <Phone className="h-3.5 w-3.5 inline mr-1" />
                <span className="hidden sm:inline">Call 2</span>
              </a>
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-emerald text-xs px-3.5 py-2"
              >
                <MessageCircle className="h-3.5 w-3.5 inline mr-1" />
                <span>WhatsApp</span>
              </a>
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-[#f6f3ee] hover:text-[#dfb76c] focus:outline-none"
                style={{ background: "#15101d", border: "1px solid #2d2438" }}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden px-4 pt-3 pb-6 border-t" style={{ background: "#0e0a14", borderColor: "rgba(223, 183, 108, 0.2)" }}>
            <nav className="flex flex-col gap-2.5 text-sm font-semibold uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
              {navItems.map((item) => {
                const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3 rounded-lg flex items-center justify-between transition-colors ${
                      isActive ? "bg-[#dfb76c]/15 text-[#dfb76c] font-bold border border-[#dfb76c]/30" : "text-[#c4bdad] hover:bg-[#1a1322]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold" style={{ background: "#c59739", color: "#08070b" }}>
                        NEW
                      </span>
                    )}
                  </Link>
                );
              })}
              <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor: "#282033" }}>
                <a href={`tel:${phoneNumber}`} className="btn-luxury-gold py-2.5 text-center text-xs">
                  <Phone className="h-3.5 w-3.5 inline mr-2" /> Helpline 1: 8523045235
                </a>
                <a
                  href={`tel:${phoneNumber2}`}
                  className="btn-luxury-burgundy py-2.5 text-center text-xs"
                >
                  <Phone className="h-3.5 w-3.5 inline mr-2" /> Helpline 2: 9621326466
                </a>
                <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2.5 text-center text-xs">
                  <MessageCircle className="h-3.5 w-3.5 inline mr-2" /> WhatsApp VIP Booking
                </a>
              </div>
            </nav>
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

