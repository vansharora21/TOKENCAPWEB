"use client";

import React, { useRef, useEffect, useState } from "react";
import { animate, stagger, eases } from "animejs";
import { changelogItems } from "@/data/changelog";

function ChangelogList() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const mobileProgressRef = useRef(null);
  const itemsRef = useRef([]);

  const [coords, setCoords] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const N = changelogItems.length;
  const offset = 12; // Wave amplitude of curves around diagonal line

  // 1. Dynamic Measurement for Diagonal Spline Coordinates
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const W = containerRect.width;
      const H = containerRect.height;
      setContainerWidth(W);
      setContainerHeight(H);

      const newCoords = itemsRef.current.map((item, idx) => {
        if (!item) return { x: W / 2, y: idx * 300 + 150 };
        const rect = item.getBoundingClientRect();
        const y = rect.top - containerRect.top + rect.height / 2;
        
        // Interpolate horizontal diagonal path from x=85% to x=15%
        const xDiagonal = W * 0.85 - (idx / (N - 1)) * (W * 0.70);
        // Add wavy offset around the diagonal
        const wave = (idx % 2 === 0 ? -1 : 1) * W * 0.08;
        const x = xDiagonal + wave;

        return { x, y };
      });
      setCoords(newCoords);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [N]);

  // 2. Scroll-linked Path Drawing Animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current) return;
      const path = pathRef.current;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;

      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;
      
      const totalDuration = rect.height;
      const currentScroll = winHeight * 0.8 - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / (totalDuration - winHeight * 0.1)));

      // Animate desktop path drawing using Anime.js v4 function easing
      animate(path, {
        strokeDashoffset: length * (1 - progress),
        duration: 500,
        ease: eases.outQuad
      });

      // Animate mobile progress bar height
      if (mobileProgressRef.current) {
        animate(mobileProgressRef.current, {
          scaleY: progress,
          duration: 500,
          ease: eases.outQuad
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [coords, containerHeight, containerWidth]);

  // 3. Intersection Observer Triggered Entrance Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-60px 0px -100px 0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const idx = parseInt(target.getAttribute("data-idx") || "0", 10);
          const isLeft = idx % 2 === 0;

          // Card entry
          const card = target.querySelector(".changelog-card");
          if (card && !card.classList.contains("animated")) {
            card.classList.add("animated");
            animate(card, {
              opacity: [0, 1],
              translateX: isLeft ? [-40, 0] : [40, 0],
              translateY: [20, 0],
              scale: [0.97, 1],
              duration: 800,
              ease: eases.outElastic(1, 0.8)
            });
          }

          // Desktop SVG Circle Marker entry
          const marker = document.getElementById(`marker-${idx}`);
          if (marker && !marker.classList.contains("active")) {
            marker.classList.add("active");
            animate(marker, {
              r: [0, 8],
              duration: 900,
              ease: eases.outBack()
            });
          }

          // Mobile Dot entry
          const mobileDot = target.querySelector(".mobile-timeline-dot");
          if (mobileDot && !mobileDot.classList.contains("animated")) {
            mobileDot.classList.add("animated");
            animate(mobileDot, {
              scale: [0, 1],
              rotate: ["-90deg", "0deg"],
              duration: 900,
              ease: eases.outBack()
            });
          }

          // Description paragraph entry
          const desc = target.querySelector(".changelog-desc");
          if (desc && !desc.classList.contains("animated")) {
            desc.classList.add("animated");
            animate(desc, {
              opacity: [0, 1],
              translateX: [-10, 0],
              delay: 200,
              duration: 500,
              ease: eases.outQuad
            });
          }

          observer.unobserve(target);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [coords]);

  // Generate cubic spline path from coordinate points
  let pathD = "";
  if (coords.length > 0) {
    const startX = containerWidth * 0.85;
    pathD = `M ${startX} 0`;
    
    coords.forEach((coord, idx) => {
      const prevX = idx === 0 ? startX : coords[idx - 1].x;
      const prevY = idx === 0 ? 0 : coords[idx - 1].y;
      const cpY = (prevY + coord.y) / 2;
      
      pathD += ` C ${prevX} ${cpY}, ${coord.x} ${cpY}, ${coord.x} ${coord.y}`;
    });
    
    // Smooth out to the bottom of the container
    const lastCoord = coords[coords.length - 1];
    const endX = containerWidth * 0.15;
    const cpY = (lastCoord.y + containerHeight) / 2;
    pathD += ` C ${lastCoord.x} ${cpY}, ${endX} ${cpY}, ${endX} ${containerHeight}`;
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-4 px-4 md:px-0">
      <style>{`
        .glass-card {
            background: rgba(9, 9, 11, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
            border-color: rgba(124, 58, 237, 0.4);
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.1);
        }

        .snake-path {
            fill: none;
            stroke: rgba(255, 255, 255, 0.04);
            stroke-width: 4;
            stroke-linecap: round;
        }

        .snake-path-progress {
            fill: none;
            stroke: #7c3aed;
            stroke-width: 4;
            stroke-linecap: round;
            filter: drop-shadow(0 0 8px #7c3aed);
        }

        .node-marker-svg {
            fill: #131315;
            stroke: rgba(124, 58, 237, 0.4);
            stroke-width: 2px;
            transition: fill 0.3s ease, stroke 0.3s ease, filter 0.3s ease;
        }

        .node-marker-svg.active {
            fill: #d2bbff !important;
            stroke: #7c3aed !important;
            stroke-width: 3px !important;
            filter: drop-shadow(0 0 10px #7c3aed);
        }
      `}</style>
      
      {/* Decorative subtitle / tracker block */}
      <div className="text-center mb-16 select-none font-mono">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
          ~ INITIAL_BUILD VERSION TRACKER SYSTEMS... v{changelogItems[0]?.version || "0.8.0"}
        </p>
        <p className="text-xs text-purple-400 font-semibold tracking-wider mt-1">
          &gt; MAPPED FILES. RESPONSIVE CONTEXT DEVELOPMENTS... [2026]
        </p>
      </div>

      <div className="relative">
        {/* Mobile vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-zinc-800 md:hidden z-0" />
        
        {/* Mobile glowing overlay progress */}
        <div
          ref={mobileProgressRef}
          className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c084fc] to-[#6366f1] origin-top md:hidden z-0 shadow-[0_0_8px_rgba(192,132,252,0.4)]"
          style={{ transform: "scaleY(0)" }}
        />

        {/* Desktop winding SVG line cutting diagonally from top-right to bottom-left */}
        <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
          <svg className="w-full h-full" id="timeline-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Background path track */}
            <path
              className="snake-path"
              d={pathD}
            />
            {/* Glowing foreground path animated via Anime.js */}
            <path
              ref={pathRef}
              className="snake-path-progress"
              d={pathD}
            />
            {/* Desktop SVG Markers positioned center of nodes */}
            {coords.map((c, i) => (
              <circle
                key={i}
                id={`marker-${i}`}
                cx={c.x}
                cy={c.y}
                r="0"
                className="node-marker-svg hidden md:block"
              />
            ))}
          </svg>
        </div>

        {/* Cards container */}
        <div className="relative z-10 space-y-12 md:space-y-0">
          {changelogItems.map((item, idx) => {
            const isLatest = idx === 0;

            const coord = coords[idx] || { x: containerWidth / 2, y: idx * 300 + 150 };
            const xPct = containerWidth > 0 ? (coord.x / containerWidth) * 100 : 50;
            const isLeft = xPct > 50; // if dot is on the right half, place card on the left

            // Padding calculation to sit exactly next to the rope
            const itemStyle = containerWidth > 0
              ? (isLeft
                ? { paddingRight: `${100 - xPct + 5}%`, paddingLeft: "5%" }
                : { paddingLeft: `${xPct + 5}%`, paddingRight: "5%" })
              : {};

            return (
              <div
                key={item.version}
                ref={(el) => (itemsRef.current[idx] = el)}
                data-idx={idx}
                className={`relative flex ${isLeft ? "justify-end" : "justify-start"} w-full md:mb-20 last:mb-0 timeline-item`}
                style={itemStyle}
              >
                {/* Card Container */}
                <div className="w-full max-w-[420px] pl-12 md:pl-0">
                  <div className="relative group">
                    {/* Card container */}
                    <div className="changelog-card opacity-0 glass-card p-4 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/2 rounded-full blur-xl pointer-events-none group-hover:bg-purple-500/5 transition-colors"></div>

                      {/* Header row */}
                      <div className="flex items-center justify-between gap-4 mb-2.5 border-b border-white/5 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-500/10 text-[#d2bbff] border border-purple-500/20 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase">
                            v{item.version}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            {item.date}
                          </span>
                        </div>
                        {isLatest ? (
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider uppercase animate-pulse">
                            LATEST RELEASE
                          </span>
                        ) : (
                          <span className="bg-zinc-800/40 text-zinc-400 border border-white/5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider uppercase">
                            STABLE
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Single Description Line */}
                      <p className="changelog-desc opacity-0 mt-2 text-xs text-[#ccc3d8]/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Mobile Node */}
                    <div className="mobile-timeline-dot scale-0 absolute left-[-42px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border border-zinc-800 md:hidden z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { ChangelogList };