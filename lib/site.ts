// Business details used across the site. Replace the placeholder contact
// details with the real ones before going live.
export const SITE = {
  name: "Growbard",
  tagline: "Digital marketing that grows local businesses",
  url: "https://growbard.com",
  email: "hello@growbard.com",
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  hours: "Mon – Fri, 9am – 6pm",
  socials: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export type Service = {
  id: string;
  title: string;
  icon: "pin" | "code" | "ads" | "social";
  blurb: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "local-seo",
    title: "Local SEO",
    icon: "pin",
    blurb:
      "Show up in the Google Map Pack and local search when nearby customers are ready to buy.",
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
  { value: "4.9★", label: "Client rating" },
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
    price: "$499",
    period: "/month",
    description: "Get found locally and build a solid foundation.",
    features: [
      "Local SEO & Google Business Profile",
      "Up to 20 citations",
      "8 social media posts / month",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "$999",
    period: "/month",
    description: "Our most popular plan for steady, predictable leads.",
    featured: true,
    features: [
      "Everything in Starter",
      "Google Ads management",
      "16 social posts + Meta ads",
      "2 new landing pages / month",
      "Call & conversion tracking",
    ],
  },
  {
    name: "Dominate",
    price: "$1,999",
    period: "/month",
    description: "Own your market across every channel.",
    features: [
      "Everything in Growth",
      "Custom website design & build",
      "Multi-location Local SEO",
      "Daily social content & reels",
      "Dedicated account manager",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Mark R.",
    role: "Owner, Roofing Company",
    quote:
      "Growbard got us into the Map Pack in under three months. Our phone hasn't stopped ringing since.",
  },
  {
    name: "Sarah L.",
    role: "Founder, Dental Clinic",
    quote:
      "The new website looks amazing and actually converts. Online bookings doubled in the first month.",
  },
  {
    name: "James T.",
    role: "Manager, HVAC Services",
    quote:
      "Our Google Ads were burning money before. Now every dollar is tracked and our cost per lead dropped by half.",
  },
  {
    name: "Priya K.",
    role: "Owner, Beauty Salon",
    quote:
      "Our Instagram finally looks professional and brings in new clients every week. Great team to work with.",
  },
];

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
