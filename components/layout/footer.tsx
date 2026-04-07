"use client";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-6 bg-surface-low px-4 md:px-outer py-6 md:py-20 text-xs uppercase tracking-widest">
      <h2 className="hidden md:block font-bold text-lg">Gökhan 'GhostKozak' Tanrıverdi</h2>
      <div className="links">
        <ul className="flex flex-row gap-6 text-neutral-500">
          <ListItem url="#">Github</ListItem>
          <ListItem url="#">Linkedin</ListItem>
          <ListItem url="#">Source</ListItem>
        </ul>
      </div>
      <span className="text-neutral-500">&copy; 2026 Portfolio | Made by GhostKozak</span>
    </footer>
  )
}

function ListItem({url, children, classNames}:{url: string, children?: React.ReactNode, classNames?: string}) {
  return <li><a href={url} className={`text-neutral-500 ${classNames}`}>{children}</a></li>
}