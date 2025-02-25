import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
      );
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(process.env.MONGODB_DB);
    const users = await db.collection('users').find({}).toArray();

    res.status(200).json(users);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ message: 'Error al conectar con la base de datos' });
  }
}
