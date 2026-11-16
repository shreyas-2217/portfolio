"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from "motion/react";
import { useRef } from "react";

/**
 * 3D tilt card — the tile rotates toward the cursor like a card held up to
 * the light, with a soft glare that follows the pointer. Fine pointers only.
 */
export default function TiltCard({ children, className = "", max = 7 }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 20, mass: 0.5 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  const glareX = useTransform(sx, [0, 1], ["18%", "82%"]);
  const glareY = useTransform(sy, [0, 1], ["12%", "88%"]);
  const glare = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 65%)`;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[5] rounded-[1.75rem]"
        style={{ background: glare }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
