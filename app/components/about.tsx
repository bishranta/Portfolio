import { Reveal, RevealItem, RevealStagger } from "./reveal";

const highlights = [
  { value: "4+", label: "Live sites shipped", bg: "bg-teal/20", fg: "text-teal" },
  { value: "2", label: "AI/ML projects", bg: "bg-teal/20", fg: "text-teal" },
  { value: "2026", label: "Freshly graduated", bg: "bg-coral/20", fg: "text-coral" },
  { value: "2019", label: "Designing since", bg: "bg-mustard/20", fg: "text-mustard" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
        <Reveal>
          <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
            A developer with a design eye, and a soft spot for data.
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg text-ink-dim text-pretty">
            I graduated in computer engineering and spent the last few years
            working as a graphic designer and developer shipping real websites 
            for real clients. Ususlly I work with React, Next.js and TypeScript, 
            backed by Node.js, PostgreSQL and Supabase and lean on my design and 
            UI/UX background to make the front end feel right, not just work. On
            the side, I build have interest in AI/ML as well, working on systems 
            in Python, with completion of projects like stock price forecasting 
            and image forensics.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-4">
          {highlights.map((stat) => (
            <RevealItem
              key={stat.label}
              className={`flex flex-col items-center justify-center rounded-2xl p-7 text-center ${stat.bg}`}
            >
              <p className={`text-3xl font-bold tracking-tight ${stat.fg}`}>
                {stat.value}
              </p>
              <p className="mt-1 text-lg text-ink-dim">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
