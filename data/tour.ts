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
