"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { BrandIcon } from "./brand-icon";
import { skillGroups } from "@/app/lib/data";

const accentRing: Record<string, string> = {
  teal: "border-teal/50",
  coral: "border-coral/50",
  mustard: "border-mustard/50",
};

export function Skills() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const group = skillGroups[active];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          The tools I reach for.
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 flex flex-wrap gap-1">
        {skillGroups.map((g, i) => {
          const isActive = i === active;
          return (
            <button
              key={g.title}
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-paper font-semibold"
                  : "text-ink-dim hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="skills-tab-pill"
                  className="absolute inset-0 rounded-full bg-ink shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{g.title}</span>
            </button>
          );
        })}
      </Reveal>

      <div className="relative mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={group.title}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6"
          >
            {group.items.map((item) => (
              <div
                key={item.slug}
                className={`flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border bg-paper-dim px-3 transition-transform hover:-translate-y-1 ${
                  item.featured ? accentRing[group.accent] : "border-line"
                }`}
              >
                <span
                  className={`grid place-items-center rounded-full bg-white shadow-sm ${
                    item.featured ? "size-14" : "size-11"
                  }`}
                >
                  <BrandIcon
                    slug={item.slug}
                    color={item.color}
                    size={item.featured ? 28 : 22}
                    label={item.name}
                  />
                </span>
                <span
                  className={`text-center text-ink-dim ${
                    item.featured
                      ? "text-sm font-semibold text-ink"
                      : "text-xs font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
