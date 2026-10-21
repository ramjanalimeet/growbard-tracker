import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { NAV, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...NAV.map((n) => ({ url: `${SITE.url}${n.href === "/" ? "" : n.href}` })),
    ...POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
