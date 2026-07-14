"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { HeroMark } from "./hero-mark";
import { Magnetic } from "./magnetic";

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 24 };

  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden px-6 pt-12 pb-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 -z-10 size-[420px] rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 -z-10 size-[360px] rounded-full bg-coral/10 blur-3xl"
      />

      <div>
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-dim px-3.5 py-1.5"
        >
          {/* <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-teal" />
          </span> */}
          <span className="inline-flex items-center gap-1 text-sm text-ink-dim">
            <MapPin size={14} />
            Open to work, Kathmandu
          </span>
        </motion.div>

        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-5xl font-bold tracking-tight text-balance md:text-7xl"
        >
          <span className="block text-ink">developer</span>
          <span className="block text-coral">&lt;designer&gt;</span>
        </motion.h1>
        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-[46ch] text-lg text-ink-dim text-pretty"
        >
          Full stack developer and AI/ML engineer in Kathmandu, turning ideas
          into fast, thoughtful, production-ready software.
        </motion.p>
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform active:scale-[0.97]"
            >
              See my work
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97]"
            >
              Say hello
            </a>
          </Magnetic>
        </motion.div>
      </div>
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroMark />
      </motion.div>
    </section>
  );
}
