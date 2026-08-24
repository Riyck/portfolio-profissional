import Link from "next/link";
import { Project } from "@/data/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-green-500/10 bg-green-950/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-950/10">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-green-500/60">
            #{project.id.toString().padStart(2, "0")}
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <span className="rounded border border-green-500/10 px-2 py-1 font-mono text-[10px] text-green-500/70">
          {project.category}
        </span>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded bg-green-500/5 px-2 py-1 font-mono text-xs text-green-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-green-500/10 pt-4">
        <span className="font-mono text-xs text-zinc-600">
          status:
          <span className="ml-1 text-green-500">
            {project.status}
          </span>
        </span>

        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 transition hover:text-green-400"
            >
              GITHUB ↗
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 transition hover:text-green-400"
            >
              DEMO ↗
            </Link>
          )}
        </div>
      </div>

    </article>
  );
}