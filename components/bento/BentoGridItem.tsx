import { cn } from "@/utils/ClassName";

interface BentoGridItemProps {
  children?: React.ReactNode;
  className?: string;
}

export function BentoGridItem({ children, className }: BentoGridItemProps) {
  return (
    <div
      data-bento-card
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--mouse-outside": "1",
        } as React.CSSProperties
      }
      className={cn(
        "group relative flex flex-col bg-surface-low p-4 md:p-10 rounded-xl overflow-hidden",
        className
      )}>

      {/* Layer 1 - Base Border */}
      <div className="z-10 absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />

      {/* Layer 2 - Glow border */}
      <div 
        className="z-10 absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: "calc(1 - var(--mouse-outside, 1))",
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            var(--color-glow),
            transparent 40%
          )`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px"
        }}
      />

      {/* Layer 3 - Background gradient */}
      <div
        className="z-0 absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: "calc(1 - var(--mouse-outside, 1))",
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            var(--color-glow-bg),
            transparent 40%
          )`,
        }}
       />

      {/* Content */}
      <div className="z-20 relative flex flex-col h-full">{children}</div>
    </div>
  )
}