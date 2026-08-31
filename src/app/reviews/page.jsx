import { PageWrapper } from "@/components/layout/PageWrapper";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leave a Review · TokenCap",
  description: "Share your experience with TokenCap in 5 quick questions.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <PageWrapper
      container={false}
      className="min-h-[calc(100dvh-64px)] flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-lg">
        {/* Eyebrow */}
        <div className="mb-10">
          <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-[0.25em]">
            TOKENCAP · REVIEW
          </span>
        </div>

        {/* Form — no card border, form IS the surface */}
        <ReviewForm />
      </div>
    </PageWrapper>
  );
}
