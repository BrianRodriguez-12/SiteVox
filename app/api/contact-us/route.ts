import { NextResponse } from 'next/server';
// Libs
import { connectToDatabase } from '@/lib/mongodb';
// Models
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return NextResponse.json(
      { message: 'Mensaje enviado con éxito' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en la API de contacto:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
