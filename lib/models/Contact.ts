import { Schema, Document, models, model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema: Schema = new Schema<IContact>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
});

const Contact = models.Contact || model<IContact>('Contact', ContactSchema);

export default Contact;
