import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/dbConnect';
import Contact from '@/lib/models/Contact';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
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
    console.log(' POST ~ error:', error);
    return NextResponse.json(
      { error: `Error en el servidor ${error}` },
      { status: 500 }
    );
  }
}
