"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle, DownloadSimple } from "@phosphor-icons/react";
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
        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-bold tracking-tight text-balance text-ink md:text-7xl"
        >
          Bishranta Regmi
        </motion.h1>
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-teal/10 px-3.5 py-1.5 text-sm font-medium text-ink">
            <CheckCircle size={16} weight="fill" className="text-teal" />
            Open to work
          </span>
          <a
            href="/Bishranta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-ink-dim"
          >
            <DownloadSimple size={15} weight="bold" />
            Download CV
          </a>
        </motion.div>
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
