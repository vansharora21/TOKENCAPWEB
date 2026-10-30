"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { CopyButton } from "@/components/shared/CopyButton";
import { benchmarkOverview, benchmarkRepos, benchmarkLimits, benchmarkLinks } from "@/data/benchmarks";

const REPRODUCE = [
  "node benchmarks/fair/fetch-repos.js <dir>",
  "node benchmarks/fair/run.js --repos <dir> --set all",
];

export function BenchmarksClient() {
  const a = benchmarkOverview.aggregates;

  return (
    <PageWrapper className="pt-20 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Subtle Header */}
      <header className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted border border-card-border px-2.5 py-1 rounded bg-pre-bg">
            Ground-Truth Task Benchmark · {benchmarkOverview.version}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 font-display">
          Measured on {benchmarkOverview.totalTasks} Real Commits
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Each task is the subject line of a real commit from one of {benchmarkOverview.totalRepos} open-source repositories ({benchmarkOverview.languages}). The ground truth is the set of source files that commit changed, evaluated at its parent. Exact <code className="text-foreground font-mono">js-tiktoken</code> counts at a {benchmarkOverview.budget.toLocaleString()}-token pack budget.
        </p>
      </header>

      {/* Understated Key Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Median Saving</span>
          <div className="text-2xl font-bold font-mono text-foreground">{a.medianSaving}</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">Fewer tokens than a keyword grep</span>
        </div>

        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Needed Files Present</span>
          <div className="text-2xl font-bold font-mono text-foreground">{a.neededFiles}</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">{a.naiveNeededFiles} when reading every match</span>
        </div>

        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Edited Lines Shown</span>
          <div className="text-2xl font-bold font-mono text-foreground">{a.editLines}</div>
          <span className="text-[11px] text-muted font-mono mt-1 block">Average share in the pack</span>
        </div>

        <div className="p-5 rounded-lg border border-card-border bg-card">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">Tokens / Task</span>
          <div className="text-xl font-bold font-mono text-foreground mt-0.5">
            {Math.round(a.naiveAvgTokens / 1000)}k → {Math.round(a.tokencapAvgTokens / 1000)}k
          </div>
          <span className="text-[11px] text-muted font-mono mt-1 block">{a.naiveCostPerTask} → {a.tokencapCostPerTask} on gpt-4o</span>
        </div>
      </div>

      {/* Per-repository results */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-base font-bold text-foreground font-mono tracking-tight uppercase">
            Results by Repository
          </h2>
          <p className="text-xs text-muted mt-0.5">
            Naive is every text file matching a task keyword, read in full. Savings grow with repository size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benchmarkRepos.map((repo) => (
            <div key={repo.name} className="p-5 rounded-lg border border-card-border bg-card flex flex-col justify-between space-y-5">
              <div>
                <div className="flex justify-between items-center mb-3 text-xs font-mono">
                  <span className="text-[10px] uppercase text-muted tracking-wider bg-pre-bg border border-card-border px-2 py-0.5 rounded">
                    {repo.language} · {repo.tasks} tasks
                  </span>
                  <span className="font-bold text-foreground">{repo.ratio} median</span>
                </div>
                <h3 className="text-sm font-bold font-mono text-foreground">{repo.name}</h3>
                <p className="text-[11px] font-mono text-muted mt-0.5">{repo.repoPath}</p>
              </div>

              {/* Minimal Bars */}
              <div className="space-y-2.5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-[10px] text-muted mb-1">
                    <span>Naive Context</span>
                    <span>{repo.naiveAvgTokens.toLocaleString()} tok</span>
                  </div>
                  <div className="w-full bg-pre-bg h-2 rounded-full overflow-hidden border border-card-border">
                    <div className="bg-zinc-600 h-full w-full rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-muted mb-1">
                    <span className="text-foreground font-medium">TokenCap Pack</span>
                    <span className="text-foreground font-bold">{repo.tokencapTokens.toLocaleString()} tok</span>
                  </div>
                  <div className="w-full bg-pre-bg h-2 rounded-full overflow-hidden border border-card-border">
                    <div
                      className="bg-foreground/90 h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.max(2, Math.min(100, (repo.tokencapTokens / repo.naiveAvgTokens) * 100))}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-card-border flex justify-between text-[10px] font-mono text-muted">
                <span>Needed files in pack: {repo.neededFiles}</span>
                <span>Avg tokens</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limits */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-base font-bold text-foreground font-mono tracking-tight uppercase">
            What These Numbers Do and Do Not Show
          </h2>
          <p className="text-xs text-muted mt-0.5">
            These figures replace the earlier 12.2× claim, which is retracted.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benchmarkLimits.map((limit) => (
            <div key={limit.title} className="p-5 rounded-lg border border-card-border bg-card">
              <h3 className="text-xs font-bold font-mono text-foreground mb-1.5">{limit.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{limit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Reproduction Box */}
      <section className="p-6 rounded-lg border border-card-border bg-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-foreground font-mono uppercase tracking-tight">
              Reproduce It
            </h2>
            <p className="text-xs text-muted mt-0.5">
              From a TokenCap checkout. Method, task list and raw per-task results:{" "}
              <a className="text-foreground underline hover:text-foreground/80" href={benchmarkLinks.results} target="_blank" rel="noreferrer">benchmarks/fair</a>
              {" · "}
              <a className="text-foreground underline hover:text-foreground/80" href={benchmarkLinks.honestNumbers} target="_blank" rel="noreferrer">Honest Numbers</a>
            </p>
          </div>
          <div className="space-y-2 shrink-0">
            {REPRODUCE.map((cmd) => (
              <div key={cmd} className="flex items-center justify-between gap-3 px-3 py-1.5 bg-pre-bg rounded border border-card-border font-mono text-xs">
                <code className="text-foreground/90">{cmd}</code>
                <CopyButton text={cmd} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Your own repository: every build writes .tokencap/savings.json</span>
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
