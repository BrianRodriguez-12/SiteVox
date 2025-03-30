import mongoose, { Schema, Document } from 'mongoose';

export interface Route extends Document {
  name: { [key: string]: string }; // Soporte para múltiples idiomas
  countryId: mongoose.Types.ObjectId;
  places: mongoose.Types.ObjectId[];
}

const routeSchema = new Schema<Route>({
  name: { type: Map, of: String, required: true }, // Map para múltiples idiomas
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
});

export default mongoose.models.Route ||
  mongoose.model<Route>('Route', routeSchema);
