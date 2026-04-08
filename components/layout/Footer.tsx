"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-6 bg-surface-low mb-20 md:mb-0 px-4 md:px-outer py-6 md:py-20 text-xs uppercase tracking-widest">
      <h2 className="hidden md:block font-bold text-lg">Gökhan 'GhostKozak' Tanrıverdi</h2>
      <div className="links">
        <ul className="flex flex-row gap-6 text-neutral-500">
          <ListItem href="https://github.com/GhostKozak">Github</ListItem>
          <ListItem href="https://www.linkedin.com/in/gokhan-tanriverdi/">Linkedin</ListItem>
          <ListItem href="#">Source</ListItem>
        </ul>
      </div>
      <span className="text-neutral-500">&copy; 2026 Portfolio | Made by GhostKozak</span>
    </footer>
  )
}

function ListItem({href, children, classNames}:{href: string, children?: React.ReactNode, classNames?: string}) {
  return <li><Link href={href} className={`text-neutral-500 ${classNames}`} target="_blank">{children}</Link></li>
}