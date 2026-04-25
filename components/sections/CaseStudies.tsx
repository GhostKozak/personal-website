import SectionTitle from "../ui/SectionTitle"
import SectionAltTitle from "../ui/SectionAltTitle"
import FeaturedCase, { FeaturedCaseProps } from "../ui/FeaturedCase"

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
                  <SectionAltTitle>selected works</SectionAltTitle>
                  <SectionTitle>project showcase</SectionTitle>
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