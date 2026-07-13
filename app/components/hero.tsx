"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { HeroMark } from "./hero-mark";

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 24 };

  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24"
    >
      <div>
        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-semibold tracking-tight text-balance md:text-6xl"
        >
          I build web products people actually enjoy using.
        </motion.h1>
        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-[46ch] text-lg text-ink-dim text-pretty"
        >
          Full stack developer and AI/ML engineer in Kathmandu, turning ideas
          into fast, thoughtful, production-ready software.
        </motion.p>
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform active:scale-[0.97] hover:-translate-y-0.5"
          >
            See my work
            <ArrowUpRight size={16} weight="bold" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
          >
            Say hello
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroMark />
      </motion.div>
    </section>
  );
}
