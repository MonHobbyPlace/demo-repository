import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getPetPost = async (req: Request, res: Response) => {
  try {
    const petPost = await prisma.petPost.findMany({});
    if (!petPost) {
      return res
        .status(404)
        .json({ error: true, message: "Pet post not found" });
    }
    res.status(200).json({ data: petPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
