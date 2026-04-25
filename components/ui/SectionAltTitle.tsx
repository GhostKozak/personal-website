interface SectionAltTitleProps {
  children?: string | React.ReactNode
}

export default function SectionAltTitle({children} : SectionAltTitleProps) {
  return (
    <span className="text-primary text-xs uppercase tracking-widest">{children}</span>
  )
}