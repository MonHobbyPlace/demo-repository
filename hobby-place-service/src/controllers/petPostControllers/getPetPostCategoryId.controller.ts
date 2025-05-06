import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPostCategoryId = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.categoryId);

  try {
    let petPosts;

    if (categoryId === 0) {
      petPosts = await prisma.petPost.findMany();
    } else {
      petPosts = await prisma.petPost.findMany({
        where: {
          petCategoryId: categoryId,
        },
      });
    }

    res.status(200).json({ data: petPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
