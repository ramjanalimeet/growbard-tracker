import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/PostCard";
import RichText, { plainText } from "@/components/RichText";
import { FaqSection } from "@/components/Sections";
import { formatDate, getPost, POSTS } from "@/lib/posts";
import { absoluteUrl, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
  return {
    ...meta,
    keywords: [post.keyword],
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const headings = post.body.flatMap((b) => ("h2" in b ? [b.h2] : []));
  const service = SERVICES.find((s) => s.title === post.category);
  const related = POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    keywords: post.keyword,
    datePublished: post.date,
    dateModified: post.date,
    image: absoluteUrl("/opengraph-image"),
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <JsonLd data={[articleLd, breadcrumbLd([{ label: "Blog", href: "/blog" }, { label: post.title }])]} />
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
              {post.body.map((block, i) =>
                "h2" in block ? (
                  <h2 key={i} id={slugify(block.h2)}>
                    {block.h2}
                  </h2>
                ) : "h3" in block ? (
                  <h3 key={i}>{block.h3}</h3>
                ) : "ul" in block ? (
                  <ul key={i} className="checklist">
                    {block.ul.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={16} />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : "ol" in block ? (
                  <ol key={i} className="steps">
                    {block.ol.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p key={i}>
                    <RichText text={block.p} />
                  </p>
                ),
              )}

              <div className="post-end-cta">
                <h2>Ready to get more customers?</h2>
                <p>
                  Tell us about your business and we&apos;ll send you a free growth plan
                  {service ? (
                    <>
                      , or read more about our <Link href={`/services/${service.id}`}>{service.title} service</Link>
                    </>
                  ) : null}
                  .
                </p>
                <div className="split__actions">
                  <a href={SITE.whatsappHref} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={18} /> Chat on WhatsApp
                  </a>
                  <Link href="/pricing" className="btn btn--white">
                    See pricing
                  </Link>
                </div>
              </div>
            </div>

            <aside className="post-aside">
              {headings.length > 2 && (
                <nav className="card post-toc" aria-label="Table of contents">
                  <strong>In this article</strong>
                  <ol>
                    {headings.map((h) => (
                      <li key={h}>
                        <a href={`#${slugify(h)}`}>{h}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div className="card post-cta">
                <span className="post-cta__icon">
                  <Icon name={post.icon} size={26} />
                </span>
                <h3>{service ? `Need help with ${service.title}?` : "Want more leads?"}</h3>
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

      {post.faqs && post.faqs.length > 0 && (
        <FaqSection items={post.faqs.map((f) => ({ q: f.q, a: plainText(f.a) }))} title="Frequently asked questions" />
      )}

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
