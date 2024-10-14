import mongoose, { Schema, Document } from 'mongoose';

export interface IPlaneta extends Document {
  nome: string;
  clima: string;
  terreno: string;
  populacao: number;
}

const PlanetaSchema: Schema = new Schema({
  nome: { type: String, required: true },
  clima: { type: String, required: true },
  terreno: { type: String, required: true },
  populacao: { type: Number, required: true },
});

export default mongoose.model<IPlaneta>('Planeta', PlanetaSchema);
