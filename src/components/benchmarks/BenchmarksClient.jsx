"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CopyButton } from "@/components/shared/CopyButton";
import { benchmarkOverview, benchmarkRepos, benchmarkTasks } from "@/data/benchmarks";

export function BenchmarksClient() {
  const [selectedRepo, setSelectedRepo] = useState("all");

  const filteredTasks = selectedRepo === "all"
    ? benchmarkTasks
    : benchmarkTasks.filter((t) => t.repo === selectedRepo);

  return (
    <PageWrapper className="pt-20 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Subtle Header */}
      <header className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted border border-card-border px-2.5 py-1 rounded bg-pre-bg">
            Verified Empirical Benchmarks
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 font-display">
          Token & Dollar Savings Metrics
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Measured across 3 open-source repositories and 15 standard developer tasks using exact <code className="text-foreground font-mono">js-tiktoken</code> counting on GPT-4o input rates ($2.50 / 1M tokens).
        </p>
      </header>

      {/* Understated Key Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Average Reduction</span>
          <div className="text-2xl font-bold font-mono text-foreground">12.2×</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">94.3% fewer input tokens</span>
        </div>

        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Cost Savings</span>
          <div className="text-2xl font-bold font-mono text-foreground">$1.93</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">Saved per query average</span>
        </div>

        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Tokens / Query</span>
          <div className="text-xl font-bold font-mono text-foreground mt-0.5">820k → 46k</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">Naive vs TokenCap</span>
        </div>

        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Large Repo Peak</span>
          <div className="text-2xl font-bold font-mono text-foreground">48.4×</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">Max reduction ratio</span>
        </div>
      </div>

      {/* Repository Tier Benchmarks */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-base font-bold text-foreground font-mono tracking-tight uppercase">
            Performance by Repository Scale
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Context savings compound exponentially with codebase size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benchmarkRepos.map((repo) => (
            <div key={repo.name} className="p-5 rounded-lg border border-card-border bg-card flex flex-col justify-between space-y-5">
              <div>
                <div className="flex justify-between items-center mb-3 text-xs font-mono">
                  <span className="text-[10px] uppercase text-muted tracking-wider bg-pre-bg border border-card-border px-2 py-0.5 rounded">
                    {repo.tier} · {repo.files} files
                  </span>
                  <span className="font-bold text-foreground">{repo.ratio} ratio</span>
                </div>
                <h3 className="text-sm font-bold font-mono text-foreground">{repo.name}</h3>
                <p className="text-[11px] font-mono text-muted mt-0.5">{repo.repoPath}</p>
              </div>

              {/* Minimal Bars */}
              <div className="space-y-2.5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[10px] text-muted mb-1">
                    <span>Naive Context</span>
                    <span>{repo.naiveAvgTokens.toLocaleString()} tok ({repo.naiveCost})</span>
                  </div>
                  <div className="w-full bg-pre-bg h-2 rounded-full overflow-hidden border border-card-border">
                    <div className="bg-zinc-600 h-full w-full rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-muted mb-1">
                    <span className="text-foreground font-medium">TokenCap</span>
                    <span className="text-foreground font-bold">{repo.tokencapTokens.toLocaleString()} tok ({repo.tokencapCost})</span>
                  </div>
                  <div className="w-full bg-pre-bg h-2 rounded-full overflow-hidden border border-card-border">
                    <div
                      className="bg-foreground/90 h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.max(4, Math.min(100, (repo.tokencapTokens / repo.naiveAvgTokens) * 100))}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-card-border flex justify-between text-[10px] font-mono text-muted">
                <span>Savings: {repo.savingsPct}</span>
                <span>Lines of code: {repo.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Task Benchmark Table */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-base font-bold text-foreground font-mono tracking-tight uppercase">
              Detailed Task Measurements (15 Queries)
            </h2>
            <p className="text-xs text-muted mt-0.5">Exact token and dollar metrics per task execution.</p>
          </div>

          {/* Repo Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-card border border-card-border rounded-lg font-mono text-xs overflow-x-auto">
            {[
              { id: "all", label: "All (15)" },
              { id: "fastify-example-todo", label: "Fastify" },
              { id: "full-stack-fastapi-template", label: "FastAPI" },
              { id: "hoppscotch", label: "Hoppscotch" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRepo(tab.id)}
                className={`px-2.5 py-1 rounded text-[11px] transition-all cursor-pointer whitespace-nowrap ${
                  selectedRepo === tab.id
                    ? "bg-pre-bg text-foreground font-bold border border-card-border"
                    : "text-muted hover:text-foreground"
                }`}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto border border-card-border rounded-lg bg-card">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-pre-bg text-muted text-[10px] uppercase tracking-wider border-b border-card-border">
              <tr>
                <th className="p-3 font-semibold">Repository</th>
                <th className="p-3 font-semibold font-sans">Task Query</th>
                <th className="p-3 text-right font-semibold">Naive Files</th>
                <th className="p-3 text-right font-semibold">Naive Tokens</th>
                <th className="p-3 text-right font-semibold">TokenCap Tokens</th>
                <th className="p-3 text-right font-semibold">Ratio</th>
                <th className="p-3 text-right font-semibold">Naive $</th>
                <th className="p-3 text-right font-semibold">TokenCap $</th>
                <th className="p-3 text-right font-semibold">Saved $</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border text-[11px]">
              {filteredTasks.map((t, idx) => (
                <tr key={`${t.repo}-${idx}`} className="hover:bg-pre-bg/40 transition-colors">
                  <td className="p-3 font-semibold text-foreground">{t.repo}</td>
                  <td className="p-3 font-sans text-xs text-muted max-w-xs">{t.task}</td>
                  <td className="p-3 text-right text-muted">{t.naiveFiles}</td>
                  <td className="p-3 text-right text-muted/80">{t.naiveTokens.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold text-foreground">{t.tokencapTokens.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold text-foreground">{t.ratio}</td>
                  <td className="p-3 text-right text-muted">${t.naiveCost.toFixed(4)}</td>
                  <td className="p-3 text-right text-muted">${t.tokencapCost.toFixed(4)}</td>
                  <td className="p-3 text-right font-semibold text-foreground">${t.savedCost.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Local Reproduction Box */}
      <section className="p-6 rounded-lg border border-card-border bg-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-foreground font-mono uppercase tracking-tight">
              Local Reproduction
            </h2>
            <p className="text-xs text-muted mt-0.5">Run the benchmark script directly in your local environment.</p>
          </div>
          <div className="flex items-center gap-3 px-3 py-1.5 bg-pre-bg rounded border border-card-border font-mono text-xs shrink-0">
            <code className="text-foreground/90">node benchmarks/run.js</code>
            <CopyButton text="node benchmarks/run.js" />
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Local report schema (.tokencap/savings.json):</span>
          <pre className="p-3 bg-pre-bg border border-card-border rounded font-mono text-[11px] text-muted overflow-x-auto leading-relaxed">
{`{
  "profile": "balanced",
  "naiveTokens": 146702,
  "naiveCost": 0.3668,
  "tokencapTokens": 49608,
  "tokencapCost": 0.1240,
  "savedTokens": 97094,
  "savedCost": 0.2428,
  "reductionRatio": "3.0x"
}`}
          </pre>
        </div>
      </section>
    </PageWrapper>
  );
}
