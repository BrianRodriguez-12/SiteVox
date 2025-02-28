import { Schema, Document, models, model } from 'mongoose';

export interface IConfiguration extends Document {
  language: string;
  stringGenerated: string;
}

const ConfigurationSchema = new Schema<IConfiguration>({
  language: { type: String, required: true, unique: true },
  stringGenerated: { type: String, required: true },
});

// Evita recrear el modelo en cada recarga del servidor
const Configuration =
  models.Configuration ||
  model<IConfiguration>('Configuration', ConfigurationSchema);

export default Configuration;
