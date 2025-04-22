import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const petCategoryGet = async (req: Request, res: Response) => {
  try {
    const Category = await prisma.petCategory.findMany();
    res.status(200).json({
      success: true,
      message: "succesfully found all category",
      Category: Category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get all category",
      error: error,
    });
    console.log(error);
  }
};
