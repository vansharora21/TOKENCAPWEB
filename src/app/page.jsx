import { Hero } from "@/components/home/Hero";
import { ProductPreview } from "@/components/home/ProductPreview";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TokenCap",
  description: "Never lose project context again. TokenCap generates AI-ready coding handoff snapshots instantly.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageWrapper container={false} className="space-y-0">
      {/* Hero & Preview Section */}
      <div className="border-b border-white/5 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Hero />
            </div>
            <div className="lg:col-span-7 w-full">
              <ProductPreview />
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <ProblemSection />
        </div>
      </div>

      {/* Features Section */}
      <div className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FeaturesPreview />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <HowItWorks />
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0c]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FinalCTA />
        </div>
      </div>
    </PageWrapper>
  );
}