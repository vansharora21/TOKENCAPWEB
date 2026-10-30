// Site themes. `mode` sets the light/dark base the older pages style against;
// `scene` colours the home-page 3D model. The page colours for each theme live in
// app/globals.css under html[data-theme=...] and must match `scene.ground` here.

export const themes = [
  {
    id: "graphite",
    label: "Graphite",
    mode: "dark",
    scene: { ground: "#141619", block: "#3a3e45", accent: "#f0662e", arc: "#f0662e", sky: "#4a5060", hemi: 0.55, sun: 1.6 },
  },
  {
    id: "studio",
    label: "Studio",
    mode: "light",
    scene: { ground: "#e6e8eb", block: "#fafbfc", accent: "#e2541c", arc: "#e2541c", sky: "#ffffff", hemi: 0.9, sun: 2.1 },
  },
  {
    id: "blueprint",
    label: "Blueprint",
    mode: "dark",
    scene: { ground: "#0f1e33", block: "#2b4a72", accent: "#8fd0ff", arc: "#ffffff", sky: "#6f8fbf", hemi: 0.6, sun: 1.5 },
  },
  {
    id: "terminal",
    label: "Terminal",
    mode: "dark",
    scene: { ground: "#0b0f0c", block: "#26332a", accent: "#4be37a", arc: "#4be37a", sky: "#3f5a47", hemi: 0.5, sun: 1.5 },
  },
];

export const themeById = Object.fromEntries(themes.map((t) => [t.id, t]));
export const DEFAULT_THEME = { dark: "graphite", light: "studio" };
// First visit, before any choice is saved. The server renders this theme too (app/layout.jsx).
export const SITE_DEFAULT_THEME = "studio";
