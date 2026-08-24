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
    <footer style={{ background: "#0a0306", borderTop: "1px solid #3d1018" }} className="py-12 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div>
            <div className="text-lg font-bold text-white mb-2 uppercase" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>
              KANPUR &amp; LUCKNOW <span className="gradient-text-pink">ESCORTS</span>
            </div>
            <p className="mb-4 leading-relaxed" style={{ color: "#d4aab3" }}>
              Joya Elite — North India's #1 Kanpur Escorts &amp; Lucknow Escorts directory. Verified call girls, VIP companions, and independent models across Kanpur &amp; Lucknow with 100% Cash on Arrival &amp; 45-minute home &amp; hotel delivery.
            </p>
            <div className="space-y-1 font-semibold" style={{ color: "#f5e6ea" }}>
              <p>
                Helpline 1: <a href={`tel:${phoneNumber}`} style={{ color: "#e91e73" }}>+91 8523045235</a>
              </p>
              <p>
                Helpline 2: <a href={`tel:${phoneNumber2}`} style={{ color: "#e91e73" }}>+91 9621326466</a>
              </p>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-3 font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
              Explore Joya Elite
            </h4>
            <div className="flex flex-col gap-2" style={{ color: "#d4aab3" }}>
              <a href="/" className="hover:text-pink-400 transition-colors">Home Page</a>
              <a href="/kanpur" className="hover:text-pink-400 transition-colors">Kanpur Hub (/kanpur)</a>
              <a href="/lucknow" className="hover:text-pink-400 transition-colors">Lucknow Hub (/lucknow)</a>
              <a href="/services/vip-escorts" className="hover:text-pink-400 transition-colors">VIP Companion Services</a>
              <a href="/services/college-models" className="hover:text-pink-400 transition-colors">College Models Directory</a>
              <a href="/services/independent" className="hover:text-pink-400 transition-colors">Independent Companions</a>
              <a href="/services/luxury-escorts" className="hover:text-pink-400 transition-colors">Luxury Escorts Directory</a>
              <a href="/about" className="hover:text-pink-400 transition-colors">About Us</a>
              <a href="/contact" className="hover:text-pink-400 transition-colors">Contact Us</a>
              <a href="/faq" className="hover:text-pink-400 transition-colors">Frequently Asked Questions</a>
            </div>
          </div>

          {/* Kanpur Localities */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-3 font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
              Kanpur Locations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5" style={{ color: "#d4aab3" }}>
              {kanpurAreas.map((area) => (
                <a key={area.slug} href={`/kanpur/${area.slug}`} className="hover:text-pink-400 transition-colors truncate">
                  {area.name}
                </a>
              ))}
            </div>
          </div>

          {/* Lucknow Localities */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-3 font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
              Lucknow Locations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5" style={{ color: "#d4aab3" }}>
              {lucknowAreas.map((area) => (
                <a key={area.slug} href={`/lucknow/${area.slug}`} className="hover:text-pink-400 transition-colors truncate">
                  {area.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left" style={{ borderColor: "#3d1018", color: "#8a6670" }}>
          <div>
            © {new Date().getFullYear()} Joya Elite (`joya.kanpureliteservice.com`). All rights reserved. 18+ Only.
          </div>
          <div className="flex gap-4">
            <a href="/about" className="hover:text-pink-400">Privacy Policy</a>
            <a href="/faq" className="hover:text-pink-400">Terms &amp; Safety</a>
            <a href="/contact" className="hover:text-pink-400">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
