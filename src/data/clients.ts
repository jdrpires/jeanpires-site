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
 * Intencionalmente vazia: nenhum cliente foi oficialmente aprovado para
 * exibição nesta etapa. A seção de clientes na Home só é renderizada quando
 * existir pelo menos um item aqui, permitindo adicionar nomes e assets depois
 * sem alterar o layout.
 */
export const clients: Client[] = [];
