"use client"

import Link from "next/link";
import { LuCode, LuCodeXml, LuFolder, LuTerminal } from "react-icons/lu";
import ArchiveCard, { ArchiveCardProps } from "../ui/ArchiveCard";
import { useState } from "react";
import ArchiveList from "../ui/ArchiveList";

const TEMP_ARCHIVE_RECORDS : ArchiveCardProps[] = [
  {
    id: 1,
    icon: <LuFolder />,
    externalPath: "#",
    title: "Shader Sandbox",
    description: "GLSL experiment for reactive backgrounds.",
    tags: ["webGL", "three.js"],
  },
  {
    id: 2,
    icon: <LuCode />,
    externalPath: "#",
    title: "log sniffer",
    description: "CLI tool for parsing distributed logs.",
    tags: ["rust", "cli"],
  },
  {
    id: 3,
    icon: <LuTerminal />,
    externalPath: "#",
    title: "Auth-Gate",
    description: "minimal JWT middleware for Express",
    tags: ["node.js", "auth"],
  },
  {
    id: 4,
    icon: <LuCodeXml />,
    externalPath: "#",
    title: "Spectral-UI",
    description: "Base component library for this theme",
    tags: ["react", "css"],
  },
];

export default function Archive() {
  const [archiveType, setArchiveType] = useState<"card" | "list">("card");

  return (
    <section id="archive" className="bg-surface-low px-4 md:px-outer py-16">
      <div className="flex flex-col justify-center gap-10 md:h-screen snap-always snap-start">
        <div className="flex flex-col">
          <span className="text-primary text-xs uppercase tracking-widest" onClick={() => setArchiveType((current) => (current === "card" ? "list" : "card"))}>Other Works</span>
          <h1 className="inline-flex items-center gap-6 mt-4 mb-16 font-extrabold text-5xl capitalize sm:whitespace-nowrap">archive <span className="hidden sm:inline-block bg-white/10 w-full h-0.5"></span> <Link href={"/archive"} className="text-primary text-xs uppercase">view full list</Link></h1>
        </div>
        {
          archiveType === "card" ? (
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1">
              {
                TEMP_ARCHIVE_RECORDS.map(record => (
                  <ArchiveCard key={record.id} {...record} />
                ))
              }
            </div>
            
          ) : (
            <ArchiveList />
          )
        }
      </div>
    </section>
  )
}