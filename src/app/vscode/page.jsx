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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#d2bbff] font-mono text-[10px] uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
            V0.6.0 NOW AVAILABLE
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white leading-tight">
            The ultimate VS Code toolkit for <span className="text-[#d2bbff]">snapshot precision.</span>
          </h1>
          <p className="text-[#ccc3d8] text-base leading-relaxed">
            TokenCap seamlessly integrates into your editor to automate codebase snapshotting, import graph parsing, and context memory tracking on every file save.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=VanshArora21.tokencap"
              target="_blank"
              rel="noreferrer"
              className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 flex items-center gap-1.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Install Extension
            </a>
            <a
              href="/cli"
              className="border border-[#4a4455] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#2a2a2c]/50 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">terminal</span>
              View CLI Docs
            </a>
          </div>
        </div>

        {/* VS Code Mockup Component */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed]/20 to-[#4edea3]/20 blur-xl opacity-50 transition duration-1000 group-hover:opacity-100"></div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl code-glow flex flex-col h-[420px] bg-[#0c0c0e]">
            {/* Editor Toolbar */}
            <div className="terminal-header h-10 flex items-center px-4 gap-1.5 justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="bg-[#1c1b1d] px-4 py-0.5 rounded text-[11px] font-mono text-[#ccc3d8] border border-white/5">
                .tokencap.json — TokenCap Extension
              </div>
              <div className="w-12"></div>
            </div>

            {/* Editor Content */}
            <div className="flex-grow flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-12 bg-[#0e0e10] border-r border-white/5 flex flex-col items-center py-4 gap-4 text-zinc-500 select-none">
                <span className="material-symbols-outlined text-[#d2bbff]">file_copy</span>
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined">account_tree</span>
                <span className="material-symbols-outlined">extension</span>
              </div>
              {/* Code Area */}
              <div className="flex-grow bg-[#131315] p-4 font-mono text-[13px] leading-relaxed overflow-hidden relative">
                <div className="flex gap-4">
                  <div className="text-zinc-600 text-right select-none pr-1">
                    01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10
                  </div>
                  <div className="text-[#ccc3d8]">
                    {"{"}<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"profile"</span>: <span className="text-[#d2bbff]">"balanced"</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"outputPath"</span>: <span className="text-[#4edea3]">"TOKENCAP.md"</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"maxFiles"</span>: <span className="text-[#d2bbff]">90</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"maxSourceBytes"</span>: <span className="text-[#d2bbff]">220000</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"includeGitDiff"</span>: <span className="text-[#d2bbff]">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"redactSecrets"</span>: <span className="text-[#d2bbff]">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"excludePatterns"</span>: [<span className="text-[#4edea3]">"node_modules/**"</span>, <span className="text-[#4edea3]">"dist/**"</span>]<br />
                    {"}"}
                  </div>
                </div>

                {/* Command Palette Overlay */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xs glass-panel rounded-lg shadow-2xl p-1 flex flex-col gap-1 z-20">
                  <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider">TOKEN CAP COMMANDS</span>
                    <span className="text-[9px] font-mono text-[#d2bbff] font-semibold">4 FOUND</span>
                  </div>
                  <div className="p-0.5 space-y-0.5">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 bg-[#7c3aed]/20 rounded text-white border border-[#7c3aed]/20 text-xs">
                      <span className="material-symbols-outlined text-sm text-[#d2bbff]">camera</span>
                      <span>TokenCap: Make Snapshot Now</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#2a2a2c] rounded text-[#ccc3d8] text-xs">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span>TokenCap: Open Snapshot</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#2a2a2c] rounded text-[#ccc3d8] text-xs">
                      <span className="material-symbols-outlined text-sm">toggle_on</span>
                      <span>TokenCap: Toggle Auto Capture</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#2a2a2c] rounded text-[#ccc3d8] text-xs">
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
        <h2 className="text-2xl font-bold text-white mb-6">Extension Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Large Feature: Auto Capture */}
          <div className="md:col-span-4 glass-panel p-8 rounded-xl flex flex-col justify-between group hover:border-[#d2bbff]/40 transition-all">
            <div>
              <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">save</span>
              <h3 className="text-xl font-bold text-white mb-2">Auto capture on file save</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                Every time you save a source file in VS Code, TokenCap debounces and automatically regenerates your snapshots. Never worry about manually syncing your workspace state again.
              </p>
            </div>
            <div className="mt-6 relative h-28 bg-[#131315] rounded-lg border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
              <div className="p-4 font-mono text-[11px] text-[#ccc3d8] flex flex-col gap-1.5">
                <div className="flex justify-between items-center bg-[#7c3aed]/5 p-1 rounded">
                  <span>Updated: TOKENCAP.md</span>
                  <span className="text-[#4edea3]">Just now</span>
                </div>
                <div className="flex justify-between items-center p-1">
                  <span>Updated: TOKENCAP_GRAPH.md</span>
                  <span className="text-zinc-500">2m ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Feature: Status Bar */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all justify-between">
            <div>
              <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">view_kanban</span>
              <h3 className="text-xl font-bold text-white mb-2">Status bar display</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                Displays auto capture status, active profile, file counts, and last update timestamp in the status bar in real-time.
              </p>
            </div>
            <div className="mt-6 h-12 bg-[#7c3aed]/20 border border-[#7c3aed]/30 rounded flex items-center justify-center gap-3 px-4 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></div>
              <span className="font-mono text-xs text-white">TokenCap • 12:34 PM</span>
            </div>
          </div>

          {/* Middle Feature: Quick Pick */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">menu_open</span>
            <h3 className="text-xl font-bold text-white mb-2">Quick-pick command menu</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Click the status bar item to open a Quick-Pick menu with commands to force snapshots, toggle auto capture, or open the snapshot files instantly.
            </p>
          </div>

          {/* Middle Feature: Open Snapshot */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all relative overflow-hidden min-h-[180px]">
            <div className="z-10 relative">
              <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">open_in_new</span>
              <h3 className="text-xl font-bold text-white mb-2">Open snapshot command</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-[80%]">
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
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">toggle_on</span>
            <h3 className="text-xl font-bold text-white mb-2">Toggle auto capture</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Easily turn auto-saving capture ON or OFF via the command menu to temporarily suspend snapshots during rapid edits.
            </p>
          </div>

          {/* Bottom Feature: Config File */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">settings_input_component</span>
            <h3 className="text-xl font-bold text-white mb-2">Create config file</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Initialize a default local configuration file (`.tokencap.json`) in one click to customize output profiles and file budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="bg-[#0e0e10] border border-[#4a4455]/20 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Ready to optimize?</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-[#1c1b1d] flex items-center px-4 py-3 rounded-lg border border-[#4a4455]/40 font-mono text-[13px] group justify-between">
            <div className="flex gap-2">
              <span className="text-[#7c3aed] mr-1">&gt;</span>
              <span className="text-white">code --install-extension VanshArora21.tokencap</span>
            </div>
            <CopyButton text="code --install-extension VanshArora21.tokencap" />
          </div>
          <p className="text-xs text-[#ccc3d8] pt-2">Or search for "TokenCap" by VanshArora21 in the VS Code Extensions Marketplace.</p>
        </div>
      </section>
    </PageWrapper>
  );
}