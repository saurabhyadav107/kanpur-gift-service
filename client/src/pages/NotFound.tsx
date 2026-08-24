import { AlertCircle, Home, Phone, ArrowLeft } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#08070b] text-[#f6f3ee] px-4">
      <div className="w-full max-w-lg card-luxury p-8 text-center border-[#dfb76c]/40 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#1c1426] border border-[#dfb76c]/40 text-[#dfb76c] shadow-lg">
            <AlertCircle className="h-8 w-8" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold gradient-text-gold mb-2" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
          404
        </h1>

        <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#f6f3ee] mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
          Page Not Found
        </h2>

        <p className="text-xs sm:text-sm text-[#c4bdad] mb-8 leading-relaxed">
          The VIP page or companion directory you requested could not be located. It may have been relocated or updated.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
          <button
            onClick={handleGoHome}
            className="btn-luxury-gold py-3 px-6 text-xs sm:text-sm justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </button>
          <Link
            href="/kanpur"
            className="btn-luxury-burgundy py-3 px-6 text-xs sm:text-sm justify-center"
          >
            Kanpur Hub
          </Link>
          <Link
            href="/lucknow"
            className="btn-luxury-emerald py-3 px-6 text-xs sm:text-sm justify-center"
          >
            Lucknow Hub
          </Link>
        </div>
      </div>
    </div>
  );
}

