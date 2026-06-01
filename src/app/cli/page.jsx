import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "CLI Reference",
  description: "Master the TokenCap command-line interface. Powerful options and configurations.",
  path: "/cli",
});

export default function CliPage() {
  const sidebarItems = [
    { label: "Introduction", icon: "info", href: "#" },
    { label: "Core Concepts", icon: "extension", href: "#" },
    { label: "CLI Reference", icon: "terminal", href: "#install", active: true },
    { label: "API", icon: "api", href: "#" },
    { label: "Advanced", icon: "auto_awesome", href: "#" },
  ];

  const communityItems = [
    { label: "GitHub", icon: "code", href: "https://github.com/vansharora21/TOKENCAP" },
    { label: "Discord", icon: "forum", href: "https://discord.gg" },
  ];

  const tableOptions = [
    { flag: "--version, -v", description: "Print the installed version of TokenCap.", defaultVal: "n/a" },
    { flag: "--config, -c", description: "Path to a custom configuration file.", defaultVal: "tokencap.config.js" },
    { flag: "--silent, -s", description: "Suppress all non-error output to the terminal.", defaultVal: "false" },
    { flag: "--json", description: "Format all CLI output as raw JSON strings.", defaultVal: "false" },
    { flag: "--force, -f", description: "Bypass validation checks and overwrite local files.", defaultVal: "false" },
  ];

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* SideNavBar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6">
          <p className="text-xl font-bold text-white tracking-tight">Documentation</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v2.4.0</p>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all ${
                item.active
                  ? "text-[#d2bbff] bg-[#7c3aed]/10 font-bold"
                  : "text-[#ccc3d8] hover:bg-[#2a2a2c]/50"
              }`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-1">
          <p className="font-mono text-[9px] font-semibold text-zinc-500 uppercase tracking-widest px-2.5 pb-2">COMMUNITY</p>
          {communityItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-[#ccc3d8] hover:bg-[#2a2a2c]/50 transition-all"
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">CLI Reference</h1>
          <p className="text-[#ccc3d8] text-base max-w-2xl leading-relaxed">
            Master the TokenCap command-line interface. A powerful, low-latency toolkit designed for rapid token engineering and asset management.
          </p>
        </header>

        {/* Command Section: Install */}
        <section className="mb-16" id="install">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff]">
              <span className="material-symbols-outlined text-sm">download</span>
            </div>
            <h2 className="text-xl font-bold text-white">Install globally</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
            Get started by installing the TokenCap CLI via npm, yarn, or pnpm. This provides the <code className="text-[#d2bbff]">tc</code> global command.
          </p>
          <div className="glass-panel rounded-xl overflow-hidden terminal-glow">
            <div className="bg-[#18181b] px-4 py-2 flex justify-between items-center border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <span className="font-mono text-xs text-zinc-500">bash</span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-relaxed flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-[#4edea3] select-none">$</span>
                <span className="text-white">npm install -g @tokencap/cli</span>
              </div>
              <CopyButton text="npm install -g @tokencap/cli" />
            </div>
          </div>
        </section>

        {/* Grid for Commands */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Generate Snapshot */}
          <section id="snapshot" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Generate snapshot</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Capture the current state of all tracked assets into a secure, versioned JSON snapshot.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tc snapshot</span>
                <CopyButton text="tc snapshot --name 'q3-audit'" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white">tc snapshot --name "q3-audit"</span>
                </div>
                <div className="mt-3 text-[#4edea3]">✔ <span className="text-white">Validating chain data...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Fetching metadata...</span></div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs">
                  <span>Snapshot created:</span> ./snapshots/q3-audit.tc.json<br />
                  <span>Size:</span> 142.5KB
                </div>
              </div>
            </div>
          </section>

          {/* Watch Mode */}
          <section id="watch" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Watch mode</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Automatically re-sync and hot-reload your local environment when on-chain events occur.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tc watch</span>
                <CopyButton text="tc watch --verbose" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white">tc watch --verbose</span>
                </div>
                <div className="mt-3 text-zinc-500">[14:02:21] Watching for contract events...</div>
                <div className="text-[#00a572]">● <span className="text-white">Event: Transfer detected (0x12...a3)</span></div>
                <div className="text-zinc-500">[14:02:45] Re-indexing local cache...</div>
                <div className="cli-cursor text-white mt-1"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Detailed Section: Config */}
        <section className="mb-16" id="config">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-white">Configuration</h2>
            <span className="bg-[#2a2a2c] px-3 py-1 rounded-full font-mono text-[12px] text-[#4edea3] border border-[#4a4455] self-start sm:self-auto">
              tokencap.config.js
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                Initialize a new project configuration or print the currently resolved tree including environment overrides.
              </p>
              <div className="p-4 border border-[#4a4455]/20 rounded-xl bg-[#0e0e10] flex justify-between items-start">
                <div>
                  <p className="font-mono text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">INITIALIZE PROJECT</p>
                  <code className="font-mono text-sm text-[#d2bbff] font-bold">tc init</code>
                  <p className="text-xs text-[#ccc3d8] mt-2">Creates a scaffold with default resolvers and security layers.</p>
                </div>
                <CopyButton text="tc init" className="mt-1" />
              </div>
              <div className="p-4 border border-[#4a4455]/20 rounded-xl bg-[#0e0e10] flex justify-between items-start">
                <div>
                  <p className="font-mono text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">DEBUG RESOLUTION</p>
                  <code className="font-mono text-sm text-[#d2bbff] font-bold">tc config --print</code>
                  <p className="text-xs text-[#ccc3d8] mt-2">Outputs the full merged JSON config to stdout.</p>
                </div>
                <CopyButton text="tc config --print" className="mt-1" />
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow">
              <div className="p-4 font-mono text-[13px] leading-relaxed bg-black/40 relative">
                <div className="absolute top-4 right-4">
                  <CopyButton text={`{\n  "network": "mainnet",\n  "caching": {\n    "enabled": true,\n    "ttl": 3600\n  },\n  "integrations": ["ledger", "trezor"]\n}`} />
                </div>
                <div className="text-zinc-500">// Resolved Config Output</div>
                <div className="text-white mt-3 leading-normal">
                  {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"network"</span>: <span className="text-[#adc6ff]">"mainnet"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"caching"</span>: {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4edea3]">"enabled"</span>: <span className="text-[#d2bbff]">true</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4edea3]">"ttl"</span>: <span className="text-[#d2bbff]">3600</span>
                  <br />
                  &nbsp;&nbsp;{"}"},
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"integrations"</span>: [<span className="text-[#adc6ff]">"ledger"</span>, <span className="text-[#adc6ff]">"trezor"</span>]
                  <br />
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Section: CLI Options */}
        <section className="mb-16" id="options">
          <h2 className="text-xl font-bold text-white mb-6">CLI Options</h2>
          <div className="overflow-x-auto border border-[#4a4455]/20 rounded-xl bg-[#0e0e10]/30">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#2a2a2c]/60">
                <tr>
                  <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">Flag</th>
                  <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">Description</th>
                  <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4a4455]/10 font-sans text-sm text-[#ccc3d8]">
                {tableOptions.map((opt) => (
                  <tr key={opt.flag} className="hover:bg-[#2a2a2c]/30 transition-colors">
                    <td className="p-4 font-mono text-xs text-[#d2bbff]">{opt.flag}</td>
                    <td className="p-4">{opt.description}</td>
                    <td className="p-4 text-xs font-mono text-zinc-500">{opt.defaultVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Visual Break / Image */}
        <section className="relative h-64 rounded-xl overflow-hidden">
          <img 
            className="w-full h-full object-cover opacity-40" 
            alt="Hardware components" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXi8Pwd8DdwTmDNW-bPR4NmXzIYKQdDp_BjxnLS7ir8sJpUJPK1eh8e1mw5GTO3YYLMwJ3jyFyAm-rrqp-GN5oy1y4qGKjMwlfP3FCIUs723Ehq2eNk6Yynckh0Q7RNTFGK1Ag1fWXml6NIy-wGnR7P-D9fOthBOON9DeY6nnjKTPDeTJz_Yje5Wgmy0-wd6S96y8ZCMzeDZKwxd3ZKSrN8bTCS1FFhGUwjKjAyXCZshn1GJm1HLab_2pkE8QIhRyBEgmuWueZnzwi"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131315] to-transparent flex items-end p-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Built for speed.</h4>
              <p className="text-sm text-[#ccc3d8]">Rust-powered core ensures sub-50ms execution times.</p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}