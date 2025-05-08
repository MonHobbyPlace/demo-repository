import { Request, Response } from "express";
import prisma from "../../prismaClient";

const SendMessage = async (req: Request, res: Response) => {
  const { senderId, receiverId, conversationId, content } = req.body;

  try {
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { participants: true }
    });

    if (!conversation) {
      return  res.status(404).json({ error: 'Conversation not found' });
    }

    const participantIds = conversation.participants.map(p => p.userId);
    const senderIsParticipant = participantIds.includes(senderId);
    const receiverIsParticipant = participantIds.includes(receiverId);

    if (!senderIsParticipant || !receiverIsParticipant) {
      res.status(403).json({ error: 'Both users must be part of the conversation' });
    }

    const message = await prisma.message.create({
      data: {
        content,
        senderId,
        receiverId,
        conversationId,
      }
    });

    return res.status(201).json(message);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default SendMessage;
