"use client";

import { useEffect, useState, useRef } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion, useInView } from "framer-motion";

// Helper component for count-up animations
function AnimatedCounter({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    const endVal = parseInt(end, 10);
    if (isNaN(endVal)) {
      setCount(end); // Fallback for version strings
      return;
    }
    
    let start = 0;
    const incrementTime = Math.max(Math.floor(duration / endVal), 25);
    
    const timer = setInterval(() => {
      start += Math.ceil(endVal / 50); // Increment proportionally to speed up
      if (start >= endVal) {
        start = endVal;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function ResourcesClient() {
  const timelineRef = useRef(null);
  const gridRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const featuredContent = [
    {
      title: "Building an Obsidian-Style Code Intelligence Graph",
      type: "DEV Community",
      icon: "account_tree",
      description: "A deep dive into how TokenCap builds a visual knowledge graph for JavaScript projects, helping developers understand architecture, dependencies, and relationships inside large codebases.",
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
      title: "TokenCap Blog",
      type: "Hashnode",
      icon: "article",
      description: "Official long-form articles, development updates, roadmap discussions, and future plans for TokenCap.",
      link: "https://tokencap.hashnode.dev/"
    }
  ];

  const timelineEvents = [
    {
      title: "LinkedIn Launch Post",
      date: "June 2026",
      icon: "rocket_launch",
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
      title: "Context Engineering",
      icon: "settings_input_component",
      text: "Learn how modern AI systems work better when provided focused context instead of entire repositories."
    },
    {
      title: "Code Intelligence",
      icon: "hub",
      text: "Explore techniques for generating architecture maps, dependency graphs, and project knowledge automatically."
    },
    {
      title: "AI Developer Workflows",
      icon: "terminal",
      text: "Discover workflows that improve AI accuracy, reduce token usage, and accelerate development."
    }
  ];

  const gridResources = [
    {
      title: "Building an Obsidian-Style Code Intelligence Graph",
      platform: "DEV Community",
      icon: "code",
      description: "A deep dive into how TokenCap builds visual graph models for code dependencies.",
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
      description: "Official articles, changelogs, architecture reviews, and long-form long-term roadmap entries.",
      link: "https://tokencap.hashnode.dev/"
    },
    {
      title: "LinkedIn Launch Post",
      platform: "LinkedIn",
      icon: "campaign",
      description: "Vision summary and introductory video covering the core features of the TokenCap CLI.",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-artificialintelligence-ugcPost-7469654165498052608-rUeF/"
    },
    {
      title: "Obsidian Graph Release",
      platform: "LinkedIn",
      icon: "share",
      description: "Announcement details showing visual exploration and local graph Presets (--open / --full).",
      link: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-developertools-share-7471947370956603393-O0le/"
    }
  ];

  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <header className="text-center max-w-3xl mx-auto mb-24 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#d2bbff] font-mono text-[10px] uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff] animate-pulse"></span>
          TokenCap Hub
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Learn How <span className="text-[#d2bbff]">TokenCap</span> Works
        </h1>
        <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-2xl mx-auto">
          Articles, release notes, technical deep dives, and build-in-public updates documenting the journey of TokenCap.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection(gridRef)}
            className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.15)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">article</span>
            Read Articles
          </button>
          <button
            onClick={() => scrollToSection(timelineRef)}
            className="border border-[#4a4455] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#2a2a2c]/50 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">history</span>
            View Updates
          </button>
        </div>
      </header>

      {/* Featured Content Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#d2bbff]">stars</span>
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between glass-card p-8 rounded-xl border-white/5 bg-white/5 hover:border-[#7c3aed]/40 hover:scale-[1.01] transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#d2bbff] px-2.5 py-0.5 rounded-md text-xs font-mono font-bold">
                    {item.type}
                  </span>
                  <span className="material-symbols-outlined text-zinc-500 group-hover:text-white transition-colors">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d2bbff] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#ccc3d8] mb-6">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#d2bbff] group-hover:underline mt-auto">
                <span>Go to Article</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Build In Public Section */}
      <section ref={timelineRef} className="mb-24 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">Building TokenCap In Public</h2>
          <p className="text-xs text-[#ccc3d8]">Follow product launches, feature announcements, and development progress.</p>
        </div>
        <div className="relative border-l border-[#4a4455]/40 max-w-3xl mx-auto pl-8 space-y-12">
          {timelineEvents.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-[#0a0a0c] border-2 border-[#7c3aed] flex items-center justify-center text-[#d2bbff] relative z-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[10px]">{item.icon}</span>
              </div>
              
              <div className="glass-panel p-6 rounded-xl border-white/5 bg-white/5 hover:border-[#7c3aed]/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d2bbff] transition-colors">{item.title}</h3>
                  <span className="text-xs text-zinc-500 font-mono">{item.date}</span>
                </div>
                <p className="text-xs leading-relaxed text-[#ccc3d8] mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#d2bbff] hover:underline"
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
              className="glass-panel p-8 rounded-xl border-[#4a4455]/20 bg-[#0e0e10]/30 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-[#353437]/50 border border-white/5 flex items-center justify-center mb-6 text-[#d2bbff]">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs leading-relaxed text-[#ccc3d8]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Grid Section */}
      <section ref={gridRef} className="mb-24 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#d2bbff]">grid_view</span>
          All Resources & Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridResources.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col justify-between rounded-lg h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-wider">{item.platform}</span>
                  <span className="material-symbols-outlined text-zinc-500 group-hover:text-[#d2bbff] text-sm transition-colors">{item.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#d2bbff] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#ccc3d8] mb-6">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-[#d2bbff] font-bold group-hover:underline">Read Article</span>
                <span className="material-symbols-outlined text-zinc-500 group-hover:text-white text-sm">open_in_new</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="mb-24 bg-[#0e0e10]/40 border border-[#4a4455]/20 rounded-2xl p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end="100" suffix="%" />
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Open Source Project</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#d2bbff]">
              v<AnimatedCounter end="0" />.8.0
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">npm Package</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#d2bbff]">
              v<AnimatedCounter end="0" />.8.0
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">VS Code Extension</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end="1500" suffix="+" />
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Developer Community</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="glass-card p-12 relative overflow-hidden rounded-xl border-[#7c3aed]/20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#7c3aed]/5 blur-[120px] rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 relative z-10">
            Start Understanding Your Codebase Instead of Explaining It
          </h2>
          <p className="text-xs text-[#ccc3d8] leading-relaxed max-w-xl mx-auto mb-8 relative z-10">
            Generate project knowledge, visualize architecture, and provide AI with the right context automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="/docs"
              className="bg-[#7c3aed] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(124,58,237,0.15)] block text-center"
            >
              Get Started
            </a>
            <a
              href="/docs#cli"
              className="border border-[#4a4455] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2a2a2c]/50 transition-all active:scale-95 block text-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
