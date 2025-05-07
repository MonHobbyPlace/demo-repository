import { Request, Response } from "express";
import prisma from "../../../prismaClient";
export const unLikePost = async (req: Request, res: Response) => {
  const { userId, hospitalId } = req.params;
  try {
    await prisma.likedPost.delete({
      where: {
        userId_hospitalId: {
          userId: Number(userId),
          hospitalId: Number(hospitalId),
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Post unliked successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Server error when like post",
    });
  }
};
