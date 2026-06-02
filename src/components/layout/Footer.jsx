import Link from "next/link";

function Footer() {
  const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Docs", href: "/docs" },
    { label: "Changelog", href: "/changelog" },
  ];

  const resourceLinks = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Security", href: "/security" },
  ];

  const communityLinks = [
    { label: "GitHub", href: "https://github.com/vansharora21/TOKENCAP", external: true },
    { label: "Discord", href: "https://discord.gg", external: true },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0c] text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 overflow-hidden rounded-lg bg-[#141416] border border-white/10 flex items-center justify-center">
                <img 
                  src="/logos/tokencap-logo.png" 
                  alt="TokenCap emblem" 
                  className="absolute w-[180%] h-auto max-w-none left-1/2 -translate-x-1/2 top-[-8%]" 
                />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">TokenCap</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Coding context at the speed of thought. <br />
              Built for the LLM era.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            {/* Column 1: Product */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white tracking-wide text-xs uppercase text-zinc-400">Product</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zinc-500 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white tracking-wide text-xs uppercase text-zinc-400">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zinc-500 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Community */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white tracking-wide text-xs uppercase text-zinc-400">Community</h4>
              <ul className="space-y-2 font-mono text-xs">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white transition flex items-center gap-1.5"
                    >
                      <span>&bull;</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-zinc-600">
          <div>
            &copy; 2026 TokenCap. Built for developers.
          </div>
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/vansharora21/TOKENCAP"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 text-zinc-600 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Discord */}
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <svg className="w-4 h-4 text-zinc-600 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.67 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };