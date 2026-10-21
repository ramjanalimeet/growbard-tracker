import type { IconName } from "@/components/Icon";
import { ADS_POSTS } from "@/lib/blog/ads-social";
import { INDUSTRY_POSTS } from "@/lib/blog/industries";
import { LOCAL_POSTS } from "@/lib/blog/local-seo";
import { SERVICE_POSTS } from "@/lib/blog/services";
import { STARTER_POSTS } from "@/lib/blog/starter";
import { WEB_POSTS } from "@/lib/blog/web";

// A post body is a list of simple blocks so articles can be written in
// TypeScript without a CMS. Text in p/ul/ol blocks may contain inline links
// written as [label](/path).
export type Block =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { caption?: string; head: string[]; rows: string[][] } };

export type Post = {
  slug: string;
  // The search phrase this article is written to rank for.
  keyword: string;
  title: string;
  // Shorter title for search results when `title` is long.
  metaTitle?: string;
  excerpt: string;
  category: string;
  icon: IconName;
  date: string; // YYYY-MM-DD
  // Last meaningful update, shown on the page and in structured data.
  updated?: string;
  // Worked out from the word count.
  readMinutes: number;
  body: Block[];
  faqs?: { q: string; a: string }[];
  // External references, listed at the end of the article.
  sources?: { label: string; url: string }[];
};

export type PostData = Omit<Post, "readMinutes">;

function readingMinutes(post: PostData) {
  const text = post.body
    .map((b) => ("table" in b ? [...b.table.head, ...b.table.rows.flat()] : Object.values(b).flat()))
    .flat()
    .join(" ");
  return Math.max(2, Math.round(text.split(/\s+/).length / 200));
}

// Newest first.
export const POSTS: Post[] = [
  ...STARTER_POSTS,
  ...LOCAL_POSTS,
  ...WEB_POSTS,
  ...ADS_POSTS,
  ...INDUSTRY_POSTS,
  ...SERVICE_POSTS,
]
  .map((p) => ({ ...p, readMinutes: readingMinutes(p) }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const POST_CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
