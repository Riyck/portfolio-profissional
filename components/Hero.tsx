import Image from "next/image";
import Link from "next/link";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-16 pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

        {/* CONTEÚDO */}
        <div className="relative z-10">

          <p className="mb-5 font-mono text-sm text-green-500">
            &gt; system.init()
          </p>

          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Vinicius
            <span className="block text-green-500">
              Schmidt
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3 font-mono text-sm text-zinc-500">
            <span className="h-px w-8 bg-green-500" />

            SISTEMAS DE INFORMAÇÃO
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Desenvolvedor em formação, com experiência prática em
            tecnologia, redes, infraestrutura e desenvolvimento de
            sistemas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#projects"
              className="rounded-md border border-green-500 bg-green-500 px-5 py-3 font-mono text-sm font-bold text-black transition hover:bg-green-400"
            >
              VER PROJETOS
            </Link>

            <Link
              href="#about"
              className="rounded-md border border-green-500/40 px-5 py-3 font-mono text-sm text-green-400 transition hover:border-green-500 hover:bg-green-500/10"
            >
              SOBRE MIM
            </Link>

          </div>

          <div className="mt-10 max-w-sm">
            <Terminal
              command="whoami"
              output="Vinicius Schmidt"
            />
          </div>

        </div>

        {/* IMAGEM */}
        <div className="relative mx-auto w-full max-w-3xl">

          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-green-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-black/40 shadow-[0_0_50px_rgba(34,197,94,0.08)]">

            <Image
              src="/images/hero-cyberpunk.png"
              alt="Vinicius programando ao lado do mascote da Alcateia de Chernobyl"
              width={1672}
              height={941}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-green-500/5" />

            {/* Scanline */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(transparent_50%,rgba(34,197,94,0.5)_50%)] [background-size:100%_4px]" />

          </div>

          {/* Status */}
          <div className="absolute -bottom-4 -left-4 hidden rounded-lg border border-green-500/20 bg-black/90 px-4 py-3 font-mono text-xs shadow-lg sm:block">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

              <span className="text-green-400">
                system.online
              </span>
            </div>

            <p className="mt-1 text-zinc-600">
              building_the_future
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}