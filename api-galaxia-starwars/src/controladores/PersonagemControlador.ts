import { Request, Response } from 'express';
import Personagem from '../modelos/PersonagemModelo';

// Criar personagem
export const criarPersonagem = async (req: Request, res: Response) => {
  try {
    const personagem = new Personagem(req.body);
    await personagem.save();
    res.status(201).json({ message: ' Personagem criado com sucesso!', personagem });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao criar personagem', error });
  }
};

// Listar todos os personagens
export const listarPersonagens = async (req: Request, res: Response) => {
  try {
    const personagens = await Personagem.find().populate('planetaNatal');
    res.status(200).json(personagens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar personagens', error });
  }
};

// Obter personagem por ID
export const obterPersonagem = async (req: Request, res: Response) => {
  try {
    const personagem = await Personagem.findById(req.params.id).populate('planetaNatal');
    res.status(200).json(personagem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter personagem', error });
  }
};

// Atualizar personagem por ID
export const atualizarPersonagem = async (req: Request, res: Response) => {
  try {
    const personagem = await Personagem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(personagem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar personagem', error });
  }
};

// Deletar personagem por ID
export const deletarPersonagem = async (req: Request, res: Response) => {
  try {
    const personagem = await Personagem.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar personagem', error });
  }
};
