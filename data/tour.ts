export interface TourSlide {
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
}

export interface TourLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface TourSystem {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  /** Aviso curto abaixo dos links (ex.: sistema de cliente com acesso restrito) */
  note?: string;
  slides: TourSlide[];
  links: TourLink[];
}

export const tour: TourSystem[] = [
  {
    id: "ai-fitness",
    name: "AI Fitness",
    tagline: "Mobile / AI",
    summary:
      "Um app só para aluno, personal, nutricionista e academia. A IA monta o treino, o coach acompanha por voz e a academia gerencia alunos, vendas e financeiro com a própria marca.",
    slides: [
      {
        src: "/images/tour/ai-fitness-inicio.webp",
        width: 1600,
        height: 1000,
        title: "Treino do dia",
        caption:
          "A página inicial mostra o treino montado pela IA, com o progresso das séries e a dica do coach.",
      },
      {
        src: "/images/tour/ai-fitness-perfis.webp",
        width: 1600,
        height: 815,
        title: "Quatro perfis",
        caption:
          "Aluno, personal, nutricionista e academia usam o mesmo app, cada um com suas telas e permissões.",
      },
      {
        src: "/images/tour/ai-fitness-crm.webp",
        width: 1600,
        height: 926,
        title: "CRM da academia",
        caption:
          "Alunos ativos, funil de vendas, contratos e receita, ligados ao treino que o aluno faz no app.",
      },
    ],
    links: [
      { label: "Abrir o AI Fitness", href: "https://ai-fitness.expo.app", primary: true },
    ],
  },
  {
    id: "jp-sindico",
    name: "JP Síndico Profissional",
    tagline: "Web / Mobile",
    summary:
      "Painel web e app de campo para uma empresa de síndico profissional, em piloto com um cliente real. Organiza prédios, ordens de serviço, rotas de visita, estoque e vencimentos num lugar só.",
    note: "Sistema em uso por um cliente, com acesso restrito. As telas usam dados fictícios.",
    slides: [
      {
        src: "/images/tour/jp-sindico-painel.webp",
        width: 1600,
        height: 1000,
        title: "Painel do dia",
        caption:
          "OS em aberto, o que está agendado para hoje, o que precisa de decisão, vencimentos próximos e estoque baixo.",
      },
      {
        src: "/images/tour/jp-sindico-rotas.webp",
        width: 1600,
        height: 1000,
        title: "Rotas da equipe",
        caption:
          "A rota de visitas de cada membro no mapa, com a ordem das paradas, as chaves para levar e as OS de cada prédio.",
      },
      {
        src: "/images/tour/jp-sindico-os.webp",
        width: 1600,
        height: 1000,
        title: "Ordem de serviço",
        caption:
          "Quem executa (equipe ou prestador), orçamentos, custos, fotos e a linha do tempo de cada chamado.",
      },
      {
        src: "/images/tour/jp-sindico-vencimentos.webp",
        width: 1600,
        height: 1000,
        title: "Vencimentos",
        caption:
          "AGO, seguro, extintores, limpezas e PPCI de cada prédio, com destaque para o que venceu ou vence em 30 dias.",
      },
    ],
    links: [],
  },
  {
    id: "aasiam-hud",
    name: "AASIAM HUD",
    tagline: "Desktop / Streaming",
    summary:
      "O HUD das transmissões de CS2 da AASIAM. Lê a partida em tempo real e mostra placar, jogadores, radar e chance de vitória na live, com um painel para o operador controlar tudo.",
    slides: [
      {
        src: "/images/tour/aasiam-hud-overlay.webp",
        width: 1600,
        height: 900,
        title: "Overlay ao vivo",
        caption:
          "Placar, round, radar com a posição dos jogadores, vida, dinheiro, armas e chance de vitória, em 1920×1080 para o OBS.",
      },
      {
        src: "/images/tour/aasiam-hud-painel.webp",
        width: 1600,
        height: 1000,
        title: "Painel do operador",
        caption:
          "Guia de primeiros passos, times da partida, pré-visualização do HUD e um simulador para testar sem abrir o jogo.",
      },
    ],
    links: [
      {
        label: "Baixar o AASIAM HUD",
        href: "https://github.com/Riyck/Overlay-CS2-da-AASIAM/releases/latest",
        primary: true,
      },
      { label: "Ver o código", href: "https://github.com/Riyck/Overlay-CS2-da-AASIAM" },
    ],
  },
];
