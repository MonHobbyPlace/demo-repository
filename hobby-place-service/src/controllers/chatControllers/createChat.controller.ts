import { Request, Response } from "express";
import prisma from "../../prismaClient";

const CreateChat = async (req: Request, res: Response) => {
  const { userId1, userId2 } = req.body;

  try {
    const conversation = await prisma.conversation.create({
      data: {
        participants: {
          create: [
            { user: { connect: { id: userId1 } } },
            { user: { connect: { id: userId2 } } }
          ]
        }
      },
      include: {
        participants: true
      }
    });

    res.status(200).json({ success: true, data: conversation });
  } catch (error: any) {
    console.error(error);
 res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default CreateChat;
