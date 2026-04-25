interface SectionTitleProps {
  children?: string | React.ReactNode
}

export default function SectionTitle({children} : SectionTitleProps) {
  return (
    <h1 className="inline-flex items-center gap-6 mt-4 mb-16 font-extrabold text-5xl capitalize sm:whitespace-nowrap">{children} <span className="hidden sm:inline-block bg-white/10 w-full h-0.5"></span></h1>
  )
}