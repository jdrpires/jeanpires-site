export type ProjectCase = {
  title: string;
  description: string;
  category: string;
  stack: string[];
  image: string | null;
  url?: string | null;
  featured: boolean;
};

export const projectCases: ProjectCase[] = [
  {
    title: "Plataformas para redes de franquias",
    description:
      "Produtos e operações digitais desenhados para conectar marcas, unidades, indicadores e rotinas de gestão.",
    category: "Franquias",
    stack: ["SaaS", "Arquitetura", "Integrações"],
    image: null,
    featured: true,
  },
  {
    title: "Produtos financeiros e integrações",
    description:
      "Soluções que aproximam jornadas comerciais, pagamentos, dados e automação operacional.",
    category: "Fintech",
    stack: ["APIs", "Back-end", "Dados"],
    image: null,
    featured: true,
  },
  {
    title: "Inteligência artificial aplicada",
    description:
      "Experimentação e entrega de fluxos com IA orientados a uso real, contexto de negócio e operação diária.",
    category: "IA",
    stack: ["LLMs", "Automação", "Produto"],
    image: null,
    featured: true,
  },
  {
    title: "Automação de operações",
    description:
      "Mapeamento de processos e construção de ferramentas para reduzir atrito, retrabalho e dependência manual.",
    category: "Operações",
    stack: ["Workflows", "Integrações", "Observabilidade"],
    image: null,
    featured: false,
  },
  {
    title: "Plataformas B2B",
    description:
      "Sistemas para ambientes com múltiplos usuários, permissões, jornadas internas e evolução contínua.",
    category: "B2B",
    stack: ["Produto", "Cloud", "Engenharia"],
    image: null,
    featured: false,
  },
];
