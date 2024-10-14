import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const conectarAoBancoDeDados = async () => {
  try {
    const dbUri = process.env.BD_URI || '';
    await mongoose.connect(dbUri); 
    console.log('Banco de dados conectado com sucesso');
  } catch (erro) {
    console.error('Erro ao conectar no banco de dados:', erro);
    process.exit(1); 
  }
};

export default conectarAoBancoDeDados;
