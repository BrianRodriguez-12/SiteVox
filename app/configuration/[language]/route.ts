import { NextRequest, NextResponse } from 'next/server';

// DB
import { connectToDatabase } from '@/lib/dbConnect';

// Models
import Configuration from '@/lib/models/Configuration';

const formatContent = (content: string) => content.replace(/\n/g, '<br />');

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const url = new URL(request.url);
  const language = url.pathname.split('/').pop();

  const config = await Configuration.findOne({ language });

  if (!config) {
    return NextResponse.json(
      { message: 'Configuración no encontrada' },
      { status: 404 }
    );
  }

  const formattedContent = formatContent(config.stringGenerated);

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
