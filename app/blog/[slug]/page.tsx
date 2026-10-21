import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PostCard from "@/components/PostCard";
import JsonLd from "@/components/JsonLd";
import { formatDate, getPost, POSTS } from "@/lib/posts";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date } };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, logo: `${SITE.url}/logo.png` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbLd([{ label: "Blog", href: "/blog" }, { label: post.title }]),
        ]}
      />
      <article>
        <header className="page-hero post-hero">
          <div className="container page-hero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{post.category}</span>
            </nav>
            <h1>{post.title}</h1>
            <p className="post-hero__meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>By {SITE.name}</span>
            </p>
          </div>
        </header>

        <div className="section">
          <div className="container post-layout">
            <div className="prose">
              <p className="prose__lead">{post.excerpt}</p>
              {post.body.map((block, i) =>
                "h2" in block ? (
                  <h2 key={i}>{block.h2}</h2>
                ) : "ul" in block ? (
                  <ul key={i} className="checklist">
                    {block.ul.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={16} /> {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{block.p}</p>
                ),
              )}
            </div>

            <aside className="post-aside">
              <div className="card post-cta">
                <span className="post-cta__icon">
                  <Icon name={post.icon} size={26} />
                </span>
                <h3>Want help with {post.category}?</h3>
                <p>Tell us about your business and we&apos;ll send you a free growth plan.</p>
                <a
                  href={SITE.whatsappHref}
                  className="btn btn--whatsapp btn--block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} /> Chat on WhatsApp
                </a>
                <a href={SITE.phoneHref} className="btn btn--white btn--block">
                  <Icon name="phone" size={16} /> Call {SITE.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Keep Reading</p>
            <h2>More from the blog</h2>
          </div>
          <div className="posts posts--3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
