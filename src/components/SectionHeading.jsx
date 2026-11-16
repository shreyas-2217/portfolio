"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Animated section heading:
 * - the script title slides in with a blur→sharp focus moment
 * - the emerald squiggle underneath draws itself like a pen stroke
 * - the mono eyebrow line extends out from the index number
 */
export default function SectionHeading({
  index,
  label,
  title,
  accent,
  description,
  align = "left",
  className = "",
}) {
  const reduce = useReducedMotion();
  const centered = align === "center";

  const line = reduce
    ? { opacity: 1 }
    : {
        hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const squiggleVariants = reduce
    ? undefined
    : {
        hidden: { pathLength: 0, opacity: 0 },
        show: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const whileInView = reduce ? undefined : "show";
  const initial = reduce ? undefined : "hidden";

  return (
    <motion.div
      className={`${centered ? "flex flex-col items-center text-center" : ""} ${className}`}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p
        variants={line}
        className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-faint"
      >
        {index ? <span className="text-emerald-700">{index}</span> : null}
        <motion.span
          className="h-px w-7 bg-line"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />
        <span>{label}</span>
      </motion.p>

      <div className="mt-4 inline-block">
        <motion.h2
          variants={line}
          className="font-script text-[2.9rem] leading-[0.95] text-ink sm:text-6xl md:text-[4.25rem]"
        >
          {title}
          {accent ? <span className="text-emerald-500"> {accent}</span> : null}
        </motion.h2>

        <svg
          className="mt-3 block h-3 w-full text-emerald-400"
          viewBox="0 0 132 14"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            variants={squiggleVariants}
            d="M2 9C20 3 36 12 54 7C72 2 88 12 106 6C114 3 122 4 130 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {description ? (
        <motion.p
          variants={line}
          className={`mt-5 max-w-xl text-[15px] leading-relaxed text-body ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
