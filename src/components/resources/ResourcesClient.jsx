"use client";

import { useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function ResourcesClient() {
  const timelineRef = useRef(null);
  const gridRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const featuredContent = [
    {
      title: "TokenCap v1.6.0 Is Now Live",
      type: "DEV Community",
      icon: "rocket_launch",
      description: "Introducing the Token & Dollar Savings Engine, 12.2× average token reduction (94.3% cost savings), non-overwriting multi-host pointers for 7 AI hosts, and CI-enforced zero egress.",
      link: "https://dev.to/vansharora21/tokencap-v160-is-now-live-3153"
    },
    {
      title: "TokenCap v1.6.0 Featured Coverage",
      type: "CoderLegion",
      icon: "newspaper",
      description: "Read the CoderLegion featured article covering TokenCap v1.6.0 real-time savings reporting, multi-host pointers, and verified benchmarks.",
      link: "https://coderlegion.com/23530/tokencap-v1-6-0-is-now-live"
    },
    {
      title: "TokenCap v1.5 — Making MCP Feel Invisible",
      type: "DEV Community",
      icon: "hub",
      description: "How TokenCap v1.5 eliminates manual setup and cold start overhead for Local Model Context Protocol (MCP), delivering live repository watching, auto-initialization, and sub-2ms query responses.",
      link: "https://dev.to/vansharora21/tokencap-v15-making-mcp-feel-invisible-4ha4"
    },
    {
      title: "TokenCap MCP: Local Repository Intelligence Service",
      type: "LinkedIn",
      icon: "campaign",
      description: "Stop teaching every AI agent your codebase from scratch. Query repository intelligence live over local stdio MCP with 11 tool endpoints, saving up to 92% of context token budgets.",
      link: "https://www.linkedin.com/posts/vansharora2108_tokencap-mcp-ai-share-7483602223256465409-z1XG/"
    },
    {
      title: "Building TokenCap in Public",
      type: "LinkedIn",
      icon: "rocket_launch",
      description: "Reflections and journey on building TokenCap—an open-source, local-first context layer that makes project intelligence self-discoverable for AI coding agents.",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-ai-share-7484319017009184768-Q1oV/"
    },
    {
      title: "Building an Obsidian-Style Code Intelligence Graph",
      type: "DEV Community",
      icon: "account_tree",
      description: "A deep dive into how TokenCap builds a visual knowledge graph for JavaScript projects, helping developers understand architecture, dependencies, and relationships.",
      link: "https://dev.to/vansharora21/building-an-obsidian-style-code-intelligence-graph-for-any-javascript-project-1ep6"
    },
    {
      title: "Stop Dumping Your Entire Repository Into AI",
      type: "DEV Community",
      icon: "psychology",
      description: "Why more context is not always better. Learn how intelligent retrieval and context engineering can dramatically improve AI-assisted development.",
      link: "https://dev.to/vansharora21/stop-dumping-your-entire-repository-into-ai-3f9p"
    },
    {
      title: "TokenCap Official Blog",
      type: "Hashnode",
      icon: "article",
      description: "Official long-form articles, development updates, roadmap discussions, and future plans for TokenCap.",
      link: "https://tokencap.hashnode.dev/"
    }
  ];

  const timelineEvents = [
    {
      title: "TokenCap v1.6.0 Is Now Live (DEV.to)",
      date: "July 2026",
      icon: "rocket_launch",
      description: "Introducing the Token & Dollar Savings Engine, 12.2× average token reduction (94.3% cost savings), and 7 multi-host agent pointers.",
      link: "https://dev.to/vansharora21/tokencap-v160-is-now-live-3153"
    },
    {
      title: "TokenCap v1.6.0 Coverage (CoderLegion)",
      date: "July 2026",
      icon: "newspaper",
      description: "Featured article on CoderLegion covering TokenCap v1.6.0 savings engine and multi-host pointers.",
      link: "https://coderlegion.com/23530/tokencap-v1-6-0-is-now-live"
    },
    {
      title: "TokenCap v1.5 Release Announcement",
      date: "July 2026",
      icon: "hub",
      description: "Making MCP feel completely invisible with automatic startup builds, live repo background watching, and sub-2ms query responses.",
      link: "https://dev.to/vansharora21/tokencap-v15-making-mcp-feel-invisible-4ha4"
    },
    {
      title: "TokenCap MCP Launch Post",
      date: "July 2026",
      icon: "campaign",
      description: "Announcing Local Model Context Protocol (MCP) support with 11 stdio tool endpoints for AI agents.",
      link: "https://www.linkedin.com/posts/vansharora2108_tokencap-mcp-ai-share-7483602223256465409-z1XG/"
    },
    {
      title: "Building TokenCap in Public",
      date: "July 2026",
      icon: "rocket_launch",
      description: "Sharing the open-source context engineering journey, repository constitutions, and execution contracts.",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-ai-share-7484319017009184768-Q1oV/"
    },
    {
      title: "LinkedIn Initial Launch Post",
      date: "June 2026",
      icon: "tag",
      description: "Introduction to TokenCap and the vision behind context engineering for modern AI-assisted development.",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-artificialintelligence-ugcPost-7469654165498052608-rUeF/"
    },
    {
      title: "Obsidian Graph Release",
      date: "June 2026",
      icon: "map",
      description: "Launch announcement showcasing the new Obsidian-style project intelligence graph and visual code exploration capabilities.",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-developertools-share-7471947370956603393-O0le/"
    }
  ];

  const whyContentExits = [
    {
      title: "Local MCP Service",
      icon: "hub",
      text: "Query repository intelligence live over local stdio MCP with 11 endpoints and zero cloud exposure."
    },
    {
      title: "Context Engineering",
      icon: "settings_input_component",
      text: "Learn how modern AI systems work better when provided focused context instead of entire repositories."
    },
    {
      title: "Code Intelligence",
      icon: "account_tree",
      text: "Explore techniques for generating architecture maps, dependency graphs, and project knowledge automatically."
    }
  ];

  const gridResources = [
    {
      title: "TokenCap v1.6.0 Is Now Live",
      platform: "DEV Community",
      icon: "rocket_launch",
      description: "Token & Dollar Savings Engine, 12.2× average token reduction, and 7 multi-host pointers.",
      link: "https://dev.to/vansharora21/tokencap-v160-is-now-live-3153"
    },
    {
      title: "TokenCap v1.6.0 Article",
      platform: "CoderLegion",
      icon: "newspaper",
      description: "Featured article covering TokenCap v1.6.0 savings reporting and multi-host pointers.",
      link: "https://coderlegion.com/23530/tokencap-v1-6-0-is-now-live"
    },
    {
      title: "TokenCap v1.5 — Making MCP Feel Invisible",
      platform: "DEV Community",
      icon: "hub",
      description: "How TokenCap v1.5 eliminates manual setup and cold start overhead for Local MCP.",
      link: "https://dev.to/vansharora21/tokencap-v15-making-mcp-feel-invisible-4ha4"
    },
    {
      title: "TokenCap MCP: Local Repository Intelligence Service",
      platform: "LinkedIn",
      icon: "campaign",
      description: "Query repository intelligence live over local stdio MCP with 11 endpoints.",
      link: "https://www.linkedin.com/posts/vansharora2108_tokencap-mcp-ai-share-7483602223256465409-z1XG/"
    },
    {
      title: "Building TokenCap in Public",
      platform: "LinkedIn",
      icon: "rocket_launch",
      description: "Building an open-source, local-first context layer for AI coding agents.",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-ai-share-7484319017009184768-Q1oV/"
    },
    {
      title: "Building an Obsidian-Style Code Intelligence Graph",
      platform: "DEV Community",
      icon: "code",
      description: "A deep dive into how TokenCap builds visual knowledge graph models for dependencies.",
      link: "https://dev.to/vansharora21/building-an-obsidian-style-code-intelligence-graph-for-any-javascript-project-1ep6"
    },
    {
      title: "Stop Dumping Your Entire Repository Into AI",
      platform: "DEV Community",
      icon: "smart_toy",
      description: "Learn context engineering techniques to optimize LLM outputs and budgets.",
      link: "https://dev.to/vansharora21/stop-dumping-your-entire-repository-into-ai-3f9p"
    },
    {
      title: "TokenCap Blog",
      platform: "Hashnode",
      icon: "rss_feed",
      description: "Official articles, changelogs, architecture reviews, and long-term roadmap entries.",
      link: "https://tokencap.hashnode.dev/"
    }
  ];

  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Hero Section */}
      <header className="text-center max-w-3xl mx-auto mb-20 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pre-bg border border-card-border text-muted font-mono text-[10px] uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-555 animate-pulse"></span>
          TokenCap Articles & Updates
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight font-display">
          Learn How TokenCap Works
        </h1>
        <p className="text-sm leading-relaxed text-muted max-w-2xl mx-auto">
          Articles, release notes, technical deep dives, DEV.to posts, and LinkedIn build-in-public updates documenting the TokenCap journey.
        </p>
        <div className="flex justify-center gap-4 pt-4 font-mono text-xs">
          <button
            onClick={() => scrollToSection(gridRef)}
            className="bg-pre-bg border border-card-border hover:bg-card-hover text-foreground px-6 py-2.5 rounded-lg font-bold transition-all cursor-pointer"
            type="button"
          >
            Read Articles
          </button>
          <button
            onClick={() => scrollToSection(timelineRef)}
            className="border border-card-border text-muted hover:text-foreground hover:bg-pre-bg/40 px-6 py-2.5 rounded-lg font-bold transition-all cursor-pointer"
            type="button"
          >
            View Launch Posts
          </button>
        </div>
      </header>

      {/* Featured Content Section */}
      <section className="mb-24 space-y-8">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-card-border pb-3 font-mono">
          <span className="material-symbols-outlined text-muted text-base">stars</span>
          Featured Articles & Launches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between p-8 rounded-lg border border-card-border bg-card hover:border-card-hover transition-colors relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-card-border pb-2">
                  <span className="bg-pre-bg border border-card-border text-muted px-2.5 py-0.5 rounded text-[9px] font-mono font-bold">
                    {item.type}
                  </span>
                  <span className="material-symbols-outlined text-muted group-hover:text-foreground transition-colors text-sm">{item.icon}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-foreground/90 transition-colors leading-snug font-mono">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted mb-6">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted group-hover:text-foreground transition-colors mt-auto font-mono">
                <span>Read Full Post</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Build In Public Section */}
      <section ref={timelineRef} className="mb-24 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-sans">Building TokenCap In Public</h2>
          <p className="text-xs text-muted font-sans">Follow product launches, feature announcements, and development progress.</p>
        </div>
        <div className="relative border-l border-card-border max-w-3xl mx-auto pl-8 space-y-12">
          {timelineEvents.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-card border-2 border-card-border flex items-center justify-center text-foreground relative z-10 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[10px]">{item.icon}</span>
              </div>
              
              <div className="p-6 rounded-lg border border-card-border bg-card hover:border-card-hover transition-all duration-300">
                <div className="flex items-center justify-between mb-3 border-b border-card-border pb-2">
                  <h3 className="text-base font-bold text-foreground group-hover:text-foreground/90 transition-colors font-mono">{item.title}</h3>
                  <span className="text-xs text-muted font-mono">{item.date}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-foreground transition-colors font-mono hover:underline"
                >
                  <span>View Post</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why TokenCap Content Exists Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyContentExits.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-card-border bg-card flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-pre-bg border border-card-border flex items-center justify-center mb-6 text-muted">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-mono">{item.title}</h3>
              <p className="text-xs leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Grid Section */}
      <section ref={gridRef} className="mb-24 scroll-mt-24 space-y-8">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-card-border pb-3 font-mono">
          <span className="material-symbols-outlined text-muted text-base">grid_view</span>
          All Articles & External Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridResources.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 group hover:border-card-hover border border-card-border bg-card transition-colors flex flex-col justify-between rounded-lg h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-card-border pb-2">
                  <span className="text-[9px] font-mono font-medium text-muted uppercase tracking-wider">{item.platform}</span>
                  <span className="material-symbols-outlined text-muted group-hover:text-foreground text-sm transition-colors">{item.icon}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-foreground/90 transition-colors leading-snug font-mono">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted mb-6">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-card-border">
                <span className="text-xs text-muted group-hover:text-foreground font-bold font-mono">Read Article</span>
                <span className="material-symbols-outlined text-muted group-hover:text-foreground text-sm">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="mb-24 bg-card border border-card-border rounded-lg p-10 relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground font-mono">
              100%
            </div>
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Open Source Project</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground/90 font-mono">
              v1.5.0
            </div>
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest">npm Package</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground/90 font-mono">
              v1.5.0
            </div>
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest">VS Code Extension</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground font-mono">
              1,500+
            </div>
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Developer Community</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="p-12 relative overflow-hidden rounded-lg border border-card-border bg-card/45 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4 relative z-10 font-display">
            Start Understanding Your Codebase Instead of Explaining It
          </h2>
          <p className="text-xs text-muted leading-relaxed max-w-xl mx-auto mb-8 relative z-10">
            Generate project knowledge, query MCP local intelligence, and provide AI with the right context automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="/docs"
              className="bg-pre-bg border border-card-border hover:bg-card-hover text-foreground px-8 py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-95 transition-all text-xs font-mono block text-center"
            >
              Get Started
            </a>
            <a
              href="/mcp"
              className="border border-card-border text-muted hover:text-foreground hover:bg-pre-bg/40 px-8 py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-95 transition-all text-xs font-mono block text-center"
            >
              View MCP Guide
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
