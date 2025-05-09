import { Request, Response } from "express";
import prisma from "../../prismaClient";

const CreateChat = async (req: Request, res: Response) => {
  const { userId1, userId2 } = req.body;

  try {
    const conversation = await prisma.conversation.findFirst({
      where: {
        participants: {
          some: {
            userId: Number(userId1),
          },
        },
        AND: {
          participants: {
            some: {
              userId: Number(userId2),
            },
          },
        },
      },
      include: {
        participants: true,
      },
    });
    if (conversation) {
      res.status(200).json({ success: true, data: conversation });
    } else {
      const conversation = await prisma.conversation.create({
        data: {
          participants: {
            create: [
              { user: { connect: { id: Number(userId1) } } },
              { user: { connect: { id: Number(userId2) } } },
            ],
          },
        },
        include: {
          participants: true,
        },
      });

      res.status(200).json({ success: true, data: conversation });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default CreateChat;
