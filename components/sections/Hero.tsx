"use client";

import { RiBootstrapFill, RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { LuAtSign, LuCode, LuShare2, LuZap } from "react-icons/lu";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "../bento";

export default function Hero() {
  return (
    <section id="about" className="py-6 md:py-16 xl:py-28 w-full">
      <BentoGrid>
        {/* Bento One */}
        <BentoGridItem className="sm:col-span-3 md:col-span-4 lg:col-span-4 xl:col-span-2">
          <span className="mb-4 text-net text-primary text-xs uppercase tracking-widest">discipline</span>
          <h1 className="font-semibold text-2xl capitalize tracking-widest">Software Developer</h1>
          <p className="text-stone-300">Focusing on high-concurrency systems and logical efficiency. Turning complexity into invisible infrastructure.</p>
          <p className="inline-flex items-center gap-2 mt-auto font-semibold text-primary text-xs uppercase tracking-widest"><LuZap /> Performance first</p>
        </BentoGridItem>
        {/* Bento Two */}
        <BentoGridItem className="md:col-span-2 lg:col-span-2 xl:col-span-1">
          <span className="mb-4 text-stone-300 text-xs uppercase tracking-widest">availability</span>
          <h2 className="font-semibold text-2xl">Status</h2>
          <div className="flex items-center gap-2 mt-auto">
            <span className="relative flex w-3 h-3">
              <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
              <span className="inline-flex relative bg-emerald-500 rounded-full w-3 h-3"></span>
            </span>
            <span className="text-emerald-200">Open to Work</span>
          </div>
        </BentoGridItem>
        {/* Bento Three */}
        <BentoGridItem className="md:col-span-2 xl:col-span-1">
          <span className="mb-4 text-stone-300 text-xs uppercase tracking-widest">tech stack</span>
          <div className="gap-2 grid grid-cols-2 grid-rows-2 h-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <RiJavascriptFill className="hover:text-yellow-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-200 text-xs sm:text-sm md:text-base text-center">JS / TS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <RiNextjsFill className="hover:text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-200 text-xs sm:text-sm md:text-base text-center">Next.JS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <RiTailwindCssFill className="hover:text-cyan-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-200 text-xs sm:text-sm md:text-base text-center">Tailwind CSS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <RiBootstrapFill className="hover:text-violet-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-200 text-xs sm:text-sm md:text-base text-center">Bootstrap</span>
            </div>
          </div>
        </BentoGridItem>
        {/* Bento Four */}
        <BentoGridItem className="md:col-span-4 xl:col-span-1">
          <span className="mb-4 text-stone-300 text-xs uppercase tracking-widest">education</span>
          <h3 className="font-semibold text-2xl">Associate's Degree</h3>
          <h2 className="text-stone-300 text-sm">Computer Science & Information Systems</h2>
          <p className="flex items-end mt-auto text-2xl">3.21 <span className="text-xs">/ 4.00</span> <span className="ml-auto text-xs">class of 2022</span></p>
        </BentoGridItem>
        {/* Bento Five */}
        <div className="grid sm:grid-rows-2 sm:col-span-3 md:col-span-4 xl:col-span-3">
          <BentoGridItem className="flex-row items-center md:col-span-3 row-span-1">
            <div className="flex flex-col">
              <span className="mb-4 text-stone-300 text-xs uppercase tracking-widest">connect</span>
              <h2 className="font-semibold text-2xl">Digital Fingerprint</h2>
            </div>
            <ul className="flex gap-6 mt-3 ml-auto">
              <li><Link className="inline-flex items-center gap-2" href="https://github.com/GhostKozak"><LuCode size={"1.3em"} /> Github</Link></li>
              <li><Link className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/gokhan-tanriverdi/"><LuShare2 size={"1.3em"} /> Linkedin</Link></li>
              <li><Link className="inline-flex items-center gap-2" href="mailto:gkhntn123@gmail.com"><LuAtSign size={"1.3em"} /> Email</Link></li>
            </ul>
          </BentoGridItem>
        </div>
      </BentoGrid>
    </section>
  )
}

