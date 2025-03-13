/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;
const MONGO_DB_NAME = process.env.MONGODB_DB || 'test';

if (!MONGO_URI) {
  throw new Error('❌ MONGO_URI no está definida en .env.local');
}

const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        dbName: MONGO_DB_NAME,
        serverSelectionTimeoutMS: 5000,
      })
      .then((mongoose) => {
        return mongoose;
      })
      .catch((err) => {
        console.error('❌ Error al conectar a MongoDB:', err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

(global as any).mongoose = cached;
