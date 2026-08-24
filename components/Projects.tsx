import { projects } from "@/data/Projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-mono text-sm text-green-500">
          &gt; projects --list
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Projetos
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Alguns dos projetos que desenvolvi durante minha formação
          e experiência prática com tecnologia.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}