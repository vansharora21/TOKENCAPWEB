const RATING_LABEL = {
  "Very Good": "VG",
  Good: "GD",
  Okay: "OK",
  "Needs Improvement": "NI",
};

function ReviewCard({ review }) {
  const initials = review.name
    ? review.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  const answers = [
    { label: "Install",    val: review.q1 },
    { label: "Context",    val: review.q2 },
    { label: "Accuracy",   val: review.q3 },
    { label: "Docs",       val: review.q4 },
    { label: "Recommend",  val: review.q5 },
  ].filter((r) => r.val);

  return (
    <article className="border border-card-border bg-card p-5 flex flex-col gap-4 hover:border-card-hover transition-colors">
      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-card-border">
        <div className="w-7 h-7 bg-pre-bg border border-card-border flex items-center justify-center text-[10px] font-mono font-bold text-foreground shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{review.name}</p>
          {review.role && (
            <p className="text-[11px] text-muted truncate">{review.role}</p>
          )}
        </div>
      </div>

      {/* Ratings table */}
      <div className="space-y-1 font-mono text-[10px]">
        {answers.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-2">
            <span className="text-muted">{r.label}</span>
            <span className="text-foreground/60 border border-card-border px-1.5 py-px text-[9px]">
              {RATING_LABEL[r.val] || r.val}
            </span>
          </div>
        ))}
      </div>

      {/* Suggestion */}
      {review.suggestion && (
        <div className="border-t border-card-border pt-3">
          <p className="text-sm text-muted leading-relaxed">
            &ldquo;{review.suggestion}&rdquo;
          </p>
        </div>
      )}
    </article>
  );
}

export { ReviewCard };
