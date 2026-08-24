import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, MapPin, CheckCircle2, Shield, Star, Clock, Zap } from "lucide-react";
import { useRoute, Link } from "wouter";

const phoneNumber = "+918523045235";
const phoneNumber2 = "+919621326466";
const whatsappUrl = "https://wa.me/918523045235?text=Hello,%20I%20want%20to%20book%20an%20escort%20service.";
const whatsappUrl2 = "https://wa.me/919621326466?text=Hello,%20I%20want%20to%20book%20an%20escort%20service.";

interface AreaInfo {
  name: string;
  slug: string;
  pincode: string;
  description: string;
  longDescription: string;
  landmarks: string[];
  nearbyAreas: string[];
  faqs: { q: string; a: string }[];
}

const areasData: Record<string, AreaInfo> = {
  "civil-lines": {
    name: "Civil Lines",
    slug: "civil-lines",
    pincode: "208001",
    description: "Civil Lines is Kanpur's premier VIP and commercial district, home to luxury hotels, government offices, and upscale residences. Our escort service in Civil Lines offers verified companions with fast 45-minute delivery.",
    longDescription: "Civil Lines is the most prestigious address in Kanpur — a leafy, well-planned area flanked by luxury hotels, top restaurants, and the Green Park Stadium. As Kanpur's administrative and business hub, Civil Lines attracts business travellers, government officials, and high-profile visitors who require absolute discretion. Our escort service in Civil Lines is tailored to meet this demand. Whether you are staying at a five-star hotel near Mall Road or at your private bungalow in Civil Lines, our verified companions arrive promptly and professionally within 45 minutes of booking confirmation.",
    landmarks: ["Mall Road Crossing", "Green Park Stadium Area", "Civil Lines Hotels", "VIP Road", "Collectorate"],
    nearbyAreas: ["swaroop-nagar", "mall-road", "kanpur-cantt"],
    faqs: [
      {
        q: "Is escort service available in Civil Lines Kanpur hotels?",
        a: "Yes. We provide discreet companion delivery to all major hotels in Civil Lines, Kanpur. Contact us at +91 8523045235 for hotel room visits.",
      },
      {
        q: "How quickly can an escort arrive in Civil Lines?",
        a: "Our standard dispatch time from confirmation is 45 minutes to 1 hour across Civil Lines and the surrounding VIP zone.",
      },
    ],
  },
  "swaroop-nagar": {
    name: "Swaroop Nagar",
    slug: "swaroop-nagar",
    pincode: "208002",
    description: "Swaroop Nagar is an upscale residential neighbourhood in North Kanpur with a vibrant commercial strip and premium hotels. We offer verified escort services in Swaroop Nagar with same-day 45-minute delivery.",
    longDescription: "Swaroop Nagar is one of Kanpur's most sought-after residential and commercial localities, known for its premium apartments, health facilities near GSVM Medical College Road, and a lively market hub. The area draws professionals and business visitors who value privacy and quality. Our escorts in Swaroop Nagar are thoroughly verified — you receive genuine photos, direct contact details, and a companion who arrives punctually. We cover every lane, guesthouse, and apartment block in Swaroop Nagar for both home and hotel companion delivery.",
    landmarks: ["GSVM Medical College Road", "Ravindra Hospital Road", "Swaroop Nagar Market", "Naubasta Road"],
    nearbyAreas: ["civil-lines", "kidwai-nagar", "rawatpur"],
    faqs: [
      {
        q: "Do you provide escort service near GSVM Medical College Road, Swaroop Nagar?",
        a: "Yes, we cover all parts of Swaroop Nagar including the medical college road area. Call +91 8523045235 for same-day booking.",
      },
      {
        q: "Can I book a companion for a home visit in Swaroop Nagar?",
        a: "Absolutely. We offer 100% discreet home delivery in Swaroop Nagar, Kanpur. Companions arrive within 45 minutes of booking confirmation.",
      },
    ],
  },
  "govind-nagar": {
    name: "Govind Nagar",
    slug: "govind-nagar",
    pincode: "208006",
    description: "Govind Nagar is a vibrant mixed residential and commercial locality in South-West Kanpur. Our verified escort service in Govind Nagar delivers companions directly to your home or hotel within 45 minutes.",
    longDescription: "Govind Nagar is a densely populated and commercially active locality in Kanpur, well-connected to the rest of the city. Home to a busy market, cinema halls, and a large residential population, Govind Nagar is a popular area for both locals and visitors looking for companion services. Our escort service in Govind Nagar prioritises speed, privacy, and profile authenticity. Every companion listed is individually verified — the photo you see is the person who arrives. We serve private apartments, guesthouses, and hotels across all sectors of Govind Nagar.",
    landmarks: ["Govind Nagar Market", "Labor Colony", "Deep Cinema Area", "Babu Purwa"],
    nearbyAreas: ["kakadeo", "barra", "saket-nagar"],
    faqs: [
      {
        q: "Is there a call girl or escort service available in Govind Nagar, Kanpur?",
        a: "Yes. We offer verified companion delivery throughout Govind Nagar, Kanpur. Call or WhatsApp +91 8523045235 for fast booking.",
      },
      {
        q: "Are companions available for late-night bookings in Govind Nagar?",
        a: "Our service operates 24 hours a day, 7 days a week in Govind Nagar and across Kanpur.",
      },
    ],
  },
  "kidwai-nagar": {
    name: "Kidwai Nagar",
    slug: "kidwai-nagar",
    pincode: "208011",
    description: "Kidwai Nagar is a well-developed South Kanpur residential township with wide roads and quiet neighbourhoods. Our escort service in Kidwai Nagar provides verified companion profiles and 45-minute home delivery.",
    longDescription: "Kidwai Nagar is a planned residential township in South Kanpur, named after freedom fighter Rafi Ahmed Kidwai. The area comprises organised colony blocks, quiet lanes, and quality residential accommodations — an ideal setting for those who prize privacy. Our escort service in Kidwai Nagar matches this preference. We maintain strict discretion for every booking: no records kept, no third-party sharing. Companions are verified, attentive, and experienced in making guests feel comfortable. We deliver to every block within Kidwai Nagar and adjacent areas.",
    landmarks: ["Kidwai Nagar Block M", "Gaushala Chauraha", "Site No 1", "Kidwai Nagar Police Station Road"],
    nearbyAreas: ["swaroop-nagar", "saket-nagar", "govind-nagar"],
    faqs: [
      {
        q: "Do you provide escort services in Kidwai Nagar colony blocks?",
        a: "Yes, we cover all blocks within Kidwai Nagar, Kanpur for home companion delivery. Call +91 8523045235.",
      },
      {
        q: "How is privacy maintained for escort bookings in Kidwai Nagar?",
        a: "All bookings are completely confidential. No information is stored or shared. Our companions arrive discreetly in civilian clothing.",
      },
    ],
  },
  "kakadeo": {
    name: "Kakadeo",
    slug: "kakadeo",
    pincode: "208025",
    description: "Kakadeo is Kanpur's famous educational and coaching hub packed with modern apartments and active residential life. Our escort service in Kakadeo offers verified companions available for same-day home and hotel delivery.",
    longDescription: "Kakadeo has evolved into one of Kanpur's most dynamic localities — originally known as a coaching centre hub, it now features upscale apartments, modern restaurants, and a young, active residential demographic. Our escorts in Kakadeo cater to a clientele that values efficiency and authenticity. Booking via WhatsApp takes under 2 minutes. Profile photos are genuine, ages are accurate, and companions are punctual. Whether you need company at your Kakadeo apartment or require a companion for a hotel stay nearby, we dispatch reliably within 45 minutes.",
    landmarks: ["Deoki Palace", "Coaching Hub Road", "Geeta Nagar Crossing", "Kakadeo Market"],
    nearbyAreas: ["govind-nagar", "indiranagar", "barra"],
    faqs: [
      {
        q: "Can I book an escort in Kakadeo, Kanpur for a home visit?",
        a: "Yes. Home delivery in Kakadeo is available 24/7. Our companions arrive within 45 minutes of booking confirmation.",
      },
      {
        q: "Are there verified escort profiles specific to Kakadeo area?",
        a: "We have companions based in and around Kakadeo. WhatsApp us at +91 8523045235 for current availability and profile previews.",
      },
    ],
  },
  "rawatpur": {
    name: "Rawatpur",
    slug: "rawatpur",
    pincode: "208019",
    description: "Rawatpur is a North Kanpur locality near the railway station, popular with travellers and working professionals. Our escort service in Rawatpur delivers verified companions to home addresses and guesthouses 24/7.",
    longDescription: "Rawatpur is conveniently located near Rawatpur Railway Station and serves as a connector between North Kanpur's residential colonies and the city centre. The area hosts many working professionals, railway employees, and transit travellers who require companionship during extended stays. Our escort service in Rawatpur is designed for quick, hassle-free booking — one call or WhatsApp message is all it takes. Companions are verified, discreet, and available any time of day or night. We cover Rawatpur proper, Moti Jheel Road, and surrounding neighbourhoods.",
    landmarks: ["Rawatpur Railway Station", "Moti Jheel Road", "Gutaiya", "Rawatpur Main Road"],
    nearbyAreas: ["swaroop-nagar", "indiranagar", "civil-lines"],
    faqs: [
      {
        q: "Is escort service available near Rawatpur Railway Station, Kanpur?",
        a: "Yes. We serve Rawatpur and areas near the railway station. Call +91 8523045235 for immediate booking.",
      },
      {
        q: "Can travellers staying in Rawatpur guesthouses book a companion?",
        a: "Absolutely. We provide discreet companion delivery to guesthouses and private stays across Rawatpur, Kanpur.",
      },
    ],
  },
  "indiranagar": {
    name: "Indiranagar",
    slug: "indiranagar",
    pincode: "208026",
    description: "Indiranagar in West Kanpur is a spacious residential township near IIT Kanpur with large plots and peaceful neighbourhoods. Our escort service in Indiranagar provides verified companions with complete confidentiality.",
    longDescription: "Indiranagar is a well-planned, expansive residential locality in Western Kanpur, developed around IIT Kanpur and Kalyanpur. It is known for large independent bungalows, academic institutions, and a peaceful, private environment — making it ideal for discreet companion visits. Our escort service in Indiranagar is trusted by residents who value both quality and absolute privacy. All bookings are handled through a confidential channel. Companions arrive in regular civilian clothing with no identifying markers, ensuring complete discretion for your Indiranagar home or apartment.",
    landmarks: ["Kalyanpur Crossing", "IIT Kanpur Gate Area", "Indiranagar Main Road", "Sector H"],
    nearbyAreas: ["rawatpur", "kakadeo", "swaroop-nagar"],
    faqs: [
      {
        q: "Do you provide escort service in Indiranagar, Kanpur near IIT?",
        a: "Yes, we cover all of Indiranagar including sectors near IIT Kanpur Gate. Call +91 8523045235 for booking.",
      },
      {
        q: "How do you maintain discretion in a residential area like Indiranagar?",
        a: "Companions arrive in regular civilian attire without any signage or branding. All communication is encrypted and no records are kept.",
      },
    ],
  },
  "mall-road": {
    name: "Mall Road",
    slug: "mall-road",
    pincode: "208001",
    description: "Mall Road is the premium commercial and hospitality corridor of Kanpur, lined with luxury hotels, shopping centres, and restaurants. Our escort service on Mall Road specialises in hotel companion delivery.",
    longDescription: "Mall Road is the beating heart of Kanpur's commercial and hotel district — a prime address hosting multiple star hotels, upscale restaurants, and flagship retail stores. Business travellers, corporate clients, and tourists frequently stay along Mall Road and its adjacent hotel clusters. Our escort service on Mall Road is optimised for hotel visits: companions are experienced in handling hotel check-in protocols discreetly, carry no visible identifiers, and can be at your door within 45 minutes of booking. We cover every major hotel property on and around Mall Road, Kanpur.",
    landmarks: ["Z Square Mall", "Phool Bagh", "LIC Building Crossing", "Mall Road Hotels"],
    nearbyAreas: ["civil-lines", "swaroop-nagar", "kanpur-cantt"],
    faqs: [
      {
        q: "Can I book an escort to my hotel room on Mall Road, Kanpur?",
        a: "Yes. We specialise in hotel companion delivery on Mall Road. Companions arrive discreetly within 45 minutes. Call +91 8523045235.",
      },
      {
        q: "Are escort services available at 5-star hotels on Mall Road Kanpur?",
        a: "We provide companion services to all hotel categories on Mall Road, Kanpur, including luxury and business hotels.",
      },
    ],
  },
  "shyam-nagar": {
    name: "Shyam Nagar",
    slug: "shyam-nagar",
    pincode: "208015",
    description: "Shyam Nagar is a residential locality in South-East Kanpur near the GT Road corridor. Our escort service in Shyam Nagar offers verified companions available for home and hotel visits around the clock.",
    longDescription: "Shyam Nagar is a well-established residential locality in South-East Kanpur, easily accessible via the GT Road. Home to middle and upper-middle-class households, government employees, and working professionals, Shyam Nagar is one of Kanpur's steadily growing residential pockets. Our escort service in Shyam Nagar is built around reliability and discretion. Bookings via call or WhatsApp are acknowledged within minutes, and companions are dispatched promptly. We serve all sub-localities within Shyam Nagar, including the PAC Line area and GT Road junction.",
    landmarks: ["PAC Line", "Shyam Nagar Flyover", "G T Road Junction", "Shyam Nagar Market"],
    nearbyAreas: ["saket-nagar", "barra", "govind-nagar"],
    faqs: [
      {
        q: "Is there a verified escort or call girl service in Shyam Nagar, Kanpur?",
        a: "Yes. We serve Shyam Nagar with verified companion delivery. Call +91 8523045235 for same-day booking.",
      },
      {
        q: "What is the delivery time for escort service in Shyam Nagar?",
        a: "Our standard arrival time in Shyam Nagar is 45 minutes to 1 hour from booking confirmation.",
      },
    ],
  },
  "saket-nagar": {
    name: "Saket Nagar",
    slug: "saket-nagar",
    pincode: "208014",
    description: "Saket Nagar is a quiet, well-maintained residential colony in Central-South Kanpur. Our escort service in Saket Nagar delivers verified companions discreetly to home addresses within 45 minutes.",
    longDescription: "Saket Nagar is a calm, well-planned residential colony in Kanpur, characterised by organised blocks, tree-lined streets, and a strong community. Residents here prize privacy and tranquillity, which is exactly what our escort service in Saket Nagar delivers. Companions arrive discreetly, without any visible identification, and engage with full professionalism. Our booking process is straightforward: a single call or WhatsApp message with your preferred location within Saket Nagar, and a companion is dispatched within 45 minutes.",
    landmarks: ["Saket Nagar Block 4", "Deepu Chauhan Chauraha", "Saket Nagar Main Road"],
    nearbyAreas: ["kidwai-nagar", "shyam-nagar", "govind-nagar"],
    faqs: [
      {
        q: "Can I book a discreet escort visit in Saket Nagar, Kanpur?",
        a: "Yes. Saket Nagar is fully covered. Companions arrive in 45 minutes with complete discretion. Call +91 8523045235.",
      },
      {
        q: "Is the escort service in Saket Nagar available 24 hours?",
        a: "Our service operates 24/7 throughout Saket Nagar and all of Kanpur.",
      },
    ],
  },
  "kanpur-cantt": {
    name: "Kanpur Cantt",
    slug: "kanpur-cantt",
    pincode: "208004",
    description: "Kanpur Cantt is Kanpur's prestigious cantonment area with premium residential zones, golf clubs, and defence establishments. Our escort service in Kanpur Cantt offers the highest level of confidentiality.",
    longDescription: "Kanpur Cantonment is one of the oldest and most prestigious cantonments in India, home to senior defence personnel, government officials, and a well-established civilian residential community. The area demands the highest standards of discretion — something our escort service in Kanpur Cantt is specifically equipped to deliver. Companions are selected for their professionalism, etiquette, and ability to blend seamlessly into upscale social settings. We serve private residences, guest houses, and hotel suites within and adjacent to the cantonment area, always with absolute confidentiality.",
    landmarks: ["Cantonment Board", "Golf Course Road", "Club Road", "Cantt Railway Station"],
    nearbyAreas: ["civil-lines", "mall-road", "swaroop-nagar"],
    faqs: [
      {
        q: "Is escort service available in Kanpur Cantonment area?",
        a: "Yes. We provide highly discreet companion services in Kanpur Cantt. Call +91 8523045235 for private booking.",
      },
      {
        q: "How do you ensure complete privacy for bookings in Kanpur Cantt?",
        a: "All bookings are handled through encrypted private communication. Companions arrive in plain civilian clothing with no branding.",
      },
    ],
  },
  "barra": {
    name: "Barra",
    slug: "barra",
    pincode: "208027",
    description: "Barra is a large, rapidly developing residential locality in South Kanpur with a thriving commercial zone. Our escort service in Barra provides verified companions available for 24/7 home and hotel delivery.",
    longDescription: "Barra is one of South Kanpur's most expansive and fast-growing localities, comprising multiple sub-sectors (Barra 1 through 8), a busy bypass corridor, and a growing commercial infrastructure. Its large population of working professionals, business owners, and young residents makes it one of the highest-demand areas for companion services in Kanpur. Our escort service in Barra covers every sector and sub-locality. Booking is simple — call or WhatsApp +91 8523045235, specify your Barra sector or address, and a verified companion reaches you within 45 minutes to 1 hour.",
    landmarks: ["Barra Bypass", "Barra 2 Chauraha", "Barra World Bank Colony", "Barra Market"],
    nearbyAreas: ["govind-nagar", "shyam-nagar", "kakadeo"],
    faqs: [
      {
        q: "Is escort service available in all Barra sectors in Kanpur?",
        a: "Yes. We cover Barra 1–8 and the bypass area. Call +91 8523045235 for fast, verified companion delivery.",
      },
      {
        q: "What is the cost of escort service in Barra, Kanpur?",
        a: "Pricing varies by profile category. Contact us at +91 8523045235 or WhatsApp for current rates and availability in Barra.",
      },
    ],
  },
  "lucknow-gomti-nagar": {
    name: "Gomti Nagar Lucknow",
    slug: "lucknow-gomti-nagar",
    pincode: "226010",
    description: "Gomti Nagar is Lucknow's premier planned commercial and VIP residential district, home to Hyatt Regency, Taj Hotel, Riverside Mall, and luxury apartments. Our escort service in Gomti Nagar offers verified companions with fast 45-minute delivery.",
    longDescription: "Gomti Nagar is the crown jewel of modern Lucknow — an expansive, high-end district boasting broad avenues, IT parks, star hotels near Vibhuti Khand, and opulent private bungalows in Viraj Khand and Vipul Khand. It is the top destination for corporate travellers, executives, and luxury seekers in Uttar Pradesh. Our escort service in Gomti Nagar caters to discerning clients with total confidentiality. Whether you are staying at Hyatt Regency, Taj Mahal Lucknow, or a private residence near Shaheed Path, our verified companions arrive punctually within 45 minutes of booking confirmation. No advance payment required.",
    landmarks: ["Hyatt Regency Lucknow", "Vibhuti Khand IT Park", "Taj Mahal Hotel Lucknow", "Riverside Mall", "Viraj Khand", "Shaheed Path Junction"],
    nearbyAreas: ["lucknow-hazratganj", "lucknow-indira-nagar", "lucknow-shaheed-path"],
    faqs: [
      {
        q: "Is escort service available in Gomti Nagar Lucknow hotels?",
        a: "Yes. We provide discreet 24/7 companion delivery to all major hotels in Gomti Nagar including Hyatt Regency, Taj, Novotel, and boutique guesthouses. Call +91 8523045235 or +91 9621326466.",
      },
      {
        q: "How quickly can a call girl arrive in Gomti Nagar Lucknow?",
        a: "Dispatch time is 45 minutes to 1 hour anywhere in Gomti Nagar, Vibhuti Khand, or Gomti Nagar Extension.",
      },
    ],
  },
  "lucknow-hazratganj": {
    name: "Hazratganj Lucknow",
    slug: "lucknow-hazratganj",
    pincode: "226001",
    description: "Hazratganj is the iconic central heritage, shopping, and business hub of Lucknow. Our independent escort service in Hazratganj delivers verified high-class companions directly to your hotel or residence.",
    longDescription: "Hazratganj is the vibrant heart of Lucknow — famous for its Victorian-style shopping arcades, government secretariats, Mayfair complex, and heritage luxury hotels. Drawing business travellers, politicians, and tourists, Hazratganj demands absolute discretion and top-tier sophistication. Our escorts in Hazratganj are independent, well-groomed, and highly courteous. We service every hotel, private apartment, and guesthouse across Hazratganj, Vidhan Sabha Marg, and MG Road within 45 minutes of booking.",
    landmarks: ["Hazratganj Chauraha", "Mayfair Complex", "Vidhan Sabha Marg", "Taj Hotel Hazratganj Corridor", "MG Road"],
    nearbyAreas: ["lucknow-gomti-nagar", "lucknow-mahanagar", "lucknow-alambagh"],
    faqs: [
      {
        q: "Can I book an escort to a hotel in Hazratganj Lucknow?",
        a: "Yes. We specialise in hotel companion delivery in Hazratganj. Companions arrive within 45 minutes with complete privacy.",
      },
      {
        q: "Are independent call girls available in Hazratganj Lucknow?",
        a: "Yes. We have verified independent escorts and college models based near Hazratganj. Contact +91 8523045235 or +91 9621326466.",
      },
    ],
  },
  "lucknow-indira-nagar": {
    name: "Indira Nagar Lucknow",
    slug: "lucknow-indira-nagar",
    pincode: "226016",
    description: "Indira Nagar is one of Asia's largest organized residential colonies located in North-East Lucknow. We offer college model and VIP escort services in Indira Nagar with 100% privacy and 45-minute home delivery.",
    longDescription: "Indira Nagar is a vast residential township in Lucknow, divided into multiple blocks (Block A through Z) with tree-lined streets, quiet residential pockets, and thriving local markets. Our escort service in Indira Nagar is specifically tailored for home visits and quiet residential stays. Companions arrive in discreet civilian attire, ensuring zero unwanted attention. From Munshipulia to Bhootnath Market and Picnic Spot Road, we cover all blocks of Indira Nagar with 24/7 same-day booking.",
    landmarks: ["Bhootnath Market", "Munshipulia Chauraha", "Picnic Spot Road", "Indira Nagar Block C & D"],
    nearbyAreas: ["lucknow-gomti-nagar", "lucknow-aliganj", "lucknow-mahanagar"],
    faqs: [
      {
        q: "Is home delivery companion service available in Indira Nagar Lucknow?",
        a: "Yes. We offer 100% confidential doorstep companion delivery in Indira Nagar, Lucknow within 45 minutes.",
      },
      {
        q: "Do you require advance payment for Indira Nagar Lucknow bookings?",
        a: "No advance payment is ever required. You pay cash on arrival after meeting the companion.",
      },
    ],
  },
  "lucknow-aliganj": {
    name: "Aliganj Lucknow",
    slug: "lucknow-aliganj",
    pincode: "226024",
    description: "Aliganj is a major commercial and residential hub in North Lucknow. Our luxury escort service in Aliganj offers top-tier college models and independent companions for hotel and home dates.",
    longDescription: "Aliganj is a major hub in North Lucknow featuring prominent educational institutes, coaching centers, corporate offices, and peaceful residential sectors. Our escorts in Aliganj cater to students, professionals, and visiting guests looking for cheerful, attractive companions. We deliver to all sectors of Aliganj, Kapoorthala Market, and IT Crossing within 45 minutes.",
    landmarks: ["Kapoorthala Crossing", "IT College Road", "Aliganj Sector O", "Purania Chauraha"],
    nearbyAreas: ["lucknow-indira-nagar", "lucknow-mahanagar", "lucknow-hazratganj"],
    faqs: [
      {
        q: "Are college model call girls available in Aliganj Lucknow?",
        a: "Yes. We have genuine verified college model companions available for dates in Aliganj, Lucknow.",
      },
      {
        q: "How to book an escort in Aliganj Lucknow?",
        a: "Call +91 8523045235 or +91 9621326466 or send a WhatsApp message with your Aliganj location.",
      },
    ],
  },
  "lucknow-alambagh": {
    name: "Alambagh Lucknow",
    slug: "lucknow-alambagh",
    pincode: "226005",
    description: "Alambagh is a bustling commercial and transport corridor in South Lucknow near Charbagh Railway Station. Our VIP escort service in Alambagh delivers verified companions in 45 minutes.",
    longDescription: "Alambagh is a crucial gateway to Lucknow, located near Charbagh Railway Station and the ISBT Bus Terminal. Lined with business hotels, bustling markets, and residential colonies, Alambagh is ideal for travellers in transit or guests staying near the railway hub. Our escorts in Alambagh offer express 45-minute hotel room delivery with zero advance payment.",
    landmarks: ["Alambagh Bus Terminal", "Charbagh Railway Station Area", "Singar Nagar", "Chander Nagar Market"],
    nearbyAreas: ["lucknow-hazratganj", "lucknow-amausi-airport", "lucknow-shaheed-path"],
    faqs: [
      {
        q: "Do you provide escort service near Charbagh Railway Station and Alambagh?",
        a: "Yes. Express companion delivery is available near Charbagh Railway Station and Alambagh hotels.",
      },
      {
        q: "What are the contact numbers for Alambagh Lucknow call girls?",
        a: "Call Helpline 1: +91 8523045235 or Helpline 2: +91 9621326466 for immediate dispatch.",
      },
    ],
  },
  "lucknow-shaheed-path": {
    name: "Shaheed Path Lucknow",
    slug: "lucknow-shaheed-path",
    pincode: "226002",
    description: "Shaheed Path & Sushant Golf City is Lucknow's modern luxury residential corridor featuring Phoenix Palassio and golf villas. Our independent escorts on Shaheed Path offer VIP companion service.",
    longDescription: "Shaheed Path is Lucknow's premier 8-lane expressway corridor, connecting Sushant Golf City, Phoenix Palassio Mall, Ekana International Cricket Stadium, and corporate townships. This area represents the modern face of luxury living in Lucknow. Our escorts on Shaheed Path cater to high-profile residents and hotel guests staying near Phoenix Palassio and Golf City villas with absolute discretion and express dispatch.",
    landmarks: ["Phoenix Palassio Mall", "Sushant Golf City", "Ekana Cricket Stadium", "HCL IT City", "Lulu Mall Corridor"],
    nearbyAreas: ["lucknow-gomti-nagar", "lucknow-alambagh", "lucknow-gomti-nagar-extension"],
    faqs: [
      {
        q: "Is companion service available near Phoenix Palassio and Shaheed Path Lucknow?",
        a: "Yes. We offer luxury escort delivery near Phoenix Palassio, Sushant Golf City, and Shaheed Path.",
      },
    ],
  },
  "lucknow-mahanagar": {
    name: "Mahanagar Lucknow",
    slug: "lucknow-mahanagar",
    pincode: "226006",
    description: "Mahanagar is an elite residential locality in Central-North Lucknow. Our verified escort service in Mahanagar provides premium companions for discreet home and hotel visits.",
    longDescription: "Mahanagar is one of Lucknow's classical high-status residential neighborhoods, known for spacious independent houses, quiet green avenues, and proximity to Hazratganj. Our escort service in Mahanagar matches the refined tastes of local residents and visiting guests. All companions are verified, punctual, and highly discreet.",
    landmarks: ["Mahanagar Chauraha", "Gole Market", "Badshahnagar Station Area", "Nishatganj Bridge"],
    nearbyAreas: ["lucknow-hazratganj", "lucknow-aliganj", "lucknow-indira-nagar"],
    faqs: [
      {
        q: "Can I book a discreet home visit escort in Mahanagar Lucknow?",
        a: "Yes. 100% confidential home delivery is available throughout Mahanagar. Call +91 8523045235.",
      },
    ],
  },
  "lucknow-gomti-nagar-extension": {
    name: "Gomti Nagar Extension Lucknow",
    slug: "lucknow-gomti-nagar-extension",
    pincode: "226010",
    description: "Gomti Nagar Extension & Viraj Khand is Lucknow's fastest-growing luxury residential enclave. Verified companion delivery within 45 minutes.",
    longDescription: "Gomti Nagar Extension and Viraj Khand represent the newest luxury high-rise apartment clusters and township developments in Lucknow. Positioned along the Gomti Riverfront, this area hosts modern professionals and private residents who seek quiet luxury. Our escort service in Gomti Nagar Extension delivers verified companions directly to high-rise security apartments and hotels with complete privacy.",
    landmarks: ["Viraj Khand", "Janeshwar Mishra Park Area", "Riverfront Towers", "Vipul Khand"],
    nearbyAreas: ["lucknow-gomti-nagar", "lucknow-shaheed-path"],
    faqs: [
      {
        q: "Do you deliver escorts to high-rise apartments in Gomti Nagar Extension?",
        a: "Yes. Our companions arrive discreetly at private apartments in Gomti Nagar Extension and Viraj Khand.",
      },
    ],
  },
  "lucknow-amausi-airport": {
    name: "Amausi Airport Lucknow",
    slug: "lucknow-amausi-airport",
    pincode: "226009",
    description: "Amausi Airport Area Lucknow companion service for travellers, flight crews, and transit guests staying at airport transit hotels.",
    longDescription: "Located near Chaudhary Charan Singh International Airport (Amausi), this corridor features multiple business and airport transit hotels. Our escort service near Lucknow Airport provides rapid 45-minute hotel room delivery for air travellers, corporate guests, and flight crews needing quality companionship during short or extended stays.",
    landmarks: ["Chaudhary Charan Singh Airport", "Amausi Metro Station", "Kanpur Road Highway Hotels", "VIP Transit Zone"],
    nearbyAreas: ["lucknow-alambagh", "lucknow-shaheed-path"],
    faqs: [
      {
        q: "Can airport transit hotel guests book an escort near Lucknow Airport?",
        a: "Yes. Fast 45-minute hotel room delivery is available near Amausi Airport Lucknow 24/7.",
      },
    ],
  },
};

// Sidebar area links (excluding current area)
const allAreaLinks = [
  { name: "Civil Lines Kanpur", slug: "civil-lines" },
  { name: "Swaroop Nagar Kanpur", slug: "swaroop-nagar" },
  { name: "Govind Nagar Kanpur", slug: "govind-nagar" },
  { name: "Kakadeo Kanpur", slug: "kakadeo" },
  { name: "Gomti Nagar Lucknow", slug: "lucknow-gomti-nagar" },
  { name: "Hazratganj Lucknow", slug: "lucknow-hazratganj" },
  { name: "Indira Nagar Lucknow", slug: "lucknow-indira-nagar" },
  { name: "Aliganj Lucknow", slug: "lucknow-aliganj" },
  { name: "Alambagh Lucknow", slug: "lucknow-alambagh" },
  { name: "Shaheed Path Lucknow", slug: "lucknow-shaheed-path" },
];

export default function AreaDetail() {
  const [, kanpurParams] = useRoute("/kanpur/:slug");
  const [, lucknowParams] = useRoute("/lucknow/:slug");
  const [, legacyParams] = useRoute("/areas/:slug");

  const rawSlug = kanpurParams?.slug || (lucknowParams ? (lucknowParams.slug.startsWith("lucknow-") ? lucknowParams.slug : `lucknow-${lucknowParams.slug}`) : legacyParams?.slug || "");
  const slugKey = areasData[rawSlug] ? rawSlug : areasData[rawSlug.replace(/^lucknow-/, "")] ? rawSlug.replace(/^lucknow-/, "") : rawSlug;

  const area = areasData[slugKey] || {
    name: rawSlug.replace(/^lucknow-/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    slug: rawSlug,
    pincode: rawSlug.includes("lucknow") ? "226001" : "208001",
    description: `Verified escort service in ${rawSlug.replace(/-/g, " ")}. 100% privacy, genuine profiles, and 24/7 home/hotel companion delivery.`,
    longDescription: `Our escort service covers ${rawSlug.replace(/-/g, " ")} with verified companion profiles, mobile contact numbers, and discreet home or hotel delivery within 45 minutes.`,
    landmarks: ["Main Market", "Hotel Corridor"],
    nearbyAreas: ["civil-lines", "swaroop-nagar"],
    faqs: [
      {
        q: `Is escort service available in ${rawSlug.replace(/-/g, " ")}?`,
        a: `Yes. We provide verified companion delivery in ${rawSlug.replace(/-/g, " ")}. Call +91 8523045235 or +91 9621326466 for booking.`,
      },
    ],
  };

  const isLucknow = rawSlug.startsWith("lucknow-") || (lucknowParams !== null) || area.name.toLowerCase().includes("lucknow");
  const city = isLucknow ? "Lucknow" : "Kanpur";
  const cityPath = isLucknow ? "/lucknow" : "/kanpur";
  const cleanSlug = area.slug.replace(/^lucknow-/, "");
  const canonicalUrl = `https://joya.kanpureliteservice.com/${isLucknow ? "lucknow" : "kanpur"}/${cleanSlug}`;

  const pageTitle = `${area.name} Escorts & Escort Service in ${area.name} ${city} | Call +91 8523045235 / +91 9621326466`;
  const pageDesc = `${area.name} escorts & call girls in ${city} — 100% verified profiles, zero advance payment, pay on arrival. Premier escort service in ${area.name} with 45-minute home & hotel delivery. Call +91 8523045235 or +91 9621326466.`;
  const keywords = `${area.name.toLowerCase()} escorts, escort service in ${area.name.toLowerCase()}, ${area.name.toLowerCase()} call girls, ${area.name.toLowerCase()} call girl number, ${city.toLowerCase()} escorts, escort in ${city.toLowerCase()}`;

  const areaSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Escort Service in ${area.name}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": `Joya Elite — Escort Service in ${city}`,
        "telephone": "+91-8523045235",
        "telephone2": "+91-9621326466",
        "url": "https://joya.kanpureliteservice.com/",
      },
      "areaServed": {
        "@type": "Place",
        "name": `${area.name}, ${city}, Uttar Pradesh`,
      },
      "description": area.description,
      "url": canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joya.kanpureliteservice.com/" },
        { "@type": "ListItem", "position": 2, "name": `${city} Escort Hub`, "item": `https://joya.kanpureliteservice.com${cityPath}` },
        { "@type": "ListItem", "position": 3, "name": `Escorts in ${area.name}`, "item": canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ...area.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
        {
          "@type": "Question",
          "name": `How do I book an escort in ${area.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Call or WhatsApp +91 8523045235. Share your location within ${area.name} and your preferred companion category. We confirm and dispatch within 45 minutes.`,
          },
        },
        {
          "@type": "Question",
          "name": `Is advance payment required for escort service in ${area.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `No advance payment is required. We operate on a 100% cash-on-delivery / pay-on-arrival basis. You pay only after the companion arrives at your location.`,
          },
        },
      ],
    },
  ];

  const sidebarAreas = allAreaLinks.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e0407", color: "#f5e6ea" }}>
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} keywords={keywords} schema={areaSchema} />
      <Header />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-6xl px-4 py-4 text-xs w-full text-[#c4bdad]" aria-label="Breadcrumb">
        <ol style={{ listStyle: "none", display: "flex", gap: "0.25rem", padding: 0, margin: 0 }}>
          <li><Link href="/" className="hover:text-[#dfb76c] transition-colors">Home</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><Link href={cityPath} className="hover:text-[#dfb76c] transition-colors">{city} Hub</Link></li>
          <li aria-hidden="true" style={{ margin: "0 4px" }}>›</li>
          <li><span className="text-[#f6f3ee] font-semibold">{area.name}</span></li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#150f1e] via-[#0b0811] to-[#08070b] border-b border-[#282033]/60">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181220] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg">
            <MapPin className="h-3.5 w-3.5" /> Escorts in {area.name} (PIN: {area.pincode})
          </div>
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase text-[#f6f3ee]" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
            Escort Service in <span className="gradient-text-gold">{area.name} {city}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
            {area.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mt-8">
            <a href={`tel:${phoneNumber}`} className="btn-luxury-gold px-6 py-3 text-xs sm:text-sm">
              <Phone className="h-4 w-4" /> Call 1: +91 8523045235
            </a>
            <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy px-6 py-3 text-xs sm:text-sm">
              <Phone className="h-4 w-4" /> Call 2: +91 9621326466
            </a>
            <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald px-6 py-3 text-xs sm:text-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp VIP Booking
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-14 bg-[#08070b]">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">

            {/* About this area */}
            <div className="card-luxury p-7">
              <h2 className="text-xl sm:text-2xl font-bold text-[#f6f3ee] uppercase mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Escort Service in {area.name} {city}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[#c4bdad]">
                {area.longDescription}
              </p>
              <h3 className="text-sm sm:text-base font-bold text-[#dfb76c] uppercase mb-3" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Why Choose Our #1 Escort Service in {area.name} {city}?
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#c4bdad]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-[#f6f3ee]">Verified Companions in {area.name}:</strong> Every profile is authenticated with real photos, genuine age, and clean hygiene.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-[#f6f3ee]">Fast 45-Minute Outcall Delivery:</strong> Companions dispatched promptly to your luxury hotel suite or private residence in {area.name}.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-[#f6f3ee]">100% Cash on Arrival Guarantee:</strong> Zero advance deposit or registration fees. Pay only after meeting in person.</span>
                </li>
              </ul>
            </div>

            {/* Landmarks */}
            <div className="card-luxury p-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6f3ee] uppercase mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Key Landmarks &amp; Coverage in {area.name}
              </h2>
              <div className="flex flex-wrap gap-2 mb-5">
                {area.landmarks.map((lm) => (
                  <span key={lm} className="text-xs px-3 py-1.5 rounded-lg bg-[#181220] border border-[#2d2438] text-[#dfb76c]">
                    📍 {lm}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
                Our companion service covers all hotels, guesthouses, private residences, and serviced apartments across {area.name} {city} (PIN: {area.pincode}). Call <a href={`tel:${phoneNumber}`} className="text-[#dfb76c] font-bold hover:underline">+91 8523045235</a> for immediate dispatch.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="card-luxury p-7">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6f3ee] uppercase mb-5" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                Frequently Asked Questions — {area.name} Escorts
              </h2>
              <div className="space-y-4">
                {area.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#140f1c] border border-[#2d2438]">
                    <h3 className="text-xs sm:text-sm font-bold text-[#f6f3ee] mb-1.5 uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>{faq.q}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">{faq.a}</p>
                  </div>
                ))}
                <div className="p-4 rounded-lg bg-[#140f1c] border border-[#2d2438]">
                  <h3 className="text-xs sm:text-sm font-bold text-[#f6f3ee] mb-1.5 uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>How do I book an escort in {area.name}, {city}?</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
                    Call or WhatsApp <a href={`tel:${phoneNumber}`} className="text-[#dfb76c] font-bold">+91 8523045235</a>. Share your exact address or hotel in {area.name} and your companion preferences. We confirm and dispatch within 45 minutes.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#140f1c] border border-[#2d2438]">
                  <h3 className="text-xs sm:text-sm font-bold text-[#f6f3ee] mb-1.5 uppercase" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>Is advance payment required in {area.name}?</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#c4bdad]">
                    No. We operate on a <strong className="text-[#dfb76c]">100% Cash on Arrival</strong> basis across all localities including {area.name}. You pay only after meeting your companion in person.
                  </p>
                </div>
              </div>
            </div>

            {/* Search keyword cloud */}
            <div className="card-luxury p-7">
              <h3 className="text-xs font-bold text-[#dfb76c] uppercase mb-3 tracking-wider" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>
                Popular Search Terms — {area.name} {city}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  `Escorts in ${area.name} ${city}`,
                  `${area.name} escort service`,
                  `${area.name} VIP call girls`,
                  `Independent escort ${area.name}`,
                  `Hotel outcall ${area.name}`,
                  `Cash on arrival escort ${area.name}`,
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-[#181220] border border-[#2d2438] text-[#a89f8f]">
                    🔍 {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="card-luxury p-6 text-center border-[#dfb76c]/40 shadow-2xl">
              <div className="text-2xl mb-2 text-[#dfb76c]">⚡</div>
              <h3 className="text-lg font-bold text-[#f6f3ee] uppercase mb-1" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                45-Min Outcall Delivery
              </h3>
              <p className="text-xs mb-5 text-[#c4bdad]">
                Active in {area.name}, {city}. Express booking.
              </p>
              <a href={`tel:${phoneNumber}`} className="btn-luxury-gold w-full py-3 text-xs mb-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> Call Helpline 1: 8523045235
              </a>
              <a href={`tel:${phoneNumber2}`} className="btn-luxury-burgundy w-full py-3 text-xs mb-2.5 justify-center">
                <Phone className="h-3.5 w-3.5" /> Call Helpline 2: 9621326466
              </a>
              <a href={whatsappUrl2} target="_blank" rel="noreferrer" className="btn-luxury-emerald w-full py-3 text-xs justify-center">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp VIP Concierge
              </a>
            </div>

            {/* Trust signals */}
            <div className="card-luxury p-6">
              <h4 className="text-xs uppercase font-bold text-[#dfb76c] mb-3.5" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>Why Trust Our Verified Escort Service?</h4>
              <div className="space-y-2.5 text-xs text-[#c4bdad]">
                <div className="flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-[#dfb76c]" /> 100% Private Bookings</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Verified Escort Profiles</div>
                <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-amber-400" /> Available 24/7</div>
                <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 text-amber-400" /> 4.9★ Rated Service</div>
              </div>
            </div>

            {/* Other areas */}
            <div className="card-luxury p-6">
              <h4 className="text-xs uppercase font-bold text-[#dfb76c] mb-3.5" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>Nearby Service Areas</h4>
              <nav className="flex flex-col gap-2 text-xs text-[#c4bdad]" aria-label="Other service areas">
                {sidebarAreas.map((a) => (
                  <Link key={a.slug} href={`/${isLucknow ? "lucknow" : "kanpur"}/${a.slug}`} className="hover:text-[#dfb76c] transition-colors">
                    • Escorts in {a.name}
                  </Link>
                ))}
                <Link href={cityPath} className="text-[#dfb76c] font-bold hover:underline mt-2">→ View All {city} Hub Areas</Link>
              </nav>
            </div>

            {/* Service categories */}
            <div className="card-luxury p-6">
              <h4 className="text-xs uppercase font-bold text-[#dfb76c] mb-3.5" style={{ fontFamily: "Oswald, Poppins, sans-serif" }}>Companion Categories</h4>
              <nav className="flex flex-col gap-2 text-xs text-[#c4bdad]" aria-label="Service categories">
                <Link href="/services/vip-escorts" className="hover:text-[#dfb76c] transition-colors">• VIP Escorts</Link>
                <Link href="/services/college-models" className="hover:text-[#dfb76c] transition-colors">• College Model Escorts</Link>
                <Link href="/services/independent" className="hover:text-[#dfb76c] transition-colors">• Independent Companions</Link>
                <Link href="/services/luxury-escorts" className="hover:text-[#dfb76c] transition-colors">• Luxury 5-Star Escorts</Link>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

