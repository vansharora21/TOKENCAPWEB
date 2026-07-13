import { Hero } from "@/components/home/Hero";
import { ProductPreview } from "@/components/home/ProductPreview";
import { DriftScene } from "@/components/home/DriftScene";
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
      {/* Hero: Text + 3D Drift Scene */}
      <div className="border-b border-white/5 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Hero />
            </div>
            <div className="lg:col-span-7 w-full">
              <DriftScene />
            </div>
          </div>
        </div>
      </div>

      {/* CLI Terminal Demo */}
      <div className="border-b border-white/5 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-vorcas anim-heading-reveal">
              See it in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 anim-heading-gradient">
                action.
              </span>
            </h2>
            <p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto">
              Six commands. One terminal. Full project intelligence.
            </p>
          </div>
          <ProductPreview />
        </div>
      </div>

      {/* Features Section */}
      <div className="border-b border-white/5 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FeaturesPreview />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="border-b border-white/5 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <HowItWorks />
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-10 sm:py-14 lg:py-16 bg-[#0a0a0c]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FinalCTA />
        </div>
      </div>
    </PageWrapper>
  );
}
