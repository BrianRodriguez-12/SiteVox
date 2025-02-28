import { NextResponse } from 'next/server';
// Libs
import { connectToDatabase } from '@/lib/dbConnect';
// Models
import Configuration from '@/lib/models/Configuration';
import { NextApiRequest } from 'next';

export async function GET(
  req: NextApiRequest,
  context: { params: { language: string } }
) {
  await connectToDatabase();

  const { language } = await context.params;

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
