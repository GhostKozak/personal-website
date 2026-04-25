import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

export interface ArchiveCardProps {
  id: string | number,
  icon: React.ReactNode;
  externalPath: string;
  title: string;
  description: string;
  tags: string[]
}

export default function ArchiveCard({icon, externalPath, title, description, tags}: ArchiveCardProps) {
  return (
    <div className="flex flex-col justify-between gap-2 bg-surface shadow-md/30 hover:shadow-primary p-6 border border-transparent hover:border-primary/60 transition-all">
      <div className="flex justify-between items-center text-2xl">
        {icon}
        <Link href={externalPath} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title}`}><LuExternalLink className="text-base" /></Link>
      </div>
      <h2 className="text-neutral-200 text-xl capitalize">{title}</h2>
      <p className="text-white/60 text-base capitalize">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {tags.map(tag => <li key={tag} className="text-white/30 text-xs capitalize">{tag}</li>)}
      </ul>
    </div>
  )
}