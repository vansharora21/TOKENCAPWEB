<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Audit & Code Quality

**Before writing any code, read `docs/CODE-AUDIT-REPORT.md`** — it contains the full code audit with known bugs, accessibility violations, performance issues, and architectural debt. Your changes must not introduce new findings from this report.

### Known Issues (Do Not Re-Introduce)

- **Accessibility:** All interactive elements must use semantic `<button>` elements, include `aria-expanded` for toggles, and preserve focus-visible rings. No clickable `<div>` elements.
- **Performance:** Do not inject inline `<style>` tags in components. All keyframes and animations belong in `src/styles/animations.css` or `src/app/globals.css`.
- **Data layer:** Content lives in `src/data/*.js`. Do not create duplicate content in `src/website-content/*.json` — that format is only for the README generator script.
- **Fonts:** Material Symbols is loaded via `<link>` in `layout.jsx`. Do not add a second load mechanism.
- **Memoization:** Components that parse or transform data on every render should use `useMemo`.

### Architecture Rules

- Server components for pages (`src/app/`), client components for interactive elements (`src/components/`)
- Use the `cn()` utility from `src/lib/utils.js` for class merging — never raw template literals for conditional classes
- Extract shared UI patterns (sidebar nav, terminal mockups, version cards) into reusable components before duplicating JSX
- Keep data arrays at module scope, never inside render functions
