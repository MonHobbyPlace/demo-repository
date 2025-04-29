import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const createServiceCategory = async (req: Request, res: Response) => {
  const { image, name } = req.body;
  try {
    const createdCategory = await prisma.serviceCategory.create({
      data: {
        image,
        name,
      },
    });
    res.status(201).json({
      success: true,
      message: "successful",
      createdCategory: createdCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed category",
      error: error,
    });
  }
};
