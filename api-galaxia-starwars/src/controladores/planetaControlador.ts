import { Request, Response } from 'express';
import Planeta from '../modelos/PlanetaModelo';

// Criar planeta
export const criarPlaneta = async (req: Request, res: Response) => {
  try {
    const planeta = new Planeta(req.body);
    await planeta.save();
    res.status(201).json({ message: 'Planeta criado com sucesso!', planeta });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Erro ao criar planeta', error });
  }
};

// Listar todos os planetas
export const listarPlanetas = async (req: Request, res: Response) => {
  try {
    const planetas = await Planeta.find();
    res.status(200).json(planetas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar planetas', error });
  }
};

// Obter planeta por ID
export const obterPlaneta = async (req: Request, res: Response) => {
  try {
    const planeta = await Planeta.findById(req.params.id);
    res.status(planeta ? 200 : 404).json(planeta ?? { message: 'Planeta não encontrado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter planeta', error });
  }
};

// Atualizar planeta por ID
export const atualizarPlaneta = async (req: Request, res: Response) => {
  try {
    const planeta = await Planeta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(planeta ? 200 : 404).json(planeta ?? { message: 'Planeta não encontrado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar planeta', error });
  }
};

// Deletar planeta por ID
export const deletarPlaneta = async (req: Request, res: Response) => {
  try {
    const planeta = await Planeta.findByIdAndDelete(req.params.id);
    res.status(planeta ? 204 : 404).send(planeta ? undefined : { message: 'Planeta não encontrado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar planeta', error });
  }
};
