import React from "react";
import { Phone, MessageCircle, MapPin, X, Star, Sparkles, ShieldCheck } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Joya%20Elite,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

export interface Profile {
  id: number;
  name: string;
  age: number;
  category: string;
  image: string;
  alt: string;
  location: string;
  rating: number;
  reviewsCount: number;
  height: string;
  languages: string[];
  bio: string;
  tags: string[];
  city?: string;
}

export function ProfileModal({ profile, onClose }: { profile: Profile | null; onClose: () => void }) {
  if (!profile) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(6, 5, 9, 0.94)", backdropFilter: "blur(20px)" }}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl flex flex-col md:flex-row shadow-2xl border"
        style={{ background: "linear-gradient(145deg, #15101d 0%, #0d0a13 100%)", borderColor: "rgba(223, 183, 108, 0.3)", maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[#c4bdad] hover:text-[#dfb76c] hover:bg-[#282033] transition-all"
          style={{ background: "rgba(21, 16, 29, 0.85)", border: "1px solid rgba(223, 183, 108, 0.3)" }}
          aria-label="Close profile modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="md:w-2/5 relative" style={{ minHeight: "300px" }}>
          <img
            src={profile.image}
            alt={profile.alt}
            className="h-full w-full object-cover object-top"
            style={{ maxHeight: "520px" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0a13 0%, transparent 40%)" }} />
          
          <div className="absolute top-3 left-3">
            <span className="badge-vip shadow-lg">
              <Sparkles className="h-3 w-3 inline mr-1 text-[#dfb76c]" /> {profile.category}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold text-white">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> 100% Cash On Arrival
            </span>
          </div>
        </div>

        <div className="md:w-3/5 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfb76c]">
                Verified VIP Companion
              </span>
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {profile.rating} ({profile.reviewsCount})
              </span>
            </div>

            <h3
              className="text-[#f6f3ee] mb-1 uppercase tracking-wide font-bold"
              style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.75rem" }}
            >
              {profile.name}, <span className="gradient-text-gold">{profile.age}</span>
            </h3>

            <div className="flex items-center gap-2 text-xs mb-4 text-[#c4bdad]">
              <MapPin className="h-3.5 w-3.5 text-[#dfb76c]" />
              <span>{profile.location} {profile.city ? `(${profile.city})` : ''} • Express 45-Min Outcall</span>
            </div>

            <div className="h-px bg-gradient-to-r from-[#dfb76c]/40 via-[#dfb76c]/10 to-transparent my-4" />

            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { label: "Height", value: profile.height },
                { label: "Languages", value: profile.languages ? profile.languages.join(", ") : "Hindi, English" },
                { label: "Service Mode", value: "Incall / Outcall" },
              ].map(({ label, value }) => (
                <div key={label} className="p-2.5 rounded-lg text-center bg-[#181220] border border-[#2d2438]">
                  <div className="text-[9px] uppercase tracking-wider mb-0.5 text-[#a89f8f]">{label}</div>
                  <div className="text-xs font-bold text-[#f6f3ee] truncate">{value}</div>
                </div>
              ))}
            </div>

            <h4 className="text-xs uppercase tracking-wider mb-1.5 text-[#dfb76c] font-bold">
              About {profile.name}
            </h4>
            <p className="text-xs leading-relaxed text-[#c4bdad]">{profile.bio}</p>

            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {profile.tags && profile.tags.map((t) => (
                <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#181220] border border-[#2d2438] text-[#a89f8f]">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2 pt-4 border-t border-[#2d2438]">
            <div className="grid grid-cols-2 gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold py-2.5 text-xs text-center justify-center">
                <Phone className="h-3.5 w-3.5 inline mr-1" /> Call: 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy py-2.5 text-xs text-center justify-center">
                <Phone className="h-3.5 w-3.5 inline mr-1" /> Call: 9621326466
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a href={`https://wa.me/918523045235?text=Hello%20${profile.name},%20I%20want%20to%20book%20a%20companion.`} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2.5 text-xs text-center justify-center">
                <MessageCircle className="h-3.5 w-3.5 inline mr-1" /> WhatsApp 1
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald py-2.5 text-xs text-center justify-center">
                <MessageCircle className="h-3.5 w-3.5 inline mr-1" /> WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

