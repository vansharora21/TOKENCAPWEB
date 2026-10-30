import { buildMetadata } from "@/lib/seo";
import { BenchmarksClient } from "@/components/benchmarks/BenchmarksClient";

export const metadata = buildMetadata({
  title: "Task Pack Benchmark: 100 Real Commits",
  description: "TokenCap task packs measured on 100 real commits from nine open-source repositories: the needed files are present 88% of the time at a median 18.7× fewer tokens than a keyword grep.",
  path: "/benchmarks",
});

export default function BenchmarksPage() {
  return <BenchmarksClient />;
}
