# TokenCap Frontend — Full Code Audit Report

**Project:** TokenCap Developer Platform Frontend  
**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion · Radix UI  
**Pages:** 9 route pages · ~50 components · 88 source files  
**Date:** July 14, 2026

---

## 📋 What This Codebase Does

TokenCap is a **marketing/documentation website** for a CLI tool called "TokenCap" — a local-first developer tool that generates AI-ready context snapshots of your codebase. The frontend is a static marketing site with:

- **Home page** — Hero, feature previews, workflow animation, testimonials, CTA
- **Features page** — Version history cards, feature grid
- **Docs page** — Dynamic `[slug]` routing with sidebar navigation, markdown rendering, table of contents
- **CLI page** — Command reference with terminal mockups
- **FAQ page** — Accordion with sidebar navigation
- **About page** — Mission, philosophy, bento grid layout
- **VS Code page** — Extension showcase
- **Roadmap page** — Version timeline
- **Changelog page** — Release notes

---

## 🏗️ Architecture Overview

```
src/
├── app/              ← 9 Next.js App Router pages (server components)
├── components/       ← ~50 React components (mostly client)
├── data/             ← JS data exports (used by components)
├── website-content/  ← JSON data (used by README generator + search)
├── lib/              ← constants, SEO helpers, cn() utility
└── styles/           ← animations.css + globals.css
```

**Key architectural patterns:**

- Server components for pages, client components for interactive elements
- Data-driven content (data files → components)
- Custom glass-panel/glow design system via CSS utilities
- Framer Motion for page transitions and scroll animations

---

## 🚨 Critical Findings

### 1. Dual Data Source — Single Source of Truth Broken (CRITICAL)

| Content | `src/data/*.js` | `src/website-content/*.json` |
|---|---|---|
| Homepage hero | Identical copy | Identical copy |
| Features | **4 items** | **21 items** |
| Commands | No `example`/`options` | Has `example`/`options` |
| Navigation | `title` key | `heading` key |

**Impact:** Editing `homepage.json` won't update the homepage. The features page shows 4 features while 21 exist. Schema drift between the two sources will silently cause bugs.

**Fix:** Pick one source. Make `src/data/*.js` re-export from JSON, or delete the JS files and import JSON directly.

### 2. Material Symbols Font Loaded Twice (MEDIUM)

Loaded via `<link>` in `layout.jsx` AND `@import` in `globals.css`. This double-downloads ~200KB+ and creates render-blocking requests.

**Fix:** Remove one of the two load mechanisms.

### 3. Pricing Page Route Missing (HIGH)

`src/app/pricing/page.jsx` exists with a full component but the route appears broken or the component is missing. If any nav links point to `/pricing`, users will 404.

### 4. MarkdownRenderer — Broken Heading Hierarchy (HIGH)

`###` in markdown maps to `<h4>`, `##` maps to `<h3>`, `#` maps to `<h2>`. The semantic heading structure is inverted — every heading is one level too deep. This breaks screen reader navigation and SEO.

**File:** `src/components/docs/MarkdownRenderer.jsx` — 243 lines  
Also has: unclosed code blocks silently dropped, no `useMemo`, no support for ordered lists/blockquotes/images.

---

## 🎯 Accessibility Violations

| Severity | Issue | Location |
|---|---|---|
| **HIGH** | Clickable `<div>` with no `role="button"`, no `tabIndex`, no keyboard handler | `FeaturesPreview.jsx` (3 cards) |
| **HIGH** | FAQ accordion removes focus ring (`focus:outline-none`) with no visible replacement | `FAQAccordion.jsx` |
| **HIGH** | FAQ button missing `aria-expanded` and `aria-controls` | `FAQAccordion.jsx` |
| **HIGH** | Loading skeleton has no `role="status"` or aria-label | `loading.jsx` |
| **MEDIUM** | No skip-to-content link for keyboard users | `layout.jsx` |
| **MEDIUM** | Mobile nav button missing `aria-expanded` | `Navbar.jsx` |
| **MEDIUM** | VS Code and terminal mockups not `aria-hidden` | `vscode/page.jsx`, `cli/page.jsx` |
| **MEDIUM** | SVG animation has no `<title>` or `aria-label` | `HowItWorks.jsx` |
| **MEDIUM** | Terminal has no `role="log"` or `aria-live` | `ProductPreview.jsx` |
| **LOW** | Aside nav missing `aria-label` | Multiple pages |
| **LOW** | Button missing `aria-disabled` | `button.jsx` |

---

## 🐛 Bugs

| Severity | Issue | Location |
|---|---|---|
| **HIGH** | FAQ content clipped at `max-h-[300px]` — long answers cut off with no scroll | `FAQAccordion.jsx:89` |
| **HIGH** | Heading hierarchy inverted in markdown renderer | `MarkdownRenderer.jsx` |
| **MEDIUM** | `--impact` flag appears twice with conflicting docs | `cli/page.jsx` |
| **MEDIUM** | Unclosed code blocks silently dropped | `MarkdownRenderer.jsx` |
| **MEDIUM** | Duplicate version keys (`0.10.0` ×2, `0.11.0` ×2) | `roadmap.js` |
| **MEDIUM** | `parseTerminalLine` uses brittle `.substring(N)` — any text change breaks rendering | `ProductPreview.jsx:102-278` |
| **LOW** | `setTimeout` not cleaned on unmount (memory leak) | `CopyButton.jsx`, `FinalCTA.jsx` |
| **LOW** | Cursor blink causes full component re-render 2×/sec | `ProductPreview.jsx` |
| **LOW** | Loading skeleton has no animation class | `loading.jsx` |

---

## ⚡ Performance Issues

| Severity | Issue | Location |
|---|---|---|
| **MEDIUM** | Google Fonts loaded twice (Next.js font + raw `<link>`) | `layout.jsx` |
| **MEDIUM** | `@import url()` is render-blocking in CSS | `globals.css:1` |
| **MEDIUM** | Global `<style>` tags injected inside components on every render | `FeaturesPreview.jsx`, `HowItWorks.jsx` |
| **MEDIUM** | `parseTerminalLine` creates new JSX on every render for every line | `ProductPreview.jsx` |
| **LOW** | `navItems` array recreated on every render | `Navbar.jsx` |
| **LOW** | Regex recompiled on every `parseInline` call | `MarkdownRenderer.jsx` |
| **LOW** | No `React.memo` on any component | All files |
| **LOW** | Cursor blink `setInterval` + `setState` triggers full 400-line re-render | `ProductPreview.jsx` |

---

## 🏛️ Maintainability & Code Quality

### Duplication Hotspots

| Pattern | Files | Lines Wasted |
|---|---|---|
| Terminal mockup (same structure ×9) | `cli/page.jsx` | ~300 lines |
| Version history cards (same ×11) | `features/page.jsx` | ~280 lines |
| Section wrappers (same padding/border) | `page.jsx` (home) | ~20 lines |
| Feature cards (same glass-card ×3) | `FeaturesPreview.jsx` | ~150 lines |
| Sidebar nav (same structure) | `cli/page.jsx`, `faq/page.jsx`, `docs/[slug]/page.jsx` | ~90 lines |

### Dead Code

| Item | Location |
|---|---|
| `.glass-card` class (alias of `.glass-panel`) | `globals.css:46` |
| `.terminal-glow`, `.code-glow` (identical to `.glow-primary`) | `globals.css:53-63` |
| `ogTitle` / `ogDescription` (duplicates `name` / `description`) | `constants.js` |
| `url` / `canonicalUrl` (identical values) | `constants.js` |

### Code Smells

- **Inline arrays in render functions** — `sidebarItems`, `communityItems`, `tableOptions` defined inside component body (should be module-scope)
- **`glass-panel` / `glass-card`** used interchangeably everywhere — pick one name
- **Hardcoded color hex codes** (`#d2bbff`, `#7c3aed`, `#4a4455`, `#ccc3d8`) scattered everywhere instead of CSS custom properties or Tailwind config
- **No TypeScript** — entire project uses `.js`/`.jsx` with zero type safety

---

## 📊 Quality Scores by Axis

| Axis | Score | Notes |
|---|---|---|
| **Correctness** | 6/10 | Core functionality works, but heading hierarchy is broken, data sources diverge, and FAQ clips content |
| **Security** | 8/10 | No secrets exposed, proper `rel="noreferrer"` on external links. Private LAN IP in config is minor |
| **Performance** | 5/10 | Double font loads, render-blocking CSS, inline `<style>` tags, cursor causing 2×/sec re-renders, no memoization |
| **Accessibility** | 3/10 | Major keyboard navigation failures (clickable divs, no focus rings, missing ARIA states, no skip-to-content) |
| **Maintainability** | 4/10 | Massive duplication (~1000+ lines of near-identical JSX), dual data sources, no TypeScript, no shared layout components |
| **Architecture** | 5/10 | Good App Router usage, but sidebar nav duplicated 3×, data layer split across two incompatible sources |

---

## 🎯 Overall Code Quality Rating

# 5 / 10

**Summary:** The site *works* and has a polished visual design, but underneath the surface it suffers from significant technical debt. The accessibility failures are the most serious — keyboard users and screen reader users are effectively locked out of interactive elements. The dual data source architecture is a ticking time bomb for content drift. The ~1000+ lines of duplicated JSX across features, CLI, and FAQ pages make the codebase fragile and hard to extend.

---

## 🏁 Top 5 Priorities to Fix

1. **Fix accessibility** — Replace clickable `<div>`s with `<button>`, add `aria-expanded`, restore focus rings, add skip-to-content link
2. **Unify data sources** — Pick `src/data/*.js` OR `src/website-content/*.json`, not both
3. **Extract shared components** — `SidebarNav`, `TerminalMockup`, `VersionCard` to eliminate ~800 lines of duplication
4. **Fix MarkdownRenderer** — Correct heading levels, handle unclosed blocks, memoize parser
5. **Fix performance** — Remove duplicate font loads, move `<style>` tags to global CSS, memoize `ProductPreview` cursor blink

---

## 📁 File-by-File Review Summary

### Pages (src/app/)

| File | Lines | Key Issues |
|---|---|---|
| `layout.jsx` | 58 | Double font load, no skip-to-content, SearchModal rendered on every page |
| `page.jsx` | 62 | Section wrapper classes duplicated 5× |
| `loading.jsx` | 16 | No animation, no `role="status"` |
| `features/page.jsx` | 611 | Massive JSX duplication (11 identical version cards) |
| `cli/page.jsx` | 515 | 9× identical terminal mockups, duplicated sidebar |
| `faq/page.jsx` | ~200 | Duplicated sidebar from CLI page |
| `vscode/page.jsx` | 246 | Decorative mockup not `aria-hidden` |
| `roadmap/page.jsx` | 19 | Clean, well-delegated |
| `changelog/page.jsx` | 19 | Clean, well-delegated |

### Components (src/components/)

| File | Lines | Key Issues |
|---|---|---|
| `Navbar.jsx` | 94 | Missing `aria-expanded`, navItems recreated per render |
| `Footer.jsx` | 130 | Duplicated URLs, dead CSS classes |
| `PageWrapper.jsx` | 28 | Clean |
| `FeaturesPreview.jsx` | 265 | **Inaccessible clickable divs**, 150 lines of duplication, inline `<style>` |
| `HowItWorks.jsx` | 219 | SVG missing accessible labels, inline `<style>` |
| `ProductPreview.jsx` | 400 | 176-line brittle if-chain, cursor causes 2×/sec re-render, no ARIA |
| `FAQAccordion.jsx` | 101 | Content clipped at 300px, no focus ring, missing ARIA |
| `MarkdownRenderer.jsx` | 243 | **Broken heading hierarchy**, unclosed blocks dropped |
| `CopyButton.jsx` | 29 | Memory leak (uncleaned timeout) |
| `FinalCTA.jsx` | 99 | Minor timeout leak |
| `Hero.jsx` | 36 | Clean |
| `Testimonials.jsx` | 25 | Clean |
| `CLISection.jsx` | 22 | Clean |
| `FeatureCard.jsx` | 13 | Clean |
| `FeatureGrid.jsx` | 14 | Clean |
| `FeatureShowcase.jsx` | 21 | Clean |
| `Badge.jsx` | 7 | Clean |
| `CTAButton.jsx` | 12 | No href validation |
| `CodeBlock.jsx` | 7 | Clean |
| `GradientBackground.jsx` | 12 | Clean |
| `SectionHeading.jsx` | 14 | Clean |
| `button.jsx` | 32 | Missing `aria-disabled` |

### Data Layer (src/data/)

| File | Lines | Key Issues |
|---|---|---|
| `docs.js` | 98 | Long single-line strings, fragile ordering |
| `features.js` | 12 | **Stale** — 4 items vs 21 in JSON |
| `commands.js` | 52 | Incomplete schema vs JSON |
| `home.js` | 41 | **100% duplicate** of homepage.json |
| `navigation.js` | 54 | Schema drift vs JSON (`title` vs `heading`) |
| `faq.js` | 17 | Clean |
| `changelog.js` | 87 | Clean |
| `roadmap.js` | 34 | Duplicate version keys |
| `vscode.js` | 8 | Clean |
| `about.js` | 17 | Placeholder year values |
| `testimonials.js` | 13 | Clean |

### Configuration

| File | Lines | Key Issues |
|---|---|---|
| `next.config.mjs` | 10 | Private LAN IP exposed |
| `eslint.config.mjs` | 16 | Clean |
| `package.json` | 32 | Clean |
| `scripts/generate-readme.js` | 93 | Tightly coupled to JSON format |

---

*Report generated by automated code review — July 14, 2026*
