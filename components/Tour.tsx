"use client";

import Image from "next/image";
import { useState } from "react";
import { tour, TourSystem } from "@/data/tour";

function TourBlock({ system, index }: { system: TourSystem; index: number }) {
  const [active, setActive] = useState(0);
  const slide = system.slides[active];
  const reversed = index % 2 === 1;

  return (
    <article
      id={`tour-${system.id}`}
      className="grid scroll-mt-24 items-start gap-8 lg:grid-cols-[1.4fr_1fr]"
    >
      <div className={reversed ? "lg:order-2" : undefined}>
        <div className="overflow-hidden rounded-lg border border-green-500/20 bg-zinc-950 shadow-[0_0_40px_rgba(34,197,94,0.08)]">
          <div className="flex items-center gap-2 border-b border-green-500/10 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 truncate font-mono text-[11px] text-zinc-500">
              {system.id}/{slide.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>

          <div className="relative aspect-[16/10] bg-black">
            <Image
              key={slide.src}
              src={slide.src}
              alt={`${system.name}: ${slide.title}`}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover object-top"
              priority={index === 0 && active === 0}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {system.slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Mostrar ${s.title}`}
              aria-pressed={i === active}
              className={`relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded border transition sm:w-32 ${
                i === active
                  ? "border-green-400"
                  : "border-green-500/10 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={s.src}
                alt=""
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>

      <div className={reversed ? "lg:order-1" : undefined}>
        <p className="font-mono text-xs text-green-500/70">
          #{String(index + 1).padStart(2, "0")} · {system.tagline}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {system.name}
        </h3>

        <p className="mt-4 leading-relaxed text-zinc-400">{system.summary}</p>

        <div className="mt-6 rounded-lg border border-green-500/10 bg-green-950/5 p-5">
          <p className="font-mono text-xs text-green-500">
            {String(active + 1).padStart(2, "0")}/{String(system.slides.length).padStart(2, "0")} · {slide.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {slide.caption}
          </p>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() =>
                setActive((active - 1 + system.slides.length) % system.slides.length)
              }
              className="rounded border border-green-500/30 px-3 py-1 font-mono text-xs text-green-400 transition hover:border-green-500 hover:bg-green-500/10"
              aria-label="Imagem anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setActive((active + 1) % system.slides.length)}
              className="rounded border border-green-500/30 px-3 py-1 font-mono text-xs text-green-400 transition hover:border-green-500 hover:bg-green-500/10"
              aria-label="Próxima imagem"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {system.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.primary
                  ? "rounded-md border border-green-500 bg-green-500 px-5 py-3 font-mono text-sm font-bold text-black transition hover:bg-green-400"
                  : "rounded-md border border-green-500/40 px-5 py-3 font-mono text-sm text-green-400 transition hover:border-green-500 hover:bg-green-500/10"
              }
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        {system.note && (
          <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-500">
            <span className="text-green-500/70">{"// "}</span>
            {system.note}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Tour() {
  return (
    <section
      id="tour"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-mono text-sm text-green-500">&gt; tour --systems</p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Tour pelos sistemas
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Um passeio rápido pelas telas dos projetos que já estão em uso, com
          link para abrir ou baixar quando o sistema é público.
        </p>
      </div>

      <div className="space-y-20">
        {tour.map((system, i) => (
          <TourBlock key={system.id} system={system} index={i} />
        ))}
      </div>
    </section>
  );
}
