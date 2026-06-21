import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Users,
} from "lucide-react";

const phoneNumber = "+919621326466";
const whatsappUrl = "https://wa.me/919621326466";

const profiles = [
  {
    id: 301,
    name: "Aarohi",
    age: 20,
    image: "/images/301.jpg",
    alt: "Aarohi profile",
  },
  {
    id: 302,
    name: "Bhoomi",
    age: 22,
    image: "/images/302.jpg",
    alt: "Bhoomi profile",
  },
  {
    id: 304,
    name: "Disha",
    age: 25,
    image: "/images/304.jpg",
    alt: "Disha profile",
  },
  {
    id: 305,
    name: "Ekta",
    age: 27,
    image: "/images/305.jpg",
    alt: "Ekta profile",
  },
  {
    id: 307,
    name: "Gaurika",
    age: 23,
    image: "/images/307.jpg",
    alt: "Gaurika profile",
  },
  {
    id: 308,
    name: "Harini",
    age: 29,
    image: "/images/308.jpg",
    alt: "Harini profile",
  },
  {
    id: 309,
    name: "Ipsita",
    age: 21,
    image: "/images/309.jpg",
    alt: "Ipsita profile",
  },
  {
    id: 310,
    name: "Jivika",
    age: 26,
    image: "/images/310.jpg",
    alt: "Jivika profile",
  },
];

const serviceAreas = [
  "Civil Lines",
  "Swaroop Nagar",
  "Govind Nagar",
  "Kidwai Nagar",
  "Kakadeo",
  "Rawatpur",
  "Indiranagar",
  "Mall Road",
];

const reviews = [
  {
    text: "Best experience in Kanpur. Extremely professional and discreet.",
    name: "Rajesh S., Civil Lines",
  },
  {
    text: "Beautiful companion and amazing service. Will book again soon.",
    name: "Amit V., Swaroop Nagar",
  },
  {
    text: "Perfect home delivery and privacy. Highly recommended!",
    name: "Arun Tiwari., Govind Nagar",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-3xl font-bold tracking-tighter text-pink-500">
            Kanpur Elite Escorts
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#profiles" className="hover:text-pink-400">
              Profiles
            </a>
            <a href="#areas" className="hover:text-pink-400">
              Areas
            </a>
            <a href="#reviews" className="hover:text-pink-400">
              Reviews
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-black"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('/images/banner-2.avif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,39,119,0.28),transparent_38%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-6xl font-bold leading-tight md:text-7xl">
            Premium Call Girls in Kanpur
          </h1>
          <p className="mb-10 text-2xl text-zinc-200">
            Discreet | Verified | 24/7 Home Delivery
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-pink-600 px-10 py-6 text-xl font-semibold hover:bg-pink-700"
            >
              <Phone className="h-6 w-6" /> Call +91 96213 26466
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-10 py-6 text-xl font-semibold hover:bg-green-700"
            >
              <MessageCircle className="h-6 w-6" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="bg-zinc-900 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <Shield className="h-10 w-10 text-green-400" />
            <div>100% Privacy</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="h-10 w-10 text-green-400" />
            <div>Verified Profiles</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="h-10 w-10 text-green-400" />
            <div>24/7 Service</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-10 w-10 text-green-400" />
            <div>Home Delivery</div>
          </div>
        </div>
      </div>

      <section id="profiles" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-5xl font-bold">
            Premium Companions
          </h2>
          <p className="mb-12 text-center text-zinc-400">
            Verified Profiles | Handpicked | Ready for You
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {profiles.map(profile => (
              <div
                key={profile.id}
                className="group overflow-hidden rounded-3xl bg-zinc-900 transition-all hover:scale-105"
              >
                <img
                  src={profile.image}
                  alt={profile.alt}
                  className="h-80 w-full object-cover"
                />
                <div className="p-5">
                  <div className="text-xl font-semibold">{profile.name}</div>
                  <div className="text-pink-400">
                    {profile.age} Years | Kanpur
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex-1 rounded-2xl bg-white py-3 text-center font-medium text-black"
                    >
                      Call
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-2xl bg-green-600 py-3 text-center font-medium"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-5xl font-bold">Service Areas in Kanpur</h2>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-3">
            {serviceAreas.map(area => (
              <div
                key={area}
                className="rounded-3xl bg-zinc-800 py-8 text-lg font-medium transition hover:bg-pink-600/20"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-3xl text-pink-400">3542+ Verified Reviews</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map(review => (
              <div key={review.name} className="rounded-3xl bg-zinc-900 p-8">
                <div className="mb-4 text-3xl text-yellow-400">5/5 rating</div>
                <p className="text-lg italic">"{review.text}"</p>
                <p className="mt-6 font-medium text-pink-400">
                  - {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-6 text-4xl font-bold text-pink-500">
            Ready to Book?
          </h3>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-xl font-semibold text-black"
            >
              <Phone /> Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-10 py-5 text-xl font-semibold"
            >
              <MessageCircle /> WhatsApp
            </a>
          </div>
          <p className="mt-12 text-zinc-500">
            (c) 2026 Kanpur Elite Escorts | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
