import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChangelogList } from "@/components/changelog/ChangelogList";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Changelog",
  description: "Track the evolution of TokenCap from a token-budgeted context generator to a complete AI Project Intelligence Platform.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <PageWrapper className="space-y-8 py-12 sm:py-16 lg:py-20">
      <SectionHeading 
        eyebrow="Release History" 
        title="Evolution of Context" 
        description="Track the evolution of TokenCap from a token-budgeted context generator to a complete AI Project Intelligence Platform." 
      />
      <ChangelogList />
    </PageWrapper>
  );
}