import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const petCategoryPost = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  console.log("category post", req.body);

  if (!name || !image) {
    res.status(400).json({
      success: false,
      message: "Name and image are required",
    });
  }

  try {
    const categoryPost = await prisma.petCategory.create({
      data: {
        name: name,
        image: image,
      },
    });

    res.status(201).json({
      success: true,
      message: "Successfully added category",
      categoryPost,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to add category",
      error: error.message,
    });
  }
};
