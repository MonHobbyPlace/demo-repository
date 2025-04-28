import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPostByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const petPost = await prisma.petPost.findMany({
      where: {
        petName: name,
      },
    });

    res.status(200).json({ data: petPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
