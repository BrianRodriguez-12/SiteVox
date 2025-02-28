import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;
const MONGO_DB_NAME = process.env.MONGODB_DB || 'SiteVoxDB';

if (!MONGO_URI) {
  throw new Error('❌ MONGO_URI no está definida en .env.local');
}

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('⚡️ Ya conectado a MongoDB');
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
      serverSelectionTimeoutMS: 5000, // Tiempo máximo para conectar (5s)
    });

    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    throw new Error('Error de conexión a la base de datos');
  }
};
