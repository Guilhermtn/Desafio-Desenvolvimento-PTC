import { Request, Response } from "express";
import prisma from "../database";
import { findByTamanho, findByMarca, countTotalPares } from "../repositorie/CalcadoRepositorie";


// CREATE - Cadastrar um novo calçado
export const createCalcado = async (req: Request, res: Response) => {
  try {
    const { nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;

    const calcado = await prisma.calcado.create({
      data: {
        nome_produto,
        cor,
        marca,
        tamanho,
        preco,
        quantidade_em_estoque,
      },
    });

    return res.status(201).json(calcado);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao criar calçado" });
  }
};

// READ - Lista todos os calçados
export const readAllCalcados = async (req: Request, res: Response) => {
  try {
    const calcados = await prisma.calcado.findMany();

    return res.status(200).json(calcados);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar calçados" });
  }
};

// UPDATE - Atualiza um calçado pelo ID
export const updateCalcado = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;

    const calcado = await prisma.calcado.update({
      where: { id: Number(id) },
      data: {
        nome_produto,
        cor,
        marca,
        tamanho,
        preco,
        quantidade_em_estoque,
      },
    });

    return res.status(200).json(calcado);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao atualizar calçado" });
  }
};

// DELETE - Remove um calçado pelo ID
export const deleteCalcado = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.calcado.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: "Calçado removido com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao remover calçado" });
  }
};

// Busca calçados por tamanho
export const getByTamanho = async (req: Request, res: Response) => {
  try {
    const { tamanho } = req.params;
    const calcados = await findByTamanho(Number(tamanho));

    return res.status(200).json(calcados);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao buscar por tamanho" });
  }
};

// Filtra calçados por marca
export const getByMarca = async (req: Request, res: Response) => {
  try {
    const { marca } = req.params;
    const calcados = await findByMarca(marca);

    return res.status(200).json(calcados);
  } catch (error) {
    return res.status(400).json({ error: "Erro ao filtrar por marca" });
  }
};

// Contagem total de pares no estoque
export const getTotalPares = async (req: Request, res: Response) => {
  try {
    const total = await countTotalPares();

    return res.status(200).json({ total_pares: total });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao contar pares" });
  }
};