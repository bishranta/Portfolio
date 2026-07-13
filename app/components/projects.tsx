import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { projects } from "@/app/lib/data";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          A handful of things I have shipped.
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => {
          const Card = project.href ? "a" : "div";
          return (
            <RevealItem
              key={project.title}
              className={
                project.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
              }
            >
              <Card
                {...(project.href
                  ? {
                      href: project.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`group flex h-full flex-col justify-between rounded-2xl border border-line p-6 transition-transform hover:-translate-y-1 ${
                  project.size === "large"
                    ? "bg-gradient-to-br from-accent/10 to-transparent"
                    : "bg-paper-dim"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-medium text-ink">
                      {project.title}
                    </h3>
                    {project.href && (
                      <ArrowUpRight
                        size={20}
                        className="mt-1 shrink-0 text-ink-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </div>
                  <p className="mt-2 text-base text-ink-dim text-pretty">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-dim"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </section>
  );
}
