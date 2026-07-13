import React, { useMemo } from "react";
import { CopyButton } from "@/components/shared/CopyButton";

// Regex compiled once outside the component
const INLINE_REGEX = /(`[^`]+`|\*\*[^*]+\*\*)/g;

function parseInline(text) {
  const tokens = text.split(INLINE_REGEX);
  return tokens.map((token, i) => {
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code key={i} className="bg-black/50 text-[#d2bbff] px-1.5 py-0.5 rounded font-mono text-[11px] mx-0.5">
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-bold">
          {token.slice(2, -2)}
        </strong>
      );
    }
    return token;
  });
}

function renderCodeBlock(block, blockIndex) {
  return (
    <div key={blockIndex} className="my-6 rounded-lg overflow-hidden border border-[#4a4455]/30 bg-[#0e0e10]">
      <div className="terminal-header h-8 flex items-center px-4 justify-between">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#353437]" />
          <div className="w-2 h-2 rounded-full bg-[#353437]" />
          <div className="w-2 h-2 rounded-full bg-[#353437]" />
        </div>
        <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">{block.lang}</span>
        <CopyButton text={block.content} />
      </div>
      <pre className="p-4 font-mono text-[13px] bg-[#09090b] text-[#4edea3] overflow-x-auto leading-relaxed" tabIndex={0} role="region" aria-label={`Code block: ${block.lang || "code"}`}>
        <code>{block.content}</code>
      </pre>
    </div>
  );
}

function renderTable(rows, blockIndex) {
  const dataRows = rows.filter((row) => !row.includes("---"));
  if (dataRows.length === 0) return null;

  const headers = dataRows[0].split("|").map((cell) => cell.trim()).filter(Boolean);
  const bodyRows = dataRows.slice(1).map((row) =>
    row.split("|").map((cell) => cell.trim()).filter(Boolean)
  );

  return (
    <div key={blockIndex} className="overflow-x-auto my-6 border border-[#4a4455]/20 rounded-xl bg-[#0e0e10]/30">
      <table className="w-full text-left border-collapse">
        <caption className="sr-only">Documentation table</caption>
        <thead className="bg-[#2a2a2c]/60">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#4a4455]/10 font-sans text-sm text-[#ccc3d8]">
          {bodyRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-[#2a2a2c]/30 transition-colors">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-3">
                  {parseInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MarkdownRenderer({ content }) {
  // Memoize the entire parse result
  const groupedBlocks = useMemo(() => {
    const blocks = [];
    const lines = content.split("\n");
    let inCodeBlock = false;
    let codeLines = [];
    let codeLang = "";
    let inTable = false;
    let tableRows = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code block check
      if (line.trim().startsWith("```")) {
        if (inCodeBlock) {
          blocks.push({ type: "code", lang: codeLang, content: codeLines.join("\n") });
          inCodeBlock = false;
          codeLines = [];
        } else {
          inCodeBlock = true;
          codeLang = line.trim().slice(3) || "bash";
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // Table check
      if (line.trim().startsWith("|")) {
        inTable = true;
        tableRows.push(line);
        continue;
      } else if (inTable) {
        blocks.push({ type: "table", rows: tableRows });
        inTable = false;
        tableRows = [];
      }

      // Headings — correct hierarchy: # → h1, ## → h2, ### → h3
      if (line.startsWith("### ")) {
        blocks.push({ type: "h3", content: line.slice(4) });
        continue;
      }
      if (line.startsWith("## ")) {
        blocks.push({ type: "h2", content: line.slice(3) });
        continue;
      }
      if (line.startsWith("# ")) {
        blocks.push({ type: "h1", content: line.slice(2) });
        continue;
      }

      // Bullet lists
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        blocks.push({ type: "li", content: line.trim().slice(2) });
        continue;
      }

      // Paragraph
      if (line.trim()) {
        blocks.push({ type: "p", content: line });
      }
    }

    // Flush remaining unclosed code block
    if (inCodeBlock && codeLines.length > 0) {
      blocks.push({ type: "code", lang: codeLang, content: codeLines.join("\n") });
    }

    // Flush remaining table
    if (inTable && tableRows.length > 0) {
      blocks.push({ type: "table", rows: tableRows });
    }

    // Group consecutive list items
    const grouped = [];
    let currentList = [];

    blocks.forEach((block) => {
      if (block.type === "li") {
        currentList.push(block.content);
      } else {
        if (currentList.length > 0) {
          grouped.push({ type: "ul", items: currentList });
          currentList = [];
        }
        grouped.push(block);
      }
    });

    if (currentList.length > 0) {
      grouped.push({ type: "ul", items: currentList });
    }

    return grouped;
  }, [content]);

  return (
    <>
      {groupedBlocks.map((block, i) => {
        switch (block.type) {
          case "h1":
            return (
              <h1 key={i} className="text-3xl font-bold text-white mt-10 mb-5">
                {parseInline(block.content)}
              </h1>
            );
          case "h2":
            return (
              <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
                {parseInline(block.content)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-xl font-bold text-white mt-6 mb-3">
                {parseInline(block.content)}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
                {parseInline(block.content)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc list-inside space-y-2 mb-4 pl-2 text-sm text-[#ccc3d8]">
                {block.items.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {parseInline(item)}
                  </li>
                ))}
              </ul>
            );
          case "code":
            return renderCodeBlock(block, i);
          case "table":
            return renderTable(block.rows, i);
          default:
            return null;
        }
      })}
    </>
  );
}
