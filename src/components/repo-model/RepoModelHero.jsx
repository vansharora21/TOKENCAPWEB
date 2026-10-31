"use client";

import { Component, useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { CopyButton } from "@/components/shared/CopyButton";
import { homeHero } from "@/data/homeHero";
import { repoLayout, dependentsByDistance } from "./layout";

// WebGL only runs in the browser; the server renders the flat ground colour.
const RepoModelScene = dynamic(() => import("./RepoModelScene"), { ssr: false });

const TOUR_IDS = homeHero.tour
  .map((path) => repoLayout.files.findIndex((f) => f.path === path))
  .filter((id) => id >= 0);
const TOUR_DELAY_MS = 10000;
const TOUR_STEP_MS = 5000;
const HOVER_CLEAR_MS = 600;
// The camera alternates between the whole repo and a close view of one folder.
const CAMERA_SHOTS = homeHero.focusFolders.flatMap((f) => [null, f.id]);
const CAMERA_STEP_MS = 6000;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * Device capabilities, read once on the client. `lite` covers phones and touch
 * devices (lighter scene, tap instead of hover); `webgl` is false when the
 * browser cannot create a WebGL context at all.
 */
function useDevice() {
  const [device, setDevice] = useState({ ready: false, lite: false, touch: false, webgl: true });
  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    let webgl = false;
    try {
      const probe = document.createElement("canvas");
      webgl = Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
    } catch { webgl = false; }
    setDevice({ ready: true, lite: touch || small, touch, webgl });
  }, []);
  return device;
}

/** If the 3D scene throws while rendering, drop it instead of breaking the page. */
class SceneBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFail(); }
  render() { return this.state.failed ? null : this.props.children; }
}

/** The site theme is data-theme on <html>, set by ThemeProvider after mount. */
function useSiteTheme() {
  const [theme, setTheme] = useState("studio");
  useEffect(() => {
    const html = document.documentElement;
    const read = () => setTheme(html.dataset.theme || "studio");
    read();
    const observer = new MutationObserver(read);
    observer.observe(html, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return theme;
}

export function RepoModelHero() {
  const reducedMotion = useReducedMotion();
  const theme = useSiteTheme();
  const device = useDevice();
  const [failed, setFailed] = useState(false);
  const fail = useCallback(() => setFailed(true), []);
  // Without WebGL, or after a crash, the hero is the copy alone: no empty block.
  const showModel = !failed && device.webgl;
  const [focus, setFocus] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const selection = useRef({ dist: null });
  const lastHover = useRef(0);

  const select = useCallback((id) => {
    selection.current = { dist: id === null ? null : dependentsByDistance(id) };
    setSelectedId(id);
  }, []);

  // Pointer moves fire many times a second and the pointer crosses the gaps
  // between blocks; only react to a new block, and clear the selection only
  // after the pointer has stayed off the model for a moment.
  const currentId = useRef(null);
  const clearTimer = useRef(null);
  const handleHover = useCallback((id) => {
    lastHover.current = Date.now();
    const next = id ?? null;
    if (next === null) {
      if (clearTimer.current === null) {
        clearTimer.current = setTimeout(() => {
          clearTimer.current = null;
          currentId.current = null;
          select(null);
        }, HOVER_CLEAR_MS);
      }
      return;
    }
    clearTimeout(clearTimer.current);
    clearTimer.current = null;
    if (next === currentId.current) return;
    currentId.current = next;
    select(next);
  }, [select]);
  useEffect(() => () => clearTimeout(clearTimer.current), []);

  // With no pointer activity, step through the most-imported files so the
  // feature is visible on touch screens and to visitors who never hover.
  useEffect(() => {
    if (reducedMotion || TOUR_IDS.length === 0) return;
    let step = 0;
    const timer = setInterval(() => {
      if (Date.now() - lastHover.current < TOUR_DELAY_MS) return;
      currentId.current = TOUR_IDS[step % TOUR_IDS.length];
      select(currentId.current);
      step += 1;
    }, TOUR_STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion, select]);

  useEffect(() => {
    if (reducedMotion || CAMERA_SHOTS.length === 0) return;
    let shot = 0;
    const timer = setInterval(() => {
      shot = (shot + 1) % CAMERA_SHOTS.length;
      setFocus(CAMERA_SHOTS[shot]);
    }, CAMERA_STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section className="repo-hero relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="pointer-events-none mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-12 pt-12 sm:px-8 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:content-between lg:gap-10 lg:px-10 lg:py-24">
        <div className="pointer-events-auto lg:col-span-7 xl:col-span-6">
          <h1 id="hero-title" className="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-repo-ink md:text-5xl xl:text-6xl">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-[34ch] text-pretty text-lg leading-relaxed text-repo-muted">{homeHero.body}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3 rounded-lg bg-repo-ink py-2 pl-4 pr-2 font-mono text-sm text-repo-ground">
              <span aria-hidden="true" className="opacity-60">$</span>
              {homeHero.install}
              <CopyButton text={homeHero.install} />
            </div>
            <Link
              href="/docs"
              className="text-sm font-medium text-repo-ink underline decoration-repo-muted/50 underline-offset-[5px] hover:decoration-repo-ink focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-repo-ink"
            >
              {homeHero.docsLabel}
            </Link>
          </div>
        </div>

        {/* Phones: a square model block in the flow, below the copy,
            its top and bottom edges faded into the ground so there is no seam.
            Wide screens: full bleed behind everything (absolute to the section). */}
        {showModel && (
        <div className="repo-hero-model pointer-events-auto relative -mx-4 aspect-square max-h-[560px] [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] sm:-mx-8 lg:absolute lg:inset-0 lg:-z-10 lg:mx-0 lg:aspect-auto lg:max-h-none lg:[mask-image:none]">
          {device.ready && (
            <SceneBoundary onFail={fail}>
              <RepoModelScene
                focus={focus}
                selection={selection}
                selectedId={selectedId}
                onHover={handleHover}
                theme={theme}
                reducedMotion={reducedMotion}
                lite={device.lite}
                onFail={fail}
              />
            </SceneBoundary>
          )}
          {/* Keeps the headline and install command on clean ground, wide screens only. */}
          <div className="repo-hero-scrim pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] lg:block" />
        </div>
        )}

      </div>
    </section>
  );
}
