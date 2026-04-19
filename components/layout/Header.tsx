"use client";
import { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { cn } from "@/utils/ClassName";
import { motion, Variants } from "motion/react";
import TypewriterText from "../motion/TypewriterText";

const logoVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const navContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = (): void => setOpen((prev) => !prev);
  const closeMenu = (): void => setOpen(false);

  return (
    <header className="top-0 z-50 sticky flex flex-wrap justify-between items-center bg-surface-low/10 backdrop-blur-2xl px-0 md:px-outer w-full h-24">
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center items-center px-4 md:px-0 w-full md:w-fit"
      >
        {/* Logo Section */}
        <Link
          href={"/"}
          className="hover:opacity-80 py-2 md:py-0 font-semibold text-xl tracking-wide transition-opacity"
          onClick={closeMenu}
        >
          <TypewriterText text="Gökhan 'GhostKozak' Tanrıverdi" speed={0.06} />
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
          {open ? <LuX /> : <LuMenu />}
        </button> */}
      </motion.div>
      {/* Navigation Section */}
      <nav
        className={`
          w-full md:w-fit md:mx-auto absolute md:static left-0 top-full z-40
          md:flex transition-all duration-500 ease-in-out md:bg-transparent md:border-none border-b border-b-white/10
          ${open
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-2 pointer-events-none md:translate-y-0 md:opacity-100 md:visible md:pointer-events-auto"
          }`}
      >
        <motion.ul
          variants={navContainerVariants}
          initial="hidden"
          animate="show"
          className="flex md:flex-row flex-col py-4 text-stone-500 dark:text-white/60"
        >
          <ListItem href="#about" active onClick={closeMenu}>About</ListItem>
          <ListItem href="#work" onClick={closeMenu}>Work</ListItem>
          <ListItem href="#archive" onClick={closeMenu}>Archive</ListItem>
          <ListItem href="#blog" onClick={closeMenu}>Blog</ListItem>
          <ListItem href="#contact" onClick={closeMenu}>Contact</ListItem>
        </motion.ul>
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

function ListItem({ href, children, classNames, active, onClick }: ListItemProps) {
  return (
    <motion.li variants={navItemVariants}>
      <Link
        className={cn("block px-4 py-2 hover:md:pl-4 hover:pl-6 md:font-semibold font-black hover:text-primary/80 dark:hover:text-primary/60 md:text-sm text-xl uppercase tracking-widest transition-all", active ? 'text-primary text-shadow-2xs' : '', classNames)}
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.li>
  );
}