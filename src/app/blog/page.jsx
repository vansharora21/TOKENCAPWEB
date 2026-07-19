import { buildMetadata } from "@/lib/seo";
import { ResourcesClient } from "@/components/resources/ResourcesClient";

export const metadata = buildMetadata({
  title: "Blog & Articles",
  description: "Read TokenCap articles, DEV.to technical posts, release announcements, and build-in-public updates about context engineering and MCP.",
  path: "/blog",
});

export default function BlogPage() {
  return <ResourcesClient />;
}
