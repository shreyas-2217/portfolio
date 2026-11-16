export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-[11px] text-faint sm:flex-row md:px-8">
        <span>Designed &amp; built by Shreyas Melligeri</span>
        <span className="order-first font-script text-xl text-ink sm:order-none" aria-hidden="true">
          SM / 2026
        </span>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          data-cursor="Top"
        >
          Back to top
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
        </a>
      </div>
    </footer>
  );
}
