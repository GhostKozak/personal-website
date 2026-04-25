import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  { id: 1, year: "2023", name: "Spectral Engine v2", tags: ["RUST", "WASM"] },
  { id: 2, year: "2023", name: "Lumina Flow UI", tags: ["REACT", "THREE.JS"] },
  { id: 3, year: "2022", name: "Onyx CLI", tags: ["GO", "COBRA"] },
  { id: 4, year: "2021", name: "Ghost Grid Framework", tags: ["SCSS", "POSTCSS"] },
];

export default function ArchiveList() {
  return (
    <div>
      {/* Başlık satırı */}
      <div className="hidden gap-4 md:grid grid-cols-[80px_1fr_1fr_48px] pb-3 border-white/10 border-b font-medium text-[11px] text-gray-500 uppercase tracking-widest">
        <span>Year</span>
        <span>Project</span>
        <span>Built With</span>
        <span className="text-right">Link</span>
      </div>

      {/* Proje satırları */}
      <ul className="mt-0 divide-y md:divide-y divide-white/10 md:divide-white/10">
        {projects.map((project) => (
          <li
            key={project.id}
            className="group items-center gap-x-4 gap-y-1.5 grid grid-cols-[1fr_auto] md:grid-cols-[80px_1fr_1fr_48px] hover:bg-white/5 md:hover:-mx-3 mb-2 md:mb-0 px-4 md:hover:px-3 md:px-0 py-4 md:py-5 border border-white/10 md:border-x-0 md:border-t-0 md:border-b-0 rounded-xl md:rounded-none transition-colors duration-150"
          >
            {/* Yıl */}
            <span className="hidden md:block font-mono tabular-nums text-gray-500 text-sm">
              {project.year}
            </span>

            {/* İsim */}
            <span className="font-medium text-gray-100 text-base md:col-auto">
              {project.name}
            </span>

            {/* Yıl — mobilde ismin altında */}
            <span className="md:hidden font-mono text-gray-500 text-xs">
              {project.year}
            </span>

            {/* Etiketler */}
            <div className="flex flex-wrap gap-1.5 md:col-auto md:row-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 px-2 py-1 border border-white/10 rounded-md font-medium text-[11px] text-gray-300 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="flex justify-end items-center row-span-3">
              <Link
                href="#"
                aria-label={`${project.name} projesini görüntüle`}
                className="flex justify-center items-center border border-white/15 hover:border-white/30 rounded-lg w-8 h-8 text-gray-400 hover:text-gray-100 transition-colors duration-150"
              >
                <LuExternalLink size={14} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}