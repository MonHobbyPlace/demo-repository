import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getByCategory = async (req: Request, res: Response) => {
  const { category, id } = req.query as unknown as {
    category?: string;
    id?: number;
  };
  console.log(req.query);

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
      const hospitals = await prisma.hospital.findMany({
        where: whereClause,
      });

      res.status(200).json({ data: hospitals });
    } else if (id) {
      const hospital = await prisma.hospital.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(hospital);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while fetching hospitals.",
    });
  }
};
