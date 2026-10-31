import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Release notes and write-ups from building TokenCap: what shipped, how it works and how we measure it.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-24 pt-10 text-repo-ink sm:px-8 lg:pt-16">
      <header>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg leading-relaxed text-repo-muted">Release notes and write-ups from building TokenCap.</p>
      </header>

      <ol className="mt-12">
        {blogPosts.map((post) => (
          <li key={post.id} className="border-t border-repo-ink/10">
            <Link
              href={`/blog/${post.id}`}
              className="group block py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-repo-ink"
            >
              <p className="text-sm text-repo-muted">
                <time>{post.date}</time> · {post.category} · {post.readTime}
              </p>
              <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.015em] group-hover:underline group-hover:decoration-repo-muted/50 group-hover:underline-offset-4">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-2 leading-relaxed text-repo-muted">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
