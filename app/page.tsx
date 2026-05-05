import Archive from "@/components/sections/Archive";
import CaseStudies from "@/components/sections/CaseStudies";
import Hero from "@/components/sections/Hero";
import WorkTimeline from "@/components/sections/WorkTimeline";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Archive />
      <WorkTimeline />
    </>
  );
}
