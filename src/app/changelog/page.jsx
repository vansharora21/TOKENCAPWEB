import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChangelogList } from "@/components/changelog/ChangelogList";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Changelog",
  description: "TokenCap release history and intelligence layer updates.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <PageWrapper className="space-y-12 py-12 sm:py-16 lg:py-20">
      <SectionHeading eyebrow="Changelog" title="Release history." description="Every release note comes directly from the website content bundle." />
      <ChangelogList />
    </PageWrapper>
  );
}