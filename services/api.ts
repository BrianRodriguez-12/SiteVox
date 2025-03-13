import axios from 'axios';
import { NextResponse } from 'next/server';

const API_URL = 'https://servervox.onrender.com/api';

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] =
      'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function sendContactData(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await fetch('/api/contact', {
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
    const response = await fetch(`/api/configuration/${language}`, {
      next: { revalidate: 60 }, // Cache por 60 segundos
    });
    if (!response.ok) throw new Error('Error obteniendo la configuración');

    const data = await response.json();
    console.log(' data:', data);

    return NextResponse.json(data.stringGenerated);
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json({ error: 'Error obteniendo la configuración' });
  }
}
