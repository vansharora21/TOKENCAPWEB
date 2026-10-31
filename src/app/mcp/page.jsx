import { buildMetadata } from "@/lib/seo";
import { docsTopics, mcpTools } from "@/data/docsTopics";
import { DocsShell } from "@/components/docs-ui/DocsShell";
import { DocsSection, DocsTopic } from "@/components/docs-ui/DocsSection";

export const metadata = buildMetadata({
  title: "MCP setup",
  description: "Connect Claude Code, Cursor, VS Code, Codex and other AI tools to TokenCap over MCP, and see every tool it exposes.",
  path: "/mcp",
});

const setup = docsTopics.find((t) => t.slug === "ai-tools-mcp");

const groups = [
  {
    label: "MCP",
    items: [
      { id: setup.slug, label: "Connect your AI tool" },
      { id: "mcp-tools", label: `Tools (${mcpTools.length})`, keywords: mcpTools.map((t) => t.name).join(" ") },
    ],
  },
];

export default function McpPage() {
  return (
    <DocsShell
      eyebrow="Connect"
      title="MCP"
      intro="Point your AI tool at TokenCap once. After that the agent asks the local server for context instead of reading the whole repo."
      groups={groups}
    >
      <DocsTopic topic={{ ...setup, title: "Connect your AI tool" }} />

      <DocsSection id="mcp-tools" title="Tools" summary={`The ${mcpTools.length} tools the server exposes. Your AI tool picks them; you rarely call them by hand.`}>
        <dl className="mt-6 grid grid-cols-1 gap-x-6 text-sm sm:grid-cols-[auto_1fr]">
          {mcpTools.map((t) => (
            <div key={t.name} className="contents">
              <dt className="border-t border-repo-ink/10 pt-2.5 font-mono text-[13px]">{t.name}</dt>
              <dd className="pb-2.5 text-repo-muted sm:border-t sm:border-repo-ink/10 sm:pt-2.5">{t.text}</dd>
            </div>
          ))}
        </dl>
      </DocsSection>
    </DocsShell>
  );
}
