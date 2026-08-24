import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-10">

      <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-green-400 bg-black shadow-[0_0_12px_rgba(34,197,94,0.7)]" />

      <div className="rounded-lg border border-green-500/10 bg-green-950/5 p-6 transition hover:border-green-500/30 hover:bg-green-950/10">

        <p className="font-mono text-xs text-green-500">
          {experience.year}
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          {experience.title}
        </h3>

        <p className="mt-1 font-mono text-sm text-green-400">
          {experience.company}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {experience.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-green-500/5 px-2 py-1 font-mono text-xs text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}