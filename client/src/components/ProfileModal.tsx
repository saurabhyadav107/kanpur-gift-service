import React from "react";
import { Phone, MessageCircle, MapPin, X } from "lucide-react";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello%20Kanpur%20%26%20Lucknow%20Escorts,%20I%20want%20to%20inquire%20about%20booking%20a%20companion.";

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

  const getCategoryTagClass = (cat: string) => {
    switch (cat) {
      case "VIP": return "badge-vip";
      case "College Model": return "badge-model";
      case "Independent": return "badge-independent";
      case "Luxury Escort": return "badge-vip";
      default: return "badge-vip";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(14,4,7,0.92)", backdropFilter: "blur(12px)" }}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded flex flex-col md:flex-row"
        style={{ background: "#1a0709", border: "1px solid #3d1018", maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded"
          style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#d4aab3" }}
          aria-label="Close profile modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="md:w-2/5 relative" style={{ minHeight: "280px" }}>
          <img
            src={profile.image}
            alt={profile.alt}
            className="h-full w-full object-cover"
            style={{ maxHeight: "500px" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1a0709 0%, transparent 50%)" }} />
        </div>

        <div className="md:w-3/5 p-5 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className={`${getCategoryTagClass(profile.category)} mb-3 inline-block`}>
              {profile.category} • Verified
            </span>
            <h3
              className="text-white mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              {profile.name}, <span style={{ color: "#e91e73" }}>{profile.age}</span>
            </h3>
            <div className="flex items-center gap-2 text-xs mb-4" style={{ color: "#d4aab3" }}>
              <MapPin className="h-3.5 w-3.5" style={{ color: "#e91e73" }} />
              {profile.location} {profile.city ? `(${profile.city})` : ''}
            </div>

            <div className="divider-pink mb-4" />

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Height", value: profile.height },
                { label: "Languages", value: profile.languages ? profile.languages.join(", ") : "Hindi, English" },
                { label: "Rating", value: `★ ${profile.rating} (${profile.reviewsCount})` },
              ].map(({ label, value }) => (
                <div key={label} className="p-2 rounded text-center" style={{ background: "#2d0d12", border: "1px solid #3d1018" }}>
                  <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#d4aab3", fontFamily: "Poppins" }}>{label}</div>
                  <div className="text-xs font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>

            <h4 className="text-xs uppercase tracking-wider mb-2" style={{ color: "#d4aab3", fontFamily: "Poppins", fontWeight: 700 }}>
              About {profile.name}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#c2929a" }}>{profile.bio}</p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {profile.tags && profile.tags.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded" style={{ background: "#2d0d12", border: "1px solid #3d1018", color: "#c2929a" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <a href={`tel:${phoneNumber}`} className="btn-primary py-2.5 text-xs text-center justify-center">
                <Phone className="h-3.5 w-3.5 inline mr-1" /> Call: 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-primary py-2.5 text-xs text-center justify-center" style={{ background: "linear-gradient(135deg,#8e24aa,#c0134e)" }}>
                <Phone className="h-3.5 w-3.5 inline mr-1" /> Call: 9621326466
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a href={`https://wa.me/918523045235?text=Hello%20${profile.name},%20I%20want%20to%20book%20a%20companion.`} target="_blank" rel="noreferrer" className="btn-whatsapp py-2.5 text-xs text-center justify-center">
                <MessageCircle className="h-3.5 w-3.5 inline mr-1" /> WhatsApp 1
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-whatsapp py-2.5 text-xs text-center justify-center" style={{ background: "#128C7E" }}>
                <MessageCircle className="h-3.5 w-3.5 inline mr-1" /> WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
