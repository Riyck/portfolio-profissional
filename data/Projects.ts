export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: "completed" | "in-development" | "learning";
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "INFOTECH Banner System",
    description:
      "Sistema web desenvolvido para automatizar a geração de banners de cobrança, permitindo o preenchimento de informações específicas de cada cliente e a geração da imagem final.",
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "HTML",
      "CSS",
      "Pillow",
    ],
    category: "Web / Automation",
    status: "completed",
  },

  {
    id: 2,
    title: "AI Fitness",
    description:
      "Aplicação mobile com assistente de inteligência artificial voltado para orientação de treinos, utilizando comunicação entre aplicativo mobile, backend e API de inteligência artificial.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "OpenAI API",
    ],
    category: "Mobile / AI",
    status: "in-development",
  },

  {
    id: 3,
    title: "JP Síndico Profissional",
    description:
      "Aplicação mobile voltada para gerenciamento de atividades e tarefas relacionadas à administração de condomínios.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Backend",
    ],
    category: "Mobile",
    status: "in-development",
  },

  {
    id: 4,
    title: "Sistema de Estoque",
    description:
      "Sistema desenvolvido para gerenciamento de estoque, utilizando banco de dados relacional para armazenamento e consulta das informações.",
    technologies: [
      "Python",
      "PostgreSQL",
      "SQL",
    ],
    category: "Backend / Database",
    status: "in-development",
  },
];