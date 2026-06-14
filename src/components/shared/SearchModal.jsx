"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { docsSections } from "@/data/docs";
import { commands } from "@/data/commands";
import featuresData from "@/website-content/features.json";

function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Slash key
      if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        e.preventDefault();
        setIsOpen(true);
      }
      // Escape key
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenSearchEvent = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearchEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleOpenSearchEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    // 1. Search Docs
    const docsResults = docsSections
      .filter(
        (doc) =>
          doc.title.toLowerCase().includes(lowerQuery) ||
          doc.content.toLowerCase().includes(lowerQuery)
      )
      .map((doc) => ({
        type: "documentation",
        title: doc.title,
        description: doc.content.slice(0, 120) + "...",
        url: `/docs#${doc.slug}`,
        icon: "description",
      }));

    // 2. Search Commands
    const commandResults = commands
      .filter(
        (cmd) =>
          cmd.command.toLowerCase().includes(lowerQuery) ||
          cmd.description.toLowerCase().includes(lowerQuery)
      )
      .map((cmd) => ({
        type: "commands",
        title: cmd.command,
        description: cmd.description,
        url: "/docs#cli",
        icon: "terminal",
      }));

    // 3. Search Features
    const featureResults = featuresData
      .filter(
        (feat) =>
          feat.title.toLowerCase().includes(lowerQuery) ||
          feat.description.toLowerCase().includes(lowerQuery)
      )
      .map((feat) => ({
        type: "features",
        title: feat.title,
        description: feat.description,
        url: "/features",
        icon: "featured_play_list",
      }));

    const allResults = [...docsResults, ...commandResults, ...featureResults];
    setResults(allResults);
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (url) => {
    setIsOpen(false);
    router.push(url);
  };

  const handleKeyDownInModal = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].url);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#0a0a0c]/80 p-4 pt-[10vh] backdrop-blur-md">
      {/* Click outside to close */}
      <div className="fixed inset-0 -z-10" onClick={() => setIsOpen(false)} />

      <div
        ref={modalRef}
        onKeyDown={handleKeyDownInModal}
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#121215]/90 shadow-2xl backdrop-blur-xl transition-all flex flex-col max-h-[60vh]"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
          <span className="material-symbols-outlined text-zinc-400">search</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search docs, features, and commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none text-base font-medium"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {results.length > 0 ? (
            <div className="space-y-1.5">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(result.url)}
                  className={`flex items-start gap-4 p-3.5 rounded-xl cursor-pointer transition-all border ${
                    idx === selectedIndex
                      ? "bg-purple-500/10 border-purple-500/30 text-white shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                      : "border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 flex items-center justify-center ${
                      idx === selectedIndex
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{result.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-bold text-sm truncate text-white">{result.title}</h4>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-500">
                        {result.type}
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-zinc-400 leading-relaxed truncate">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="py-12 text-center text-zinc-500">
              <span className="material-symbols-outlined text-4xl mb-3 block">search_off</span>
              <p className="text-sm font-medium">No results found for "{query}"</p>
              <p className="text-xs mt-1 text-zinc-600">Try searching for other terms like 'make', 'profiles', or 'git'</p>
            </div>
          ) : (
            <div className="py-8 text-center text-zinc-500">
              <p className="text-sm font-medium">Type to search</p>
              <p className="text-xs mt-1 text-zinc-600">Search for commands, features, and documentation</p>
              <div className="flex items-center justify-center gap-4 mt-6 text-[11px] font-mono">
                <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">↑↓</kbd> to navigate</span>
                <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">Enter</kbd> to select</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { SearchModal };
