import { Request, Response, NextFunction } from "express";
import prisma from "../../prismaClient";

export const categoryMiddlewarePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  try {
    const existingCategory = await prisma.petCategory.findUnique({
      where: {
        name,
      },
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists.",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while checking category.",
      error: error instanceof Error ? error.message : error,
    });
  }
};
