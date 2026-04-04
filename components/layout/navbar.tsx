"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex flex-wrap justify-between items-center px-0 md:px-outer">
      <div className="flex justify-between items-center px-4 md:px-0 w-full md:w-fit">
        <div className="font-black text-1xl">
          GhostKozak
        </div>
        <div
          id="hamburger-menu-toggle"
          className="md:hidden flex flex-col justify-center gap-1 -mr-2 p-2 w-12 h-12"
          onClick={() => setOpen(prev => !prev)}
        >
          <span className="bg-white w-full h-0.5"></span>
          <span className="bg-white w-full h-0.5"></span>
          <span className="bg-white w-full h-0.5"></span>
        </div>
      </div>
      
      <nav className={`w-full md:w-fit md:mx-auto bg-black/75 shrink absolute md:static top-full left-0 ${open && 'hidden'}`}>
        <ul className="flex md:flex-row flex-col py-4 text-white/60">
          {/* TODO: make text change dynamic with state */}
          <ListItem url="#" classNames="text-primary">About</ListItem>
          <ListItem url="#">Work</ListItem>
          <ListItem url="#">Archive</ListItem>
          <ListItem url="#">Blog</ListItem>
          <ListItem url="#">Contact</ListItem>
        </ul>
      </nav>
    </header>
  )
}

function ListItem({url, children, classNames}:{url: string, children?: React.ReactNode, classNames?: string}) {
  return <li><a className={`block px-4 py-2 hover:pl-6 hover:md:pl-4 hover:md:text-primary/60 font-black text-1xl md:text-sm/ transition-all ${classNames}`} href={url}>{children}</a></li>
}