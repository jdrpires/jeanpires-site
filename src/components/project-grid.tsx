import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectCases, type ProjectCase } from "@/data/projects";

type ProjectGridProps = {
  limit?: number;
};

function ProjectCard({ project }: { project: ProjectCase }) {
  return (
    <article className="group flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.045]">
      <div>
        {project.image ? (
          <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-md ring-1 ring-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="rounded border border-white/10 px-2.5 py-1 text-xs text-cyan-200">
            {project.category}
          </span>
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ${project.title}`}
              className="text-slate-500 transition hover:text-cyan-200"
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        {project.role ? (
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-violet-200">
            {project.role}
          </p>
        ) : null}
        {project.tagline ? (
          <p className="mt-3 text-sm leading-6 text-cyan-100/90">
            {project.tagline}
          </p>
        ) : null}
        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded border border-violet-300/25 bg-violet-300/[0.06] px-2.5 py-1 text-xs font-medium text-violet-200">
            <span
              className="size-1.5 rounded-full bg-violet-300"
              aria-hidden="true"
            />
            {project.status}
          </span>
          {project.caseUrl ? (
            <Link
              href={project.caseUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver case técnico de ${project.title}`}
              className="inline-flex items-center gap-1.5 rounded border border-cyan-300/20 bg-cyan-300/[0.05] px-2.5 py-1 text-xs text-cyan-200 transition hover:border-cyan-300/40"
            >
              Case técnico
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>
          ) : null}
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Repositório de ${project.title} no GitHub`}
              className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-400 transition hover:text-cyan-200"
            >
              GitHub
            </Link>
          ) : null}
        </div>
        {project.stack.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectGrid({ limit }: ProjectGridProps) {
  const cases = limit ? projectCases.slice(0, limit) : projectCases;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cases.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
