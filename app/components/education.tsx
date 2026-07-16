import { Backpack, BookOpenText, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { educationTimeline, certifications } from "@/app/lib/data";

const levelStyle = [
  {
    Icon: GraduationCap,
    fg: "text-mustard",
    ring: "border-mustard/40",
    hoverRing: "hover:border-mustard/70",
  },
  {
    Icon: BookOpenText,
    fg: "text-teal",
    ring: "border-teal/40",
    hoverRing: "hover:border-teal/70",
  },
  {
    Icon: Backpack,
    fg: "text-coral",
    ring: "border-coral/40",
    hoverRing: "hover:border-coral/70",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal className="flex flex-col items-center text-center">
        <span className="mb-4 block h-1.5 w-9 rounded-full bg-coral" />
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          Education & Certifications
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-10 max-w-4xl">
        <div className="absolute left-[21px] top-6 bottom-6 w-px bg-line" />

        <RevealStagger className="space-y-3">
          {educationTimeline.map((entry, i) => {
            const style = levelStyle[i % levelStyle.length];
            const Icon = style.Icon;
            return (
              <RevealItem key={entry.org} className="flex gap-4">
                <div className="flex w-11 shrink-0 justify-center pt-3">
                  <span
                    className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full border-2 bg-white shadow-sm ${style.ring}`}
                  >
                    <Icon size={20} weight="bold" className={style.fg} />
                  </span>
                </div>

                <div
                  className={`min-w-0 flex-1 rounded-2xl border border-line bg-paper-dim p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${style.hoverRing}`}
                >
                  <p
                    className={`font-mono text-xs font-semibold uppercase tracking-wide ${style.fg}`}
                  >
                    {entry.level}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-ink text-pretty">
                    {entry.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-dim">{entry.org}</p>
                  <p className="text-sm text-ink-dim">
                    {entry.location}
                    {entry.period ? ` · ${entry.period}` : ""}
                  </p>
                  {entry.detail && (
                    <p className="mt-3 text-sm text-ink-dim text-pretty">
                      {entry.detail}
                    </p>
                  )}
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>

      <Reveal delay={0.1} className="mt-12 border-t border-line pt-8">
        <div className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-teal" />
          <h3 className="text-sm font-semibold tracking-wide text-ink-dim">
            Certifications
          </h3>
        </div>
        <ul className="mt-4 flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="rounded-full border border-line px-4 py-2 text-sm text-ink"
            >
              {cert}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
