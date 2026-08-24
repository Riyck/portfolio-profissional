import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-mono text-sm text-green-500">
          &gt; skills --list
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Competências
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Tecnologias e conhecimentos que fazem parte da minha
          formação e experiência prática.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-lg border border-green-500/10 bg-green-950/5 p-5 transition duration-300 hover:border-green-500/40 hover:bg-green-950/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm font-bold text-green-400">
                {skill.name}
              </h3>

              <span className="text-xs text-zinc-600">
                {skill.category}
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

              <span className="font-mono text-xs text-zinc-500">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}