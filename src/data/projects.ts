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
      "Estruturas digitais para conectar marcas, unidades, indicadores e rotinas de gestão em operações distribuídas.",
    category: "Produto B2B",
    stack: ["SaaS", "Arquitetura", "Integrações"],
    image: null,
    featured: true,
  },
  {
    title: "Produtos financeiros e integrações",
    description:
      "Integrações e fluxos que aproximam jornadas comerciais, pagamentos, dados e automação operacional.",
    category: "Integrações",
    stack: ["APIs", "Back-end", "Dados"],
    image: null,
    featured: true,
  },
  {
    title: "Inteligência artificial aplicada",
    description:
      "Experimentação e entrega de fluxos com IA orientados a contexto de negócio, uso real e operação diária.",
    category: "IA aplicada",
    stack: ["LLMs", "Automação", "Produto"],
    image: null,
    featured: true,
  },
  {
    title: "Automação de operações",
    description:
      "Mapeamento de processos e construção de ferramentas para reduzir atrito, retrabalho e dependência manual.",
    category: "Automação",
    stack: ["Workflows", "Integrações", "Observabilidade"],
    image: null,
    featured: false,
  },
  {
    title: "Plataformas B2B",
    description:
      "Produtos para ambientes com múltiplos usuários, permissões, jornadas internas e evolução contínua.",
    category: "B2B",
    stack: ["Produto", "Cloud", "Engenharia"],
    image: null,
    featured: false,
  },
];
