import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-mono text-sm text-green-500">
          &gt; experience --timeline
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Experiência & Formação
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Minha trajetória combina experiência prática em infraestrutura,
          desenvolvimento de software, formação acadêmica e liderança.
        </p>
      </div>

      <div className="relative border-l border-green-500/20 pl-6 space-y-10">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.year}-${experience.title}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}