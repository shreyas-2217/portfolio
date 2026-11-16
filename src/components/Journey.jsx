import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education, experience, site } from "@/data/site";

const entries = [
  {
    id: "now",
    dates: "Now · 2026",
    type: "Independent",
    company: "Currently",
    role: "Building, studying, shipping.",
    copy: site.currently,
    stack: ["Applied AI", "Cloud", "Analytics"],
    tone: "now",
  },
  ...experience.map((job) => ({
    id: job.company,
    dates: job.dates,
    type: job.type,
    company: job.company,
    role: job.role,
    bullets: job.bullets,
    stack: job.stack,
    tone: "work",
  })),
  ...education.map((item) => ({
    id: item.school,
    dates: item.meta.split(" · ")[1] || item.meta,
    type: "Education",
    company: item.school,
    role: item.detail,
    copy: item.meta.split(" · ")[0],
    tone: "study",
  })),
];

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-40 size-72 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -right-20 top-[55%] size-72 rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            label="The journey"
            title="My"
            accent="journey"
            align="center"
            description="From early lines of code to campus apps, internships, and the work in between."
          />
        </Reveal>

        <div className="relative mt-14 md:mt-16">
          <span
            className="rail-grow absolute bottom-4 left-[7px] top-2 w-px bg-linear-to-b from-emerald-300 via-line to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          {entries.map((entry, index) => {
            const right = index % 2 === 1;
            const isNow = entry.tone === "now";

            return (
              <div
                key={entry.id}
                className="relative grid gap-6 pb-10 last:pb-0 md:grid-cols-2 md:gap-14 md:pb-14"
              >
                <span
                  className="absolute left-0 top-3 z-10 grid size-[15px] -translate-x-0 place-items-center rounded-full border-2 border-paper bg-slate-300 transition-colors duration-300 group-hover:bg-emerald-400 md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                >
                  {isNow ? (
                    <span className="absolute size-6 animate-ping rounded-full bg-emerald-400/40" />
                  ) : null}
                </span>
                {isNow ? (
                  <span
                    className="absolute left-0 top-3 z-10 size-[15px] rounded-full bg-emerald-500 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  />
                ) : null}

                <Reveal
                  as="article"
                  delay={index * 0.05}
                  x={right ? 28 : -28}
                  y={12}
                  className={`principle-card group ml-8 rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-tile md:ml-0 md:p-7 ${
                    right ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em] ${
                        isNow
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-paper-soft text-body"
                      }`}
                    >
                      {entry.dates}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
                      {entry.type}
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                    {entry.company}
                  </p>
                  <h3 className="mt-1 text-[19px] font-semibold tracking-tight text-ink md:text-xl">
                    {entry.role}
                  </h3>

                  {entry.bullets ? (
                    <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-body">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span
                            className="mt-[7px] size-1 shrink-0 rounded-full bg-emerald-400"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-[13px] leading-relaxed text-body">{entry.copy}</p>
                  )}

                  {entry.stack?.length ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {entry.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-line bg-paper-soft px-2 py-1 text-[10px] font-medium text-body"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-6 md:mt-2">
          <div className="rounded-[2rem] border border-line bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-faint">
                  Certifications
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">
                  Proof of the foundations.
                </h3>
              </div>
              <span className="font-mono text-[10.5px] text-faint">2025 — 2026</span>
            </div>

            <ul className="mt-6 grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col gap-0.5 border-t border-line py-3 sm:border-t-0 sm:border-b sm:py-3"
                >
                  <span className="text-[13px] font-medium text-ink">{cert.name}</span>
                  <span className="font-mono text-[10.5px] text-faint">
                    {cert.issuer} · {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
