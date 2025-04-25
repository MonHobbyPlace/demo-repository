import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getHospital = async (req: Request, res: Response) => {
  const { id } = req.params as unknown as { id: number };

  try {
    const hospital = await prisma.hospital.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(hospital);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while hh fetching hospitals.",
    });
  }
};
