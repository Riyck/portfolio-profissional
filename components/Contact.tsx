"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Não foi possível enviar a mensagem."
        );
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar a mensagem."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-green-400">
            // contato
          </p>

          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Vamos trabalhar
            <span className="text-green-400"> juntos?</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Tem um projeto, oportunidade ou desafio em mente? Entre em contato.
            Estou aberto a novas oportunidades, projetos e conexões na área de
            tecnologia.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Informações */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  E-mail
                </p>

                <a
                  href="mailto:SEU_EMAIL@example.com"
                  className="break-all text-lg text-zinc-200 transition-colors hover:text-green-400"
                >
                  Em desenvolvimento
                </a>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/vinicius-schmidt-282811241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-zinc-200 transition-colors hover:text-green-400"
                >
                  LinkedIn →
                </a>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Riyck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-zinc-200 transition-colors hover:text-green-400"
                >
                  GitHub →
                </a>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Localização
                </p>

                <p className="text-lg text-zinc-200">Brasil</p>
              </div>
            </div>

            {/* Disponibilidade */}
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

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 backdrop-blur-md md:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                Nome
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome"
                disabled={status === "loading"}
                className="w-full border-b border-zinc-800 bg-transparent px-1 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-green-400 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={150}
                value={form.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                disabled={status === "loading"}
                className="w-full border-b border-zinc-800 bg-transparent px-1 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-green-400 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                Assunto
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                value={form.subject}
                onChange={handleChange}
                placeholder="Como posso ajudar?"
                disabled={status === "loading"}
                className="w-full border-b border-zinc-800 bg-transparent px-1 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-green-400 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                Mensagem
              </label>

              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                disabled={status === "loading"}
                className="w-full resize-none border-b border-zinc-800 bg-transparent px-1 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-green-400 disabled:opacity-50"
              />
            </div>

            {/* Sucesso */}
            {status === "success" && (
              <div className="rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm text-green-400">
                ✓ Mensagem enviada com sucesso. Obrigado pelo contato!
              </div>
            )}

            {/* Erro */}
            {status === "error" && (
              <div className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400">
                ✕ {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border border-green-400/40 bg-green-400/10 px-6 py-4 font-mono text-sm uppercase tracking-widest text-green-400 transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-green-400/10 disabled:hover:text-green-400"
            >
              {status === "loading" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-green-400 border-t-transparent group-hover:border-black group-hover:border-t-transparent" />

                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}