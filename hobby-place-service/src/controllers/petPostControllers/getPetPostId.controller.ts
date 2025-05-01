import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPostId = async (req: Request, res: Response) => {
  const Id = Number(req.params.Id);
  try {
    const petPost = await prisma.petPost.findUnique({
      where: {
        id: Id,
      },
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
