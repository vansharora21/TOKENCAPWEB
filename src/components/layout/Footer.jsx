import Link from "next/link";

function Footer() {
  const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Benchmarks", href: "/benchmarks" },
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aroravansh2108/", external: true },
    { label: "Book a Call", href: "https://cal.com/vansh-arora-0821/15min", external: true },
  ];

  return (
    <footer className="border-t border-card-border bg-background text-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] pb-12 border-b border-card-border">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg font-bold text-foreground tracking-tight">TokenCap</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Coding context at the speed of thought. <br />
              Built for the LLM era.
            </p>
            <a
              href="https://www.producthunt.com/products/tokencap-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-tokencap-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-zinc-400 focus-visible:outline-offset-4"
              aria-label="View TokenCap on Product Hunt"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1218192&theme=dark&t=1786476363151"
                alt="TokenCap - Give AI coding agents the context they actually need. | Product Hunt"
                width="250"
                height="54"
              />
            </a>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            {/* Column 1: Product */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground tracking-wide text-xs uppercase">Product</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted hover:text-foreground transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground tracking-wide text-xs uppercase">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted hover:text-foreground transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Community */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground tracking-wide text-xs uppercase">Community</h4>
              <ul className="space-y-2 font-mono text-xs">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-foreground transition flex items-center gap-1.5"
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
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-muted/60">
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
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aroravansh2108/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-zinc-600 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
