import prisma from "../database";

// Busca calçados por tamanho específico
export const findByTamanho = async (tamanho: number) => {
  const calcados = await prisma.calcado.findMany({
    where: { tamanho },
  });
  return calcados;
};

// Filtra calçados por marca
export const findByMarca = async (marca: string) => {
  const calcados = await prisma.calcado.findMany({
    where: { marca },
  });
  return calcados;
};

// Retorna a contagem total de pares no estoque
export const countTotalPares = async () => {
  const total = await prisma.calcado.aggregate({
    _sum: { quantidade_em_estoque: true },
  });
  return total._sum.quantidade_em_estoque || 0;
};