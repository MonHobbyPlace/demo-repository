import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  try {
    const hospitals = await prisma.hospital.findMany({
      where: category
        ? {
            category: {
              has: category,
            },
          }
        : undefined,
    });

    res.status(200).json({ data: hospitals });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching hospitals." });
  }
};
