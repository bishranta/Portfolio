import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { skillGroups, education, certifications } from "@/app/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          A developer with a design eye, and a soft spot for data.
        </h2>
        <p className="mt-5 max-w-[65ch] text-lg text-ink-dim text-pretty">
          I graduated in computer engineering and spent the last two years
          shipping real websites for real clients, not just class projects.
          Most days I work in React, Next.js, and TypeScript, backed by
          Node.js, PostgreSQL, and Supabase, and I lean on a UI/UX background
          to make the front end feel right, not just work. On the side, I
          build machine learning systems in Python, from stock price
          forecasting to image forensics.
        </p>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <RevealItem key={group.title} className="bg-paper p-6">
            <h3 className="text-sm font-medium text-ink-dim">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-14 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-ink-dim">Education</h3>
          <p className="mt-2 text-base text-ink">{education.degree}</p>
          <p className="text-sm text-ink-dim">
            {education.school}, {education.period}
          </p>
          <p className="mt-1 text-sm text-ink-dim">
            Coursework: {education.coursework}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-ink-dim">Certifications</h3>
          <ul className="mt-2 space-y-1">
            {certifications.map((cert) => (
              <li key={cert} className="text-base text-ink">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
