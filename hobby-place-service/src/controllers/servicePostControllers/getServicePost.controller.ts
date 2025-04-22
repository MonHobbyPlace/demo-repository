import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getServicePost = async (req: Request, res: Response) => {
  try {
    const servicePost = await prisma.petPost.findMany({});
    if (!servicePost) {
      return res
        .status(404)
        .json({ error: true, message: "Service post not found" });
    }
    res.status(200).json({ data: servicePost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
