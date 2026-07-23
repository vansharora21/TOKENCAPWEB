import { buildMetadata } from "@/lib/seo";
import { FeaturesClient } from "@/components/features/FeaturesClient";

export const metadata = buildMetadata({
  title: "Features & Release Highlights",
  description: "Discover TokenCap features: Token & Dollar Savings Engine, Multi-Host Pointers, Self-Maintaining MCP Intelligence, Incremental Engine, Repository Constitution, and Zero-Egress Privacy.",
  path: "/features",
});

export default function FeaturesPage() {
  return <FeaturesClient />;
}