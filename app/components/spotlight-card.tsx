"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { ReactNode } from "react";

export function SpotlightCard({
  children,
  className,
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string | null;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const background = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, var(--accent) 0%, transparent 70%)`;

  function handleMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mouseX.set(px);
    mouseY.set(py);
    rotateY.set(((px - rect.width / 2) / rect.width) * 6);
    rotateX.set(-((py - rect.height / 2) / rect.height) * 6);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const Comp = (href ? motion.a : onClick ? motion.button : motion.div) as typeof motion.a;

  return (
    <Comp
      ref={ref as React.Ref<HTMLAnchorElement>}
      {...(href
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : onClick
          ? { type: "button", onClick }
          : {})}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      className={`group relative flex flex-col ${className ?? ""}`}
    >
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{ background }}
        />
      )}
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </Comp>
  );
}
