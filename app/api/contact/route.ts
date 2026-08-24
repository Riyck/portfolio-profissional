import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Preencha todos os campos.",
        },
        { status: 400 }
      );
    }

    // Validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Informe um e-mail válido.",
        },
        { status: 400 }
      );
    }

    // Limites para evitar abuso
    if (name.length > 100) {
      return NextResponse.json(
        {
          error: "Nome muito longo.",
        },
        { status: 400 }
      );
    }

    if (email.length > 150) {
      return NextResponse.json(
        {
          error: "E-mail muito longo.",
        },
        { status: 400 }
      );
    }

    if (subject.length > 150) {
      return NextResponse.json(
        {
          error: "Assunto muito longo.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          error: "Mensagem muito longa.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada.");

      return NextResponse.json(
        {
          error: "Serviço de e-mail não configurado.",
        },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL não configurado.");

      return NextResponse.json(
        {
          error: "E-mail de destino não configurado.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #050505;
              color: #ffffff;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 40px auto;
                padding: 30px;
                background-color: #0a0a0a;
                border: 1px solid #1f1f1f;
                border-radius: 12px;
              "
            >
              <div
                style="
                  margin-bottom: 30px;
                  padding-bottom: 20px;
                  border-bottom: 1px solid #1f1f1f;
                "
              >
                <p
                  style="
                    margin: 0 0 8px;
                    color: #4ade80;
                    font-size: 12px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                  "
                >
                  // novo contato
                </p>

                <h1
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 28px;
                  "
                >
                  Nova mensagem do portfólio
                </h1>
              </div>

              <div style="margin-bottom: 24px;">
                <p
                  style="
                    margin: 0 0 6px;
                    color: #71717a;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Nome
                </p>

                <p
                  style="
                    margin: 0;
                    color: #e4e4e7;
                    font-size: 16px;
                  "
                >
                  ${escapeHtml(name)}
                </p>
              </div>

              <div style="margin-bottom: 24px;">
                <p
                  style="
                    margin: 0 0 6px;
                    color: #71717a;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  E-mail
                </p>

                <p
                  style="
                    margin: 0;
                    color: #e4e4e7;
                    font-size: 16px;
                  "
                >
                  ${escapeHtml(email)}
                </p>
              </div>

              <div style="margin-bottom: 24px;">
                <p
                  style="
                    margin: 0 0 6px;
                    color: #71717a;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Assunto
                </p>

                <p
                  style="
                    margin: 0;
                    color: #e4e4e7;
                    font-size: 16px;
                  "
                >
                  ${escapeHtml(subject)}
                </p>
              </div>

              <div>
                <p
                  style="
                    margin: 0 0 6px;
                    color: #71717a;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Mensagem
                </p>

                <div
                  style="
                    padding: 18px;
                    background-color: #111111;
                    border-left: 3px solid #4ade80;
                    border-radius: 6px;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      color: #d4d4d8;
                      font-size: 15px;
                      line-height: 1.7;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(message)}
                  </p>
                </div>
              </div>

              <div
                style="
                  margin-top: 35px;
                  padding-top: 20px;
                  border-top: 1px solid #1f1f1f;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #52525b;
                    font-size: 12px;
                  "
                >
                  Mensagem enviada através do portfólio profissional.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erro Resend:", error);

      return NextResponse.json(
        {
          error: "Não foi possível enviar a mensagem.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro na API de contato:", error);

    return NextResponse.json(
      {
        error: "Ocorreu um erro inesperado.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}