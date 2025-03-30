import { NextResponse } from 'next/server';
import { RouteData } from './types';

async function fetchData(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function sendContactData(data: {
  name: string;
  email: string;
  message: string;
}) {
  return fetchData('/contact/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function getConfiguration(
  language: string
): Promise<NextResponse<unknown>> {
  try {
    const data = await fetchData(`/configuration/${language}`, {
      next: { revalidate: 60 },
    });
    return NextResponse.json(data.stringGenerated);
  } catch {
    return NextResponse.json({ error: 'Error obteniendo la configuración' });
  }
}

export async function getRouteData(
  countryCode: string,
  language: string
): Promise<RouteData[]> {
  try {
    const data = await fetchData(
      `/routes/api?countryCode=${countryCode}&language=${language}`,
      {
        next: { revalidate: 60 },
      }
    );
    return data.length > 0 ? data : [];
  } catch {
    return [];
  }
}
