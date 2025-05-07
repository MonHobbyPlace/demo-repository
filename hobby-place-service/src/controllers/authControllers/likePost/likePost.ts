import { Request, Response } from "express";
import prisma from "../../../prismaClient";
export const likePost = async (req: Request, res: Response) => {
  const { userId, hospitalId } = req.params;
  try {
    await prisma.likedPost.upsert({
      where: {
        userId_hospitalId: {
          userId: Number(userId),
          hospitalId: Number(hospitalId),
        },
      },
      update: {},
      create: {
        userId: Number(userId),
        hospitalId: Number(hospitalId),
      },
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Server error when like post",
    });
  }
};
