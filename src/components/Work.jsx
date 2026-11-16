import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { ArrowUpRight, Github } from "@/components/Icons";
import { projects, site } from "@/data/site";

const themes = {
  spendlytics: {
    background:
      "linear-gradient(138deg, #052e2b 0%, #0f766e 42%, #34d399 100%)",
    glow: "rgba(167, 243, 208, 0.55)",
    motif: "bars",
  },
  meridian: {
    background:
      "linear-gradient(138deg, #08152f 0%, #1d4ed8 55%, #38bdf8 100%)",
    glow: "rgba(186, 230, 253, 0.5)",
    motif: "rings",
  },
  "food-delivery": {
    background:
      "linear-gradient(138deg, #321109 0%, #9a3412 52%, #fb923c 100%)",
    glow: "rgba(254, 215, 170, 0.55)",
    motif: "receipt",
  },
  scoutx: {
    background:
      "linear-gradient(138deg, #1e0a3c 0%, #6d28d9 55%, #c4b5fd 100%)",
    glow: "rgba(221, 214, 254, 0.5)",
    motif: "play",
  },
  khatabot: {
    background:
      "linear-gradient(138deg, #1c1917 0%, #b45309 55%, #fbbf24 100%)",
    glow: "rgba(253, 230, 138, 0.55)",
    motif: "chat",
  },
};

const tileSizes = {
  featured: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  compact: "md:col-span-1",
};

function Motif({ type }) {
  if (type === "bars") {
    return (
      <div className="absolute bottom-0 right-0 flex items-end gap-2 p-6 opacity-30 pointer-events-none" aria-hidden="true">
        {[38, 64, 48, 88, 60, 104].map((height, index) => (
          <span
            key={index}
            className="w-2 rounded-t-full bg-white/25 md:w-2.5"
            style={{ height }}
          />
        ))}
      </div>
    );
  }

  if (type === "rings") {
    return (
      <div className="absolute -right-10 -top-12 opacity-50 pointer-events-none" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
        <span className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        <span className="absolute left-1/2 top-1/2 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <span className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
      </div>
    );
  }

  if (type === "receipt") {
    return (
      <div className="absolute -right-2 top-8 hidden w-28 space-y-2 opacity-40 pointer-events-none sm:block" aria-hidden="true">
        {[70, 92, 58, 84, 46].map((width, index) => (
          <span
            key={index}
            className="block h-px"
            style={{ width: `${width}%`, background: "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="absolute -right-4 top-24 space-y-2 opacity-40 pointer-events-none" aria-hidden="true">
        <span className="ml-auto flex h-9 w-24 items-center justify-end rounded-2xl rounded-br-md border border-white/30 bg-white/10 px-3">
          <span className="h-1 w-12 rounded-full bg-white/50" />
        </span>
        <span className="flex h-11 w-32 items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/30 bg-white/15 px-3">
          {[24, 38, 30, 44].map((height, index) => (
            <span
              key={index}
              className="w-1.5 rounded-t-full bg-white/50"
              style={{ height }}
            />
          ))}
        </span>
      </div>
    );
  }

  return (
    <div className="absolute -right-4 top-10 opacity-40 pointer-events-none" aria-hidden="true">
      <span className="block size-20 rotate-12 rounded-2xl border border-white/30 md:size-24" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-y-[10px] border-l-[16px] border-y-transparent border-l-white/50" />
    </div>
  );
}

function Tile({ project }) {
  const theme = themes[project.id] || themes.spendlytics;
  const featured = project.size === "featured";
  const span = tileSizes[project.size] ?? tileSizes.compact;
  const primary = project.links?.[0];
  const secondary = project.links?.[1];

  return (
    <TiltCard className="h-full">
      <article
        className={`work-tile group relative isolate flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 shadow-tile transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lift ${
          featured ? "min-h-[360px]" : "min-h-[240px]"
        } ${span}`}
      >
      <div
        className="absolute inset-0 -z-10 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        style={{ backgroundImage: theme.background }}
        aria-hidden="true"
      />
      <div className="tile-grid absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/60 via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -left-16 bottom-0 -z-10 size-56 rounded-full blur-3xl"
        style={{ background: theme.glow, opacity: 0.22 }}
        aria-hidden="true"
      />
      <Motif type={theme.motif} />

      <div className={`relative flex h-full flex-1 flex-col ${featured ? "p-6 md:p-7" : "p-5"}`}>
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-mono text-[10px] font-medium tabular-nums tracking-[0.12em] text-white/85 backdrop-blur-sm">
            {project.number}
          </span>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
            {project.year}
          </span>
        </div>

        <div className={`mt-auto ${featured ? "pt-8" : "pt-5"}`}>          {featured ? (
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
              {project.discipline}
            </p>
          ) : null}
          <h3
            className={`font-semibold tracking-tight text-white ${
              featured
                ? "mt-1.5 text-3xl md:text-[2.6rem] md:leading-[1.05]"
                : "mt-0 text-xl md:text-[1.3rem]"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-[11.5px] text-white/65">{project.subtitle}</p>

          {featured ? (
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/75">
              {project.summary}
            </p>
          ) : null}

          {!featured && project.size === "wide" ? (
            <p className="mt-1.5 max-w-md text-[12px] leading-snug text-white/70">
              {project.summary}
            </p>
          ) : null}

          {featured && project.highlights?.length ? (
            <ul className="mt-3 space-y-1">
              {project.highlights.slice(0, 3).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-[11.5px] text-white/70"
                >
                  <span
                    className="size-1 shrink-0 rounded-full bg-white/50"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}

          <div className={`flex flex-wrap gap-1.5 ${featured ? "mt-4" : "mt-3"}`}>
            {project.stack.slice(0, featured ? 5 : 2).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/10 px-2 py-1 font-mono text-[9.5px] font-medium tracking-tight text-white/80 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-medium ${featured ? "mt-4" : "mt-3"}`}>
            {primary ? (
              <a
                href={primary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-white/90 transition-colors hover:text-white"
                data-cursor="Open"
              >
                {primary.label}
                <ArrowUpRight size={12} />
              </a>
            ) : null}
            {secondary && (featured || project.size === "wide") ? (
              <a
                href={secondary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white"
                data-cursor="Open"
              >
                {secondary.label}
                <ArrowUpRight size={12} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      </article>
    </TiltCard>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-paper-soft py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            label="Selected work"
            title="My"
            accent="work"
            description="Five projects at the intersection of data, product, and AI. Each one starts with a real friction point."
          />
        </Reveal>

        <div className="mt-10 grid auto-rows-auto grid-cols-1 gap-4 md:mt-12 md:auto-rows-[240px] md:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.06}
              y={26}
              scale={0.96}
              className={tileSizes[project.size] ?? tileSizes.compact}
            >
              <Tile project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 flex flex-col justify-between gap-6 rounded-[1.75rem] border border-line bg-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-tile sm:flex-row sm:items-center md:p-7"
            data-cursor="Open"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                <Github size={20} />
              </span>
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-faint">
                  More on GitHub
                </p>
                <p className="mt-1 text-[17px] font-medium tracking-tight text-ink">
                  Code, experiments, and the ideas still in progress.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-[12.5px] font-medium text-emerald-600">
              @shreyas-2217
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
