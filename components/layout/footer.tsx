"use client";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-center md:justify-between items-center bg-surface-low px-4 md:px-outer py-6 md:py-20 text-xs uppercase">
      <h2 className="font-bold text-lg">Gökhan 'GhostKozak' Tanrıverdi</h2>
      <div className="links">
        <ul className="flex md:flex-row flex-col gap-2 text-neutral-500">
          <ListItem url="#">Github</ListItem>
          <ListItem url="#">Linkedin</ListItem>
          <ListItem url="#">Source</ListItem>
        </ul>
      </div>
      <span className="text-neutral-500">&copy; 2026 GhostKozak</span>
    </footer>
  )
}

function ListItem({url, children, classNames}:{url: string, children?: React.ReactNode, classNames?: string}) {
  return <li><a href={url} className={`text-neutral-500 ${classNames}`}>{children}</a></li>
}