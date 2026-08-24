export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-mono text-sm text-green-500">
          &gt; about --me
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Sobre mim
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            Sou estudante de Sistemas de Informação e atuo na área de
            tecnologia, com experiência prática em suporte, redes,
            infraestrutura e desenvolvimento de sistemas.
          </p>

          <p>
            Minha trajetória combina a experiência prática adquirida no
            ambiente de infraestrutura de um provedor de internet com
            o desenvolvimento de aplicações e estudos voltados para
            programação e cybersecurity.
          </p>

          <p>
            Tenho interesse em transformar problemas reais em soluções
            utilizando tecnologia, buscando compreender não apenas como
            desenvolver um sistema, mas também como ele funciona,
            se comunica e pode ser protegido.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-green-500/20 bg-green-950/5 p-6">
        <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-green-500">
            &gt; founded
            </span>

            <span className="text-zinc-600">
            2023
            </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-white">
            Alcateia de Chernobyl
        </h3>

        <p className="mt-2 font-mono text-sm text-green-500/70">
            Atlética de Sistemas de Informação — AMF
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Fundador da Atlética de Sistemas de Informação da
            Antonio Meneghetti Faculdade, criada para representar e
            integrar os estudantes do curso através de esporte,
            competição e comunidade acadêmica.
        </p>
        </div>

        <div className="rounded-lg border border-green-500/20 bg-green-950/5 p-6 font-mono">
          <p className="text-sm text-green-500">
            system.profile
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div>
              <span className="text-zinc-600">role:</span>{" "}
              <span className="text-green-400">
                Information Systems Student
              </span>
            </div>

            <div>
              <span className="text-zinc-600">focus:</span>{" "}
              <span className="text-green-400">
                Development / Networks / Security
              </span>
            </div>

            <div>
              <span className="text-zinc-600">status:</span>{" "}
              <span className="text-green-400">
                learning_and_building
              </span>
            </div>

            <div>
              <span className="text-zinc-600">location:</span>{" "}
              <span className="text-green-400">
                Brazil
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}