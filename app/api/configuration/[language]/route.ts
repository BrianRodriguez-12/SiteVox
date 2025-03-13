import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/dbConnect';
import Configuration from '@/lib/models/Configuration';

const formatContent = (content: string) => content.replace(/\n/g, '<br />');

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

  // Formatear el contenido antes de enviarlo en la respuesta
  const formattedContent = formatContent(config.content);

  return NextResponse.json(
    { ...config.toObject(), content: formattedContent },
    {
      status: 200,
      headers: {
        'Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=86400',
      },
    }
  );
}
