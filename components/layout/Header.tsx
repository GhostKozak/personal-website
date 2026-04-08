"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = (): void => setOpen((prev) => !prev);
  const closeMenu = (): void => setOpen(false);

  return (
    <header className="z-50 relative flex flex-wrap justify-between items-center px-0 md:px-outer">
      <div className="flex justify-center items-center px-4 md:px-0 w-full md:w-fit">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="hover:opacity-80 py-2 md:py-0 font-semibold text-xl tracking-wide transition-opacity"
          onClick={closeMenu}
        >
          Gökhan <span className="md:hidden inline-flex font-normal text-primary text-lg italic tracking-widest">'GhostKozak'</span> Tanrıverdi
        </Link>

        {/* Mobile Hamburger Button !!! It has been suspended indefinitely because a new solution has been found. */}
        {/* <button
          type="button"
          id="hamburger-menu-toggle"
          className="hidden z-50 relative flex-col justify-center items-center bg-transparent border-none w-12 h-12 text-inherit touch-manipulation cursor-pointer"
          onClick={toggleMenu}
          aria-label="Navigation menu open/close"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button> */}
      </div>

      {/* Navigation Section */}
      <nav
        className={`
          w-full md:w-fit md:mx-auto bg-black/95 absolute md:static left-0 top-full z-40
          md:flex transition-all duration-500 ease-in-out md:bg-transparent md:border-none border-b border-b-white/10
          ${
            open
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none md:translate-y-0 md:opacity-100 md:visible md:pointer-events-auto"
          }`}
      >
        <ul className="flex md:flex-row flex-col py-4 text-white/60">
          <ListItem href="#about" active onClick={closeMenu}>About</ListItem>
          <ListItem href="#work" onClick={closeMenu}>Work</ListItem>
          <ListItem href="#archive" onClick={closeMenu}>Archive</ListItem>
          <ListItem href="#blog" onClick={closeMenu}>Blog</ListItem>
          <ListItem href="#contact" onClick={closeMenu}>Contact</ListItem>
        </ul>
      </nav>
    </header>
  );
}

interface ListItemProps {
  href: string;
  children: React.ReactNode;
  classNames?: string;
  active?: boolean;
  onClick?: () => void;
}

function ListItem({href, children, classNames, active, onClick}: ListItemProps) {
  return (
    <li>
      <Link 
        className={`block px-4 py-2 hover:pl-6 hover:md:pl-4 hover:md:text-primary/60 font-black md:font-semibold uppercase text-xl md:text-sm transition-all tracking-widest ${active ? 'text-primary' : ''} ${classNames || ''}`} 
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}