import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "VS Code Extension",
  description: "TokenCap VS Code Extension. The ultimate editor toolkit for context and snapshot precision.",
  path: "/vscode",
});

export default function VscodePage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section with VS Code Mockup */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#7c3aed] dark:text-[#d2bbff]">
            V1.3.0 EXTENSION RELEASE
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground leading-tight font-sans">
            The ultimate VS Code toolkit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#d2bbff] dark:from-[#d2bbff] dark:to-[#7c3aed] anim-heading-gradient">snapshot precision.</span>
          </h1>
          <p className="text-muted text-base leading-relaxed">
            TokenCap seamlessly integrates into your editor to automate codebase snapshotting, import graph parsing, and context memory tracking on every file save.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=VanshArora21.tokencap"
              target="_blank"
              rel="noreferrer"
              className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 flex items-center gap-1.5 shadow-[0_0_20px_rgba(124,58,237,0.15)] focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              VS Code Marketplace
            </a>
            <a
              href="https://open-vsx.org/extension/VanshArora21/tokencap"
              target="_blank"
              rel="noreferrer"
              className="border border-card-border bg-card text-foreground px-6 py-2.5 rounded-lg font-bold hover:bg-pre-bg transition-all active:scale-95 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Open VSX
            </a>
            <a
              href="/cli"
              className="border border-card-border bg-card text-foreground px-6 py-2.5 rounded-lg font-bold hover:bg-pre-bg transition-all active:scale-95 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
            >
              <span className="material-symbols-outlined text-sm">terminal</span>
              View CLI Docs
            </a>
          </div>
        </div>

        {/* VS Code Mockup Component */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed]/20 to-[#4edea3]/20 blur-xl opacity-50 transition duration-1000 group-hover:opacity-100"></div>
          <div className="relative rounded-xl overflow-hidden border border-card-border shadow-2xl code-glow flex flex-col h-[420px] bg-card">
            {/* Editor Toolbar */}
            <div className="terminal-header h-10 flex items-center px-4 gap-1.5 justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="bg-pre-bg px-4 py-0.5 rounded text-[11px] font-mono text-muted border border-card-border">
                .tokencap.json — TokenCap Extension
              </div>
              <div className="w-12"></div>
            </div>

            {/* Editor Content */}
            <div className="flex-grow flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-12 bg-tab-inactive border-r border-card-border flex flex-col items-center py-4 gap-4 text-muted select-none">
                <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff]">file_copy</span>
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined">account_tree</span>
                <span className="material-symbols-outlined">extension</span>
              </div>
              {/* Code Area */}
              <div className="flex-grow bg-pre-bg p-4 font-mono text-[13px] leading-relaxed overflow-hidden relative">
                <div className="flex gap-4">
                  <div className="text-muted/60 text-right select-none pr-1">
                    01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10
                  </div>
                  <div className="text-foreground/90">
                    {"{"}<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"profile"</span>: <span className="text-[#7c3aed] dark:text-[#d2bbff]">"balanced"</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"outputPath"</span>: <span className="text-emerald-600 dark:text-[#4edea3]">"TOKENCAP.md"</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"maxFiles"</span>: <span className="text-[#7c3aed] dark:text-[#d2bbff]">90</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"maxSourceBytes"</span>: <span className="text-[#7c3aed] dark:text-[#d2bbff]">220000</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"includeGitDiff"</span>: <span className="text-[#7c3aed] dark:text-[#d2bbff]">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"redactSecrets"</span>: <span className="text-[#7c3aed] dark:text-[#d2bbff]">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-emerald-600 dark:text-[#4edea3]">"excludePatterns"</span>: [<span className="text-emerald-600 dark:text-[#4edea3]">"node_modules/**"</span>, <span className="text-emerald-600 dark:text-[#4edea3]">"dist/**"</span>]<br />
                    {"}"}
                  </div>
                </div>

                {/* Command Palette Overlay */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xs glass-panel rounded-lg shadow-2xl p-1 flex flex-col gap-1 z-20">
                  <div className="px-3 py-1.5 border-b border-card-border flex items-center justify-between">
                    <span className="text-[9px] font-mono text-muted tracking-wider">TOKEN CAP COMMANDS</span>
                    <span className="text-[9px] font-mono text-[#7c3aed] dark:text-[#d2bbff] font-semibold">4 FOUND</span>
                  </div>
                  <div className="p-0.5 space-y-0.5">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 bg-[#7c3aed]/15 rounded text-foreground border border-[#7c3aed]/20 text-xs">
                      <span className="material-symbols-outlined text-sm text-[#7c3aed] dark:text-[#d2bbff]">camera</span>
                      <span>TokenCap: Make Snapshot Now</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-pre-bg rounded text-muted text-xs">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span>TokenCap: Open Snapshot</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-pre-bg rounded text-muted text-xs">
                      <span className="material-symbols-outlined text-sm">toggle_on</span>
                      <span>TokenCap: Toggle Auto Capture</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-pre-bg rounded text-muted text-xs">
                      <span className="material-symbols-outlined text-sm">settings</span>
                      <span>TokenCap: Create Config File</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="h-6 bg-[#7c3aed] text-white flex items-center px-3 justify-between font-mono text-[10px] select-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">source_environment</span>
                  <span>main*</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/10 px-2 py-0.5 rounded font-semibold text-[9px]">
                  <span className="material-symbols-outlined text-[10px] text-[#4edea3]">check_circle</span>
                  <span>TokenCap • 12:34 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>JSON</span>
                <span className="material-symbols-outlined text-[12px]">notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-foreground mb-6 font-sans">Extension Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Large Feature: Auto Capture */}
          <div className="md:col-span-4 glass-panel p-8 rounded-xl flex flex-col justify-between group hover:border-[#7c3aed]/40 dark:hover:border-[#d2bbff]/40 transition-all">
            <div>
              <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff] mb-4 text-3xl">save</span>
              <h3 className="text-xl font-bold text-foreground mb-2">Auto capture on file save</h3>
              <p className="text-sm leading-relaxed text-muted">
                Every time you save a source file in VS Code, TokenCap debounces and automatically regenerates your snapshots. Never worry about manually syncing your workspace state again.
              </p>
            </div>
            <div className="mt-6 relative h-28 bg-pre-bg rounded-lg border border-card-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              <div className="p-4 font-mono text-[11px] text-muted flex flex-col gap-1.5">
                <div className="flex justify-between items-center bg-[#7c3aed]/5 p-1 rounded">
                  <span>Updated: TOKENCAP.md</span>
                  <span className="text-emerald-600 dark:text-[#4edea3]">Just now</span>
                </div>
                <div className="flex justify-between items-center p-1">
                  <span>Updated: TOKENCAP_GRAPH.md</span>
                  <span className="text-muted/65">2m ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Feature: Status Bar */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#7c3aed]/40 dark:hover:border-[#d2bbff]/40 transition-all justify-between">
            <div>
              <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff] mb-4 text-3xl">view_kanban</span>
              <h3 className="text-xl font-bold text-foreground mb-2">Status bar display</h3>
              <p className="text-sm leading-relaxed text-muted">
                Displays auto capture status, active profile, file counts, and last update timestamp in the status bar in real-time.
              </p>
            </div>
            <div className="mt-6 h-12 bg-pre-bg border border-card-border rounded flex items-center justify-center gap-3 px-4 shrink-0">
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <span className="font-mono text-xs text-foreground">TokenCap • 12:34 PM</span>
            </div>
          </div>

          {/* Middle Feature: Quick Pick */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#7c3aed]/40 dark:hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff] mb-4 text-3xl">menu_open</span>
            <h3 className="text-xl font-bold text-foreground mb-2">Quick-pick command menu</h3>
            <p className="text-sm leading-relaxed text-muted">
              Click the status bar item to open a Quick-Pick menu with commands to force snapshots, toggle auto capture, or open the snapshot files instantly.
            </p>
          </div>

          {/* Middle Feature: Open Snapshot */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#7c3aed]/40 dark:hover:border-[#d2bbff]/40 transition-all relative overflow-hidden min-h-[180px]">
            <div className="z-10 relative">
              <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff] mb-4 text-3xl">open_in_new</span>
              <h3 className="text-xl font-bold text-foreground mb-2">Open snapshot command</h3>
              <p className="text-sm leading-relaxed text-muted max-w-[80%]">
                Open `TOKENCAP.md` directly in VS Code with a single click. Allows you to review what gets exposed to the LLM context.
              </p>
            </div>
            <img 
              className="absolute -right-20 -bottom-20 w-64 h-64 object-cover opacity-10 group-hover:opacity-20 transition-opacity" 
              alt="Mockup graphics" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQp2JqoHyKT7X-Xtx74d-2gH5yFy7B-GdWmoWNQRJIQZg_TGKKegIJz28uCNu7G8hmKGxBfyQb94hxrI0gYaoSoyeFugMf12ibCuMwH1iIPrdBxB3wxPx7w1tOIETZinmdIvPQ-3vYJmRh_cWr_cPC5bOeCqefelG7hbZthn9ypGrWumqBfmK_DOT_3VpGHhYIvyJ1x8jZeTxJ6yLNHe8iAAXllMCppxLI6hhBq06pHEeVDTgH3i0YxaglAk255VKIHJGwcn4CUeKL"
            />
          </div>

          {/* Bottom Feature: Toggle Capture */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#7c3aed]/40 dark:hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff] mb-4 text-3xl">toggle_on</span>
            <h3 className="text-xl font-bold text-foreground mb-2">Toggle auto capture</h3>
            <p className="text-sm leading-relaxed text-muted">
              Easily turn auto-saving capture ON or OFF via the command menu to temporarily suspend snapshots during rapid edits.
            </p>
          </div>

          {/* Bottom Feature: Config File */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#7c3aed]/40 dark:hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#7c3aed] dark:text-[#d2bbff] mb-4 text-3xl">settings_input_component</span>
            <h3 className="text-xl font-bold text-foreground mb-2">Create config file</h3>
            <p className="text-sm leading-relaxed text-muted">
              Initialize a default local configuration file (`.tokencap.json`) in one click to customize output profiles and file budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="bg-card border border-card-border rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6 font-sans">Ready to optimize?</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-pre-bg flex items-center px-4 py-3 rounded-lg border border-card-border font-mono text-[13px] group justify-between">
            <div className="flex gap-2">
              <span className="text-[#7c3aed] mr-1">&gt;</span>
              <span className="text-foreground/90">code --install-extension VanshArora21.tokencap</span>
            </div>
            <CopyButton text="code --install-extension VanshArora21.tokencap" />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}