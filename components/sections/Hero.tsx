import { RiBootstrapFill, RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { LuZap } from "react-icons/lu";

export default function Hero() {
  return (
    <section id="about" className="w-full">
      <div className="grid-cols-4 grid-row-3">
        {/* Bento One */}
        <div>
          <span>discipline</span>
          <h1>Software Developer</h1>
          <p>Focusing on high-concurrency systems and logical efficiency. Turning complexity into invisible infrastructure.</p>
          <p><LuZap /> Performance first</p>
        </div>
        {/* Bento Two */}
        <div>
          <span>availability</span>
          <h2>Status</h2>
          <div className="flex items-center gap-2">
            <span className="relative flex w-3 h-3">
              <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
              <span className="inline-flex relative bg-emerald-500 rounded-full w-3 h-3"></span>
            </span>
            <span>Open to Work</span>
          </div>
        </div>
        {/* Bento Three */}
        <div>
          <span>tech stack</span>
          <div>
            <RiJavascriptFill />
            <span>Typescript</span>
          </div>
          <div>
            <RiNextjsFill />
            <span>Next.JS</span>
          </div>
          <div>
            <RiTailwindCssFill />
            <span>Tailwind CSS</span>
          </div>
          <div>
            <RiBootstrapFill />
            <span>Bootstrap</span>
          </div>
        </div>
      </div>
    </section>
  )
}