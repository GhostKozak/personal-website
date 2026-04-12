"use client";

import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {

  return (
    <button
      onClick={() => alert("dark mode aktif")}
      className="inline-flex justify-center items-center rounded-md focus-visible:ring-offset-2 w-12 h-12 font-medium text-sm transition-colors hover:text-accent-foreground cursor-pointer disabled:pointer-events-none"
    >
      <LuSun className="w-5 h-5 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
      <LuMoon className="absolute w-5 h-5 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}