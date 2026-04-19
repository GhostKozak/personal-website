"use client";

import { useRef } from "react";
import { animate, motion } from "motion/react";
import { cn } from "@/utils/ClassName";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  decimals = 0,
  className
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const startAnimation = () => {
    if (started.current) return;
    started.current = true;

    animate(from, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = value.toFixed(decimals);
        }
      }
    });
  };

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      initial="hidden"
      variants={{
        hidden: { opacity: 1 },
        show: { opacity: 1 }
      }}
      onAnimationStart={(definition) => {
        if (definition === "show") startAnimation();
      }}
      onViewportEnter={() => startAnimation()}
      viewport={{ once: true, margin: "-10%" }}
    >
      {from.toFixed(decimals)}
    </motion.span>
  );
}
