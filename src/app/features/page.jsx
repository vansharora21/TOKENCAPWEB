import { buildMetadata } from "@/lib/seo";
import { FeaturesClient } from "@/components/features/FeaturesClient";

export const metadata = buildMetadata({
  title: "Features & Release Highlights",
  description: "Discover TokenCap features: Self-Maintaining MCP Intelligence, Incremental Engine, Repository Constitution, Git-aware snapshots, and Local-first security.",
  path: "/features",
});

export default function FeaturesPage() {
  return <FeaturesClient />;
}