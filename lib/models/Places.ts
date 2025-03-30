import mongoose, { Schema, Document } from 'mongoose';

export interface Place extends Document {
  name: { [key: string]: string }; // Soporte para múltiples idiomas
  type: string;
  description: { [key: string]: string }; // Soporte para múltiples idiomas
  location: {
    lat: number;
    lng: number;
  };
  hours: string;
  price: number;
  nearby: {
    name: { [key: string]: string }; // Soporte para múltiples idiomas
    location: {
      lat: number;
      lng: number;
    };
  }[];
}

const placeSchema = new Schema<Place>({
  name: { type: Map, of: String, required: true }, // Map para múltiples idiomas
  type: { type: String, required: true },
  description: { type: Map, of: String, required: true }, // Map para múltiples idiomas
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  hours: { type: String, required: true },
  price: { type: Number, required: true },
  nearby: [
    {
      name: { type: Map, of: String, required: true }, // Map para múltiples idiomas
      location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
    },
  ],
});

export default mongoose.models.Place ||
  mongoose.model<Place>('Place', placeSchema);
