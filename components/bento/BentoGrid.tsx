import { useCallback, useRef, useState, useEffect } from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { cn } from "@/utils/ClassName";

interface BentoGridProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(navigator.maxTouchPoints === 0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current || !isDesktop) return;
    const cards = gridRef.current?.querySelectorAll<HTMLElement>("[data-bento-card]");

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--mouse-outside", "0");
    });
  }, [isDesktop]);

  const handleMouseLeave = useCallback(() => {
    if (!gridRef.current || !isDesktop) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>("[data-bento-card]");
    cards.forEach(card => card.style.setProperty("--mouse-outside", "1"));
  }, [isDesktop]);

  return (
    <motion.div
      ref={gridRef}
      onMouseMove={isDesktop ? handleMouseMove : undefined}
      onMouseLeave={isDesktop ? handleMouseLeave : undefined}
      className={cn("gap-bento grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}