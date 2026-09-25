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
  caseUrl?: string | null;
  github?: string | null;
  featured: boolean;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "horizon",
    title: "Horizon",
    tagline: "Inteligência veicular e diagnóstico conectado.",
    description:
      "Plataforma de inteligência para ativos conectados, combinando telemetria, identidade, histórico e estado explicável para evoluir em direção a Living Digital Twins.",
    category: "Produto / Mobilidade",
    status: "Em desenvolvimento",
    role: "Criador · Arquitetura · Produto",
    stack: ["Android", "OBD-II", "FastAPI", "Edge", "Digital Twin"],
    image: null,
    url: null,
    caseUrl: null,
    github: null,
    featured: true,
  },
  {
    slug: "plugz",
    title: "PlugZ",
    tagline: "Tecnologia para operação, crescimento e serviços financeiros no ecossistema de franquias.",
    description:
      "Atuação como CTO em uma plataforma que reúne jornadas comerciais, integrações, pagamentos, BaaS, governança e arquitetura multi-tenant.",
    category: "Plataforma / Fintech",
    status: "Em evolução contínua",
    role: "CTO · Arquitetura · Produto",
    stack: ["FastAPI", "PostgreSQL", "AWS", "BaaS", "Payments"],
    image: null,
    url: null,
    caseUrl: "https://github.com/jdrpires/jdrpires/blob/main/portfolio/plugz.md",
    github: null,
    featured: true,
  },
  {
    slug: "flowdash",
    title: "FlowDash",
    tagline: "Produto digital com participação societária e visão de longo prazo.",
    description:
      "Produto mantido por empresa da qual sou sócio, conectando tecnologia, evolução de produto e decisões de negócio em uma iniciativa que faz parte da minha atuação empreendedora.",
    category: "Produto / Sociedade",
    status: "Ativo",
    role: "Sócio · Produto · Estratégia",
    stack: ["Produto Digital", "Estratégia", "Tecnologia"],
    image: null,
    url: null,
    caseUrl: null,
    github: null,
    featured: true,
  },
  {
    slug: "no-diva",
    title: "Palavras que Encantam",
    tagline: "Tecnologia aplicada à gestão de uma iniciativa cultural incentivada.",
    description:
      "Case do No Divã Treinamentos que digitaliza inscrições, documentos, protocolos, avaliação por jurados e administração em um fluxo seguro, rastreável e preparado para operação real.",
    category: "Cultura / Tecnologia",
    status: "Produção",
    role: "Arquitetura · Engenharia · Entrega",
    stack: ["Next.js", "PostgreSQL", "Supabase", "RLS", "Security", "Auditability"],
    image: null,
    url: null,
    caseUrl: "https://github.com/jdrpires/jdrpires/blob/main/portfolio/no-diva.md",
    github: null,
    featured: true,
  },
  {
    slug: "integraz",
    title: "integraZ",
    tagline: "Integrações enterprise sem contaminar o core do produto.",
    description:
      "Camada de integração para parceiros externos, isolando contratos, autenticação, falhas e estados de serviços financeiros, seguros e pagamentos.",
    category: "Integração Enterprise",
    status: "Ativo",
    role: "Arquitetura · Integrações",
    stack: ["Python", "FastAPI", "REST", "SOAP", "OAuth2"],
    image: null,
    url: null,
    caseUrl: "https://github.com/jdrpires/jdrpires/blob/main/portfolio/integraz.md",
    github: null,
    featured: true,
  },
  {
    slug: "governance-hub",
    title: "Governance Hub",
    tagline: "Governança, identidade e controles em ambientes multiempresa.",
    description:
      "Plataforma SaaS para centralizar documentos, obrigações, responsabilidades e auditoria com separação por tenant, RBAC e controles corporativos.",
    category: "SaaS / Governança",
    status: "Em desenvolvimento",
    role: "Arquitetura · Produto · Segurança",
    stack: ["Multi-tenant", "RBAC", "IAM", "MFA", "Audit"],
    image: null,
    url: null,
    caseUrl: "https://github.com/jdrpires/jdrpires/blob/main/portfolio/governance-hub.md",
    github: null,
    featured: true,
  },
  {
    slug: "dnamark",
    title: "DNAMark",
    tagline: "Software aplicado a operações de laboratório e genética.",
    description:
      "Plataforma digital para fluxos laboratoriais estruturados, operações individuais e em lote, validações e rastreabilidade em um domínio especializado.",
    category: "Biotech / Laboratório",
    status: "Entregue",
    role: "Arquitetura · Entrega",
    stack: ["Web Platform", "Data Workflows", "Validation", "Traceability"],
    image: null,
    url: null,
    caseUrl: "https://github.com/jdrpires/jdrpires/blob/main/portfolio/dnamark.md",
    github: null,
    featured: true,
  },
];
