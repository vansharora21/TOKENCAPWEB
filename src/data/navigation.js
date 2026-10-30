// Top bar. Every entry is an existing route; `match` also lights the item for child pages.
// `hint` is the one-line description shown under each item in the phone menu.
export const primaryNav = [
  { label: "Docs", href: "/docs", match: ["/docs", "/features", "/vscode"], hint: "Guides and reference" },
  { label: "CLI", href: "/cli", hint: "Every command and flag" },
  { label: "MCP", href: "/mcp", hint: "Connect your AI tool" },
  { label: "Benchmarks", href: "/benchmarks", hint: "100 real commits, measured" },
  { label: "Changelog", href: "/changelog", match: ["/changelog", "/roadmap"], hint: "What shipped, release by release" },
];

export const githubUrl = "https://github.com/vansharora21/TOKENCAP";

export const mainNavigation = [
  { label: "Home", href: "/", description: "Overview and hero section" },
  { label: "Features", href: "/features", description: "All features in detail" },
  { label: "Benchmarks", href: "/benchmarks", description: "Verified token and cost reduction data" },
  { label: "MCP Guide", href: "/mcp", description: "Local Model Context Protocol Service" },
  { label: "Docs", href: "/docs", description: "Full documentation" },
  { label: "Roadmap", href: "/roadmap", description: "Planned features and versions" },
  { label: "Changelog", href: "/changelog", description: "Release history" },
  { label: "GitHub", href: "https://github.com/vansharora21/TOKENCAP", external: true },
];

export const footerNavigation = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Benchmarks", href: "/benchmarks" },
      { label: "MCP Guide", href: "/mcp" },
      { label: "VS Code", href: "/vscode" },
      { label: "CLI Reference", href: "/docs#cli" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Changelog", href: "/changelog" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "MCP Guide", href: "/mcp" },
      { label: "Getting Started", href: "/docs#getting-started" },
      { label: "Configuration", href: "/docs#configuration" },
      { label: "Context Profiles", href: "/docs#profiles" },
      { label: "Knowledge Graph", href: "/docs#graph" },
      { label: "Memory Layer", href: "/docs#memory" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "GitHub", href: "https://github.com/vansharora21/TOKENCAP", external: true },
      { label: "MIT License", href: "https://github.com/vansharora21/TOKENCAP/blob/main/LICENSE", external: true },
      { label: "npm Package", href: "https://www.npmjs.com/package/tokencap", external: true },
    ],
  },
];

export const footerContact = [
  { label: "Chrome extension", href: "https://chromewebstore.google.com/detail/tokencap-companion/opabefaobopdfpndkcbdhikihfccnkdi", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aroravansh2108/", external: true },
  { label: "Book a call", href: "https://cal.com/vansh-arora-0821/15min", external: true },
  { label: "Leave a review", href: "/reviews" },
];

export const productHuntBadge = {
  href: "https://www.producthunt.com/products/tokencap-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-tokencap-2",
  src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1218192&theme=dark&t=1786476363151",
};

export const docsNavigation = [
  { label: "MCP Guide", href: "/mcp" },
  { label: "Getting Started", href: "/docs#getting-started" },
  { label: "Configuration", href: "/docs#configuration" },
  { label: "Context Profiles", href: "/docs#profiles" },
  { label: "Project Knowledge Graph", href: "/docs#graph" },
  { label: "Context Memory Layer", href: "/docs#memory" },
  { label: "AI Context Packing", href: "/docs#pack" },
  { label: "AI Change Intelligence", href: "/docs#diff" },
  { label: "Agent Intelligence", href: "/docs#agent" },
  { label: "Secret Redaction", href: "/docs#secret-redaction" },
  { label: "CLI Reference", href: "/docs#cli" },
  { label: "VS Code Extension", href: "/docs#vscode" },
];
