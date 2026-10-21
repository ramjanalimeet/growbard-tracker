import type { IconName } from "@/components/Icon";
import type { Service } from "@/lib/site";

export type Industry = {
  slug: string;
  name: string;
  // Short label for menus and cards.
  short: string;
  icon: IconName;
  headline: string;
  intro: string;
  challenges: string[];
  // How each service helps this industry, keyed by service id.
  services: Record<Service["id"], string>;
  searches: string[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Real estate",
    icon: "home",
    headline: "Digital marketing for real estate developers and agents",
    intro:
      "Property buyers start their search online, often months before they call anyone. We help developers, agents and property managers get found on Google, show projects at their best and turn enquiries into site visits.",
    challenges: [
      "Long buying cycles, with buyers comparing many projects before they call",
      "High-value leads that are expensive to win and easy to lose",
      "Buyers living abroad who research everything online",
      "Listings and projects scattered across portals you don't control",
    ],
    services: {
      "local-seo":
        "Rank for searches like \"flat for sale in Bashundhara\" with optimized Google Business Profiles for your office and project sites, and dedicated pages for each area you sell in.",
      "web-development":
        "A fast project showcase with floor plans, photo galleries, location maps and a clear enquiry form on every page.",
      "google-ads":
        "Search campaigns targeting buyers by area, budget and property type, with call tracking so you know which ads bring site visits.",
      "social-media":
        "Walkthrough videos, construction updates and Facebook lead ads aimed at local buyers and non-resident Bangladeshis.",
    },
    searches: ["flat for sale in Dhaka", "apartment in Uttara", "land for sale near me", "ready flat Bashundhara"],
    faqs: [
      {
        q: "Can you target Bangladeshis living abroad?",
        a: "Yes. Google Ads and Meta ads can target buyers in the UK, Middle East and elsewhere, and we build landing pages with WhatsApp contact so they can reach you easily.",
      },
      {
        q: "Should each project have its own page?",
        a: "Yes. A separate page per project lets it rank for its own area and gives your ads a focused place to send visitors.",
      },
    ],
  },
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    short: "Dental clinics",
    icon: "tooth",
    headline: "Digital marketing for dental clinics",
    intro:
      "When someone has a toothache or wants a brighter smile, they search Google for a dentist nearby and pick from the top results. We help dental clinics win those searches and fill their appointment book.",
    challenges: [
      "Patients choose based on reviews and distance, often within minutes",
      "Many clinics competing for the same few spots on Google Maps",
      "High-value treatments like implants and braces need more trust to sell",
      "Missed calls and slow replies lose patients to the next clinic",
    ],
    services: {
      "local-seo":
        "Optimize your Google Business Profile for \"dentist near me\" searches, build reviews from happy patients and create pages for each treatment.",
      "web-development":
        "A clean, reassuring website with treatment pages, doctor profiles, before-and-after galleries and online appointment requests.",
      "google-ads":
        "Ads for high-value treatments such as implants, root canals and braces, shown only to people near your clinic.",
      "social-media":
        "Patient education posts, smile transformations (with consent) and offers that keep your clinic top of mind.",
    },
    searches: ["dentist near me", "dental clinic in Dhanmondi", "teeth whitening cost", "root canal treatment"],
    faqs: [
      {
        q: "How do we get more Google reviews from patients?",
        a: "We set up a simple process: a short review link sent on WhatsApp after each visit. It's the most effective way to grow reviews steadily.",
      },
      {
        q: "Can we promote specific treatments?",
        a: "Yes. We create a page and ad campaign for each treatment you want to grow, so you attract the patients you want most.",
      },
    ],
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    short: "Interior design",
    icon: "sofa",
    headline: "Digital marketing for interior designers",
    intro:
      "Interior design is sold on visuals and trust. We help interior design firms show off their portfolio, rank for local searches and bring in clients with real budgets.",
    challenges: [
      "Clients want to see a lot of past work before they get in touch",
      "Many enquiries are price-shoppers rather than serious clients",
      "Projects come mostly from referrals, which are hard to scale",
      "Beautiful work that isn't shown off well online",
    ],
    services: {
      "local-seo":
        "Rank for \"interior designer in Gulshan\" and similar searches with an optimized profile full of project photos and reviews.",
      "web-development":
        "A portfolio-first website with project case studies, room-by-room galleries and a consultation request form.",
      "google-ads":
        "Ads for people actively searching for interior design, filtered by area and project type to attract serious clients.",
      "social-media":
        "Instagram and Facebook content built around before-and-after transformations, reels and design tips.",
    },
    searches: ["interior designer near me", "office interior design Dhaka", "flat interior design cost", "kitchen cabinet design"],
    faqs: [
      {
        q: "Which platform works best for interior designers?",
        a: "Instagram and Facebook for inspiration and reach, and Google for people ready to hire. Most firms get the best results using both.",
      },
      {
        q: "How do we attract bigger projects?",
        a: "By showcasing your best projects with full case studies and targeting ads at premium areas and commercial clients.",
      },
    ],
  },
  {
    slug: "solar-installation",
    name: "Solar Installation",
    short: "Solar installation",
    icon: "sun",
    headline: "Digital marketing for solar installation companies",
    intro:
      "More homes, factories and businesses are switching to solar, and they research suppliers online first. We help solar companies explain their offer clearly and capture high-intent leads.",
    challenges: [
      "Customers need to understand costs, savings and payback before they commit",
      "Large commercial and industrial projects with long decision cycles",
      "Competition from cheap, low-quality installers",
      "Leads spread across homes, businesses and factories with different needs",
    ],
    services: {
      "local-seo":
        "Rank for \"solar panel installation\" searches in the areas you serve, with service-area pages and a review-rich Google profile.",
      "web-development":
        "A website with clear system packages, savings calculators, completed project galleries and quote request forms.",
      "google-ads":
        "Separate campaigns for home, commercial and rooftop industrial solar, so each audience sees the right message.",
      "social-media":
        "Installation videos, customer savings stories and explainers that build trust with business owners.",
    },
    searches: ["solar panel price in Bangladesh", "rooftop solar for factory", "solar installation company", "on-grid solar system"],
    faqs: [
      {
        q: "Can you help us reach factories and commercial clients?",
        a: "Yes. We build dedicated pages and campaigns for rooftop and industrial solar, targeting decision-makers searching for commercial installations.",
      },
      {
        q: "How do we stand out from cheaper installers?",
        a: "By showing completed projects, certifications, warranties and customer results clearly, so buyers see the value behind your price.",
      },
    ],
  },
  {
    slug: "study-abroad-consultancies",
    name: "Study-Abroad Consultancies",
    short: "Study-abroad consultancies",
    icon: "cap",
    headline: "Digital marketing for study-abroad consultancies",
    intro:
      "Students and parents research countries, universities and consultants online for weeks before choosing. We help consultancies build trust, rank for the right searches and fill counselling sessions.",
    challenges: [
      "Families need to trust you before they share documents and money",
      "Intense competition for searches like \"study in UK\" or \"Canada student visa\"",
      "Seasonal intakes with short windows to fill",
      "Many enquiries that never turn up for counselling",
    ],
    services: {
      "local-seo":
        "Rank your office on Google Maps for searches like \"study abroad consultancy near me\" and build reviews from successful students.",
      "web-development":
        "A website with country and university pages, visa success stories, event listings and easy counselling booking.",
      "google-ads":
        "Intake-focused campaigns for each destination country, timed around application deadlines.",
      "social-media":
        "Student success stories, visa updates, seminar promotion and lead ads for upcoming intakes.",
    },
    searches: ["study in UK from Bangladesh", "study abroad consultancy Dhaka", "Canada student visa", "IELTS requirement Australia"],
    faqs: [
      {
        q: "Can you promote our seminars and education fairs?",
        a: "Yes. We run event campaigns on Facebook and Google with registration forms and WhatsApp reminders to boost turnout.",
      },
      {
        q: "Should we have a page for each country?",
        a: "Yes. Country pages rank for searches like \"study in Canada\" and give your ads a relevant page to send students to.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    short: "E-commerce",
    icon: "cart",
    headline: "Digital marketing for e-commerce businesses",
    intro:
      "Online shops live or die by traffic and conversion. We help e-commerce brands get more visitors from Google and social media, and turn more of them into paying customers.",
    challenges: [
      "Rising ad costs on Facebook and Instagram",
      "Depending on a single platform for all sales",
      "Visitors who browse but never order",
      "Cash-on-delivery orders that get cancelled or returned",
    ],
    services: {
      "local-seo":
        "SEO for your category and product pages so you earn free traffic from Google, plus a Google Business Profile if you have a showroom or pickup point.",
      "web-development":
        "A fast online store with clear product pages, easy checkout, bKash and card payments, and order tracking.",
      "google-ads":
        "Search and Performance Max campaigns that reach people already searching for your products.",
      "social-media":
        "Product content, creator collaborations and Meta ad campaigns built to sell, with retargeting for visitors who didn't buy.",
    },
    searches: ["buy online Bangladesh", "best price [product] BD", "online shop near me", "home delivery Dhaka"],
    faqs: [
      {
        q: "We only sell through Facebook. Do we need a website?",
        a: "A website gives you sales you own, works with Google Ads and SEO, and makes your brand look more trustworthy, so it's worth having alongside your page.",
      },
      {
        q: "Can you reduce our ad costs?",
        a: "We focus on better targeting, stronger creatives and retargeting, and track cost per order rather than clicks, so your budget goes further.",
      },
    ],
  },
  {
    slug: "car-detailing",
    name: "Car Detailing",
    short: "Car detailing",
    icon: "car",
    headline: "Digital marketing for car detailing businesses",
    intro:
      "Car owners search for detailing, ceramic coating and car wash services nearby and choose based on photos and reviews. We help detailing businesses fill their booking calendar.",
    challenges: [
      "Customers decide quickly based on photos, reviews and price",
      "High-value services like ceramic coating need extra trust",
      "Busy and quiet weeks that are hard to plan around",
      "Competing with cheap car washes that don't offer the same quality",
    ],
    services: {
      "local-seo":
        "Rank for \"car detailing near me\" and \"ceramic coating Dhaka\" with a Google profile full of before-and-after photos and reviews.",
      "web-development":
        "A booking-focused website with service packages, prices, galleries and WhatsApp booking.",
      "google-ads":
        "Local ads for premium services like ceramic coating and paint protection, shown to car owners near you.",
      "social-media":
        "Satisfying transformation reels, customer cars and seasonal offers that keep the calendar full.",
    },
    searches: ["car detailing near me", "ceramic coating price Dhaka", "car wash Gulshan", "car interior cleaning"],
    faqs: [
      {
        q: "What works best for a detailing business?",
        a: "A strong Google Business Profile with lots of photos and reviews, plus short videos on Facebook and Instagram. Together they bring a steady flow of bookings.",
      },
      {
        q: "Can you help us sell ceramic coating packages?",
        a: "Yes. We build a dedicated page and ad campaign for premium packages so you attract owners willing to invest in their car.",
      },
    ],
  },
  {
    slug: "manufacturers-exporters",
    name: "Manufacturers & Exporters",
    short: "Manufacturers/exporters",
    icon: "factory",
    headline: "Digital marketing for manufacturers and exporters",
    intro:
      "International buyers and sourcing agents check your website and Google presence before they ever request a quote. We help manufacturers and exporters look credible online and reach buyers at home and abroad.",
    challenges: [
      "Buyers abroad judge your company by its website before contacting you",
      "Relying on agents and trade fairs for new business",
      "Complex products and certifications that need clear explanation",
      "Long B2B sales cycles with several decision-makers",
    ],
    services: {
      "local-seo":
        "A verified Google Business Profile for your factory and office, plus SEO for product and capability pages so buyers find you on Google.",
      "web-development":
        "A professional B2B website with product catalogues, certifications, factory tours, capacity details and RFQ forms.",
      "google-ads":
        "Search campaigns targeting buyers in your export markets for the products you make.",
      "social-media":
        "LinkedIn and Facebook content showing your factory, compliance and capabilities to buyers and partners.",
    },
    searches: ["garment manufacturer Bangladesh", "leather goods exporter", "jute products supplier", "OEM factory Bangladesh"],
    faqs: [
      {
        q: "Can you reach buyers outside Bangladesh?",
        a: "Yes. We target Google Ads and SEO at your export markets and build pages in the language and format international buyers expect.",
      },
      {
        q: "What should a manufacturer's website include?",
        a: "Product ranges, capacity, certifications, factory photos and videos, client logos where allowed, and an easy way to request a quote.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
