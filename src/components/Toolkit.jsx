import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/site";

const allSkills = skillGroups.flatMap((group) => group.items);

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {allSkills.map((skill) => (
        <span key={skill} className="flex items-center">
          <span className="whitespace-nowrap px-5 font-mono text-[13.5px] font-medium text-body md:px-7 md:text-[15px]">
            {skill}
          </span>
          <span className="text-[11px] text-emerald-400" aria-hidden="true">
            ✳
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative scroll-mt-24 bg-paper-soft py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            label="Toolkit"
            title="My"
            accent="toolkit"
            description="I pick the tool that makes the problem legible — not the one with the loudest logo."
          />
        </Reveal>
      </div>

      <div className="marquee mt-10 overflow-hidden border-y border-line bg-white/60 py-4 md:mt-12">
        <div className="marquee-track" aria-hidden="true">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl px-5 md:mt-12 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 0.05}
              y={22}
              scale={0.97}
              className="rounded-3xl border border-line bg-white p-6 transition-colors duration-300 hover:border-emerald-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                  {group.label}
                </h3>
                <span className="font-mono text-[10px] font-medium tabular-nums text-faint">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-line bg-paper px-2.5 py-1.5 font-mono text-[10.5px] font-medium text-body transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-[0_4px_12px_-4px_rgba(16,185,129,0.35)] active:scale-95"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={0.25}
            className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:col-span-2 lg:col-span-1"
          >
            <span
              className="spin-slow pointer-events-none absolute -right-6 -top-8 font-script text-[7rem] leading-none text-emerald-200/70"
              aria-hidden="true"
            >
              &amp;
            </span>
            <div className="relative">
              <p className="font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] text-emerald-700/70">
                Currently sharpening
              </p>
              <h3 className="mt-2 text-[19px] font-semibold leading-snug tracking-tight text-emerald-900">
                Applied AI, cloud architecture, and data storytelling.
              </h3>
              <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-emerald-800/70">
                The goal is not more tools. It is fewer steps between a question and an answer
                someone can trust.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
