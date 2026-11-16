"use client";

import { useEffect, useState } from "react";

export default function LocalClock({ compact = false, city = true, className = "" }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());

    const initial = window.setTimeout(() => setTime(format()), 0);
    const id = window.setInterval(() => setTime(format()), 30000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(id);
    };
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      title="Current time in Bengaluru"
    >
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {city ? <span>{compact ? "Bengaluru" : "Bengaluru, IN"}</span> : null}
      <span className="tabular-nums text-ink/70">{time || "IST"}</span>
    </span>
  );
}
