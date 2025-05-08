import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getAll = async (req: Request, res: Response) => {
  try {
    const hospitals = await prisma.hospital.findMany({
      include: {
        views: true,
      },
    });

    const hospitalsWithViewCount = hospitals.map( (hospital) => {
      return {
        ...hospital,
        viewQuantity: hospital.views.length,
      };
    });

    res.status(200).json({ data: hospitalsWithViewCount });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching hospitals." });
  }
};
