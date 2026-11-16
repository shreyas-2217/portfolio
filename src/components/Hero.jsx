"use client";

import { motion, useReducedMotion } from "motion/react";
import PixelField from "@/components/PixelField";
import Magnetic from "@/components/Magnetic";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";
import { openBrief } from "@/lib/brief";
import { site } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-24 md:pt-28"
      aria-labelledby="hero-title"
    >
      <PixelField />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-linear-to-b from-transparent to-paper" aria-hidden="true" />

      <motion.div
        className="relative z-10 w-full max-w-4xl text-center"
        variants={container}
        initial={initial}
        animate="show"
      >
        <motion.p
          variants={item}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[11.5px] font-medium tracking-wide text-body backdrop-blur-sm"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          Open to analyst, cloud &amp; AI roles
        </motion.p>

        <motion.h1
          id="hero-title"
          variants={item}
          className="mt-8 text-balance text-[1.55rem] leading-[1.55] tracking-[-0.01em] text-body sm:text-[1.9rem] md:text-[2.45rem] md:leading-[1.5]"
        >
          Hello, I&apos;m{" "}
          <span className="font-medium text-emerald-700">Shreyas</span>. I{" "}
          <span className="group relative inline-block whitespace-nowrap font-accent italic text-orange-500">
            make sense
            <motion.span
              className="absolute -inset-x-1.5 bottom-[0.08em] -z-10 h-[0.42em] origin-left -rotate-1 rounded-[2px] bg-orange-200/70"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
          </span>{" "}
          of messy data and{" "}
          <span className="inline-block font-script text-[1.4em] leading-[0.6] text-rose-600">
            build
          </span>{" "}
          small, honest products with it.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-lg font-mono text-[12px] leading-relaxed tracking-tight text-faint md:text-[12.5px]"
        >
          <span className="text-emerald-500" aria-hidden="true">
            $&nbsp;
          </span>
          whoami — BCA at CHRIST, Bengaluru · analytics, cloud, applied AI
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[13.5px] font-medium text-white transition-colors hover:bg-ink/85"
              data-cursor="Scroll"
            >
              See selected work
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={openBrief}
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white/70 px-6 text-[13.5px] font-medium text-ink backdrop-blur-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              data-cursor="Brief"
            >
              The 30-second brief
              <ArrowUpRight
                size={15}
                className="text-emerald-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between md:px-10"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="#about"
          className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-faint transition-colors hover:text-ink"
          aria-label="Scroll to explore — jump to the about section"
        >
          <span className="scroll-cue inline-grid size-6 place-items-center rounded-full border border-line">
            <ArrowDown size={11} />
          </span>
          Scroll to explore
        </a>
        <div className="hidden items-center gap-3 text-[11px] text-faint sm:flex">
          <span>Analytics</span>
          <span className="text-emerald-400" aria-hidden="true">✳</span>
          <span>Cloud</span>
          <span className="text-emerald-400" aria-hidden="true">✳</span>
          <span>Applied AI</span>
          <span className="ml-2 hidden md:inline">· {site.location}</span>
        </div>
      </motion.div>
    </section>
  );
}
