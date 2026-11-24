export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  kind: "work" | "leadership" | "education" | "certification";
}

export const experienceKindLabel: Record<Experience["kind"], string> = {
  work: "trabalho",
  leadership: "liderança",
  education: "formação",
  certification: "certificação",
};

export const experiences: Experience[] = [
  {
    year: "2025 • Atualmente",
    title: "Analista de Rede e Suporte Técnico",
    company: "INFOTECH Internet Provider",
    description:
      "Atuação em infraestrutura de redes, configuração de ONUs, roteadores Intelbras, Mikrotik, switches, suporte remoto e manutenção da rede de clientes. Também desenvolvo ferramentas internas, como o gerador de banners de cobrança e o Infotech Analyser.",
    tags: [
      "Networking",
      "Infrastructure",
      "Mikrotik",
      "Support",
      "Internal Tools",
    ],
    kind: "work",
  },

  {
    year: "2023",
    title: "Fundador da Alcateia de Chernobyl",
    company: "Atlética de Sistemas de Informação — AMF",
    description:
      "Criação da primeira atlética do curso de Sistemas de Informação da Antonio Meneghetti Faculdade, organizando identidade, integração dos estudantes e representação do curso.",
    tags: [
      "Leadership",
      "Community",
      "Organization",
    ],
    kind: "leadership",
  },

  {
    year: "2022 • Atualmente",
    title: "Sistemas de Informação",
    company: "Antonio Meneghetti Faculdade",
    description:
      "Graduação com foco em desenvolvimento de software, banco de dados, redes de computadores, infraestrutura, segurança da informação e liderança. O TCC é baseado no app AI Fitness.",
    tags: [
      "Software",
      "SQL",
      "Networks",
      "Cybersecurity",
    ],
    kind: "education",
  },

  {
    year: "Em andamento",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "UCS — Universidade de Caxias do Sul",
    description:
      "Segunda graduação, voltada ao desenvolvimento de software.",
    tags: [
      "Software",
      "Development",
    ],
    kind: "education",
  },

  {
    year: "Certificação",
    title: "Foundations of Cybersecurity",
    company: "Google",
    description:
      "Fundamentos de segurança da informação, gestão de riscos e boas práticas de proteção de sistemas.",
    tags: [
      "Cybersecurity",
      "Risk Management",
    ],
    kind: "certification",
  },
];
