import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error(
    '❌ MONGODB_URI no está definida en las variables de entorno.'
  );
}

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB || 'test',
    });
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error);
    throw error;
  }

  return mongoose;
}
