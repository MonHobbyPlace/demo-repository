import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getServiceCategory = async (req: Request, res: Response) => {
  try {
    const category = await prisma.serviceCategory.findMany();
    res.status(200).json({
      success: true,
      message: "succesful",
      category: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed category",
      error: error,
    });
  }
};
