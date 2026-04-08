"use client";
import { LuCode, LuHouse, LuTerminal, LuUser } from "react-icons/lu";
import Link from "next/link";

export default function MobileBottomNav() {

  return (
    <nav className="md:hidden bottom-0 left-0 z-50 fixed flex justify-between items-center bg- bg-surface-low p-5 w-full h-20">
      <NavItem href={"#home"} active> <LuHouse /> </NavItem>
      <NavItem href={"#work"} > <LuCode /> </NavItem>
      <NavItem href={"#blog"} > <LuTerminal /> </NavItem>
      <NavItem href={"#contact"} > <LuUser /> </NavItem>
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