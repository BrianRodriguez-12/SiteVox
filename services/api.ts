import { NextResponse } from 'next/server';

export async function sendContactData(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await fetch('/contact/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error al enviar el mensaje');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al enviar los datos:', error);
    throw error;
  }
}

export async function getConfiguration(
  language: string
): Promise<NextResponse<unknown>> {
  try {
    const response = await fetch(`/configuration/${language}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) throw new Error('Error obteniendo la configuración');

    const data = await response.json();

    return NextResponse.json(data.stringGenerated);
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json({ error: 'Error obteniendo la configuración' });
  }
}
