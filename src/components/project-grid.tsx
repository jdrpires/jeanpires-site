import { ArrowUpRight } from "lucide-react";
import { projectCases } from "@/data/projects";

type ProjectGridProps = {
  limit?: number;
};

export function ProjectGrid({ limit }: ProjectGridProps) {
  const cases = limit ? projectCases.slice(0, limit) : projectCases;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cases.map((project) => (
        <article
          key={project.title}
          className="group flex min-h-72 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.045]"
        >
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded border border-white/10 px-2.5 py-1 text-xs text-cyan-200">
                {project.category}
              </span>
              <ArrowUpRight
                className="size-4 text-slate-500 transition group-hover:text-cyan-200"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
