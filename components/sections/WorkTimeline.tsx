import { cn } from "@/utils/ClassName";

export default function WorkTimeline() {

  const TEMP_WORKS: WorkProps[] = [
    {
      id: 1,
      timeline: "2022 - 2024",
      company: "Ghost System Inc",
      role: "Fullstack Developer",
      description:
        "Architecting high-frequency data pipelines and leading a team of 12 developers in a remote-first environment.",
      activeWork: true,
    },
    {
      id: 2,
      timeline: "2020 - 2022",
      company: "Another Corp",
      role: "Frontend Developer",
      description:
        "Built scalable UI systems and design tokens adopted across 4 product teams.",
    },
    {
      id: 3,
      timeline: "2018 - 2020",
      company: "Startup XYZ",
      role: "Junior Developer",
      description:
        "Contributed to the initial product launch and iterated on user-facing features.",
    },
  ];


  return (
    <section id="worktimeline" className="px-4 md:px-outer">
      {
        TEMP_WORKS.map((work,index) => {
          const isLeft = index % 2 === 0;
          return <Work
            key={work.id}
            {...work}
            reverse={isLeft}
            isFirst={index === 0}
            isLast={index === TEMP_WORKS.length - 1}
          />

        })
      }
    </section>
  )
}

interface WorkProps {
  id: string | number;
  reverse?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  timeline: string;
  company: string;
  role: string;
  description: string;
  activeWork?: boolean;
}

function Work({reverse = false, timeline, company, role, description, activeWork = false, isFirst, isLast} : WorkProps) {
  return (
    <div className={cn("relative flex md:flex-row flex-col md:items-center md:h-screen md:snap-always md:snap-start", reverse ? "md:justify-end" : "md:justify-start")}>          
      <div className={cn("left-1 md:left-1/2 absolute bg-gray-200 dark:bg-gray-800 w-px md:-translate-x-1/2",
        isFirst && !isLast && "top-1/2 bottom-0",
        !isFirst && !isLast && "top-0 bottom-0",
        isLast && !isFirst && "top-0 h-1/2",
        isFirst && isLast && "hidden"
      )}></div>
      {isFirst && (
        <div className="top-28 left-1/2 z-10 md:absolute px-6 py-2 md:-translate-x-1/2">
          <h1 className="pt-16 font-bold text-4xl text-center whitespace-nowrap">Work Path</h1>
        </div>
      )}
       <div className="top-1/2 left-1 md:left-1/2 z-10 absolute -translate-x-1 -translate-y-1/2 md:-translate-x-1/2">
        <span className="relative flex w-3 h-3">
          {activeWork && (
            <span className="inline-flex absolute bg-primary opacity-75 rounded-full w-full h-full animate-ping" />
          )}
          <span
            className={cn("inline-flex relative bg-primary rounded-full w-3 h-3", !activeWork && "shadow-primary-glow" )}/>
        </span>
      </div>
      <div
        className={cn("relative py-16 pl-6 md:w-1/2",reverse ? "md:text-right md:pl-8 md:pr-6" : "md:text-left md:pl-6 md:pr-8")}>
        <div className={cn("hidden md:block top-1/2 absolute bg-gray-200 dark:bg-gray-800 w-6 h-px -translate-y-1/2", reverse ? "left-0" : "right-0" )}/>
        <span className="font-mono text-primary text-sm">{timeline}</span>
        <h2 className="mt-1 font-semibold text-2xl capitalize">{company}</h2>
        <span className="text-black/40 dark:text-white/40 text-sm">{role}</span>
        <p className="mt-2 text-black/60 dark:text-white/60 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}