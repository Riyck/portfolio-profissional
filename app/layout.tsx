import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-profissional-ochre.vercel.app";
const description =
  "Portfólio de Vinicius Schmidt, estudante de Sistemas de Informação: apps mobile com IA, sistemas web, redes e segurança da informação.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vinicius Schmidt · Desenvolvedor",
  description,
  openGraph: {
    title: "Vinicius Schmidt · Desenvolvedor",
    description,
    url: siteUrl,
    siteName: "Vinicius Schmidt",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/hero-cyberpunk.png", alt: "Vinicius Schmidt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinicius Schmidt · Desenvolvedor",
    description,
    images: ["/images/hero-cyberpunk.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
