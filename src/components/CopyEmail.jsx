"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/Icons";
import { site } from "@/data/site";

export default function CopyEmail({ className = "" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`group inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-emerald-300 hover:bg-emerald-50 ${className}`}
      data-cursor="Copy"
    >
      <span className="tabular-nums">{copied ? "Copied to clipboard" : site.email}</span>
      {copied ? (
        <Check size={15} className="text-emerald-600" />
      ) : (
        <Copy size={15} className="text-faint transition-colors group-hover:text-emerald-600" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}
