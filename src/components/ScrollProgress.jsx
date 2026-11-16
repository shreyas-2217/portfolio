"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * A hairline progress bar pinned to the very top of the viewport — the
 * reading companion to the clarity thread on the left edge.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-linear-to-r from-emerald-500 via-emerald-400 to-orange-300"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
