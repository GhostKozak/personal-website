import { cn } from "@/utils/ClassName"
import Image from "next/image"
import Link from "next/link"
import { LuArrowRight, LuExternalLink } from "react-icons/lu"
import ScrambleText from "../motion/ScrambleText"
import { div } from "motion/react-client"

export default function CaseStudies() {

  const TEMP_FEATURED_PROJECTS : FeaturedCaseProps[] = [
    {
      id: "logistic-telegram-bot",
      category: "01 - automation",
      title: "logistics telegram bot",
      image: "https://placehold.net/3-800x600.png",
      problem: "Manual scheduling for cross-border shipping was causing a 14% error rate in container allocation and significant vessel delays.",
      solution: "Built an asynchronous task-queue engine that predicts optimal routes using real-time GPS data and automated carrier APIs.",
      result: "Built an asynchronous task-queue engine that predicts optimal routes using real-time GPS data and automated carrier APIs.",
      link: "#",
      linkIconType: "arrow",
      linkText: "view technical case",
      featured: true,
      reverse: false
    },
    {
      id: "car-rental-platform",
      category: "02 - fullstack",
      title: "car rental platform",
      image: "https://placehold.net/1-800x600.png",
      problem: "Local rental agencies lacked a centralized inventory system, resulting in double-bookings and fragmented customer data.",
      solution: "Developed a multi-tenant SaaS with real-time availability sync and integrated insurance verification workflows.",
      result: "Onboarded 5 agencies within 3 months; processed $12kin monthly bookings.",
      link: "#",
      linkIconType: "external",
      linkText: "live demo",
      featured: true,
      reverse: true
    }
  ]

  return (
    //my-40 lg:mt-20
    <section id="featuredProjects" className="px-4 md:px-outer">
      <div className="flex flex-col gap-40">
        {
          TEMP_FEATURED_PROJECTS.map((project, index) => (
            <div key={project.id} className="flex flex-col justify-center min-h-screen snap-always snap-start">
              {index === 0 && (
                <>
                  <span className="text-primary text-xs uppercase tracking-widest">selected works</span>
                  <h1 className="mt-4 mb-16 font-extrabold text-5xl capitalize">project showcase</h1>
                </>
              )}
              <FeaturedCase key={project.id} {...project} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

interface FeaturedCaseProps {
  id: string,
  category: string,
  title: string,
  image: string,
  problem: string,
  solution: string,
  result: string,
  link: string,
  linkIconType: "arrow" | "external",
  linkText: string,
  featured: boolean,
  reverse: boolean
}

function FeaturedCase({
  category,
  title,
  image,
  problem,
  solution,
  result,
  link,
  linkIconType,
  linkText,
  reverse
} : FeaturedCaseProps) {
  return (
    <div className="items-center gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
      <div className={cn(reverse ? "lg:order-2" : "")}>
        <Image src={image} alt="placeholder image" width={800} height={600} className="rounded-lg w-full h-auto object-cover" />
      </div>
      <div className={cn("flex flex-col justify-center gap-4", reverse ? "lg:order-1" : "")}>
        <div>
          <span className="text-stone-600 dark:text-stone-300 text-xs uppercase">{category}</span>
          <h2 className="mt-2 mb-4 font-semibold text-3xl capitalize">{title}</h2>
        </div>
        <div>
          <h4 className="text-primary text-xs uppercase">the problem</h4>
          <p className="text-stone-600 dark:text-stone-300 text-sm">{problem}</p>
        </div>
        <div>
          <h4 className="text-primary text-xs uppercase">the solution</h4>
          <p className="text-stone-600 dark:text-stone-300 text-sm">{solution}</p>
        </div>
        <div>
          <h4 className="text-primary text-xs uppercase">the result</h4>
          <p className="text-stone-600 dark:text-stone-300 text-sm">{result}</p>
        </div>
        <Link href={link} className="inline-flex items-center gap-1 text-primary align-middle">{linkText} {linkIconType === "arrow" ? <LuArrowRight />: <LuExternalLink /> }</Link>
      </div>
    </div>
  )
}