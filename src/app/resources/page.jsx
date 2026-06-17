import { buildMetadata } from "@/lib/seo";
import { ResourcesClient } from "@/components/resources/ResourcesClient";

export const metadata = buildMetadata({
  title: "Resources | Articles, Updates & Community",
  description: "Read TokenCap articles, technical deep dives, release notes, and build-in-public updates about context engineering, code intelligence, and AI-assisted development.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesClient />;
}
