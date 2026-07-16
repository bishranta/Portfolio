"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChartLineUp,
  Fingerprint,
  GithubLogo,
  X,
} from "@phosphor-icons/react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { SpotlightCard } from "./spotlight-card";
import { projects, profile } from "@/app/lib/data";

type Project = (typeof projects)[number];

const accentBg: Record<string, string> = {
  teal: "bg-teal/20",
  coral: "bg-coral/20",
  mustard: "bg-mustard/20",
};

const accentFg: Record<string, string> = {
  teal: "text-teal",
  coral: "text-coral",
  mustard: "text-mustard",
};

const accentDot: Record<string, string> = {
  teal: "bg-teal",
  coral: "bg-coral",
  mustard: "bg-mustard",
};

const fallbackIcon: Record<string, typeof ChartLineUp> = {
  "NEPSE Stock Price Prediction": ChartLineUp,
  "Image Authenticity Detection": Fingerprint,
};

const groups = [
  { key: "web", title: "Web development projects", dot: "teal" },
  { key: "ml", title: "Machine learning projects", dot: "mustard" },
] as const;

function Thumbnail({
  project,
  rounded,
}: {
  project: Project;
  rounded?: boolean;
}) {
  const Icon = fallbackIcon[project.title];
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden ${rounded ? "rounded-xl" : ""}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 1024px) 360px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center ${accentBg[project.accent]}`}
        >
          {Icon && (
            <Icon size={56} weight="duotone" className={accentFg[project.accent]} />
          )}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected) dialog.showModal();
    else dialog.close();
  }, [selected]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal className="flex flex-col items-center text-center">
        <span className="mb-4 block h-1.5 w-9 rounded-full bg-mustard" />
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          Projects That I've Built
        </h2>
      </Reveal>

      <div className="mt-14 space-y-14">
        {groups.map((group) => {
          const items = projects.filter((p) => p.category === group.key);
          return (
            <Reveal key={group.key}>
              <div className="flex items-center gap-2.5">
                <span className={`size-2 rounded-full ${accentDot[group.dot]}`} />
                <h3 className="text-sm font-semibold tracking-wide text-ink-dim">
                  {group.title}
                </h3>
              </div>
              <RevealStagger className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((project) => (
                  <RevealItem key={project.title}>
                    <SpotlightCard
                      onClick={() => setSelected(project)}
                      className="h-full w-full overflow-hidden rounded-xl border border-line bg-paper-dim p-1 text-left"
                    >
                      <Thumbnail project={project} rounded />
                      <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
                        <h4 className="text-base font-medium text-ink">
                          {project.title}
                        </h4>
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-ink-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </SpotlightCard>
                  </RevealItem>
                ))}
              </RevealStagger>
            </Reveal>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-xl border border-line bg-paper p-0 text-ink backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <div>
            <div className="relative p-2">
              <Thumbnail project={selected} rounded />
              <button
                onClick={() => dialogRef.current?.close()}
                aria-label="Close"
                className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-paper/90 text-ink shadow-sm transition-transform active:scale-[0.94] hover:-translate-y-0.5"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ink">
                {selected.title}
              </h3>
              <p className="mt-2 text-base text-ink-dim text-pretty">
                {selected.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-dim"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {selected.href && (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform active:scale-[0.97] hover:-translate-y-0.5"
                  >
                    Open project
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                )}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
                >
                  <GithubLogo size={16} weight="bold" />
                  GitHub
                </a>
                {!selected.href && (
                  <p className="w-full text-sm text-ink-dim">
                    Not publicly deployed, source available on request.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
