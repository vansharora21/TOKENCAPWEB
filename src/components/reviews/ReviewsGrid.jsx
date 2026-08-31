import { ReviewCard } from "./ReviewCard";
import Link from "next/link";

async function ReviewsGrid() {
  let reviews = [];

  try {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(`${base}/api/reviews`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) reviews = data;
    }
  } catch {
    reviews = [];
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            From the community
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            What developers say
          </h2>
        </div>
        <Link
          href="/reviews"
          className="text-xs font-mono text-muted hover:text-foreground transition-colors border border-card-border px-3 py-1.5 rounded-md hover:bg-card"
        >
          Leave a review →
        </Link>
      </div>

      {reviews.length === 0 ? (
        <div className="rounded-xl border border-dashed border-card-border p-10 text-center space-y-3">
          <p className="text-sm text-muted">No reviews yet — be the first.</p>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-lg border border-card-border bg-card hover:bg-tab-inactive transition-colors text-foreground"
          >
            <span className="material-symbols-outlined text-[14px]">rate_review</span>
            Share your experience
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}

export { ReviewsGrid };
