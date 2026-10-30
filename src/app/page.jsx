import { RepoModelHero } from "@/components/repo-model/RepoModelHero";
import { ProofSection } from "@/components/home/ProofSection";
import { HostsSection } from "@/components/home/HostsSection";
import { LocalSection } from "@/components/home/LocalSection";
import { SetupSection } from "@/components/home/SetupSection";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TokenCap · Codebase Snapshot Tool",
  description: "TokenCap maps every file and import in your repo, locally, then packs only what an AI coding task needs.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageWrapper container={false} className="space-y-0">
      <RepoModelHero />
      <ProofSection />
      <HostsSection />
      <LocalSection />
      <SetupSection />
    </PageWrapper>
  );
}
