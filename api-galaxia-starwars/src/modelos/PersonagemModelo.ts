import mongoose, { Schema, Document } from 'mongoose';

interface Personagem extends Document {
  nome: string;
  raca: string;
  afiliacao: string;
  planetaNatal: mongoose.Types.ObjectId;
}

const PersonagemSchema: Schema = new Schema({
  nome: { type: String, required: true },
  raca: { type: String, required: true },
  afiliacao: { type: String, required: true },
  planetaNatal: { type: mongoose.Schema.Types.ObjectId, ref: 'Planeta' },
});

export default mongoose.model<Personagem>('Personagem', PersonagemSchema);
