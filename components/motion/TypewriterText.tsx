"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import { cn } from "@/utils/ClassName";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 0.08,
  className,
  cursor = true,
}: TypewriterTextProps) {
  const [isDone, setIsDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * speed,
      delay: delay,
      ease: "linear",
      onComplete: () => setIsDone(true),
    });
    return () => controls.stop();
  }, [text, delay, speed, count]);

  return (
    <span className={cn("relative inline-flex items-center whitespace-nowrap", className)}>
      {/* Görünmez yer tutucu - Genişliği sabit tutar */}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {text}
        {cursor && <span className="ml-1">_</span>}
      </span>

      {/* Gerçekten yazılan metin */}
      <span className="absolute inset-0 flex items-center">
        <motion.span>{displayText}</motion.span>
        {cursor && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className={cn("ml-1 font-bold text-primary", isDone ? "inline-block" : "hidden")}
          >
            _
          </motion.span>
        )}
      </span>
    </span>
  );
}
