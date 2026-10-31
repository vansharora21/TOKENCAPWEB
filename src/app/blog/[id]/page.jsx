import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog";
import { Markdown } from "@/components/docs-ui/Markdown";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.id}` });
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const index = blogPosts.findIndex((p) => p.id === id);
  if (index === -1) notFound();
  const post = blogPosts[index];
  // Posts are newest first, so the next index is the older post.
  const older = blogPosts[index + 1];
  const newer = blogPosts[index - 1];

  return (
    <main className="mx-auto w-full max-w-2xl px-4 pb-24 pt-10 text-repo-ink sm:px-8 lg:pt-16">
      <Link href="/blog" className="text-sm text-repo-muted hover:text-repo-ink focus-visible:outline-2 focus-visible:outline-repo-ink">
        ← All posts
      </Link>
      <article className="mt-8">
        <p className="text-sm text-repo-muted">
          <time>{post.date}</time> · {post.category} · {post.readTime}
        </p>
        <h1 className="mt-2 text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] md:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-repo-muted">By {post.author}</p>
        <Markdown source={post.content} className="mt-10 text-[17px] leading-relaxed text-repo-ink/90" />
      </article>

      <nav aria-label="More posts" className="mt-16 grid gap-4 border-t border-repo-ink/10 pt-6 sm:grid-cols-2">
        {newer && (
          <Link href={`/blog/${newer.id}`} className="block focus-visible:outline-2 focus-visible:outline-repo-ink">
            <span className="text-sm text-repo-muted">Newer</span>
            <span className="mt-1 block font-medium">{newer.title}</span>
          </Link>
        )}
        {older && (
          <Link href={`/blog/${older.id}`} className="block sm:col-start-2 sm:text-right focus-visible:outline-2 focus-visible:outline-repo-ink">
            <span className="text-sm text-repo-muted">Older</span>
            <span className="mt-1 block font-medium">{older.title}</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
