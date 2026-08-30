import Link from "next/link";

const RATING_COLORS = {
  "Very Good": "text-emerald-400",
  Good: "text-sky-400",
  Okay: "text-amber-400",
  "Needs Improvement": "text-red-400",
};

async function ReviewsMarquee() {
  let reviews = [];

  try {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(`${base}/api/reviews`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) reviews = await res.json();
  } catch {
    reviews = [];
  }

  // Filter to reviews that have a suggestion to show
  const withSuggestions = reviews.filter((r) => r.suggestion);

  if (withSuggestions.length === 0) {
    return (
      <div className="border-y border-card-border py-3 px-6 flex items-center justify-center gap-3">
        <span className="text-[11px] font-mono text-muted tracking-wide">Enjoying TokenCap?</span>
        <a
          href="/reviews"
          className="text-[11px] font-mono text-foreground hover:text-muted transition-colors"
        >
          Leave a review →
        </a>
      </div>
    );
  }

  // Duplicate for seamless loop
  const items = [...withSuggestions, ...withSuggestions];

  return (
    <div className="border-y border-card-border bg-card/40 py-4 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-card/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-card/80 to-transparent pointer-events-none" />

      <div
        className="flex gap-8 animate-marquee whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {items.map((review, i) => {
          const ratingOrder = ["Very Good", "Good", "Okay", "Needs Improvement"];
          const answers = [review.q1, review.q2, review.q3, review.q4, review.q5].filter(Boolean);
          const topRating = answers.sort(
            (a, b) => ratingOrder.indexOf(a) - ratingOrder.indexOf(b)
          )[0];
          const ratingColor = topRating ? RATING_COLORS[topRating] : "text-muted";

          return (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <div className="w-6 h-6 rounded-full bg-zinc-800 border border-card-border flex items-center justify-center text-[9px] font-bold text-foreground font-mono">
                {review.name ? review.name[0].toUpperCase() : "?"}
              </div>
              <span className={`text-xs font-mono font-semibold ${ratingColor}`}>
                {topRating || "—"}
              </span>
              <span className="text-xs text-muted max-w-xs truncate">
                &ldquo;{review.suggestion}&rdquo;
              </span>
              <span className="text-xs text-muted/40 font-mono">— {review.name}</span>
              <span className="text-card-border mx-2">·</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export { ReviewsMarquee };
