"use client";

import { useEffect, useRef } from "react";

/**
 * The clarity thread — the page's thesis made visible.
 *
 * A hairline tracks the reader down the left edge of the page. While the hero
 * (the "messy data") is in view it renders as a restless hand-drawn scribble;
 * as the reader scrolls, the line settles — the wobble flattens — until it
 * becomes a ruler-straight rule: the answer.
 */

const WOBBLES = [10, 26, 18, 34, 22, 14, 28, 12, 20, 8];
// Scroll progress (0–1) at which the line finishes settling.
const SETTLE_END = 0.55;

export default function ClarityThread() {
  const scribbleRef = useRef(null);
  const stateRef = useRef({ progress: 0, reduce: false });

  useEffect(() => {
    const scribble = scribbleRef.current;
    if (!scribble) return undefined;

    const state = stateRef.current;
    state.reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const length = scribble.getTotalLength();
    scribble.style.strokeDasharray = `${length}`;
    scribble.style.strokeDashoffset = `${length}`;

    // Drawing ten curve segments is trivial, so render synchronously on scroll.
    // (A rAF scheduler silently freezes when the window is hidden or throttled.)
    const render = () => {
      const { progress, reduce } = state;

      scribble.style.strokeDashoffset = `${length * (1 - progress)}`;

      if (reduce) {
        scribble.setAttribute("d", "M 0 50 L 26 50");
        scribble.style.filter = "none";
        return;
      }

      const settle = Math.min(1, Math.max(0, progress / SETTLE_END));
      const eased = settle * settle * (3 - 2 * settle);
      const amp = 1 - eased;

      const parts = WOBBLES.map((w, i) => {
        const x = ((i + 1) / WOBBLES.length) * 26;
        const y = 50 + Math.sin(i * 2.3) * w * amp;
        const cx = x - 13 / WOBBLES.length;
        const cy = 50 - Math.sin(i * 1.7) * w * amp;
        return `Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)}`;
      });
      scribble.setAttribute("d", `M 0 50 ${parts.join(" ")}`);
      scribble.style.filter = amp > 0.05 ? `blur(${(amp * 1.2).toFixed(2)}px)` : "none";
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      state.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      render();
    };

    const onResize = () => {
      scribble.style.strokeDasharray = `${scribble.getTotalLength()}`;
      render();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-4 z-30 hidden w-8 lg:block"
      aria-hidden="true"
    >
      <div className="relative h-full">
        {/* the settled rail the line flattens into */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-line to-transparent" />
        <svg
          className="absolute left-1/2 top-0 h-full w-7 -translate-x-1/2 overflow-visible"
          viewBox="0 0 26 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            ref={scribbleRef}
            d="M 0 50 L 26 50"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
