/**
 * prerender.mjs — Post-build static SEO injector
 * Run after vite build:  node prerender.mjs
 *
 * Injects unique <title>, <link rel="canonical">, and <meta description>
 * into a copy of dist/public/index.html for each of the 31 canonical routes.
 * Pure Node.js ESM — no browser, no Puppeteer, no require().
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "dist", "public");
const BASE = "https://joya.kanpureliteservice.com";

const routes = [
  { route: "/", title: "Kanpur Escorts & Lucknow Escorts | Premier Escort Service Kanpur Lucknow | Call +91 8523045235", description: "Premier Kanpur Escorts & Lucknow Escorts directory. Verified call girls, VIP companions & independent models in Kanpur & Lucknow with 100% Cash on Arrival, zero advance deposit, and express 45-minute hotel delivery. Call +91 8523045235 / +91 9621326466." },
  { route: "/kanpur", title: "Kanpur Escorts | #1 Escort Service in Kanpur | Verified Call Girls | Joya Elite", description: "Premier Kanpur Escorts Hub. Verified call girls, VIP companions & independent models across Civil Lines, Swaroop Nagar, Kakadeo, Govind Nagar & Mall Road. 100% Cash on Arrival, 45-min delivery. Call +91 8523045235." },
  { route: "/lucknow", title: "Lucknow Escorts | #1 Escort Service in Lucknow | Verified Call Girls | Joya Elite", description: "Premier Lucknow Escorts Hub. Verified call girls, VIP companions & independent models across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj & Shaheed Path. 100% Cash on Arrival, 45-min delivery. Call +91 8523045235." },
  { route: "/about", title: "About Joya Elite | Kanpur & Lucknow Escorts Agency | High-Class Companions", description: "Learn about Joya Elite — North India's premier verified companion service across Kanpur and Lucknow. Strict 100% Cash on Arrival, 45-minute hotel delivery, and complete privacy." },
  { route: "/contact", title: "Contact Kanpur & Lucknow Escorts | Joya Elite 24/7 Helpline | +91 8523045235", description: "Contact Joya Elite VIP Concierge 24/7. Call +91 8523045235 or +91 9621326466 for instant companion booking in Kanpur & Lucknow. WhatsApp available, 100% Cash on Arrival." },
  { route: "/reviews", title: "Client Reviews & Testimonials | Kanpur & Lucknow Escorts | Verified Ratings", description: "Read authentic client reviews and ratings for escort services in Kanpur and Lucknow. 100% verified feedback on punctuality, privacy, cash on arrival, and genuine profiles." },
  { route: "/faq", title: "Frequently Asked Questions | Kanpur & Lucknow Escorts | Joya Elite", description: "Frequently Asked Questions for Kanpur & Lucknow Escorts service: zero advance payment policy, 45-minute hotel room delivery, complete discretion, call girl booking guide. Call +91 8523045235." },
  { route: "/services/vip-escorts", title: "VIP Escorts Kanpur | High-Class Escort Service in Kanpur | Call +91 8523045235", description: "VIP escorts in Kanpur — verified high-class companions for luxury hotel stays, private dinners, and exclusive appointments. Zero advance payment, 100% privacy. Call +91 8523045235." },
  { route: "/services/college-models", title: "College Girl Escorts Kanpur | Young Escort Service in Kanpur | Call +91 8523045235", description: "College girl escorts in Kanpur — verified young companions for casual dates, party outings, and home visits. Zero advance payment, genuine profiles. Call +91 8523045235." },
  { route: "/services/independent", title: "Independent Escorts Kanpur | Direct Companion Booking | Call +91 8523045235", description: "Independent escorts in Kanpur — verified self-managed companions for private bookings, hotel visits, and home dates. Zero advance payment, genuine profiles. Call +91 8523045235." },
  { route: "/services/luxury-escorts", title: "Luxury 5-Star Escorts Kanpur | Elite Companion Service | Call +91 8523045235", description: "Luxury 5-star escorts in Kanpur — elite high-profile companions for executive hotel suites, black-tie events, and exclusive private bookings. Zero advance payment. Call +91 8523045235." },
  { route: "/kanpur/civil-lines", title: "Civil Lines Escorts & Escort Service in Civil Lines Kanpur | Call +91 8523045235 / +91 9621326466", description: "Civil Lines escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Civil Lines with 45-minute home & hotel delivery. Call +91 8523045235." },
  { route: "/kanpur/swaroop-nagar", title: "Swaroop Nagar Escorts & Escort Service in Swaroop Nagar Kanpur | Call +91 8523045235 / +91 9621326466", description: "Swaroop Nagar escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Swaroop Nagar with 45-minute home & hotel delivery." },
  { route: "/kanpur/govind-nagar", title: "Govind Nagar Escorts & Escort Service in Govind Nagar Kanpur | Call +91 8523045235 / +91 9621326466", description: "Govind Nagar escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Govind Nagar with 45-minute home & hotel delivery." },
  { route: "/kanpur/kakadeo", title: "Kakadeo Escorts & Escort Service in Kakadeo Kanpur | Call +91 8523045235 / +91 9621326466", description: "Kakadeo escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Kakadeo with 45-minute home & hotel delivery." },
  { route: "/kanpur/kidwai-nagar", title: "Kidwai Nagar Escorts & Escort Service in Kidwai Nagar Kanpur | Call +91 8523045235 / +91 9621326466", description: "Kidwai Nagar escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Kidwai Nagar with 45-minute home & hotel delivery." },
  { route: "/kanpur/mall-road", title: "Mall Road Escorts & Escort Service in Mall Road Kanpur | Call +91 8523045235 / +91 9621326466", description: "Mall Road escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service on Mall Road with 45-minute hotel delivery." },
  { route: "/kanpur/rawatpur", title: "Rawatpur Escorts & Escort Service in Rawatpur Kanpur | Call +91 8523045235 / +91 9621326466", description: "Rawatpur escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Rawatpur with 45-minute home & hotel delivery." },
  { route: "/kanpur/shyam-nagar", title: "Shyam Nagar Escorts & Escort Service in Shyam Nagar Kanpur | Call +91 8523045235 / +91 9621326466", description: "Shyam Nagar escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Shyam Nagar with 45-minute home & hotel delivery." },
  { route: "/kanpur/saket-nagar", title: "Saket Nagar Escorts & Escort Service in Saket Nagar Kanpur | Call +91 8523045235 / +91 9621326466", description: "Saket Nagar escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Saket Nagar with 45-minute home & hotel delivery." },
  { route: "/kanpur/kanpur-cantt", title: "Kanpur Cantt Escorts & Escort Service in Kanpur Cantt | Call +91 8523045235 / +91 9621326466", description: "Kanpur Cantt escorts & call girls — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Kanpur Cantonment with 45-minute home & hotel delivery." },
  { route: "/kanpur/barra", title: "Barra Escorts & Escort Service in Barra Kanpur | Call +91 8523045235 / +91 9621326466", description: "Barra escorts & call girls in Kanpur — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Barra with 45-minute home & hotel delivery." },
  { route: "/lucknow/gomti-nagar", title: "Gomti Nagar Escorts & Escort Service in Gomti Nagar Lucknow | Call +91 8523045235 / +91 9621326466", description: "Gomti Nagar escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Gomti Nagar with 45-minute home & hotel delivery." },
  { route: "/lucknow/hazratganj", title: "Hazratganj Escorts & Escort Service in Hazratganj Lucknow | Call +91 8523045235 / +91 9621326466", description: "Hazratganj escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Hazratganj with 45-minute home & hotel delivery." },
  { route: "/lucknow/indira-nagar", title: "Indira Nagar Escorts & Escort Service in Indira Nagar Lucknow | Call +91 8523045235 / +91 9621326466", description: "Indira Nagar escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Indira Nagar with 45-minute home & hotel delivery." },
  { route: "/lucknow/aliganj", title: "Aliganj Escorts & Escort Service in Aliganj Lucknow | Call +91 8523045235 / +91 9621326466", description: "Aliganj escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Aliganj with 45-minute home & hotel delivery." },
  { route: "/lucknow/alambagh", title: "Alambagh Escorts & Escort Service in Alambagh Lucknow | Call +91 8523045235 / +91 9621326466", description: "Alambagh escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Alambagh with 45-minute home & hotel delivery." },
  { route: "/lucknow/shaheed-path", title: "Shaheed Path Escorts & Escort Service in Shaheed Path Lucknow | Call +91 8523045235 / +91 9621326466", description: "Shaheed Path escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service near Shaheed Path with 45-minute hotel delivery." },
  { route: "/lucknow/mahanagar", title: "Mahanagar Escorts & Escort Service in Mahanagar Lucknow | Call +91 8523045235 / +91 9621326466", description: "Mahanagar escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Mahanagar with 45-minute home & hotel delivery." },
  { route: "/lucknow/gomti-nagar-extension", title: "Gomti Nagar Extension Escorts & Escort Service Lucknow | Call +91 8523045235 / +91 9621326466", description: "Gomti Nagar Extension escorts & call girls in Lucknow — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in Gomti Nagar Extension with 45-minute delivery." },
  { route: "/lucknow/amausi-airport", title: "Amausi Airport Escorts & Lucknow Airport Escort Service | Call +91 8523045235 / +91 9621326466", description: "Amausi Airport area escorts & call girls in Lucknow — rapid 45-minute hotel delivery for airport transit guests, flight crew, and business travellers. Zero advance payment." },
];

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function injectSEO(html, { route, title, description }) {
  const canonical = `${BASE}${route}`;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/,  `$1${escapeHtml(description)}$2`);
  html = html.replace(/<link\s+rel="canonical"[^>]*>\s*/g, "");
  html = html.replace("</head>", `  <link rel="canonical" href="${canonical}" />\n</head>`);
  return html;
}

const shellPath = path.join(DIST, "index.html");
if (!fs.existsSync(shellPath)) {
  console.error(`[prerender] ERROR: ${shellPath} not found. Run pnpm build first.`);
  process.exit(1);
}
const shellHtml = fs.readFileSync(shellPath, "utf8");
let ok = 0, fail = 0;

for (const page of routes) {
  try {
    const html = injectSEO(shellHtml, page);
    const outDir = page.route === "/" ? DIST : path.join(DIST, ...page.route.split("/").filter(Boolean));
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    fs.writeFileSync(outFile, html, "utf8");
    const written = fs.readFileSync(outFile, "utf8");
    const canonical = BASE + page.route;
    if (written.includes(`href="${canonical}"`) && written.includes(escapeHtml(page.title.substring(0, 30)))) {
      console.log(`[prerender] OK  ${page.route}`); ok++;
    } else {
      console.warn(`[prerender] WARN incomplete: ${page.route}`); fail++;
    }
  } catch (e) {
    console.error(`[prerender] ERROR ${page.route}: ${e.message}`); fail++;
  }
}
console.log(`\n[prerender] ${ok} OK, ${fail} failed.`);
if (fail > 0) process.exit(1);
