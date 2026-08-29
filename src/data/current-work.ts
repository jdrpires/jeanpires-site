export type CurrentWork = {
  company: string;
  role: string;
  description: string;
  logoBasePath: string;
  fallbackMark: string;
};

export const currentWork: CurrentWork[] = [
  {
    company: "Code Synergy",
    role: "Founder",
    description:
      "Tecnologia, desenvolvimento de produtos digitais, inteligência artificial aplicada e transformação de ideias em software.",
    logoBasePath: "/logos/code-synergy",
    fallbackMark: "CS",
  },
  {
    company: "PlugZ",
    role: "CTO",
    description:
      "Estratégia tecnológica, produtos, plataformas e infraestrutura para um ecossistema conectado ao mercado de franquias.",
    logoBasePath: "/logos/plugz",
    fallbackMark: "PZ",
  },
  {
    company: "IAHub — ONOVOLAB",
    role: "IA aplicada",
    description:
      "Ambiente de experimentação, desenvolvimento e aplicação prática de inteligência artificial.",
    logoBasePath: "/logos/iahub-onovolab",
    fallbackMark: "IA",
  },
];
