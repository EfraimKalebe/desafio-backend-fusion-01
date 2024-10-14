import mongoose, { Schema, Document } from 'mongoose';

interface SistemaEstelar extends Document {
  nome: string;
  descricao: string;
  planetas: mongoose.Types.ObjectId[];
}

const SistemaEstelarSchema: Schema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  planetas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planeta' }],
});

export default mongoose.model<SistemaEstelar>('SistemaEstelar', SistemaEstelarSchema);
