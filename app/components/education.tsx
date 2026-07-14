import { Backpack, BookOpenText, CaretUp, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { educationTimeline, certifications } from "@/app/lib/data";

const levelStyle = [
  {
    Icon: GraduationCap,
    bg: "bg-mustard/20",
    fg: "text-mustard",
    ring: "border-mustard/40",
    hoverRing: "hover:border-mustard/70",
  },
  {
    Icon: BookOpenText,
    bg: "bg-teal/20",
    fg: "text-teal",
    ring: "border-teal/40",
    hoverRing: "hover:border-teal/70",
  },
  {
    Icon: Backpack,
    bg: "bg-coral/20",
    fg: "text-coral",
    ring: "border-coral/40",
    hoverRing: "hover:border-coral/70",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          The classrooms that got me here.
        </h2>
      </Reveal>

      <RevealStagger className="mx-auto mt-14 flex max-w-2xl flex-col items-center">
        {educationTimeline.map((entry, i) => {
          const style = levelStyle[i % levelStyle.length];
          const Icon = style.Icon;
          return (
            <div key={entry.org} className="flex w-full flex-col items-center">
              <RevealItem
                className={`flex w-full items-start gap-4 rounded-2xl border ${style.ring} bg-paper-dim p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${style.hoverRing}`}
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full ${style.bg}`}
                >
                  <Icon size={20} weight="bold" className={style.fg} />
                </span>
                <div className="min-w-0">
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
              {i < educationTimeline.length - 1 && (
                <CaretUp
                  size={16}
                  weight="bold"
                  className="my-2 shrink-0 text-ink-dim/50"
                />
              )}
            </div>
          );
        })}
      </RevealStagger>

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
