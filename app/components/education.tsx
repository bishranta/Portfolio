import { Backpack, BookOpenText, CaretDown, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { educationTimeline, certifications } from "@/app/lib/data";

const levelStyle = [
  {
    Icon: GraduationCap,
    bg: "bg-mustard/20",
    fg: "text-mustard",
    ring: "border-mustard/40",
    scale: "md:py-8",
    title: "text-2xl md:text-3xl",
  },
  {
    Icon: BookOpenText,
    bg: "bg-teal/20",
    fg: "text-teal",
    ring: "border-teal/40",
    scale: "md:py-6",
    title: "text-xl md:text-2xl",
  },
  {
    Icon: Backpack,
    bg: "bg-coral/20",
    fg: "text-coral",
    ring: "border-coral/40",
    scale: "md:py-5",
    title: "text-lg md:text-xl",
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

      <RevealStagger className="mx-auto mt-14 flex max-w-3xl flex-col items-center">
        {educationTimeline.map((entry, i) => {
          const style = levelStyle[i % levelStyle.length];
          const Icon = style.Icon;
          return (
            <div key={entry.org} className="flex w-full flex-col items-center">
              <RevealItem
                className={`flex w-full items-start gap-5 rounded-3xl border ${style.ring} bg-paper-dim px-6 py-5 ${style.scale}`}
              >
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-full ${style.bg}`}
                >
                  <Icon size={22} weight="bold" className={style.fg} />
                </span>
                <div>
                  <p
                    className={`font-mono text-xs uppercase tracking-wide ${style.fg}`}
                  >
                    {entry.level}
                  </p>
                  <p className={`mt-1 font-semibold text-ink ${style.title}`}>
                    {entry.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-dim">
                    {entry.org}, {entry.location}
                    {entry.period ? ` · ${entry.period}` : ""}
                  </p>
                  {entry.detail && (
                    <p className="mt-2 text-base text-ink-dim text-pretty">
                      {entry.detail}
                    </p>
                  )}
                </div>
              </RevealItem>
              {i < educationTimeline.length - 1 && (
                <CaretDown
                  size={18}
                  weight="bold"
                  className="my-2 shrink-0 text-ink-dim/50"
                />
              )}
            </div>
          );
        })}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-12 border-t border-line pt-8">
        <h3 className="text-sm font-medium text-ink-dim">Certifications</h3>
        <ul className="mt-3 flex flex-wrap gap-3">
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
