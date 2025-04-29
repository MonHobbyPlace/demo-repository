import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPostByName = async (req: Request, res: Response) => {
  const { value } = req.params;

  if (!value) {
    res.status(400).json({ error: true, message: "Value is required" });
  }

  try {
    const petPost = await prisma.petPost.findMany({
      where: {
        breed: {
          contains: value,
          mode: "insensitive",
        },
      },
    });

    res.status(200).json({ data: petPost });
  } catch (error) {
    console.error("Error fetching pet posts:", error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
