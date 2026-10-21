import type { MetadataRoute } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { POSTS } from "@/lib/posts";
import { languageAlternates, TRANSLATED } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { COMPANY_LINKS, NAV, SERVICES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...new Set([...NAV, ...COMPANY_LINKS, { href: "/locations" }].map((n) => n.href))];
  return [
    ...[...pages, ...Object.values(TRANSLATED)].map((href) => {
      const languages = languageAlternates(href);
      return {
        url: absoluteUrl(href),
        priority: href === "/" ? 1 : 0.8,
        ...(languages && {
          alternates: {
            languages: Object.fromEntries(Object.entries(languages).map(([l, p]) => [l, absoluteUrl(p)])),
          },
        }),
      };
    }),
    ...SERVICES.map((s) => ({ url: absoluteUrl(`/services/${s.id}`), priority: 0.9 })),
    ...INDUSTRIES.map((i) => ({ url: absoluteUrl(`/industries/${i.slug}`), priority: 0.8 })),
    ...LOCATIONS.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}`), priority: 0.7 })),
    ...POSTS.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.updated ?? p.date, priority: 0.6 })),
  ];
}
