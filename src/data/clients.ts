export type Client = {
  name: string;
  /**
   * Caminho base do logo dentro de `public/logos/clients/`, sem extensão.
   * Ex.: "/logos/clients/nome-da-empresa". Resolvido em runtime via findLogoPath.
   */
  logo: string;
  url?: string | null;
  featured: boolean;
};

/**
 * Lista de clientes/empresas atendidas.
 *
 * Apenas empresas explicitamente autorizadas para publicação. A seção de
 * clientes na Home só renderiza itens cujo asset de logo exista de fato em
 * `public/logos/clients/` (resolvido em runtime via findLogoPath), portanto
 * um cliente sem asset presente não é exibido e não quebra o layout.
 */
export const clients: Client[] = [
  {
    name: "FUNDAGRES",
    logo: "/logos/clients/fundagres",
    url: null,
    featured: true,
  },
  {
    name: "TEBASFIN",
    logo: "/logos/clients/tebasfin",
    url: null,
    featured: true,
  },
  {
    name: "ALECO",
    logo: "/logos/clients/aleco",
    url: null,
    featured: true,
  },
  {
    name: "DATALAND",
    logo: "/logos/clients/dataland",
    url: null,
    featured: true,
  },
  {
    name: "No Divã",
    logo: "/logos/clients/no-diva",
    url: null,
    featured: true,
  },
  {
    name: "One Six",
    logo: "/logos/clients/one-six",
    url: null,
    featured: true,
  },
];
