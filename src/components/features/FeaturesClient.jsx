"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CopyButton } from "@/components/shared/CopyButton";

export function FeaturesClient() {
  const [showOlderReleases, setShowOlderReleases] = useState(false);

  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center mb-20">
        <header className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-pre-bg border border-card-border rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono font-medium text-muted uppercase tracking-wider">
              v1.6.0 Engine
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 leading-[1.1] font-display">
            Precision engineered features.
          </h1>
          <p className="text-sm leading-relaxed text-muted max-w-xl">
            TokenCap transforms how you capture, snapshot, and optimize code for LLMs. Built for local-first speed, real-time token savings, multi-host pointers, and self-maintaining MCP intelligence.
          </p>
        </header>
        <div className="relative group overflow-hidden rounded-xl border border-card-border bg-card p-2 shadow-2xl flex items-center justify-center">
          <img 
            src="/images/home/tokencap-features-graphic.png" 
            alt="TokenCap Project Brain & Context Layer Diagram" 
            className="w-full h-auto rounded-lg object-cover border border-card-border/60 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Version History / What's New */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center text-muted">
            <span className="material-symbols-outlined text-base">history</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground tracking-tight font-mono">Version Release Highlights</h2>
            <p className="text-xs text-muted mt-1">Full evolutionary path and changelog items for TokenCap CLI.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* v1.6.0 (OPEN) */}
          <div className="p-8 rounded-xl border border-card-border bg-card/80 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-pre-bg border border-card-border text-foreground/90 px-2.5 py-1 rounded-md text-xs font-mono font-bold text-emerald-400">v1.6.0</span>
                <h3 className="text-lg font-bold text-foreground font-mono">Token & Dollar Savings Engine, Multi-Host Pointers & Verified Benchmarks</h3>
              </div>
              <span className="text-xs text-muted font-mono">July 23, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-muted list-disc list-inside">
              <li><strong>Token & Dollar Savings Engine</strong> — Real-time calculation of token and dollar savings against naive codebase dumps, persisted to <code>.tokencap/savings.json</code> on every build.</li>
              <li><strong>12.2× Token Reduction Benchmark</strong> — Verified 94.3% cost reduction ($2.05 naive vs $0.11 TokenCap per query) across 15 real-world repository tasks using exact <code>js-tiktoken</code> counting.</li>
              <li><strong>Multi-Host Agent Pointers</strong> — Auto-generates non-overwriting pointer files for 7 AI hosts: <code>AGENTS.md</code>, <code>CLAUDE.md</code>, <code>.cursor/rules/tokencap.md</code>, <code>.windsurf/rules/tokencap.md</code>, <code>.clinerules/tokencap.md</code>, <code>.github/copilot-instructions.md</code>, and <code>.kiro/steering/tokencap.md</code>.</li>
              <li><strong>CI-Enforced Zero Network Egress</strong> — Guaranteed 100% offline privacy verified across all source files on every commit with zero telemetry.</li>
              <li><strong>Security & Audit Tools</strong> — Added <code>tokencap scan</code> (entropy & regex secret scanning), <code>tokencap audit</code> (security verification), and <code>tokencap upgrade</code> CLI utilities.</li>
              <li><strong><code>--no-pointers</code> Flag</strong> — Skip multi-host pointer creation when custom configuration management is preferred.</li>
            </ul>
          </div>

          {/* v1.5.0 (OPEN) */}
          <div className="p-8 rounded-xl border border-card-border bg-card/60 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-pre-bg border border-card-border text-foreground/80 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.5.0</span>
                <h3 className="text-lg font-bold text-foreground font-mono">Self-Maintaining MCP Intelligence</h3>
              </div>
              <span className="text-xs text-muted font-mono">July 19, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-muted list-disc list-inside">
              <li><strong>Automatic Initialization</strong> — MCP startup automatically runs <code>tokencap make</code> before tool execution, eliminating manual pre-build steps.</li>
              <li><strong>Live Repository Watcher</strong> — MCP server process maintains a live background watcher for source edits and <code>.tokencap-notes.md</code> updates.</li>
              <li><strong>Universal Host Setup</strong> — <code>tokencap mcp --init</code> supports Claude Code, Cursor, Windsurf, Cline, VS Code, Antigravity, and Codex.</li>
              <li><strong>Explicit Client Selector</strong> — Use <code>tokencap mcp --init --client &lt;host&gt;</code> when workspaces contain multiple AI clients.</li>
              <li><strong>Safer Configuration Merging</strong> — Merges TokenCap definitions safely into existing host configs without replacing unrelated servers.</li>
              <li><strong>Durable Metadata</strong> — Stores detected tech stack in <code>knowledge.json</code> for offline MCP overview rendering.</li>
              <li><strong>Zero-Latency Caching</strong> — In-memory cached tool calls process in 0–2 ms handler duration.</li>
            </ul>
          </div>

          {/* v1.4.0 (OPEN) */}
          <div className="p-8 rounded-xl border border-card-border bg-card/40 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-pre-bg border border-card-border text-foreground/80 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.4.0</span>
                <h3 className="text-lg font-bold text-foreground font-mono">Repository Intelligence Service & Security Hardening</h3>
              </div>
              <span className="text-xs text-muted font-mono">July 15, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-muted list-disc list-inside">
              <li><strong>Repository Intelligence Service</strong> — Query repository intelligence live over local stdio Model Context Protocol (MCP).</li>
              <li><strong>11 Tool Endpoints</strong> — <code>tokencap_overview</code>, <code>tokencap_files</code>, <code>tokencap_search</code>, <code>tokencap_cluster</code>, <code>tokencap_dependencies</code>, <code>tokencap_constitution</code>, <code>tokencap_impact</code>, <code>tokencap_execution</code>, <code>tokencap_verify</code>, <code>tokencap_delta</code>, and <code>tokencap_mcp_status</code>.</li>
              <li><strong>Security Hardening Engine</strong> — Centralized secret redaction guarantees no API keys, tokens, or credentials survive into intelligence outputs.</li>
              <li><strong>Up to 92% Token Savings</strong> — Replaces massive 20,000 token cold-loads with targeted 1,500 token queries on demand.</li>
            </ul>
          </div>

          {/* v1.3.0 (OPEN) */}
          <div className="p-8 rounded-xl border border-card-border bg-card/40 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-pre-bg border border-card-border text-foreground/80 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.3.0</span>
                <h3 className="text-lg font-bold text-foreground font-mono">Incremental Intelligence Engine</h3>
              </div>
              <span className="text-xs text-muted font-mono">July 10, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-muted list-disc list-inside">
              <li><strong>Incremental Intelligence Engine</strong> — <code>tokencap make</code> now rebuilds only what changed. SHA-256 hash comparison, bidirectional dependency BFS, and per-cluster selective rebuilds replace full-scan defaults.</li>
              <li><strong>SHA-256 Hash Cache</strong> — <code>.tokencap/cache/hashes.cache.json</code> stores file hashes with integrity checksum. Corrupted or missing cache triggers automatic full rebuild fallback.</li>
              <li><strong>Impact Analysis</strong> — Changed files are mapped to affected clusters via <code>knowledge.json</code>, propagated to dependent clusters one level deep. If &gt;60% clusters are affected, a full rebuild is triggered instead.</li>
              <li><strong>Selective Rebuild</strong> — Graph patches only dirty nodes and prunes ghost edges. Brain updates only affected clusters. Constitution re-evaluates only impacted rules via <code>getImpactedRules()</code>. Agent files update only sections referencing affected clusters.</li>
              <li><strong>Delta Files</strong> — After every build, <code>.tokencap/delta/</code> writes <code>changed-files.json</code>, <code>affected-clusters.json</code>, <code>dirty-nodes.json</code>, and per-engine delta JSON files. AI agents consume only what changed.</li>
              <li><strong>Versioned Delta History</strong> — <code>.tokencap/delta/history/</code> stores timestamped delta snapshots (last 10 by default) for rollback and audit.</li>
              <li><strong>New CLI Flags</strong> — <code>--full</code> (force full rebuild), <code>--rebuild-brain</code>, <code>--rebuild-constitution</code>, <code>--rebuild-graph</code>, <code>--clean-cache</code>. Default is now incremental.</li>
              <li><strong>Zero-Change Detection</strong> — If nothing changed, <code>tokencap make</code> exits in sub-100ms with no disk writes. "Intelligence is up to date."</li>
            </ul>
          </div>

          {/* DROPDOWN / ACCORDION FOR OLDER RELEASES (v1.2.0 - v0.1.0) */}
          <div className="pt-4">
            <button
              onClick={() => setShowOlderReleases(!showOlderReleases)}
              className="w-full flex items-center justify-between p-5 rounded-xl bg-card border border-card-border hover:border-card-hover text-foreground font-medium transition-all group cursor-pointer"
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-muted">history_toggle_off</span>
                <span className="text-sm font-bold font-mono">Older Release Highlights (v1.2.0 – v0.1.0)</span>
                <span className="text-[10px] font-mono text-muted bg-pre-bg border border-card-border px-2 py-0.5 rounded">12 Previous Versions</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted group-hover:text-foreground">
                <span>{showOlderReleases ? "Collapse" : "Expand"}</span>
                <span className={`material-symbols-outlined text-base transition-transform duration-305 ${showOlderReleases ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </div>
            </button>

            {showOlderReleases && (
              <div className="mt-6 space-y-6 pt-2 transition-all">
                {/* v1.2.0 */}
                <div className="p-8 rounded-xl border border-card-border bg-card/60 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-pre-bg border border-card-border text-foreground/80 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.2.0</span>
                      <h3 className="text-lg font-bold text-foreground font-mono">Repository Constitution</h3>
                    </div>
                    <span className="text-xs text-muted font-mono">June 27, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted list-disc list-inside">
                    <li><strong>Repository Constitution (<code>tokencap constitution</code>)</strong> — Encodes permanent architectural, schema, security, and compliance laws that AI coding agents must never violate.</li>
                    <li><strong>Law Sheets Generation</strong> — Automatically parses codebase constraints into <code>api-contracts.yaml</code>, <code>schema-invariants.yaml</code>, <code>architecture-laws.md</code>, <code>security-boundaries.md</code>, <code>compliance-rules.md</code>, and <code>critical-flows.md</code>.</li>
                    <li><strong>Constitution Score</strong> — Dynamically scores repository health (0-100 index) across Architecture, API Stability, Schema, Security, and Compliance categories.</li>
                    <li><strong>ConstitutionGraph</strong> — Unifies the ruleset into a single internal model, rendering raw JSON/YAML, human-readable markdown summaries, and interactive graph visualizations.</li>
                    <li><strong>Manual Overrides</strong> — Supports custom rule definitions inside a local <code>tokencap.constitution.yaml</code>.</li>
                  </ul>
                </div>

                {/* v1.1.0 */}
                <div className="p-8 rounded-xl border border-card-border bg-card/40 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-pre-bg border border-card-border text-foreground/80 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.1.0</span>
                      <h3 className="text-lg font-bold text-foreground font-mono">Execution Contract</h3>
                    </div>
                    <span className="text-xs text-muted font-mono">June 27, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted list-disc list-inside">
                    <li><strong>Execution Contract (<code>--execution</code>)</strong> — Teaches AI agents <em>how to work</em> with consistent engineering discipline across lifecycle stages.</li>
                    <li><strong>Scope Drift Detection</strong> — Tracks the agent's current workspace objective, scopes, confidence, and drift in real-time under <code>execution-scope.md</code>.</li>
                    <li><strong>Minimal Solution First</strong> — Enforces a strict decision framework before writing new code.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* 1: Token & Dollar Savings Engine */}
        <div className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-all flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-emerald-400">
            <span className="material-symbols-outlined text-sm">savings</span>
          </div>
          <h3 className="text-base font-bold text-foreground font-mono mb-2">Token & Dollar Savings</h3>
          <p className="text-xs leading-relaxed text-muted mb-6 flex-grow">
            Calculate exact token and dollar savings in real-time. Verified 12.2× average reduction (94.3% cost savings) with exact tiktoken counting.
          </p>
          <div className="bg-pre-bg border border-card-border p-3 overflow-hidden font-mono text-[11px] h-[84px] flex flex-col justify-center text-left">
            <div className="text-emerald-400 font-bold">12.2× FEWER TOKENS</div>
            <div className="text-muted/80 mt-0.5">Saved: 97,094 tok ($0.24)</div>
            <div className="text-muted/65 text-[10px]">.tokencap/savings.json</div>
          </div>
        </div>

        {/* 2: Multi-Host Agent Pointers */}
        <div className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-all flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-cyan-400">
            <span className="material-symbols-outlined text-sm">alt_route</span>
          </div>
          <h3 className="text-base font-bold text-foreground font-mono mb-2">Multi-Host Pointers</h3>
          <p className="text-xs leading-relaxed text-muted mb-6 flex-grow">
            Auto-wires non-overwriting pointer files for AGENTS.md, CLAUDE.md, Cursor, Windsurf, Cline, Copilot, and Kiro seamlessly.
          </p>
          <div className="bg-pre-bg border border-card-border p-3 flex flex-col justify-center h-[84px] text-left font-mono text-[10px]">
            <div className="text-foreground font-bold">7 Host Integrations</div>
            <div className="text-muted/80 mt-0.5">AGENTS.md, CLAUDE.md + 5 more</div>
            <div className="text-emerald-400">→ .tokencap/agent/START_HERE.md</div>
          </div>
        </div>

        {/* 3: Local MCP Service */}
        <div className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-all flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-muted">
            <span className="material-symbols-outlined text-sm">hub</span>
          </div>
          <h3 className="text-base font-bold text-foreground font-mono mb-2">Local MCP Service</h3>
          <p className="text-xs leading-relaxed text-muted mb-6 flex-grow">
            Query repository intelligence live over stdio MCP (11 tool endpoints) with automatic startup init and background watching.
          </p>
          <div className="bg-pre-bg border border-card-border p-3 font-mono text-[11px] h-[84px] flex flex-col justify-center text-left">
            <div className="text-muted">$ tokencap mcp --init</div>
            <div className="text-muted/80 mt-1">Status: Active (0-2ms latency)</div>
            <div className="text-foreground font-bold">11 MCP Tool Endpoints</div>
          </div>
        </div>

        {/* 4: Incremental Engine */}
        <div className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-all flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-muted">
            <span className="material-symbols-outlined text-sm">bolt</span>
          </div>
          <h3 className="text-base font-bold text-foreground font-mono mb-2">Incremental Engine</h3>
          <p className="text-xs leading-relaxed text-muted mb-6 flex-grow">
            Analyze once. Update only what changed. Uses SHA-256 caching and dependency walks for sub-100ms updates.
          </p>
          <div className="bg-pre-bg border border-card-border p-3 font-mono text-[11px] h-[84px] flex flex-col justify-center text-left">
            <div className="text-foreground font-bold">⚡ Incremental Build</div>
            <div className="text-muted/80 mt-1">Duration: 74ms</div>
            <div className="text-muted/70">Selective Rebuild: Clean</div>
          </div>
        </div>

        {/* 5: Repository Constitution */}
        <div className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-all flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-muted">
            <span className="material-symbols-outlined text-sm">menu_book</span>
          </div>
          <h3 className="text-base font-bold text-foreground font-mono mb-2">Repository Constitution</h3>
          <p className="text-xs leading-relaxed text-muted mb-6 flex-grow">
            Define permanent guidelines that AI agents must never violate (API contracts, database schema rules, security laws, compliance). Includes health scoring index.
          </p>
          <div className="bg-pre-bg border border-card-border p-3 flex flex-col justify-center h-[84px] font-mono text-[10px] leading-snug text-left">
            <div className="text-foreground font-bold">$ tokencap constitution</div>
            <div className="text-muted/80 mt-1">Constitution Score: 92/100</div>
            <div className="text-muted/70">✔ Inferred 14 API laws</div>
          </div>
        </div>

        {/* 6: Local-first Privacy */}
        <div className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-all flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-muted">
            <span className="material-symbols-outlined text-sm">verified_user</span>
          </div>
          <h3 className="text-base font-bold text-foreground font-mono mb-2">Local-first Privacy</h3>
          <p className="text-xs leading-relaxed text-muted mb-6 flex-grow">
            Your code never leaves your machine. Processing happens entirely on-device for maximum security.
          </p>
          <div className="h-[84px] flex items-center gap-3 border border-card-border rounded-lg bg-pre-bg p-3 justify-center">
            <div className="flex -space-x-1.5">
              <div className="w-7 h-7 rounded-full bg-card border border-card-border flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-muted">home</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-pre-bg border border-card-border flex items-center justify-center">
                <span className="material-symbols-outlined text-foreground text-[10px]">lock</span>
              </div>
            </div>
            <span className="font-mono text-[11px] text-muted">No Cloud Sync</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20">
        <div className="p-12 relative overflow-hidden rounded-xl border border-card-border bg-card/45 text-center group">
          {/* Abstract Wave CTA Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-30 mix-blend-luminosity pointer-events-none transition-opacity duration-500 group-hover:opacity-35"
            style={{ backgroundImage: "url('/cta-bg.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6 relative z-10 font-display">Start capturing context.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="/docs"
              className="bg-pre-bg border border-card-border hover:bg-card-hover text-foreground px-8 py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-95 transition-all text-xs font-mono"
            >
              Get Started Free
            </a>
            <div className="flex items-center gap-3 px-4 py-3 bg-pre-bg rounded-lg border border-card-border font-mono text-xs">
              <span className="text-muted select-none">$</span>
              <span className="text-foreground/90">npm install -g tokencap</span>
              <CopyButton text="npm install -g tokencap" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
