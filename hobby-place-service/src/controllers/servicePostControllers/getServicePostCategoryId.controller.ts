import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getServicePostCategoryId = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.categoryId);
  try {
    const petPost = await prisma.petPost.findMany({
      where: {
        petCategoryId: categoryId,
      },
    });
    res.status(200).json({
      data: petPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
