export type Lang = "en" | "bn";

export const LANGS: { code: Lang; label: string; short: string; hreflang: string }[] = [
  { code: "en", label: "English", short: "EN", hreflang: "en" },
  { code: "bn", label: "বাংলা", short: "বাং", hreflang: "bn" },
];

// English pages that have a Bangla translation. Pages not listed are English-only.
export const TRANSLATED: Record<string, string> = {
  "/": "/bn",
  "/services": "/bn/services",
  "/pricing": "/bn/pricing",
  "/about": "/bn/about",
  "/contact": "/bn/contact",
};

const BN_TO_EN = Object.fromEntries(Object.entries(TRANSLATED).map(([en, bn]) => [bn, en]));

export const langOf = (path: string): Lang => (path === "/bn" || path.startsWith("/bn/") ? "bn" : "en");

// The equivalent page in the other language, or that language's home page.
export function switchPath(path: string, to: Lang) {
  if (langOf(path) === to) return path;
  if (to === "bn") return TRANSLATED[path] ?? "/bn";
  return BN_TO_EN[path] ?? "/";
}

// hreflang alternates for a page that exists in both languages.
export function languageAlternates(path: string) {
  const en = langOf(path) === "en" ? path : BN_TO_EN[path];
  const bn = en ? TRANSLATED[en] : undefined;
  if (!en || !bn) return undefined;
  return { en, bn, "x-default": en };
}

export const UI = {
  en: {
    sub: "Your Growth Partner",
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
    book: "Book now",
    bookHref: "/contact",
    call: "Call Now",
    whatsapp: "WhatsApp",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
  },
  bn: {
    sub: "আপনার গ্রোথ পার্টনার",
    nav: [
      { label: "হোম", href: "/bn" },
      { label: "সার্ভিস", href: "/bn/services" },
      { label: "ইন্ডাস্ট্রি", href: "/industries" },
      { label: "প্রাইসিং", href: "/bn/pricing" },
      { label: "ব্লগ", href: "/blog" },
      { label: "আমাদের সম্পর্কে", href: "/bn/about" },
    ],
    book: "বুক করুন",
    bookHref: "/bn/contact",
    call: "কল করুন",
    whatsapp: "হোয়াটসঅ্যাপ",
    menuOpen: "মেনু খুলুন",
    menuClose: "মেনু বন্ধ করুন",
    language: "ভাষা",
  },
} as const;
