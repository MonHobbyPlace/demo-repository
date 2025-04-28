import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const petCategoryPost = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  try {
    const categoryPost = await prisma.petCategory.create({
      data: {
        name: name,
        image: image,
      },
    });
    res.status(201).json({
      success: true,
      message: "succefully added category",
      categoryPost: categoryPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add category",
      error: error,
    });
    console.log(error);
  }
};
