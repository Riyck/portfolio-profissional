export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    year: "2025 • Atualmente",
    title: "Analista de Rede e Suporte Técnico",
    company: "INFOTECH Internet Provider",
    description:
      "Atuação em infraestrutura de redes, configuração de ONUs, roteadores Intelbras, Mikrotik, switches, suporte remoto e manutenção da rede de clientes.",
    tags: [
      "Networking",
      "Infrastructure",
      "Mikrotik",
      "Support",
    ],
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
  },

  {
    year: "2022 • Atualmente",
    title: "Sistemas de Informação",
    company: "Antonio Meneghetti Faculdade",
    description:
      "Graduação com foco em desenvolvimento de software, banco de dados, redes de computadores, infraestrutura, segurança da informação e liderança.",
    tags: [
      "Software",
      "SQL",
      "Networks",
      "Cybersecurity",
    ],
  },
];