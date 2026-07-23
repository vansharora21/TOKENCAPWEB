import { buildMetadata } from "@/lib/seo";
import { BenchmarksClient } from "@/components/benchmarks/BenchmarksClient";

export const metadata = buildMetadata({
  title: "v1.6.0 Verified Benchmarks & Cost Reduction",
  description: "Token & Dollar Savings Engine benchmarks demonstrating 12.2× average token reduction (94.3% cost savings) across 15 real-world repository tasks.",
  path: "/benchmarks",
});

export default function BenchmarksPage() {
  return <BenchmarksClient />;
}
