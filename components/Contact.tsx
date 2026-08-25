export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-green-400">
            // contato
          </p>

          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Vamos trabalhar
            <span className="text-green-400"> juntos?</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Estou aberto a novas oportunidades, projetos e conexões na área de
            tecnologia. Você pode encontrar meus projetos e experiências
            profissionais através das minhas redes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/vinicius-schmidt-282811241/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:bg-green-400/5"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Rede profissional
            </p>

            <h3 className="text-2xl font-bold text-white">
              LinkedIn
              <span className="ml-2 text-green-400 transition-transform duration-300 group-hover:inline-block group-hover:translate-x-1">
                →
              </span>
            </h3>

            <p className="mt-3 text-zinc-400">
              Experiência profissional, formação e oportunidades.
            </p>
          </a>

          <a
            href="https://github.com/Riyck"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:bg-green-400/5"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Projetos & código
            </p>

            <h3 className="text-2xl font-bold text-white">
              GitHub
              <span className="ml-2 text-green-400 transition-transform duration-300 group-hover:inline-block group-hover:translate-x-1">
                →
              </span>
            </h3>

            <p className="mt-3 text-zinc-400">
              Projetos, código-fonte e experimentos em tecnologia.
            </p>
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </span>

          <span className="font-mono text-sm text-zinc-300">
            Disponível para oportunidades
          </span>
        </div>
      </div>
    </section>
  );
}