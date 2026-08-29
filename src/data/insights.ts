export type Insight = {
  title: string;
  description: string;
  tag: string;
  status: "Em breve";
};

export const insights: Insight[] = [
  {
    title: "IA não conserta processo ruim.",
    description:
      "Antes de automatizar, é preciso entender onde o trabalho quebra, onde a decisão acontece e o que realmente precisa melhorar.",
    tag: "IA aplicada",
    status: "Em breve",
  },
  {
    title: "Produto digital começa antes do primeiro commit.",
    description:
      "Código é consequência. A primeira entrega é clareza sobre usuário, operação, restrições e impacto esperado.",
    tag: "Produto",
    status: "Em breve",
  },
  {
    title: "Tecnologia boa é a que resolve o problema certo.",
    description:
      "A melhor escolha técnica é aquela que respeita o momento do negócio, reduz risco e abre caminho para evolução.",
    tag: "Estratégia",
    status: "Em breve",
  },
];
