"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Mono stat value that counts up from 0 when scrolled into view.
 * Screen readers and no-JS visitors always get the final value; the
 * counting animation is purely visual via aria-hidden.
 */
export default function StatValue({ value, className = "" }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (reduce || !inView) return undefined;

    const numeric = Number(value.replace(/\D/g, ""));
    if (!Number.isFinite(numeric) || numeric === 0) {
      const id = window.setTimeout(() => setDisplay(value), 0);
      return () => window.clearTimeout(id);
    }

    let frame = 0;
    const started = performance.now();
    const duration = 900;

    const tick = (now) => {
      const t = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(String(Math.round(numeric * eased)).padStart(value.length, "0"));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{reduce ? value : display}</span>
    </span>
  );
}
