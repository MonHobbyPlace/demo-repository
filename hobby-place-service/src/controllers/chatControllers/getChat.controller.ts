import { Request, Response } from "express";
import prisma from "../../prismaClient";

const getMessages = async (req: Request, res: Response) => {
  const { conversationId } = req.params;

  const parsedId = parseInt(conversationId);
  if (isNaN(parsedId)) {
    res.status(400).json({ success: false, message: "Invalid conversation ID" });
  }

  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: parsedId,
      },
      orderBy: {
        timestamp: "asc",
      },
    });

 res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error(error);
 res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default getMessages;
