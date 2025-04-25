import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getByCategory = async (req: Request, res: Response) => {
  const { category } = req.params as unknown as {
    category: string;
  };

  try {
    let whereClause = undefined;

    if (category) {
      const categoryArray = Array.isArray(category)
        ? category
        : category.split(",");

      whereClause = {
        category: {
          hasSome: categoryArray, // checks if any of the given categories exist
        },
      };
    }
    const hospitals = await prisma.hospital.findMany({
      where: whereClause,
    });

    res.status(200).json({ data: hospitals });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching hospitals.",
    });
  }
};
