import prisma from "../../prismaClient";
import { Request, Response } from "express";
export const RatingHospital = async (req: Request, res: Response) => {
  const { id, rate } = req.body;
  try {
    const hospital = await prisma.hospital.findUnique({
      where: { id },
    });
    const newRating = (rate + Number(hospital?.rating)) / 2;
    const response = await prisma.hospital.update({
      where: {
        id: Number(id),
      },
      data: {
        rating: newRating.toString(),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Server error when rating hosrital",
    });
  }
};
