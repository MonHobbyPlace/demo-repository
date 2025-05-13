import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const getServiceCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await prisma.servicePost.findUnique({
      where: { id: Number(id) },
    });

    if (!category) {
      res.status(404).json({ error: "Service category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service category" });
  }
};
