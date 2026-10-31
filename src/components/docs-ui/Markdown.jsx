import Link from "next/link";
import { CopyButton } from "@/components/shared/CopyButton";

// A small Markdown renderer for docs topics and blog posts, styled with the
// site theme tokens: headings, paragraphs, lists, simple tables, fenced code,
// inline code, bold and links. Anything richer belongs in a component.

const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function Inline({ text }) {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i} className="rounded bg-repo-ink/[0.07] px-1 py-px font-mono text-[0.9em]">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-repo-ink">{part.slice(2, -2)}</strong>;
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      const cls = "underline decoration-repo-muted/50 underline-offset-4 hover:decoration-repo-ink";
      return href.startsWith("/") || href.startsWith("#")
        ? <Link key={i} href={href} className={cls}>{label}</Link>
        : <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
    }
    return part;
  });
}

function parseBlocks(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    const fence = /^```(\w*)/.exec(line);
    if (fence) {
      const body = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) body.push(lines[i++]);
      blocks.push({ type: "code", lang: fence[1], text: body.join("\n") });
      i += 1;
      continue;
    }
    const heading = /^(#{2,4})\s+(.*)$/.exec(line);
    if (heading) { blocks.push({ type: "heading", level: heading[1].length, text: heading[2] }); i += 1; continue; }
    if (/^\s*\|/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = (r) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const body = rows.filter((r) => !/^\s*\|[\s:|-]+\|\s*$/.test(r)).map(cells);
      blocks.push({ type: "table", head: body[0], rows: body.slice(1) });
      continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, ""));
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(```|#{2,4}\s|\s*\||\s*([-*]|\d+\.)\s)/.test(lines[i])) para.push(lines[i++].trim());
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

export function CodeBlock({ text, lang }) {
  return (
    <div className="group relative my-4 rounded-lg bg-repo-panel ring-1 ring-repo-ink/10">
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[13px] leading-relaxed text-repo-ink" tabIndex={0} aria-label={lang ? `${lang} code` : "Code"}>
        {text}
      </pre>
      <CopyButton text={text} className="absolute right-2 top-2" />
    </div>
  );
}

export function Markdown({ source, className }) {
  return (
    <div className={className}>
      {parseBlocks(source).map((b, i) => {
        if (b.type === "code") return <CodeBlock key={i} text={b.text} lang={b.lang} />;
        if (b.type === "heading") {
          const H = b.level === 2 ? "h3" : "h4";
          return <H key={i} className="mb-2 mt-7 text-lg font-semibold tracking-[-0.01em] text-repo-ink"><Inline text={b.text} /></H>;
        }
        if (b.type === "list") {
          const L = b.ordered ? "ol" : "ul";
          return (
            <L key={i} className={b.ordered ? "my-3 list-decimal space-y-1.5 pl-5" : "my-3 list-disc space-y-1.5 pl-5"}>
              {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
            </L>
          );
        }
        if (b.type === "table") {
          return (
            <div key={i} className="my-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead><tr>{b.head.map((h, j) => <th key={j} scope="col" className="border-b border-repo-ink/15 py-2 pr-4 font-medium text-repo-ink"><Inline text={h} /></th>)}</tr></thead>
                <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k} className="border-b border-repo-ink/10 py-2 pr-4"><Inline text={c} /></td>)}</tr>)}</tbody>
              </table>
            </div>
          );
        }
        return <p key={i} className="my-3"><Inline text={b.text} /></p>;
      })}
    </div>
  );
}
