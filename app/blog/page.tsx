import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { CtaBand, PageHero } from "@/components/Sections";
import { POST_CATEGORIES, POSTS } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Local SEO & Digital Marketing Tips",
  description:
    "Practical guides on Local SEO, Google Business Profile, websites, Google Ads and social media marketing for businesses in Bangladesh.",
  path: "/blog",
});

const categoryId = (c: string) => `topic-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function BlogPage() {
  const [featured] = POSTS;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Growth tips for businesses in Bangladesh"
        lead="Practical guides on Local SEO, websites, Google Ads and social media, written for business owners."
      />
      <section className="section">
        <div className="container">
          <nav className="chips blog-topics" aria-label="Blog topics">
            {POST_CATEGORIES.map((c) => (
              <a key={c} href={`#${categoryId(c)}`} className="chip-link">
                {c}
                <small>{POSTS.filter((p) => p.category === c).length}</small>
              </a>
            ))}
          </nav>
          <PostCard post={featured} featured />
          {POST_CATEGORIES.map((c) => (
            <div key={c} id={categoryId(c)} className="blog-topic">
              <h2>{c}</h2>
              <div className="posts posts--3">
                {POSTS.filter((p) => p.category === c).map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
