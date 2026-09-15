export type ProjectCase = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  role?: string;
  stack: string[];
  image: string | null;
  url?: string | null;
  github?: string | null;
  featured: boolean;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "horizon",
    title: "Horizon",
    tagline: "Inteligência veicular e diagnóstico conectado.",
    description:
      "Plataforma que conecta veículo, aplicativo e serviços de backend para transformar dados automotivos em diagnóstico, histórico e inteligência preventiva.",
    category: "Produto / Mobilidade",
    status: "Em desenvolvimento",
    stack: ["Android", "OBD", "FastAPI", "Edge / Gateway"],
    image: null,
    url: null,
    github: null,
    featured: true,
  },
  {
    slug: "governance-hub",
    title: "Governance Hub",
    tagline: "Governança, documentos e obrigações em uma única plataforma.",
    description:
      "Plataforma para centralizar documentos, responsabilidades, obrigações e acompanhamento executivo de governança em ambientes multiempresa.",
    category: "Produto B2B",
    status: "Em desenvolvimento",
    stack: ["Governança", "Multi-tenant", "RBAC", "Cloud"],
    image: null,
    url: null,
    github: null,
    featured: true,
  },
  {
    slug: "flowdash",
    title: "FlowDash",
    tagline: "",
    description: "Produto digital em desenvolvimento. Mais detalhes em breve.",
    category: "Produto",
    status: "Em desenvolvimento",
    stack: [],
    image: null,
    url: null,
    github: null,
    featured: true,
  },
];
