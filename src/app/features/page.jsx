"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CopyButton } from "@/components/shared/CopyButton";

export default function FeaturesPage() {
  const [showOlderReleases, setShowOlderReleases] = useState(false);

  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center mb-20">
        <header className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#d2bbff]/10 border border-[#d2bbff]/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00a572] animate-pulse"></span>
            <span className="text-[11px] font-mono font-medium text-[#d2bbff] uppercase tracking-wider">
              v1.5.0 Engine
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4 leading-[1.1] font-nerdropol">
            Precision engineered features.
          </h1>
          <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-xl">
            TokenCap transforms how you capture, snapshot, and optimize code for LLMs. Built for local-first speed, self-maintaining MCP intelligence, and developer ergonomics.
          </p>
        </header>
        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e11] p-2 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/10 via-transparent to-[#4edea3]/10 opacity-60 pointer-events-none"></div>
          <img 
            src="/images/home/tokencap-features-graphic.png" 
            alt="TokenCap Project Brain & Context Layer Diagram" 
            className="w-full h-auto rounded-xl object-cover border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Version History / What's New */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff]">
            <span className="material-symbols-outlined text-base">history</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white leading-tight font-vorcas">Version Release Highlights</h2>
            <p className="text-xs text-[#ccc3d8]/60 mt-1">Full evolutionary path and changelog items for TokenCap CLI.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* v1.5.0 (OPEN) */}
          <div className="glass-card p-8 rounded-xl border-[#7c3aed]/40 bg-[#7c3aed]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/20 rounded-full blur-2xl"></div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.5.0</span>
                <h3 className="text-xl font-bold text-white">Self-Maintaining MCP Intelligence</h3>
              </div>
              <span className="text-xs text-zinc-400 font-mono">July 19, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
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
          <div className="glass-card p-8 rounded-xl border-[#7c3aed]/30 bg-[#7c3aed]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/10 rounded-full blur-xl"></div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#7c3aed]/80 text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.4.0</span>
                <h3 className="text-xl font-bold text-white">Repository Intelligence Service & Security Hardening</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">July 15, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Repository Intelligence Service</strong> — Query repository intelligence live over local stdio Model Context Protocol (MCP).</li>
              <li><strong>11 Tool Endpoints</strong> — <code>tokencap_overview</code>, <code>tokencap_files</code>, <code>tokencap_search</code>, <code>tokencap_cluster</code>, <code>tokencap_dependencies</code>, <code>tokencap_constitution</code>, <code>tokencap_impact</code>, <code>tokencap_execution</code>, <code>tokencap_verify</code>, <code>tokencap_delta</code>, and <code>tokencap_mcp_status</code>.</li>
              <li><strong>Security Hardening Engine</strong> — Centralized secret redaction guarantees no API keys, tokens, or credentials survive into intelligence outputs.</li>
              <li><strong>Up to 92% Token Savings</strong> — Replaces massive 20,000 token cold-loads with targeted 1,500 token queries on demand.</li>
            </ul>
          </div>

          {/* v1.3.0 (OPEN) */}
          <div className="glass-card p-8 rounded-xl border-[#7c3aed]/20 bg-[#7c3aed]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/10 rounded-full blur-xl"></div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#7c3aed]/60 text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.3.0</span>
                <h3 className="text-xl font-bold text-white">Incremental Intelligence Engine</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">July 10, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
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
              className="w-full flex items-center justify-between p-5 rounded-xl bg-[#121215] border border-[#4a4455]/40 hover:border-[#7c3aed]/50 text-white font-medium transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#d2bbff]">history_toggle_off</span>
                <span className="text-sm font-bold">Older Release Highlights (v1.2.0 – v0.1.0)</span>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">12 Previous Versions</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-white">
                <span>{showOlderReleases ? "Collapse" : "Expand"}</span>
                <span className={`material-symbols-outlined text-base transition-transform duration-300 ${showOlderReleases ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </div>
            </button>

            {showOlderReleases && (
              <div className="mt-6 space-y-6 pt-2 transition-all">
                {/* v1.2.0 */}
                <div className="glass-card p-8 rounded-xl border-[#7c3aed]/20 bg-[#7c3aed]/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#7c3aed]/50 text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.2.0</span>
                      <h3 className="text-xl font-bold text-white">Repository Constitution</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 27, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Repository Constitution (<code>tokencap constitution</code>)</strong> — Encodes permanent architectural, schema, security, and compliance laws that AI coding agents must never violate.</li>
                    <li><strong>Law Sheets Generation</strong> — Automatically parses codebase constraints into <code>api-contracts.yaml</code>, <code>schema-invariants.yaml</code>, <code>architecture-laws.md</code>, <code>security-boundaries.md</code>, <code>compliance-rules.md</code>, and <code>critical-flows.md</code>.</li>
                    <li><strong>Constitution Score</strong> — Dynamically scores repository health (0-100 index) across Architecture, API Stability, Schema, Security, and Compliance categories.</li>
                    <li><strong>ConstitutionGraph</strong> — Unifies the ruleset into a single internal model, rendering raw JSON/YAML, human-readable markdown summaries, and interactive graph visualizations.</li>
                    <li><strong>Manual Overrides</strong> — Supports custom rule definitions inside a local <code>tokencap.constitution.yaml</code>.</li>
                    <li><strong>AI Visibility</strong> — Injects constitution indices, severity constraints, and critical laws directly into agent onboarding entry points and compression context pack manifests.</li>
                  </ul>
                </div>

                {/* v1.1.0 */}
                <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.1.0</span>
                      <h3 className="text-xl font-bold text-white">Execution Contract</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 27, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Execution Contract (<code>--execution</code>)</strong> — Teaches AI agents <em>how to work</em> with consistent engineering discipline across lifecycle stages (STATE, ALWAYS, PLAN, DISCOVER, IMPLEMENT, VERIFY, REVIEW, RECOVERY).</li>
                    <li><strong>Headline Feature: Scope Drift Detection</strong> — Tracks the agent's current workspace objective, scopes, confidence, and drift in real-time under <code>execution-scope.md</code>, alerting on expanded limits.</li>
                    <li><strong>Minimal Solution First</strong> — Enforces a strict decision framework before writing new code (checking configurations, existing utilities, components, services, and dependencies in order).</li>
                    <li><strong>Confidence Rating Verification</strong> — Generates build, test, and lint status reports with a percentage score, preventing agents from declaring tasks "Fixed" without proof.</li>
                    <li><strong>Structured Recovery Mode</strong> — Protocol to extract agents from reasoning loops, capturing hypotheses, previous attempts, unknowns, and next actions.</li>
                    <li><strong>Semantic Change Classification</strong> — Taxonomizes code modifications (Behavior, Architecture, Bug Fix, Refactor) and risk mappings for easier code review.</li>
                    <li><strong>Advisory vs Strict Mode</strong> — Preserve autonomy (advisory mode) or enforce strict gating rules and cross-cluster expansion barriers (<code>--strict</code>).</li>
                  </ul>
                </div>

                {/* v1.0.0 */}
                <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v1.0.0</span>
                      <h3 className="text-xl font-bold text-white">Self-Loading Universal Context Layer</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 25, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Self-Loading Universal Context Layer</strong> — AI automatically discovers and loads your project intelligence without manual context copying.</li>
                    <li><strong>Auto-Discovery Entry Point (<code>AGENTS.md</code>)</strong> — Generates a root-level <code>AGENTS.md</code> file that directs AI agents directly to the full onboarding suite under <code>.tokencap/agent/START_HERE.md</code>.</li>
                    <li><strong>Universal Context Onboarding Suite</strong> — Compiles <code>START_HERE.md</code>, <code>allowed-context.json</code> (topic glob mapper), <code>model-instructions.md</code> (model-specific guidelines), and <code>context-manifest.json</code> (structured index).</li>
                    <li><strong>Clean Root Option</strong> — Use <code>--no-agents-file</code> flag to skip generating the root-level <code>AGENTS.md</code>.</li>
                    <li><strong>Topic-Based Context Packing</strong> — <code>tokencap pack &lt;topic&gt;</code> queries the Brain to boost relevance weights for that specific cluster, generating scoped context packs (e.g., <code>auth.md</code>, <code>payments.md</code>).</li>
                  </ul>
                </div>

                {/* v0.9.0 */}
                <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.9.0</span>
                      <h3 className="text-xl font-bold text-white">Project Brain</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 22, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Project Brain</strong> — TokenCap now thinks in clusters, not just files, providing a unified project intelligence view.</li>
                    <li><strong>Flagship Brain Command (<code>tokencap brain &lt;topic&gt;</code>)</strong> — Ask about any part of your codebase and get a unified view: files, risk, architecture, dependencies, review groups, recent changes, and git timeline.</li>
                    <li><strong>Unified Knowledge Base</strong> — <code>tokencap make</code> builds <code>.tokencap/brain/knowledge.json</code>.</li>
                    <li><strong>6 Brain Modes</strong> — <code>--impact</code>, <code>--architecture</code>, <code>--review</code>, <code>--timeline</code>, <code>--risk</code>, and <code>--deps</code>.</li>
                  </ul>
                </div>

                {/* v0.8.0 */}
                <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#7c3aed]/40 text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.8.0</span>
                      <h3 className="text-xl font-bold text-white">Agent Intelligence Engine</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 20, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Agent Intelligence Engine</strong> — Analyzes repository to generate AI Agent Skill Packs (<code>agent-pack.md</code>) and machine-readable definitions.</li>
                    <li><strong>Flagship Agent Command (<code>tokencap agent</code>)</strong> — Scans repository and builds onboarding instructions.</li>
                  </ul>
                </div>

                {/* v0.7.0 */}
                <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.7.0</span>
                      <h3 className="text-xl font-bold text-white">Smart Retrieval Engine</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 17, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Smart Retrieval Engine</strong> — Question-based context retrieval returning relevant files instead of entire repositories.</li>
                    <li><strong>Flagship Ask Command (<code>tokencap ask "question"</code>)</strong> — Natural language queries auto-detect target mode.</li>
                  </ul>
                </div>

                {/* v0.6.0 */}
                <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-mono">v0.6.0</span>
                      <h3 className="text-xl font-bold text-white">Graph Intelligence & Unified CLI</h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">June 14, 2026</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
                    <li><strong>Graph Intelligence Upgrade</strong> — Obsidian-style visual dependency graph with Cytoscape.js viewer.</li>
                  </ul>
                </div>

                {/* v0.5.0 - v0.1.0 */}
                <div className="glass-card p-6 rounded-xl border-white/5 bg-white/5 text-xs text-zinc-400 font-mono space-y-2">
                  <p><strong className="text-zinc-300">v0.5.0 (June 8, 2026):</strong> AI Context Packing & Cytoscape Graph Viewer</p>
                  <p><strong className="text-zinc-300">v0.4.0 (June 7, 2026):</strong> AI Change Intelligence Engine & Breaking Change Scanning</p>
                  <p><strong className="text-zinc-300">v0.3.0 (June 7, 2026):</strong> AI Debug Handoff Mode & Stack Trace Capture</p>
                  <p><strong className="text-zinc-300">v0.2.0 (June 1, 2026):</strong> Intelligence Layer & Project Knowledge Graph</p>
                  <p><strong className="text-zinc-300">v0.1.0 (May 1, 2026):</strong> Initial Release & VS Code Auto Capture</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* 1: Auto Capture on Save */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">save</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Auto Capture on Save</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Sync your context instantly. TokenCap monitors file saves and automatically updates snapshot files in the background.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 overflow-hidden font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="flex gap-1.5 mb-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
            </div>
            <code className="block whitespace-pre text-[#4edea3] leading-snug">
              [10:42:01] <span className="text-[#ccc3d8]">Saved:</span> page.tsx{"\n"}
              [10:42:04] <span className="text-[#ccc3d8]">Regenerating files...</span>
            </code>
          </div>
        </div>

        {/* 2: Git-Aware Snapshots */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">history</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Git-Aware Snapshots</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Prioritize active edits. Surfaces unstaged/staged diffs and ranks recently changed files higher in LLM snapshots.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-4 flex flex-col justify-between h-[84px]">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-mono font-medium text-[#ccc3d8] opacity-60 uppercase tracking-wider">BRANCH</span>
              <span className="text-[11px] font-mono font-medium text-[#4edea3]">feature/auth</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-[#2a2a2c] rounded-full overflow-hidden">
                <div className="h-full bg-[#4edea3] w-2/3"></div>
              </div>
              <span className="text-[10px] text-[#ccc3d8] font-mono block">Prioritizing changed files...</span>
            </div>
          </div>
        </div>

        {/* 3: Local MCP Service */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">hub</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Local MCP Service</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Query repository intelligence live over stdio MCP (11 tool endpoints) with automatic startup init and background watching.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[11px] h-[84px] flex flex-col justify-center">
            <div className="text-[#00a572]">$ tokencap mcp --init</div>
            <div className="text-zinc-400 mt-1">Status: Active (0-2ms latency)</div>
            <div className="text-[#d2bbff]">11 MCP Tool Endpoints</div>
          </div>
        </div>

        {/* 4: Incremental Intelligence */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">bolt</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Incremental Engine</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Analyze once. Update only what changed. Uses SHA-256 caching and dependency walks for sub-100ms updates.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[11px] h-[84px] flex flex-col justify-center">
            <div className="text-[#4edea3]">⚡ Incremental Build</div>
            <div className="text-zinc-400 mt-1">Duration: 74ms</div>
            <div className="text-zinc-500">Selective Rebuild: Clean</div>
          </div>
        </div>

        {/* 5: Repository Constitution */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full lg:col-span-2 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-6 h-full">
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#d2bbff]">menu_book</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Repository Constitution</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 max-w-sm">
                  Define permanent guidelines that AI agents must never violate (API contracts, database schema rules, security laws, compliance). Includes health scoring index.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-52 h-24 sm:h-auto bg-[#0e0e10] rounded-xl border border-[#4a4455] p-3 flex flex-col justify-center min-h-[96px] font-mono text-[11px] leading-snug">
              <div className="text-purple-400 font-bold">$ tokencap constitution</div>
              <div className="text-zinc-500 mt-1">Constitution Score: 92/100</div>
              <div className="text-[#4edea3]">✔ Inferred 14 API laws</div>
              <div className="text-amber-400">🛡 2 IMMUTABLE rules active</div>
            </div>
          </div>
        </div>

        {/* 6: Local-first Privacy */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">verified_user</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Local-first Privacy</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Your code never leaves your machine. Processing happens entirely on-device for maximum security.
          </p>
          <div className="h-[84px] flex items-center gap-3 border border-[#4a4455] rounded-lg bg-[#0e0e10] p-3 justify-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#2a2a2c] border-2 border-[#131315] flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-zinc-400">home</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7c3aed] border-2 border-[#131315] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">lock</span>
              </div>
            </div>
            <span className="font-mono text-[13px] text-[#4edea3]">No Cloud Sync</span>
          </div>
        </div>

        {/* 7: Project Knowledge Graph & Interactive Viewer */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">account_tree</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Interactive Graph Viewer</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Map out dependencies with Cytoscape.js (`--open`), generate narrative architecture summaries (`--ai`), and track structural changes (`--diff`).
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="text-[10px] text-[#ccc3d8] mb-1.5 opacity-60">BUILDING GRAPH...</div>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-4 bg-[#7c3aed]/40 rounded-sm animate-pulse"></div>
              <div className="h-4 bg-[#4edea3]/60 rounded-sm"></div>
              <div className="h-4 bg-[#7c3aed]/60 rounded-sm animate-pulse"></div>
              <div className="h-4 bg-[#4edea3]/30 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* 8: AI Context Packing */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">package_2</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Context Packing</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Token-budgeted, importance-scored context compression. Prioritizes critical files and truncates others using AST analysis.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#ccc3d8]">Token Budget:</span>
              <span className="text-[#4edea3]">20,000</span>
            </div>
            <div className="w-full bg-[#2a2a2c] h-2 rounded-full overflow-hidden">
              <div className="bg-[#4edea3] h-full" style={{ width: "65%" }}></div>
            </div>
            <span className="text-[10px] text-zinc-500 mt-1.5 block">AST compression & git ranking</span>
          </div>
        </div>

        {/* 9: AI Change Intelligence */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">difference</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Change Intelligence</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Deterministic risk rating and semantic layering. Scans for breaking changes and maps endpoint additions or modifications.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#ccc3d8]">Risk Level:</span>
              <span className="text-red-400 font-bold">HIGH</span>
            </div>
            <div className="text-[11px] text-[#ccc3d8] mt-1">
              API routes modified: 3<br />
              Breaking changes: Yes
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20">
        <div className="glass-card p-12 relative overflow-hidden rounded-xl border-[#7c3aed]/20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#7c3aed]/5 blur-[120px] rounded-full"></div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6 relative z-10 font-vorcas">Start capturing context.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="/docs"
              className="bg-[#7c3aed] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              Get Started Free
            </a>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2c] rounded-xl border border-[#4a4455] font-mono text-[13px]">
              <span className="text-[#ccc3d8]">npm install -g tokencap</span>
              <CopyButton text="npm install -g tokencap" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}