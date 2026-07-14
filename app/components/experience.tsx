"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import {
  ChartLineUp,
  Code,
  PenNib,
  Rocket,
} from "@phosphor-icons/react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { experience } from "@/app/lib/data";

const icons = [
  { Icon: Rocket, fg: "text-coral", ring: "border-coral/40", bar: "bg-coral" },
  { Icon: Code, fg: "text-teal", ring: "border-teal/40", bar: "bg-teal" },
  { Icon: ChartLineUp, fg: "text-mustard", ring: "border-mustard/40", bar: "bg-mustard" },
  { Icon: PenNib, fg: "text-coral", ring: "border-coral/40", bar: "bg-coral" },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="max-w-[32ch] text-3xl font-semibold tracking-tight text-balance md:max-w-none md:text-4xl">
          Where I have been putting the work in.
        </h2>
      </Reveal>

      <div ref={ref} className="relative mt-14">
        <div className="absolute left-5 top-2 bottom-2 w-0.5 -translate-x-1/2 rounded-full bg-line">
          {!reduce && (
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="h-full w-full origin-top rounded-full bg-accent"
            />
          )}
        </div>

        <RevealStagger className="space-y-6">
          {experience.map((role, i) => {
            const { Icon, fg, ring, bar } = icons[i % icons.length];
            return (
              <RevealItem
                key={`${role.role}-${role.org}`}
                className="relative flex gap-5"
              >
                <span
                  className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 bg-paper shadow-sm ${ring}`}
                >
                  <Icon size={17} weight="bold" className={fg} />
                </span>
                <div className="flex flex-1 overflow-hidden rounded-2xl border border-line bg-paper-dim transition-transform hover:-translate-y-1">
                  <span className={`w-1.5 shrink-0 ${bar}`} />
                  <div className="grid flex-1 gap-3 p-5 md:grid-cols-[220px_1fr] md:gap-8 md:py-6">
                    <div>
                      <p className="text-base font-medium text-ink whitespace-nowrap">
                        {role.role}
                      </p>
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
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
