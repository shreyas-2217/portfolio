"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import LocalClock from "@/components/LocalClock";
import { openBrief } from "@/lib/brief";
import { navItems, site } from "@/data/site";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Résumé", href: site.resume },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const hasOpenedRef = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const panel = menuPanelRef.current;
      if (!panel) return;

      const focusable = [
        ...panel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      ].filter((node) => node.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      hasOpenedRef.current = true;
      return;
    }
    if (hasOpenedRef.current) menuButtonRef.current?.focus();
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-300 md:px-10 ${
            scrolled
              ? "h-16 border-b border-line bg-paper/85 backdrop-blur-xl"
              : "h-20 border-b border-transparent md:h-24"
          }`}
        >
          <a
            href="#top"
            className="group relative inline-flex items-baseline gap-2 py-1"
            aria-label="Shreyas Melligeri — home"
            data-cursor="Top"
          >
            <span className="text-[22px] font-semibold tracking-tight text-ink md:text-2xl">
              Shreyas
            </span>
            <span className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap font-script text-lg text-rose-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-xl">
              that&apos;s me :)
            </span>
          </a>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={openBrief}
              className="hidden rounded-full border border-line bg-white/60 px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-emerald-300 hover:bg-emerald-50 sm:inline-flex"
              data-cursor="Brief"
            >
              The 30-sec brief
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group inline-flex items-center gap-2 rounded-full px-1 py-2 text-[13px] font-medium tracking-wide text-ink"
              data-cursor={open ? "Close" : "Menu"}
            >
              <span>{open ? "Close" : "Menu"}</span>
              <span
                className={`relative grid size-8 place-items-center rounded-full border transition-colors duration-300 ${
                  open
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-line group-hover:border-ink/30"
                }`}
                aria-hidden="true"
              >
                <span className="relative block h-3 w-3">
                  <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 rounded bg-current" />
                  <span
                    className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded bg-current transition-transform duration-300 ${
                      open ? "rotate-90" : ""
                    }`}
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-50 overflow-hidden"
          >
            {[0, 1, 2].map((layer) => (
              <motion.span
                key={layer}
                aria-hidden="true"
                className={`absolute inset-0 ${
                  layer === 0
                    ? "bg-emerald-100"
                    : layer === 1
                      ? "bg-emerald-50"
                      : "bg-paper"
                }`}
                initial={reduce ? { opacity: 0 } : { x: "100%" }}
                animate={reduce ? { opacity: 1 } : { x: "0%" }}
                exit={reduce ? { opacity: 0 } : { x: "100%" }}
                transition={{
                  duration: 0.65,
                  delay: reduce ? 0 : 0.06 * (2 - layer),
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}

            <motion.div
              ref={menuPanelRef}
              className="relative z-10 flex h-full flex-col px-6 py-5 md:px-10 md:py-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.22, duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[22px] font-semibold tracking-tight text-ink md:text-2xl">
                  Shreyas
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-ink/30"
                >
                  Close
                  <span className="relative block size-3" aria-hidden="true">
                    <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 rotate-45 rounded bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 -rotate-45 rounded bg-current" />
                  </span>
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto py-5 md:py-7">
                <motion.ul
                  className="w-full max-w-4xl space-y-0.5 md:space-y-1"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.06, delayChildren: 0.26 },
                    },
                  }}
                  initial={reduce ? false : "hidden"}
                  animate="show"
                  exit="hidden"
                >
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, y: 26 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 border-b border-ink/10 py-2.5 md:gap-8 md:py-3.5"
                        data-cursor="Go"
                      >
                        <span className="w-6 shrink-0 text-[11px] font-medium tracking-widest text-faint">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-4xl font-medium leading-none tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-2 group-hover:text-emerald-600 sm:text-5xl md:text-6xl">
                          {item.label}
                        </span>
                        <span
                          className="ml-auto text-2xl text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                className="flex flex-col gap-3 border-t border-ink/10 pt-4 md:flex-row md:items-center md:justify-between"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, transition: { delay: reduce ? 0 : 0.5 } }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-body">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="transition-colors hover:text-emerald-600"
                      data-cursor="Open"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-[12px] text-faint">
                  <LocalClock />
                  <span aria-hidden="true">·</span>
                  <span>{site.availability}</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
