import { NextFunction, Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPostMid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryId = Number(req.params.categoryId);
    const petPost = await prisma.petPost.findMany({
      where: {
        petCategoryId: categoryId,
      },
    });
    if (petPost.length === 0) {
      res.status(404).json({ error: true, message: "No post found" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
