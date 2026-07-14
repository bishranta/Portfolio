"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Briefcase, CaretDown, ChartLineUp, PenNib } from "@phosphor-icons/react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { experience } from "@/app/lib/data";

type Mark =
  | { type: "logo"; src: string }
  | { type: "icon"; Icon: typeof Briefcase; fg: string };

const marksByRole: Record<string, Mark> = {
  "Freelance Data Analyst": { type: "icon", Icon: ChartLineUp, fg: "text-mustard" },
};

const marksByOrg: Record<string, Mark> = {
  "ICT Foundation": { type: "logo", src: "/logos/ictfoundation.ico" },
  "Self-employed": { type: "icon", Icon: Briefcase, fg: "text-teal" },
  "LOFA, Freelance": { type: "icon", Icon: PenNib, fg: "text-coral" },
};

const fallback: Mark = { type: "icon", Icon: Briefcase, fg: "text-mustard" };

const ringStyles = [
  { ring: "border-coral/40", hoverRing: "hover:border-coral/60" },
  { ring: "border-teal/40", hoverRing: "hover:border-teal/60" },
  { ring: "border-mustard/40", hoverRing: "hover:border-mustard/60" },
  { ring: "border-coral/40", hoverRing: "hover:border-coral/60" },
];

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="max-w-[32ch] text-3xl font-semibold tracking-tight text-balance md:max-w-none md:text-4xl">
          Where I have been putting the work in.
        </h2>
      </Reveal>

      <div className="relative mt-10">
        <div className="absolute left-[21px] top-6 bottom-6 w-px bg-line" />

        <RevealStagger className="space-y-3">
          {experience.map((role, i) => {
            const mark = marksByRole[role.role] ?? marksByOrg[role.org] ?? fallback;
            const { ring, hoverRing } = ringStyles[i % ringStyles.length];
            const isOpen = open === i;
            return (
              <RevealItem key={`${role.role}-${role.org}`} className="flex gap-4">
                <div className="flex w-11 shrink-0 justify-center pt-3">
                  <span
                    className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full border-2 bg-white shadow-sm ${ring}`}
                  >
                    {mark.type === "logo" ? (
                      <Image
                        src={mark.src}
                        alt={`${role.org} logo`}
                        width={22}
                        height={22}
                        unoptimized
                      />
                    ) : (
                      <mark.Icon size={18} weight="bold" className={mark.fg} />
                    )}
                  </span>
                </div>

                <div
                  className={`min-w-0 flex-1 overflow-hidden rounded-2xl border border-line bg-paper-dim transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${hoverRing}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-medium text-ink sm:truncate">
                        {role.role}
                      </span>
                      <span className="block truncate text-sm text-ink-dim">
                        {role.org}
                      </span>
                      <span className="block font-mono text-xs text-ink-dim sm:hidden">
                        {role.period}
                      </span>
                    </span>
                    <span className="hidden shrink-0 font-mono text-xs text-ink-dim sm:block">
                      {role.period}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-ink-dim"
                    >
                      <CaretDown size={16} weight="bold" />
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={
                      reduce
                        ? { height: isOpen ? "auto" : 0 }
                        : { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }
                    }
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <ul className="space-y-2">
                        {role.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2 text-sm text-ink-dim text-pretty"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-dim" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
