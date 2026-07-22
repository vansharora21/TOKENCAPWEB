import { Badge } from "@/components/shared/Badge";

function FeatureCard({ feature }) {
  return (
    <article className="rounded-2xl border border-card-border bg-card p-6">
      <Badge className="mb-4">{feature.accent}</Badge>
      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
    </article>
  );
}

export { FeatureCard };