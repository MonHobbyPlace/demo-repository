import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const addNewMessage = async (req: Request, res: Response) => {
  const { message, senderId, recieverId } = req.body;
  try {

    // const newMessage = await prisma.message.create({
    //   data: {
    //     content: message,
    //     senderId,
    //     receiverId:recieverId

    //   },
    // });
    // res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Internal server error in message section",
    });
  }
};
