import { ObjectId } from 'mongodb';
import clientPromise from '../lib/mongodb';  // Use your existing MongoDB connection

export async function saveConversation(userId, therapistId, messages) {
  const client = await clientPromise;
  const db = client.db('mental_health_support');  // Change to your actual DB name

  const conversation = {
    userId: new ObjectId(userId),
    therapistId: new ObjectId(therapistId),
    messages,  // Array of messages
    createdAt: new Date(),
  };

  return db.collection('conversations').insertOne(conversation);
}
