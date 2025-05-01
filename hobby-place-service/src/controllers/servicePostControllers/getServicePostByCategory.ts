import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getServicePostByCategory = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.id);
  try {
    const posts = await prisma.servicePost.findMany({
      where: { serviceId: categoryId },
    });

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch posts by category",
      error,
    });
  }
};
