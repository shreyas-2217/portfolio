"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import CopyEmail from "@/components/CopyEmail";
import { ArrowUpRight, Close, Download, Github, Linkedin, Mail } from "@/components/Icons";
import LocalClock from "@/components/LocalClock";
import { site } from "@/data/site";
import { BRIEF_EVENT } from "@/lib/brief";

const roles = [
  {
    id: "analytics",
    label: "Analytics",
    note: "Dashboards, SQL pipelines, and the story inside the numbers.",
    proof: [
      {
        name: "Spendlytics",
        detail: "A 16-category classifier for UPI statements, covered by 55 automated tests.",
      },
      {
        name: "Food Delivery",
        detail: "SQL and Python pipeline behind an interactive sales dashboard.",
      },
      {
        name: "Meridian",
        detail: "A transparent meeting score built from overlap, holidays, and fairness.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    note: "Foundations, deployment, and the data stores behind the product.",
    proof: [
      { name: "AWS Academy", detail: "Graduate certificate in Cloud Foundations, 2026." },
      {
        name: "Spendlytics",
        detail: "Analytics app deployed and live on Streamlit Community Cloud.",
      },
      { name: "ScoutX", detail: "Interface and database design on Cloud Firestore." },
    ],
  },
  {
    id: "ai",
    label: "Applied AI",
    note: "LLM features with structure, guardrails, and a way out when they fail.",
    proof: [
      {
        name: "Spendlytics",
        detail: "Hybrid rule set plus LLM categorisation across spending categories.",
      },
      {
        name: "Meridian",
        detail: "An AI brief becomes a structured plan, with a plain fallback.",
      },
      {
        name: "Practical GenAI",
        detail: "Certified in GenAI basics, tools, use cases, and ethics, 2026.",
      },
    ],
  },
];

export default function BriefDialog() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(roles[0].id);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const reduce = useReducedMotion();
  const current = roles.find((entry) => entry.id === role) || roles[0];

  const onTabKeyDown = (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    const index = roles.findIndex((entry) => entry.id === role);
    let next = index;

    if (event.key === "ArrowRight") next = (index + 1) % roles.length;
    if (event.key === "ArrowLeft") next = (index - 1 + roles.length) % roles.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = roles.length - 1;

    setRole(roles[next].id);
    event.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus();
  };

  useEffect(() => {
    const handler = () => {
      restoreRef.current = document.activeElement;
      setOpen(true);
    };
    window.addEventListener(BRIEF_EVENT, handler);
    return () => window.removeEventListener(BRIEF_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = [
        ...panel.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
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
    if (open) return;
    const node = restoreRef.current;
    if (node && typeof node.focus === "function") node.focus();
    restoreRef.current = null;
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-ink/25 backdrop-blur-[3px]"
            aria-label="Close the recruiter brief"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />

          <motion.div
            key="brief"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="brief-title"
            className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-line bg-paper p-6 shadow-[0_40px_120px_-40px_rgba(14,23,38,0.45)] sm:p-8"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sticky -top-6 z-20 -mx-6 -mt-6 flex items-center justify-between border-b border-line/70 bg-paper/95 px-6 py-4 backdrop-blur-md sm:-top-8 sm:-mx-8 sm:-mt-8 sm:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
                Recruiter brief / 30 sec
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink/30"
                aria-label="Close the recruiter brief"
              >
                <Close size={14} />
              </button>
            </div>

            <p className="mt-6 font-script text-3xl text-rose-600">The short version</p>
            <h2 id="brief-title" className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Analytics, cloud &amp; applied AI.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-body">{site.intro}</p>

            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-medium text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {site.availability}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-line bg-white p-3">
                <dt className="text-[10px] uppercase tracking-[0.14em] text-faint">Based in</dt>
                <dd className="mt-1 text-[13px] font-medium text-ink">Bengaluru, IN</dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-3">
                <dt className="text-[10px] uppercase tracking-[0.14em] text-faint">Local time</dt>
                <dd className="mt-1 text-[13px] font-medium text-ink">
                  <LocalClock city={false} />
                </dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-3">
                <dt className="text-[10px] uppercase tracking-[0.14em] text-faint">Studying</dt>
                <dd className="mt-1 text-[13px] font-medium text-ink">BCA · CHRIST</dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-3">
                <dt className="text-[10px] uppercase tracking-[0.14em] text-faint">Graduating</dt>
                <dd className="mt-1 text-[13px] font-medium text-ink">2027</dd>
              </div>
            </dl>

            <div
              className="mt-6 flex gap-1.5 rounded-full bg-paper-soft p-1.5"
              role="tablist"
              aria-label="Evidence by role"
              onKeyDown={onTabKeyDown}
            >
              {roles.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  aria-selected={role === entry.id}
                  aria-controls="brief-evidence"
                  tabIndex={role === entry.id ? 0 : -1}
                  onClick={() => setRole(entry.id)}
                  className={`flex-1 rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${
                    role === entry.id
                      ? "bg-white text-ink shadow-sm"
                      : "text-body hover:text-ink"
                  }`}
                >
                  {entry.label}
                </button>
              ))}
            </div>

            <div
              id="brief-evidence"
              role="tabpanel"
              className="mt-4 rounded-3xl border border-line bg-white p-5"
            >
              <p className="text-[13px] text-body">{current.note}</p>
              <ul className="mt-4 space-y-3">
                {current.proof.map((item, index) => (
                  <li key={item.name} className="flex gap-3">
                    <span className="mt-0.5 text-[10px] font-semibold tabular-nums text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <b className="text-[13px] font-semibold text-ink">{item.name}</b>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-body">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl bg-paper-soft p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-faint">Currently</p>
              <p className="mt-1 text-[13px] leading-relaxed text-body">{site.currently}</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <CopyEmail />
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
                data-cursor="View"
              >
                Open the résumé
                <Download size={14} />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-[12px] font-medium text-body">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald-600">
                <Mail size={13} /> Email
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600"
              >
                <Github size={13} /> GitHub
              </a>
              <a href="#work" onClick={() => setOpen(false)} className="ml-auto inline-flex items-center gap-1 text-emerald-600">
                Skip to the work <ArrowUpRight size={13} />
              </a>
            </div>

            <p className="mt-5 border-t border-line pt-4 text-[11px] text-faint">
              Updated {site.lastUpdated}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
