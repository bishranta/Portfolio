import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { experience } from "@/app/lib/data";

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          Where I have been putting the work in.
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 divide-y divide-line border-t border-line">
        {experience.map((role) => (
          <RevealItem
            key={`${role.role}-${role.org}`}
            className="grid gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <div>
              <p className="text-base font-medium text-ink">{role.role}</p>
              <p className="text-sm text-ink-dim">{role.org}</p>
              <p className="mt-1 font-mono text-xs text-ink-dim">
                {role.period}
              </p>
            </div>
            <ul className="space-y-2">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="text-base text-ink-dim text-pretty"
                >
                  {point}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
