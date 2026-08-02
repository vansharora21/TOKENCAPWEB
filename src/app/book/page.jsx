import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Call",
  description: "Schedule a 15-minute call with Vansh Arora to discuss TokenCap features, custom integrations, or partnerships.",
  path: "/book",
});

export default function BookPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-5xl mx-auto px-6 font-sans">
      {/* Page Header */}
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <span className="font-mono text-[10px] font-medium text-muted uppercase tracking-widest block">
          Scheduler
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-display uppercase">
          Book a Call
        </h1>
        <p className="text-sm leading-relaxed text-muted max-w-md">
          Have questions about TokenCap? Schedule a 15-minute call with Vansh Arora to discuss custom integrations, feedback, or collaborations.
        </p>
      </div>

      {/* Cal.com Embed Container */}
      <div className="relative w-full rounded-xl border border-card-border bg-card/45 overflow-hidden shadow-2xl h-[700px] hover:border-card-hover transition-all duration-300">
        <iframe
          src="https://cal.com/vansh-arora-0821/15min?theme=dark"
          width="100%"
          height="100%"
          frameBorder="0"
          className="w-full h-full border-0 bg-transparent"
          allowFullScreen
        ></iframe>
      </div>
    </PageWrapper>
  );
}
