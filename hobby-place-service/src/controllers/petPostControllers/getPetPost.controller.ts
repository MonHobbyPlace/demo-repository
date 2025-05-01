import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPost = async (req: Request, res: Response) => {
  try {
    const petPost = await prisma.petPost.findMany({
      include: {
        User: true,
      },
    });

    res.status(200).json({ data: petPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
