import mongoose, { Schema, Document } from 'mongoose';

interface NaveEspacial extends Document {
  nome: string;
  modelo: string;
  fabricante: string;
  capacidadePassageiros: number;
}

const NaveEspacialSchema: Schema = new Schema({
  nome: { type: String, required: true },
  modelo: { type: String, required: true },
  fabricante: { type: String, required: true },
  capacidadePassageiros: { type: Number, required: true },
});

export default mongoose.model<NaveEspacial>('NaveEspacial', NaveEspacialSchema);
