import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RoadmapList } from "@/components/roadmap/RoadmapList";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roadmap",
  description: "Planned TokenCap features and future versions.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <PageWrapper className="space-y-12 py-12 sm:py-16 lg:py-20">
      <SectionHeading eyebrow="Roadmap" title="Planned features and versions." description="The content is wired from the website data bundle so future updates stay centralized." />
      <RoadmapList />
    </PageWrapper>
  );
}