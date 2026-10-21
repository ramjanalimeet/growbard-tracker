import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PostCard from "@/components/PostCard";
import { CtaBand, PageHero } from "@/components/Sections";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Local SEO & Digital Marketing Tips",
  description:
    "Practical guides on Local SEO, Google Business Profile, websites, Google Ads and social media marketing for local businesses.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Growth tips for local businesses"
        lead="Practical guides on Local SEO, websites, Google Ads and social media, written for business owners."
      />
      <section className="section">
        <div className="container">
          <PostCard post={featured} featured />
          <div className="posts">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
