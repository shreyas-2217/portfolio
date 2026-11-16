"use client";

import CopyEmail from "@/components/CopyEmail";
import LocalClock from "@/components/LocalClock";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "@/components/Icons";
import { openBrief } from "@/lib/brief";
import { site } from "@/data/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/shreyas-melligeri",
    href: site.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@shreyas-2217",
    href: site.github,
    icon: Github,
  },
  {
    label: "Résumé",
    value: "PDF · one page",
    href: site.resume,
    icon: Download,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal y={30} scale={0.97}>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-linear-to-br from-white via-emerald-50/70 to-orange-50/70 p-6 md:rounded-[2.5rem] md:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-emerald-200/40 blur-3xl"
              aria-hidden="true"
            />
            <span
              className="spin-slow pointer-events-none absolute right-6 top-4 font-script text-8xl leading-none text-emerald-200/60 md:right-12 md:top-8 md:text-9xl"
              aria-hidden="true"
            >
              ✳
            </span>

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-faint">
                  <span className="text-emerald-700">05</span>
                  <span className="h-px w-7 bg-line" aria-hidden="true" />
                  Contact
                </p>

                <div className="mt-4 inline-block">
                  <h2 className="font-script text-[3rem] leading-[0.95] text-ink sm:text-6xl md:text-[4.4rem]">
                    Let&apos;s <span className="text-emerald-500">connect</span>
                  </h2>

                  <svg
                    className="mt-3 block h-3 w-full text-emerald-400"
                    viewBox="0 0 150 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9C22 3 40 12 60 7C80 2 98 12 118 6C128 3 138 4 148 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body">
                  Have a messy problem, a data set, or a role worth talking about? My inbox is
                  open — I answer every real message.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <CopyEmail />
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
                    data-cursor="Mail"
                  >
                    Say hello
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={openBrief}
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-emerald-700 transition-colors hover:text-emerald-800"
                  data-cursor="Brief"
                >
                  Hiring? Read the 30-second brief
                  <ArrowUpRight size={13} />
                </button>

                <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] text-faint">
                  <LocalClock />
                  <span aria-hidden="true">·</span>
                  <span>Last updated {site.lastUpdated}</span>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-faint">
                  Elsewhere
                </p>

                <ul className="mt-4">
                  {channels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <li key={channel.label}>
                        <a
                          href={channel.href}
                          target={channel.href.startsWith("http") ? "_blank" : undefined}
                          rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                          className="group flex items-center gap-3 border-b border-line/80 py-3.5 sm:gap-4"
                          data-cursor={channel.label === "Résumé" ? "View" : "Open"}
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                            <Icon size={15} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[13px] font-medium text-ink">
                              {channel.label}
                            </span>
                            <span className="block truncate text-[11px] text-faint">
                              {channel.value}
                            </span>
                          </span>
                          <ArrowUpRight
                            size={15}
                            className="ml-auto shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 rounded-2xl border border-emerald-100 bg-white/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Available
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-body">{site.availability}.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
