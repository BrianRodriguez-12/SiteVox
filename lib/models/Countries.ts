import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export default mongoose.models.Country ||
  mongoose.model('Country', CountrySchema);
