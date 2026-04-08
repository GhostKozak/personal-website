"use client";
import { Code, Home, Terminal, User } from "lucide-react";
import Link from "next/link";

export default function MobileBottomNav() {

  return (
    <nav className="md:hidden bottom-0 left-0 z-50 fixed flex justify-between items-center bg- bg-surface-low p-5 w-full h-20">
      <NavItem href={"#home"} active> <Home /> </NavItem>
      <NavItem href={"#work"} > <Code /> </NavItem>
      <NavItem href={"#blog"} > <Terminal /> </NavItem>
      <NavItem href={"#contact"} > <User /> </NavItem>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode,
  classNames?: string,
  active?: boolean
}

function NavItem({href, children, classNames, active}: NavItemProps) {
  return <Link href={href} className={`flex justify-center items-center w-12 h-12 rounded-lg transition-all shadow border ${active ? "shadow-primary/70 border-primary/5" : "shadow-transparent border-transparent"} ${classNames}`}> {children} </Link>
}