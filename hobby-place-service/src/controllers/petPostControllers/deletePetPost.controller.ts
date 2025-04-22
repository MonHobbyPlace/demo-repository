import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const deletePetPost = async (req: Request, res: Response) => {
  const id = Number(req.params);
  try {
    const deletedPetPost = await prisma.petPost.delete({
      where: {
        id: id,
      },
    });
    if (!deletedPetPost) {
      return res
        .status(404)
        .json({ error: true, message: "Pet post not found" });
    }
    res.status(200).json({ success: true, data: deletedPetPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
