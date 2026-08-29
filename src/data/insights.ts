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
    title:
      "O problema não é escolher tecnologia. É saber o que precisa ser resolvido.",
    description:
      "Boas decisões técnicas começam quando o objetivo de negócio, o risco e o momento do produto ficam claros.",
    tag: "Estratégia",
    status: "Em breve",
  },
  {
    title: "Produto digital começa antes do primeiro commit.",
    description:
      "Código é consequência. A primeira entrega é clareza sobre usuário, operação, restrições e impacto esperado.",
    tag: "Produto",
    status: "Em breve",
  },
];
