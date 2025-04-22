import prisma from "../../prismaClient";
import { NextFunction, Request, Response } from "express";

export const postIdFoundMid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postId = Number(req.params.id);
    const post = await prisma.servicePost.findUnique({
      where: {
        id: postId,
      },
    });
    if (!post) {
      res.status(404).json({ error: true, message: "Post not found" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
