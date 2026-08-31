"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";

const linkedinResources = [
  {
    version: "v2.0.0",
    date: "August 2026",
    title: "TokenCap v2.0.0 Release Update",
    platform: "LinkedIn",
    description: "The v2.0.0 release story, the 2,000-download v1.9.0 milestone, and the early TokenCap Companion research direction.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7493024395335151616/",
    type: "Release Announcement",
  },
  {
    version: "v1.5.0",
    date: "July 2026",
    title: "TokenCap MCP: Local Repository Intelligence Service",
    platform: "LinkedIn",
    description: "Stop teaching every AI agent your codebase from scratch. Query repository intelligence live over local stdio MCP with 11 tool endpoints, saving up to 92% of context token budgets.",
    link: "https://www.linkedin.com/posts/vansharora2108_tokencap-mcp-ai-share-7483602223256465409-z1XG/",
    type: "Feature Launch",
  },
  {
    version: "v1.5.0",
    date: "July 2026",
    title: "Building TokenCap in Public",
    platform: "LinkedIn",
    description: "Reflections and journey on building TokenCap—an open-source, local-first context layer that makes project intelligence self-discoverable for AI coding agents.",
    link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-ai-share-7484319017009184768-Q1oV/",
    type: "Build in Public",
  },
  {
    version: "v1.0.0",
    date: "June 2026",
    title: "Obsidian Graph Release",
    platform: "LinkedIn",
    description: "Launch announcement showcasing the new Obsidian-style project intelligence graph and visual code exploration capabilities.",
    link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-developertools-share-7471947370956603393-O0le/",
    type: "Architecture",
  },
  {
    version: "v1.0.0",
    date: "June 2026",
    title: "LinkedIn Initial Launch Post",
    platform: "LinkedIn",
    description: "Introduction to TokenCap and the vision behind context engineering for modern AI-assisted development.",
    link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-artificialintelligence-ugcPost-7469654165498052608-rUeF/",
    type: "Initial Launch",
  },
];

const coderLegionResources = [
  {
    version: "v2.0.0",
    date: "August 2026",
    title: "TokenCap v2.0.0 Is Now Ready",
    platform: "CoderLegion",
    description: "TokenCap v2.0.0 combines seven-language parsing, symbol-level impact analysis, frontend intelligence, scalable workspace context, and local-first privacy.",
    link: "https://coderlegion.com/24452/tokencap-v2-0-0-is-now-ready?prompt=cl_badge_remind",
    type: "Featured Article",
  },
  {
    version: "v1.6.0",
    date: "July 2026",
    title: "TokenCap v1.6.0 Featured Coverage",
    platform: "CoderLegion",
    description: "Read the CoderLegion featured article covering TokenCap v1.6.0 real-time savings reporting, multi-host pointers, and verified benchmarks.",
    link: "https://coderlegion.com/23530/tokencap-v1-6-0-is-now-live",
    type: "Featured Article",
  },
];

const otherArticles = [
  {
    version: "v1.6.0",
    date: "July 2026",
    title: "TokenCap v1.6.0 Is Now Live",
    platform: "DEV Community",
    description: "Introducing the Token & Dollar Savings Engine, 12.2× average token reduction (94.3% cost savings), non-overwriting multi-host pointers for 7 AI hosts, and CI-enforced zero egress.",
    link: "https://dev.to/vansharora21/tokencap-v160-is-now-live-3153",
    type: "Technical Guide",
  },
  {
    version: "v1.5.0",
    date: "July 2026",
    title: "TokenCap v1.5 — Making MCP Feel Invisible",
    platform: "DEV Community",
    description: "How TokenCap v1.5 eliminates manual setup and cold start overhead for Local Model Context Protocol (MCP), delivering live repository watching, auto-initialization, and sub-2ms query responses.",
    link: "https://dev.to/vansharora21/tokencap-v15-making-mcp-feel-invisible-4ha4",
    type: "Technical Deep Dive",
  },
  {
    version: "v1.0.0",
    date: "June 2026",
    title: "Building an Obsidian-Style Code Intelligence Graph",
    platform: "DEV Community",
    description: "A deep dive into how TokenCap builds a visual knowledge graph for JavaScript projects, helping developers understand architecture, dependencies, and relationships.",
    link: "https://dev.to/vansharora21/building-an-obsidian-style-code-intelligence-graph-for-any-javascript-project-1ep6",
    type: "Engineering Story",
  },
  {
    version: "v1.0.0",
    date: "June 2026",
    title: "Stop Dumping Your Entire Repository Into AI",
    platform: "DEV Community",
    description: "Why more context is not always better. Learn how intelligent retrieval and context engineering can dramatically improve AI-assisted development.",
    link: "https://dev.to/vansharora21/stop-dumping-your-entire-repository-into-ai-3f9p",
    type: "Context Engineering",
  },
  {
    version: "Publication",
    date: "Continuous",
    title: "TokenCap Official Blog",
    platform: "Hashnode",
    description: "Official long-form articles, development updates, roadmap discussions, and future architectural plans for TokenCap.",
    link: "https://tokencap.hashnode.dev/",
    type: "Official Publication",
  },
];

export function ResourcesClient() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted">
          RESOURCES & PUBLICATIONS
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-sans">
          Articles, Updates & Media
        </h1>
        <p className="text-sm leading-relaxed text-muted max-w-2xl mx-auto">
          Explore technical deep dives, launch updates, and community coverage across LinkedIn, CoderLegion, DEV Community, and Hashnode — ordered by release version.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {[
            { id: "all", label: "All Resources", count: linkedinResources.length + coderLegionResources.length + otherArticles.length },
            { id: "linkedin", label: "LinkedIn Updates", count: linkedinResources.length },
            { id: "coderlegion", label: "CoderLegion", count: coderLegionResources.length },
            { id: "articles", label: "Technical Articles", count: otherArticles.length },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`
                  flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg border transition-all cursor-pointer
                  ${isActive
                    ? "bg-foreground text-background border-foreground font-bold"
                    : "bg-card border-card-border text-muted hover:text-foreground hover:bg-card-hover"
                  }
                `}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isActive ? "bg-background/20 text-background" : "bg-pre-bg text-muted"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Sections Container */}
      <div className="space-y-20">
        
        {/* 1. LinkedIn Section (Ordered Version Wise) */}
        {(activeTab === "all" || activeTab === "linkedin") && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-card-border pb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-muted text-xl">campaign</span>
                <div>
                  <h2 className="text-xl font-bold text-foreground font-sans">
                    LinkedIn Updates & Build in Public
                  </h2>
                  <p className="text-xs text-muted font-sans">
                    Product milestones, launch notes, and build-in-public journey on LinkedIn
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-muted self-start sm:self-auto">
                {linkedinResources.length} posts · Sorted v2.0.0 → v1.0.0
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {linkedinResources.map((item, idx) => (
                <ResourceCard key={idx} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* 2. CoderLegion Section (Ordered Version Wise) */}
        {(activeTab === "all" || activeTab === "coderlegion") && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-card-border pb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-muted text-xl">newspaper</span>
                <div>
                  <h2 className="text-xl font-bold text-foreground font-sans">
                    CoderLegion Publications
                  </h2>
                  <p className="text-xs text-muted font-sans">
                    Featured developer articles and editorial coverage published on CoderLegion
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-muted self-start sm:self-auto">
                {coderLegionResources.length} articles · Sorted v2.0.0 → v1.6.0
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coderLegionResources.map((item, idx) => (
                <ResourceCard key={idx} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* 3. Technical Articles & Community Deep Dives (DEV.to & Hashnode) */}
        {(activeTab === "all" || activeTab === "articles") && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-card-border pb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-muted text-xl">article</span>
                <div>
                  <h2 className="text-xl font-bold text-foreground font-sans">
                    Technical Articles & Deep Dives
                  </h2>
                  <p className="text-xs text-muted font-sans">
                    Architecture deep dives, context engineering essays on DEV Community & official Hashnode blog
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-muted self-start sm:self-auto">
                {otherArticles.length} guides · Sorted v1.6.0 → v1.0.0
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((item, idx) => (
                <ResourceCard key={idx} item={item} />
              ))}
            </div>
          </section>
        )}

      </div>
    </PageWrapper>
  );
}

function ResourceCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="p-6 rounded-xl border border-card-border bg-card hover:border-card-hover transition-all flex flex-col justify-between h-full group select-none shadow-sm hover:shadow-md"
    >
      <div className="space-y-4">
        {/* Card Header: Version & Platform Badges */}
        <div className="flex items-center justify-between gap-2 border-b border-card-border pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-pre-bg border border-card-border text-foreground">
              {item.version}
            </span>
            <span className="text-[10px] font-mono text-muted/70">
              {item.date}
            </span>
          </div>
          <span className="text-[10px] font-mono font-medium text-muted uppercase tracking-wider">
            {item.platform}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-foreground group-hover:text-foreground/90 transition-colors leading-snug font-sans">
            {item.title}
          </h3>
          <p className="text-xs text-muted leading-relaxed font-sans line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Action Link */}
      <div className="pt-4 mt-6 border-t border-card-border flex items-center justify-between font-mono text-xs text-muted group-hover:text-foreground transition-colors">
        <span className="text-[11px] font-medium">{item.type}</span>
        <div className="flex items-center gap-1 font-bold">
          <span>Read</span>
          <span className="material-symbols-outlined text-[13px]">open_in_new</span>
        </div>
      </div>
    </a>
  );
}
