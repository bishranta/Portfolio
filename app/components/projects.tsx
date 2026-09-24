"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Broadcast,
  ChartLineUp,
  Fingerprint,
  Ticket,
} from "@phosphor-icons/react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { projects } from "@/app/lib/data";

type Project = (typeof projects)[number];

const ring: Record<string, string> = {
  teal: "border-teal/40 hover:border-teal/70",
  coral: "border-coral/40 hover:border-coral/70",
  mustard: "border-mustard/40 hover:border-mustard/70",
};

const fg: Record<string, string> = {
  teal: "text-teal",
  coral: "text-coral",
  mustard: "text-mustard",
};

const accentDot: Record<string, string> = {
  teal: "bg-teal",
  coral: "bg-coral",
  mustard: "bg-mustard",
};

const projectIcon: Record<string, typeof ChartLineUp> = {
  "Conference Management System": Broadcast,
  "Event Management System": Ticket,
  "NEPSE Stock Price Prediction": ChartLineUp,
  "Image Authenticity Detection": Fingerprint,
};

const orgLogo: Record<string, string> = {
  "ICT Award": "/logos/ictaward.png",
  "ICT Foundation": "/logos/ictfoundation.png",
  "Digital Conclave": "/logos/digitalconclave.png",
  "Global Spark": "/logos/globalspark.svg",
  ICTech: "/logos/ictech.jpg",
  "Living with ICT": "/logos/livingwithict.png",
};

const groups = [
  {
    key: "org",
    title: "Organization websites",
    dot: "teal",
    intro:
      "Six marketing and organization sites for ICT-sector clients, all sharing the same stack — React, Next.js, and Tailwind CSS. Each one is deployed and maintained independently.",
    grid: "sm:grid-cols-2 md:grid-cols-3",
    compact: true,
  },
  {
    key: "mgmt",
    title: "Management system projects",
    dot: "coral",
    grid: "sm:grid-cols-2",
    compact: false,
  },
  {
    key: "ml",
    title: "Machine learning projects",
    dot: "mustard",
    grid: "sm:grid-cols-2",
    compact: false,
  },
] as const;

function ProjectRow({ project }: { project: Project }) {
  const Icon = projectIcon[project.title];
  const content = (
    <>
      <span
        className={`relative z-10 grid size-11 shrink-0 place-items-center self-start rounded-full border-2 bg-white shadow-sm ${ring[project.accent]}`}
      >
        <Icon size={18} weight="bold" className={fg[project.accent]} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="text-base font-medium text-ink">{project.title}</span>
        <span className="mt-1 block text-sm text-ink-dim text-pretty">
          {project.description}
        </span>
        <span className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-dim"
            >
              {tag}
            </span>
          ))}
        </span>
      </span>

      {project.href && (
        <span className="shrink-0 self-center text-ink-dim">
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );

  const className = `group flex h-full items-start gap-4 rounded-2xl border border-line bg-paper-dim px-5 py-4 transition-all duration-200 ${
    project.href ? "hover:-translate-y-1 hover:shadow-md" : ""
  } ${ring[project.accent]}`;

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function CompactCard({ project }: { project: Project }) {
  const logo = orgLogo[project.title];
  return (
    <a
      href={project.href ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 rounded-2xl border border-line bg-paper-dim px-4 py-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${ring[project.accent]}`}
    >
      <span
        className={`relative grid size-11 shrink-0 place-items-center self-center overflow-hidden rounded-full border-2 bg-white ${ring[project.accent]}`}
      >
        <Image src={logo} alt={`${project.title} logo`} fill sizes="30px" className="object-contain p-1.5" unoptimized />
      </span>
      <span className="flex min-w-0 flex-col gap-2">
        <span className="truncate text-sm font-medium text-ink">{project.title}</span>
        <span className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-dim"
            >
              {tag}
            </span>
          ))}
        </span>
      </span>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal className="flex flex-col items-center text-center">
        <span className="mb-4 block h-1.5 w-9 rounded-full bg-mustard" />
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          Projects That I've Built
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-4xl space-y-14">
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
              {"intro" in group && (
                <p className="mt-2 max-w-2xl text-sm text-ink-dim text-pretty">{group.intro}</p>
              )}
              <RevealStagger className={`mt-5 grid grid-cols-1 gap-4 ${group.grid}`}>
                {items.map((project) => (
                  <RevealItem key={project.title}>
                    {group.compact ? (
                      <CompactCard project={project} />
                    ) : (
                      <ProjectRow project={project} />
                    )}
                  </RevealItem>
                ))}
              </RevealStagger>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
