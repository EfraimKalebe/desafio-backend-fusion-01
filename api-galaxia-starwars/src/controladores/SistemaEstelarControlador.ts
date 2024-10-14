import { Request, Response } from 'express';
import SistemaEstelar from '../modelos/SistemaEstelarModelo';

// Criar sistema estelar
export const criarSistemaEstelar = async (req: Request, res: Response) => {
  try {
    const sistemaEstelar = new SistemaEstelar(req.body);
    await sistemaEstelar.save();
    res.status(201).json({ message: 'Sistema Estelar criado com sucesso!', sistemaEstelar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar sistema estelar', error });
  }
};

// Listar todos os sistemas estelares
export const listarSistemasEstelares = async (req: Request, res: Response) => {
  try {
    const sistemasEstelares = await SistemaEstelar.find().populate('planetas');
    res.status(200).json(sistemasEstelares);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar sistemas estelares', error });
  }
};

// Obter sistema estelar por ID
export const obterSistemaEstelar = async (req: Request, res: Response) => {
  try {
    const sistemaEstelar = await SistemaEstelar.findById(req.params.id).populate('planetas');
    res.status(200).json(sistemaEstelar);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter sistema estelar', error });
  }
};

// Atualizar sistema estelar por ID
export const atualizarSistemaEstelar = async (req: Request, res: Response) => {
  try {
    const sistemaEstelar = await SistemaEstelar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(sistemaEstelar);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar sistema estelar', error });
  }
};

// Deletar sistema estelar por ID
export const deletarSistemaEstelar = async (req: Request, res: Response) => {
  try {
    const sistemaEstelar = await SistemaEstelar.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar sistema estelar', error });
  }
};
