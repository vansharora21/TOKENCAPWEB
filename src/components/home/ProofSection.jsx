import Link from "next/link";
import { benchmarkOverview } from "@/data/benchmarks";
import { proofSection } from "@/data/homeSections";

const { aggregates, totalTasks, totalRepos } = benchmarkOverview;

// One figure, one sentence of evidence, one link. The full table lives on /benchmarks.
export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="bg-repo-ground py-24 text-repo-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <h2 id="proof-title" className="text-[clamp(4.5rem,18vw,11rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
          {aggregates.medianSaving}
          <span className="sr-only"> {proofSection.figureLabel}</span>
        </h2>
        <p className="mt-6 max-w-[40ch] text-xl leading-snug tracking-[-0.01em] md:text-2xl" aria-hidden="true">
          {proofSection.figureLabel}
        </p>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-repo-muted">
          {`Median over ${totalTasks} real commits in ${totalRepos} open-source repos. ${aggregates.neededFiles} of the files each commit changed were in the pack.`}
        </p>
        <Link
          href={proofSection.linkHref}
          className="mt-8 inline-block rounded text-sm font-medium underline decoration-repo-muted/50 underline-offset-[5px] hover:decoration-repo-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-repo-ink"
        >
          {proofSection.linkLabel}
        </Link>
      </div>
    </section>
  );
}
