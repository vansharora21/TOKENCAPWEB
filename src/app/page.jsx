import { Hero } from "@/components/home/Hero";
import { ProductPreview } from "@/components/home/ProductPreview";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TokenCap · Codebase Snapshot Tool",
  description: "Stop wasting tokens. TokenCap snapshots your workspace into structured, AI-ready prompts instantly.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageWrapper container={false} className="space-y-0">
      {/* Hero row: Left aligned text + installer + CLI */}
      <div className="py-16 sm:py-20 lg:py-28 border-b border-card-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <Hero />
            </div>
            <div className="lg:col-span-7 w-full">
              <ProductPreview />
            </div>
          </div>
        </div>
      </div>

      {/* Features List Section */}
      <div className="py-12 sm:py-16 border-b border-card-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FeaturesPreview />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 sm:py-16 border-b border-card-border bg-tab-inactive/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <HowItWorks />
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-12 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FinalCTA />
        </div>
      </div>
    </PageWrapper>
  );
}
