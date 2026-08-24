import { Heart, Phone, MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Kanpur", href: "/kanpur" },
    { label: "Lucknow", href: "/lucknow", isNew: true },
    { label: "Services", href: "/services/vip-escorts" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #1a0709, #3d1018, #1a0709)",
          borderBottom: "1px solid rgba(233,30,115,0.4)",
        }}
        className="py-2 px-4 text-center text-xs font-semibold text-white flex flex-wrap items-center justify-center gap-2 z-50 relative"
      >
        <span
          className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider"
          style={{ background: "linear-gradient(135deg, #ad0c46, #e91e73)", color: "#fff" }}
        >
          KANPUR &amp; LUCKNOW ESCORTS
        </span>
        <span style={{ color: "#f5e6ea" }}>
          🔥 Premier Escort Service &amp; Call Girls in Kanpur &amp; Lucknow — 100% Pay on Arrival!
        </span>
        <a
          href="/lucknow"
          className="font-bold underline hover:text-pink-400 text-pink-300 ml-1 transition-colors flex items-center gap-1"
        >
          Explore Lucknow Hub <ArrowRight className="h-3 w-3 inline" />
        </a>
      </div>

      {/* Main Sticky Header Navbar */}
      <header className="sticky top-0 z-40 glass-nav" style={{ background: "rgba(14,4,7,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #3d1018" }}>
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
                <span
                  className="block text-base sm:text-lg font-bold text-white leading-tight uppercase"
                  style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.03em" }}
                >
                  JOYA ELITE — <span className="gradient-text-pink">KANPUR &amp; LUCKNOW ESCORTS</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest" style={{ color: "#d4aab3" }}>
                  100% Pay On Arrival • Verified Call Girls &amp; Companions
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-6 text-xs font-semibold"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em", color: "#c2929a" }}
            >
              {navItems.map((item) => {
                const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`hover:text-pink-400 transition-colors uppercase flex items-center gap-1.5 ${
                      isActive ? "text-pink-400 font-bold" : ""
                    }`}
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="px-1.5 py-0.5 rounded text-[8px] font-bold" style={{ background: "#e91e73", color: "#fff" }}>
                        NEW
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-primary text-xs px-3.5 py-2">
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">8523045235</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a
                href={`tel:${phoneNumber2}`}
                className="btn-primary text-xs px-3.5 py-2 hidden lg:inline-flex"
                style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}
              >
                <Phone className="h-3.5 w-3.5" />
                <span>9621326466</span>
              </a>
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp text-xs px-3.5 py-2 hidden sm:inline-flex"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded text-white hover:text-pink-400 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 border-t" style={{ background: "#140509", borderColor: "#3d1018" }}>
            <nav className="flex flex-col gap-3 text-sm font-semibold uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded flex items-center justify-between hover:bg-pink-900/30 text-white"
                >
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold" style={{ background: "#e91e73", color: "#fff" }}>
                      NEW
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor: "#3d1018" }}>
                <a href={`tel:${phoneNumber}`} className="btn-primary py-2.5 text-center text-xs">
                  <Phone className="h-3.5 w-3.5 inline mr-2" /> Call Helpline 1: 8523045235
                </a>
                <a
                  href={`tel:${phoneNumber2}`}
                  className="btn-primary py-2.5 text-center text-xs"
                  style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}
                >
                  <Phone className="h-3.5 w-3.5 inline mr-2" /> Call Helpline 2: 9621326466
                </a>
                <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp py-2.5 text-center text-xs">
                  <MessageCircle className="h-3.5 w-3.5 inline mr-2" /> Instant WhatsApp Booking
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
