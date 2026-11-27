export interface Project {
  id: number;
  title: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  category: string;
  status: "completed" | "in-development" | "learning";
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Fitness",
    description:
      "App de treino com Coach de IA para alunos, personais e academias. Monta treinos sob medida, adapta os exercícios a lesões, acompanha cansaço e evolução e conversa com o aluno por voz. É a base do meu TCC.",
    highlights: [
      "Perfis e permissões separados para aluno, personal, instrutor e admin",
      "Coach de IA com voz, limites de uso e respostas de reserva quando a IA não está disponível",
      "Backend em Supabase Edge Functions, sem servidor próprio",
      "Mais de 48 versões publicadas, com changelog e testes automatizados",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "OpenAI API",
    ],
    category: "Mobile / AI",
    status: "in-development",
    demo: "https://ai-fitness.expo.app",
  },

  {
    id: 2,
    title: "JP Síndico Profissional",
    description:
      "Sistema de gestão para uma empresa de síndico profissional de Caxias do Sul, em piloto com dados reais. Um painel web para o escritório e um app para a equipe de campo, cobrindo prédios, ordens de serviço, rotas de visita, estoque e vencimentos.",
    highlights: [
      "Ordens de serviço com executor, custos, notas fiscais, fotos e linha do tempo",
      "Rota do dia no mapa, com GPS no app e opção de abrir no Waze ou no Google Maps",
      "Leitura de medidores (água, energia e gás) com foto e cálculo de consumo",
      "Estoque por prédio e vencimentos (AGO, seguro, extintores, PPCI) com aviso diário",
      "Controle de acesso por membro, auditoria e notificações no celular",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Leaflet",
      "Tailwind",
    ],
    category: "Web / Mobile",
    status: "in-development",
  },

  {
    id: 3,
    title: "Infotech Analyser",
    description:
      "Ferramenta de diagnóstico remoto de conexão. O técnico gera um link, o cliente abre no celular, o teste roda no navegador e o painel mostra o veredito, os problemas encontrados e um relatório pronto para o chamado.",
    highlights: [
      "Teste de velocidade e latência direto no navegador do cliente",
      "Identificação da rede do cliente por ASN (GeoIP)",
      "Login de técnicos com auditoria e bloqueio por tentativas",
      "Deploy com Caddy (HTTPS) e serviço Linux com backup",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "JavaScript",
      "Caddy",
      "Linux",
    ],
    category: "Web / Networking",
    status: "in-development",
  },

  {
    id: 4,
    title: "AASIAM HUD",
    description:
      "App desktop de HUD para transmissões de campeonatos de CS2 da AASIAM. Recebe os dados da partida em tempo real e mostra placar, jogadores, radar, veto de mapas e patrocinadores na live, com um painel para o operador controlar tudo.",
    highlights: [
      "Dados ao vivo pelo Game State Integration do CS2, enviados aos overlays por Server-Sent Events",
      "Estatísticas por mapa a partir das demos, exportadas em CSV",
      "Painel de controle, manual do operador e sistema de licença",
      "Instalador com atualização automática pelas releases do GitHub",
      "Usado na transmissão do 2º Campeonato de CS2 da AASIAM",
    ],
    technologies: [
      "Electron",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "SSE",
    ],
    category: "Desktop / Streaming",
    status: "completed",
    github: "https://github.com/Riyck/Overlay-CS2-da-AASIAM",
    demo: "https://github.com/Riyck/Overlay-CS2-da-AASIAM/releases/latest",
  },

  {
    id: 5,
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
    id: 6,
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
