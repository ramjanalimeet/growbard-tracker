import { PACKAGES } from "@/lib/site";

// External sources cited across blog posts, so figures stay consistent and
// each one links to where it came from. Update the numbers here when newer
// reports are published.
export const SRC = {
  datareportal: "https://datareportal.com/reports/digital-2026-bangladesh",
  statcounterSearch: "https://gs.statcounter.com/search-engine-market-share/all/bangladesh",
  btrcViaBss: "https://www.bssnews.net/news-flash/406665",
  napoleoncat: "https://napoleoncat.com/stats/social-media-users-in-bangladesh/",
  ecdb: "https://ecdb.com/resources/sample-data/market/bd/all",
  cpdEcommerce:
    "https://apparelresources.com/business-news/retail/e-commerce-market-bangladesh-reach-us-10-5-billion-2026/",

  // Official Google documentation
  gbpRanking: "https://support.google.com/business/answer/7091",
  gbpGuidelines: "https://support.google.com/business/answer/3038177",
  gbpHome: "https://www.google.com/business/",
  seoStarter: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
  helpfulContent: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
  localBusinessSchema: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
  searchConsole: "https://search.google.com/search-console/about",
  coreWebVitals: "https://web.dev/articles/vitals",
  pageSpeed: "https://pagespeed.web.dev/",
  adsQualityScore: "https://support.google.com/google-ads/answer/6167118",
  adsNegativeKeywords: "https://support.google.com/google-ads/answer/2453972",
  adsLocations: "https://support.google.com/google-ads/answer/1722043",

  // Meta
  metaAdsManager: "https://www.facebook.com/business/tools/ads-manager",
  whatsappBusiness: "https://business.whatsapp.com/",
} as const;

// Reusable sentences with the figure and its source link.
export const FACT = {
  internetUsers: `Bangladesh had [82.8 million internet users at the end of 2025](${SRC.datareportal}), about 47% of the population (DataReportal, Digital 2026).`,
  socialUsers: `There were [64.0 million social media user identities in Bangladesh](${SRC.datareportal}) in October 2025 (DataReportal, Digital 2026).`,
  googleShare: `Google handles roughly [98% of all searches in Bangladesh](${SRC.statcounterSearch}) (StatCounter, 2026).`,
  subscriptions: `BTRC data put total internet subscriptions at about [13.41 crore in May 2026](${SRC.btrcViaBss}), the large majority of them on mobile.`,
  facebookUsers: `Facebook's advertising audience in Bangladesh was around [72 million users in September 2026](${SRC.napoleoncat}), with Instagram at about 11.4 million (NapoleonCat).`,
  ecommerce: `Estimates of Bangladesh's e-commerce market range from about [US$6 billion in 2025 (ECDB)](${SRC.ecdb}) to a [projected US$10.5 billion in 2026 (CPD)](${SRC.cpdEcommerce}).`,
};

// Growbard's plans as a table block, kept in sync with the pricing page.
export const PLAN_TABLE = {
  table: {
    caption: "Growbard plans (monthly, in Taka)",
    head: ["Plan", "Price", "What's included"],
    rows: PACKAGES.map((p) => [`[${p.name}](/pricing)`, `${p.price}${p.period}`, p.features.join(", ")]),
  },
};
