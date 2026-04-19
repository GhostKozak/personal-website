"use client";

import { RiBootstrapFill, RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { LuAtSign, LuCode, LuShare2, LuZap } from "react-icons/lu";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "../bento";
import { motion, Variants } from "motion/react";
import ScrambleText from "../motion/ScrambleText";
import AnimatedCounter from "../motion/AnimatedCounter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // Çocuklar arasındaki gecikme süresi (0.2 saniye idealdir)
      staggerChildren: 0.2,
      // Ana kapsayıcı gelmeden önce beklenecek süre (opsiyonel)
      delayChildren: 0.3,
    }
  }
};

const itemVariants: Record<string, Variants> = {
  // 1. Yazılımcı Kartı
  developerVariants: {
    hidden: { filter: "blur(20px)", opacity: 0, scale: 0.95 },
    show: {
      filter: "blur(0px)", opacity: 1, scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  },

  // 2. Durum Kartı
  statusVariants: {
    hidden: {
      rotateY: 180,
      opacity: 0,
      scale: 0.85,
      filter: "brightness(2) blur(4px)"
    },
    show: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      filter: "brightness(1) blur(0px)",
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        filter: { duration: 1.8, ease: "easeOut" }
      }
    }
  },

  // 3. Tech Stack Kartı
  techVariants: {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    show: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        clipPath: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
        opacity: { duration: 0.3 },
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  },

  iconVariants: {
    hidden: { y: -60, opacity: 0, scale: 0.3 },
    show: {
      y: 0, opacity: 1, scale: 1,
      transition: { type: "spring", damping: 8, stiffness: 120, mass: 0.8 }
    }
  },

  // 4. Eğitim Kartı
  educationVariants: {
    hidden: { clipPath: "inset(50% 0 50% 0)", opacity: 0 },
    show: {
      clipPath: "inset(0% 0 0% 0)", opacity: 1,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
    }
  },

  // 5. Bağlantı Kartı
  connectVariants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  },

  linkVariants: {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }
}

// usage : whileHover={whileHover}
const whileHover = {
  boxShadow: "0px 0px 20px color-mix(in srgb, var(--primary) 20%, transparent)",
  y: -5
}

export default function Hero() {
  return (
    <section id="about" className="flex items-center px-4 md:px-outer pt-24 pb-8 w-full min-h-screen snap-always snap-start">
      <BentoGrid variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="perspective-normal">
        {/* Bento One */}
        <BentoGridItem
          variants={itemVariants.developerVariants}
          className="sm:col-span-3 md:col-span-4 lg:col-span-4 xl:col-span-2"
        >
          <span className="mb-4 text-net text-primary text-xs uppercase tracking-widest">discipline</span>
          <h1 className="font-semibold text-2xl capitalize tracking-widest">
            <ScrambleText text="Software Developer" characterSet="cyberpunk" duration={1.2} delay={0.5} />
          </h1>
          <p className="text-stone-600 dark:text-stone-300">
            <ScrambleText text="Focusing on high-concurrency systems and logical efficiency. Turning complexity into invisible infrastructure." characterSet="default" duration={1.5} delay={0.8} scrambleSpeed={40} />
          </p>
          <p className="inline-flex items-center gap-2 mt-auto font-semibold text-primary text-xs uppercase tracking-widest"><LuZap /> Performance first</p>
        </BentoGridItem>
        {/* Bento Two */}
        <BentoGridItem
          variants={itemVariants.statusVariants}
          className="md:col-span-2 lg:col-span-2 xl:col-span-1"
        >
          <span className="mb-4 text-stone-600 dark:text-stone-300 text-xs uppercase tracking-widest">availability</span>
          <h2 className="font-semibold text-2xl">Status</h2>
          <div className="flex items-center gap-2 mt-auto">
            <span className="relative flex w-3 h-3">
              <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
              <span className="inline-flex relative bg-emerald-500 rounded-full w-3 h-3"></span>
            </span>
            <span className="text-emerald-800 dark:text-emerald-200">Open to Work</span>
          </div>
        </BentoGridItem>
        {/* Bento Three */}
        <BentoGridItem
          variants={itemVariants.techVariants}
          className="md:col-span-2 xl:col-span-1"
        >
          <span className="mb-4 text-stone-600 dark:text-stone-300 text-xs uppercase tracking-widest">tech stack</span>
          <div className="gap-2 grid grid-cols-2 grid-rows-2 h-full">
            <motion.div variants={itemVariants.iconVariants} className="flex flex-col justify-center items-center gap-2">
              <RiJavascriptFill className="hover:text-yellow-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-sm md:text-base text-center">JS / TS</span>
            </motion.div>
            <motion.div variants={itemVariants.iconVariants} className="flex flex-col justify-center items-center gap-2">
              <RiNextjsFill className="hover:text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-sm md:text-base text-center">Next.JS</span>
            </motion.div>
            <motion.div variants={itemVariants.iconVariants} className="flex flex-col justify-center items-center gap-2">
              <RiTailwindCssFill className="hover:text-cyan-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-sm md:text-base text-center">Tailwind CSS</span>
            </motion.div>
            <motion.div variants={itemVariants.iconVariants} className="flex flex-col justify-center items-center gap-2">
              <RiBootstrapFill className="hover:text-violet-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all" />
              <span className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-sm md:text-base text-center">Bootstrap</span>
            </motion.div>
          </div>
        </BentoGridItem>
        {/* Bento Four */}
        <BentoGridItem
          variants={itemVariants.educationVariants}
          className="md:col-span-4 xl:col-span-1"
        >
          <span className="mb-4 text-stone-600 dark:text-stone-300 text-xs uppercase tracking-widest">education</span>
          <h3 className="font-semibold text-2xl">Associate's Degree</h3>
          <h2 className="text-stone-600 dark:text-stone-300 text-sm">Computer Science & Information Systems</h2>
          <p className="flex items-end mt-auto text-2xl">
            <AnimatedCounter from={0} to={3.21} duration={2} delay={0.5} decimals={2} />
            <span className="ml-1 text-xs">/ 4.00</span>
            <span className="ml-auto text-xs">class of 2022</span>
          </p>
        </BentoGridItem>
        {/* Bento Five */}
        <div className="grid sm:grid-rows-2 sm:col-span-3 md:col-span-4 xl:col-span-3">
          <BentoGridItem
            variants={itemVariants.connectVariants}
            className="flex-row items-center md:col-span-3 row-span-1"
          >
            <div className="flex flex-col">
              <span className="mb-4 text-stone-600 dark:text-stone-300 text-xs uppercase tracking-widest">connect</span>
              <h2 className="font-semibold text-2xl">Digital Fingerprint</h2>
            </div>
            <ul className="flex gap-6 mt-3 ml-auto">
              <motion.li variants={itemVariants.linkVariants}><Link className="inline-flex items-center gap-2" href="https://github.com/GhostKozak"><LuCode size={"1.3em"} /> Github</Link></motion.li>
              <motion.li variants={itemVariants.linkVariants}><Link className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/gokhan-tanriverdi/"><LuShare2 size={"1.3em"} /> Linkedin</Link></motion.li>
              <motion.li variants={itemVariants.linkVariants}><Link className="inline-flex items-center gap-2" href="mailto:gkhntn123@gmail.com"><LuAtSign size={"1.3em"} /> Email</Link></motion.li>
            </ul>
          </BentoGridItem>
        </div>
      </BentoGrid>
    </section>
  )
}
