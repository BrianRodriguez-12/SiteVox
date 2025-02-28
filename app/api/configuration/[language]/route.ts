import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'; // Importa NextRequest
import { connectToDatabase } from '@/lib/dbConnect';
import Configuration from '@/lib/models/Configuration';

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const url = new URL(request.url);
  const language = url.pathname.split('/').pop(); // Esto debería extraer el idioma de la URL

  console.log('🌍 Buscando configuración para idioma:', language);

  const config = await Configuration.findOne({ language });

  if (!config) {
    return NextResponse.json(
      { message: 'Configuración no encontrada' },
      { status: 404 }
    );
  }

  return NextResponse.json(config, { status: 200 });
}
