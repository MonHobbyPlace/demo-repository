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
      res.status(404).json({ error: 'Conversation not found' });
    } else {
      const participantIds = conversation.participants.map(p => p.userId);
      const senderIsParticipant = participantIds.includes(senderId);
      const receiverIsParticipant = participantIds.includes(receiverId);

      if (!senderIsParticipant || !receiverIsParticipant) {
        res.status(403).json({ error: 'Both users must be part of the conversation' });
      } else {
        const message = await prisma.message.create({
          data: {
            content,
            senderId,
            receiverId,
            conversationId,
          }
        });
        res.status(200).json({ success: true, data: message });
      }
    }
  } catch (error) {
    console.error(error);
 res.status(500).json({ success: false, message: "Internal server error" });
    
  }
};

export default SendMessage;
