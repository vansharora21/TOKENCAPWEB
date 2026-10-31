import { buildMetadata } from "@/lib/seo";
import { docsGroups, docsTopics } from "@/data/docsTopics";
import { DocsShell } from "@/components/docs-ui/DocsShell";
import { DocsTopic } from "@/components/docs-ui/DocsSection";

export const metadata = buildMetadata({
  title: "Documentation",
  description: "Install TokenCap, index your repo and give your AI tool task-scoped context. Short guides with copyable commands.",
  path: "/docs",
});

const groups = docsGroups.map((g) => ({
  label: g.label,
  items: docsTopics
    .filter((t) => t.group === g.id)
    .map((t) => ({ id: t.slug, label: t.title, aliases: t.aliases, keywords: `${t.summary} ${t.aliases.join(" ")}` })),
}));
// Slides follow the sidebar order.
const ordered = docsGroups.flatMap((g) => docsTopics.filter((t) => t.group === g.id));

export default function DocsPage() {
  return (
    <DocsShell
      eyebrow="Docs for v3.1.0"
      title="Documentation"
      intro="One topic at a time. Pick a task, copy the command, then use the arrows or swipe for the next topic."
      groups={groups}
    >
      {ordered.map((topic) => <DocsTopic key={topic.slug} topic={topic} />)}
    </DocsShell>
  );
}
