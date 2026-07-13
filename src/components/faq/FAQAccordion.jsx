"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is TOKENCAP.md?",
    answer: (
      <div>
        <p className="mb-3">
          TOKENCAP.md is a production-ready, highly compressed codebase snapshot file that lives in your project root. It lists files, Git branch info, staged/unstaged diffs, and outlines of large files, so you can feed it to LLMs.
        </p>
        <div className="bg-[#1c1b1d] rounded-lg p-3 border border-[#4a4455]/40 font-mono text-xs text-[#4edea3]">
          <code>
            # TokenCap Project Snapshot<br />
            &gt; version: 0.9.0<br />
            &gt; profile: balanced
          </code>
        </div>
      </div>
    ),
  },
  {
    question: "Does TokenCap upload my code?",
    answer: "No. TokenCap runs entirely on your local machine. All file scanning, knowledge graph compilation, and context memory tracking happen locally. No code is ever uploaded to any cloud service.",
  },
  {
    question: "Does it work with Cursor?",
    answer: "Yes. Simply run `tokencap make` and load `TOKENCAP.md` or `TOKENCAP_MEMORY.md` into Cursor's chat or composer context to give it complete, prompt-optimized project context.",
  },
  {
    question: "Which LLMs are supported?",
    answer: "TokenCap is model-agnostic. It includes 8 context profiles tuned for different LLM context windows (from compact 40KB for local models to 1.2MB for Gemini 1.5 Pro).",
  },
  {
    question: "How do I ignore specific files?",
    answer: "TokenCap respects your `.gitignore` file automatically. You can also specify an `excludePatterns` array in your local `.tokencap.json` file.",
  },
  {
    question: "Is there a file limit?",
    answer: "By default, TokenCap profiles limit the maximum number of included files to prevent context window overflow (e.g., max 90 files for the balanced profile). You can customize this in `.tokencap.json`.",
  },
  {
    question: "What is the Project Knowledge Graph?",
    answer: "TokenCap generates `TOKENCAP_GRAPH.md` which maps import/export and require relationships across your JS/TS files, classifying routes, components, services, database models, and configuration files.",
  },
  {
    question: "Is TokenCap open source?",
    answer: "Yes, TokenCap is completely open-source under the MIT license, free to use, and runs 100% offline.",
  },
];

export function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = !!openIndexes[index];
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div
            key={index}
            className="accordion-item glass-panel rounded-xl glow-hover overflow-hidden transition-all duration-300 border border-white/10 bg-white/5"
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2 rounded-xl"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base font-bold text-white">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 text-zinc-400 ${
                  isOpen ? "rotate-180 text-white" : ""
                }`}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="p-5 border-t border-[#4a4455]/20 text-sm leading-relaxed text-[#ccc3d8]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
