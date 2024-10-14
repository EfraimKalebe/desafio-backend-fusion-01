import { Request, Response } from 'express';
import NaveEspacial from '../modelos/NaveEspacialModelo';

// Criar nave espacial
export const criarNaveEspacial = async (req: Request, res: Response) => {
  try {
    const naveEspacial = new NaveEspacial(req.body);
    await naveEspacial.save();
    res.status(201).json({ message: 'Nave Espacial criado com sucesso!', naveEspacial });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar nave espacial', error });
  }
};

// Listar todas as naves espaciais
export const listarNavesEspaciais = async (req: Request, res: Response) => {
  try {
    const navesEspaciais = await NaveEspacial.find();
    res.status(200).json(navesEspaciais);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar naves espaciais', error });
  }
};

// Obter nave espacial por ID
export const obterNaveEspacial = async (req: Request, res: Response) => {
  try {
    const naveEspacial = await NaveEspacial.findById(req.params.id);
    res.status(200).json(naveEspacial);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter nave espacial', error });
  }
};

// Atualizar nave espacial por ID
export const atualizarNaveEspacial = async (req: Request, res: Response) => {
  try {
    const naveEspacial = await NaveEspacial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(naveEspacial);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar nave espacial', error });
  }
};

// Deletar nave espacial por ID
export const deletarNaveEspacial = async (req: Request, res: Response) => {
  try {
    const naveEspacial = await NaveEspacial.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar nave espacial', error });
  }
};
