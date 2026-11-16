import LocalClock from "@/components/LocalClock";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatValue from "@/components/StatValue";
import { ArrowUpRight, Download } from "@/components/Icons";
import { principles, site } from "@/data/site";

const stats = [
  { value: "05", label: "selected builds", note: "product · data · AI" },
  { value: "01", label: "industry internship", note: "Sunbird Straws" },
  { value: "03", label: "focus areas", note: "analytics · cloud · AI" },
  { value: "2027", label: "expected graduation", note: "BCA at CHRIST" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                index="01"
                label="About me"
                title="Hello."
                description="The longer version — no résumé voice, no buzzword bingo."
              />
            </Reveal>

            <Reveal delay={0.12} className="mt-10">
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-linear-to-br from-emerald-50 via-white to-orange-50 p-6 md:p-7">
                <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-faint">
                  <span>Dossier / 2026</span>
                  <span>BCA &apos;27</span>
                </div>

                <div className="mt-7 flex items-end justify-between">
                  <span className="font-script text-7xl leading-none text-emerald-600 md:text-8xl">
                    SM
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-400">
                    est. 2026
                  </span>
                </div>

                <p className="mt-6 text-[15px] font-medium text-ink">{site.fullName}</p>
                <p className="mt-0.5 text-[12px] text-faint">Analytics · Cloud · Applied AI</p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line/80 pt-4 text-[11px]">
                  <div>
                    <span className="block uppercase tracking-[0.14em] text-faint">Based in</span>
                    <strong className="mt-1 block font-medium text-ink">Bengaluru, IN</strong>
                  </div>
                  <div>
                    <span className="block uppercase tracking-[0.14em] text-faint">Local time</span>
                    <strong className="mt-1 block font-medium text-ink">
                      <LocalClock city={false} />
                    </strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:pt-16">
            <Reveal>
              <p className="text-2xl leading-snug text-ink md:text-[1.7rem]">
                Most of my work starts with a small question:{" "}
                <span className="font-accent italic text-emerald-600">
                  what is this data actually trying to say?
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-body">
                <p>
                  I&apos;m a BCA student at CHRIST (Deemed to be University), Bengaluru, and a
                  builder who likes the space between analysis and product. I&apos;ve built
                  dashboards, AI-assisted tools, and a Telegram bot that keeps a shop&apos;s books
                  in three languages. I care about the part after the model works: clear logic,
                  honest interfaces, and explanations that don&apos;t need a glossary.
                </p>
                <p>
                  Most recently, I shipped{" "}
                  <strong className="font-medium text-ink">KhataBot</strong>, a bookkeeping bot
                  that turns a shopkeeper&apos;s voice note into a clean ledger entry. Before that,{" "}
                  <strong className="font-medium text-ink">Meridian</strong> weighed time zones,
                  holidays, and fairness to find meeting times. I&apos;m now going deeper into
                  applied AI and cloud foundations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2.5 text-[13px] font-medium text-emerald-700 transition-colors hover:bg-emerald-100"
                  data-cursor="Scroll"
                >
                  Explore the projects
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-ink/25"
                  data-cursor="View"
                >
                  Read the résumé
                  <Download size={14} className="text-faint" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="order-2 mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-body">
                      {stat.label}
                    </dt>
                    <dd className="order-1">
                      <StatValue
                        value={stat.value}
                        className="block font-mono text-[1.7rem] font-medium leading-none tracking-tight text-ink"
                      />
                    </dd>
                    <dd className="order-3 mt-0.5 text-[10.5px] text-faint">{stat.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal
              as="article"
              key={principle.number}
              delay={index * 0.08}
              y={24}
              scale={0.97}
              className="principle-card group rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-tile"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tabular-nums tracking-[0.14em] text-emerald-700">
                  {principle.number}
                </span>
                <span className="text-lg text-line transition-colors duration-300 group-hover:text-emerald-300" aria-hidden="true">
                  ✳
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink">
                {principle.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-body">{principle.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
