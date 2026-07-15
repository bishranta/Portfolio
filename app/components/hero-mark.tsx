"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Code, PenNib } from "@phosphor-icons/react";

export function HeroMark() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      <motion.svg viewBox="0 0 400 400" className="h-full w-full" initial={false}>
        <motion.path
          d="M120 60 C 60 90, 40 170, 80 230 C 120 290, 220 300, 270 250 C 320 200, 300 100, 230 70 C 190 53, 155 45, 120 60 Z"
          fill="var(--mustard)"
          fillOpacity="0.65"
          animate={
            reduce
              ? undefined
              : { rotate: [0, 6, -4, 0], scale: [1, 1.03, 0.99, 1] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "175px 165px" }}
        />
        <motion.path
          d="M220 120 C 280 130, 330 180, 320 240 C 310 300, 240 335, 185 320 C 130 305, 105 245, 130 195 C 152 150, 180 112, 220 120 Z"
          fill="var(--coral)"
          fillOpacity="0.6"
          animate={
            reduce
              ? undefined
              : { rotate: [0, -5, 4, 0], scale: [1, 0.98, 1.02, 1] }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ transformOrigin: "220px 220px" }}
        />
        <motion.circle
          cx="90"
          cy="290"
          r="34"
          fill="var(--teal)"
          fillOpacity="0.55"
          animate={
            reduce ? undefined : { y: [0, -10, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="var(--teal)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </motion.svg>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[13%] right-[12%] top-[0%] overflow-hidden rounded-[2rem]"
        style={{ aspectRatio: "500 / 669" }}
      >
        <Image
          src="/portrait-cutout.png"
          alt="Illustrated portrait of Bishranta Regmi"
          fill
          sizes="(min-width: 768px) 260px, 55vw"
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute right-2 top-6 grid size-12 place-items-center rounded-2xl border border-line bg-paper shadow-sm"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code size={20} weight="bold" className="text-teal" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-0 grid size-12 place-items-center rounded-2xl border border-line bg-paper shadow-sm"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <PenNib size={20} weight="bold" className="text-coral" />
      </motion.div>
    </div>
  );
}
