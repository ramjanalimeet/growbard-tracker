import Link from "next/link";
import Icon from "@/components/Icon";
import { formatDate, type Post } from "@/lib/posts";

export default function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`card post-card${featured ? " post-card--featured" : ""}`}>
      <span className="post-card__cover" aria-hidden="true">
        <Icon name={post.icon} size={featured ? 72 : 48} />
      </span>
      <span className="post-card__body">
        <span className="post-card__meta">
          <span className="chip">{post.category}</span>
          <span>{post.readMinutes} min read</span>
        </span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="post-card__foot">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="post-card__more">
            Read article <Icon name="arrow" size={16} />
          </span>
        </span>
      </span>
    </Link>
  );
}
