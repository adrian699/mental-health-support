import { NextResponse } from 'next/server';
import { saveConversation } from '@/models/conversation';

export async function POST(req) {
  try {
    const { userId, therapistId, messages } = await req.json();

    if (!userId || !therapistId || !messages) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await saveConversation(userId, therapistId, messages);
    return NextResponse.json({ message: 'Conversation saved', conversationId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save conversation' }, { status: 500 });
  }
}
