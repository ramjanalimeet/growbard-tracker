// Business details used across the site. Replace the placeholder contact
// details with the real ones before going live.
export const SITE = {
  name: "Growbard",
  tagline: "Digital marketing that grows local businesses",
  url: "https://growbard.com",
  email: "raakash.meet@gmail.com",
  // Same format as the Google Business Profile, to keep name/address/phone consistent.
  phone: "01839-295114",
  phoneHref: "tel:+8801839295114",
  whatsapp: "01839-295114",
  // Country code + number, digits only, as WhatsApp's wa.me links need it.
  whatsappNumber: "8801839295114",
  whatsappHref:
    "https://wa.me/8801839295114?text=" +
    encodeURIComponent("Hi Growbard, I'd like to know more about your services."),
  hours: "Opens daily at 9am",
  areaServed: "Dhaka and nearby areas",
  // YouTube video ID for the hero video card (the part after "watch?v=").
  // Leave empty to show the animated dashboard preview instead.
  heroVideoId: "",
  socials: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  id: string;
  title: string;
  icon: "pin" | "code" | "ads" | "social";
  blurb: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "local-seo",
    title: "Local SEO",
    icon: "pin",
    blurb:
      "Show up in the Google Map Pack and local search when nearby customers are ready to buy.",
    description:
      "Most local customers pick from the top three results in Google Maps. We optimize your Google Business Profile, build consistent citations, grow your reviews and create location pages so you show up when people nearby search for what you do.",
    points: [
      "Google Business Profile optimization",
      "Citation building & NAP cleanup",
      "Review generation strategy",
      "Local landing pages & on-page SEO",
    ],
  },
  {
    id: "web-development",
    title: "Website Development",
    icon: "code",
    blurb:
      "Fast, mobile-first websites built to rank and to turn visitors into calls, bookings and sales.",
    description:
      "Your website is often the first impression a customer gets. We design and build fast, mobile-first sites with clear calls to action, then keep them updated, secure and backed up so you never have to worry about the technical side.",
    points: [
      "Custom design that matches your brand",
      "Lightning-fast, mobile-first build",
      "Conversion-focused layouts & forms",
      "SEO-ready structure from day one",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    icon: "ads",
    blurb:
      "Paid search campaigns that put you at the top of Google and bring in leads from day one.",
    description:
      "Google Ads puts you at the top of search results the day your campaign goes live. We research the keywords your customers use, write ads that get clicked, cut wasted spend and track every call and form so you know exactly what you get back.",
    points: [
      "Search, Local Services & Performance Max",
      "Keyword research & negative keyword control",
      "Ad copy and landing page testing",
      "Call & conversion tracking setup",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: "social",
    blurb:
      "Content and paid social that builds trust in your community and keeps your brand top of mind.",
    description:
      "Your customers spend hours every day on Facebook and Instagram. We plan and create content that shows off your work, run targeted ads to people in your area and engage with your community so your brand stays top of mind.",
    points: [
      "Facebook & Instagram management",
      "Scroll-stopping posts, reels & graphics",
      "Targeted Meta ad campaigns",
      "Community engagement & monthly reporting",
    ],
  },
];

export const STATS = [
  { value: "150+", label: "Businesses grown" },
  { value: "3.2x", label: "Average lead increase" },
  { value: "5.0★", label: "Google rating" },
  { value: "24h", label: "Response time" },
];

export const WHY = [
  {
    title: "Results, not reports",
    text: "We measure success in calls, bookings and revenue — not vanity metrics.",
  },
  {
    title: "Local market experts",
    text: "We know how local search works and how nearby customers choose who to call.",
  },
  {
    title: "No long-term contracts",
    text: "Month-to-month plans. We earn your business every single month.",
  },
  {
    title: "One team, every channel",
    text: "SEO, website, ads and social working together instead of four separate vendors.",
  },
  {
    title: "Transparent reporting",
    text: "A clear monthly report and a live dashboard so you always know what you're paying for.",
  },
  {
    title: "Fast, friendly support",
    text: "A dedicated account manager who answers within one business day.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Free strategy call",
    text: "We learn about your business, goals and competitors, and audit where you stand today.",
  },
  {
    step: "02",
    title: "Custom growth plan",
    text: "You get a clear plan covering which channels, what we'll do, and the results to expect.",
  },
  {
    step: "03",
    title: "Launch & optimize",
    text: "We build, launch and keep improving your SEO, website, ads and social every week.",
  },
  {
    step: "04",
    title: "Report & grow",
    text: "Monthly reports show leads and ROI, and we reinvest in what's working best.",
  },
];

export type Package = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Starter",
    price: "৳10,500",
    period: "/month",
    description: "Local SEO to get your business found on Google.",
    features: [
      "Local SEO",
      "Google Business Profile optimization",
      "Citation building & review strategy",
      "Local on-page SEO",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "৳24,500",
    period: "/month",
    description: "Local SEO, a professional website and Google Ads working together.",
    featured: true,
    features: [
      "Local SEO",
      "Website development",
      "Website maintenance",
      "Google Ads management",
      "Monthly performance report",
    ],
  },
  {
    name: "Dominate",
    price: "৳34,500",
    period: "/month",
    description: "Every channel covered to own your local market.",
    features: [
      "Local SEO",
      "Website development",
      "Website maintenance",
      "Google Ads management",
      "Social media marketing",
      "Monthly performance report",
    ],
  },
];

// Google Business Profile ("Growbard - Marketing Agency").
// rating/reviewCount are the fallback when the live Google fetch isn't set up
// (see lib/google.ts); update them when new reviews come in.
export const GOOGLE = {
  businessName: "Growbard - Marketing Agency",
  rating: 5.0,
  reviewCount: 2,
  // Paste the profile's share link here (Google Maps > Share > Copy link).
  profileUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Growbard - Marketing Agency, Dhaka"),
  // Paste the "Ask for reviews" link from the profile here.
  writeReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Growbard - Marketing Agency, Dhaka"),
  mapEmbedUrl:
    "https://www.google.com/maps?output=embed&q=" +
    encodeURIComponent("Growbard - Marketing Agency, Dhaka"),
};

export type Review = {
  author: string;
  rating: number;
  text: string;
  when?: string;
  photo?: string;
  url?: string;
};

// Reviews copied from the Google Business Profile. Used when the live Google
// fetch isn't configured. Only add real reviews here, word for word.
export const GOOGLE_REVIEWS: Review[] = [];

export const FAQS = [
  {
    q: "How long does Local SEO take to show results?",
    a: "Most clients see movement in Google Maps within 30–60 days and strong, steady results in 3–6 months, depending on competition in your area.",
  },
  {
    q: "Do I need a new website to work with you?",
    a: "Not always. We'll review your current site on the strategy call. If it's slow, hard to use or not ranking, we'll recommend a rebuild.",
  },
  {
    q: "Is ad spend included in your Google Ads pricing?",
    a: "No. Your ad budget is paid directly to Google, so you keep full control and ownership of the account. Our fee covers setup and management.",
  },
  {
    q: "Which social media platforms do you manage?",
    a: "We mainly focus on Facebook and Instagram, and can add LinkedIn, TikTok or Google Business posts depending on your audience.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. All plans are month to month. We keep clients by delivering results, not by locking them in.",
  },
  {
    q: "How will I know what's working?",
    a: "You get a monthly report covering rankings, traffic, calls, leads and ad spend, plus a monthly check-in call with your account manager.",
  },
];

export const PRICING_COMPARE: { feature: string; plans: [boolean, boolean, boolean] }[] = [
  { feature: "Local SEO", plans: [true, true, true] },
  { feature: "Google Business Profile optimization", plans: [true, true, true] },
  { feature: "Website development", plans: [false, true, true] },
  { feature: "Website maintenance", plans: [false, true, true] },
  { feature: "Google Ads management", plans: [false, true, true] },
  { feature: "Social media marketing", plans: [false, false, true] },
  { feature: "Monthly performance report", plans: [true, true, true] },
];

export const PRICING_FAQS = [
  {
    q: "Are the prices monthly?",
    a: "Yes. All plans are billed monthly in Bangladeshi Taka.",
  },
  {
    q: "Is Google Ads budget included in the price?",
    a: "No. Our fee covers setting up and managing your campaigns. Your ad budget is paid directly to Google, so you stay in full control of how much you spend.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. Many clients start with Starter and move to Growth or Dominate once they see results. Just let us know and we'll switch you over.",
  },
  {
    q: "Do you offer custom plans?",
    a: "Yes. If you need a single service or a different mix, chat with us on WhatsApp or call us and we'll put together a plan for your business.",
  },
];
