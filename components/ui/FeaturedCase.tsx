import { cn } from "@/utils/ClassName"
import Image from "next/image"
import Link from "next/link"
import { LuArrowRight, LuExternalLink } from "react-icons/lu"

export interface FeaturedCaseProps {
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

export default function FeaturedCase({
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