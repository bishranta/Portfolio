"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroMark() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={false}
      >
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <motion.g
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <circle
              key={deg}
              cx={(200 + 118 * Math.cos((deg * Math.PI) / 180)).toFixed(2)}
              cy={(200 + 118 * Math.sin((deg * Math.PI) / 180)).toFixed(2)}
              r="4"
              fill="var(--accent)"
              fillOpacity="0.5"
            />
          ))}
        </motion.g>
        <motion.rect
          x="140"
          y="140"
          width="120"
          height="120"
          rx="28"
          fill="var(--accent)"
          fillOpacity="0.12"
          stroke="var(--accent)"
          strokeWidth="2"
          animate={
            reduce
              ? undefined
              : { rotate: [0, 8, -6, 0], scale: [1, 1.04, 0.98, 1] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <text
          x="200"
          y="212"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono)"
          fontSize="42"
          fill="var(--ink)"
          fontWeight={600}
        >
          BR
        </text>
      </motion.svg>
    </div>
  );
}
