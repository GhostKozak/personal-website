import { useCallback, useRef, useState, useEffect } from "react";

export function BentoGrid({ children }: { children: React.ReactNode }) {
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
    <div
      ref={gridRef}
      onMouseMove={isDesktop ? handleMouseMove : undefined}
      onMouseLeave={isDesktop ? handleMouseLeave : undefined}
      className="gap-bento grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2"
    >
      {children}
    </div>
  )
}