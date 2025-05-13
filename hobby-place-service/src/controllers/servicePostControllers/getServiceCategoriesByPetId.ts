import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getServiceCategoriesByPetId = async (
  req: Request,
  res: Response
) => {
  const { petId } = req.params;

  try {
    const categories = await prisma.servicePost.findMany({
      where: {
        petCategoryId: Number(petId),
      },
    });

    res.status(200).json({ Category: categories });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service categories" });
  }
};
