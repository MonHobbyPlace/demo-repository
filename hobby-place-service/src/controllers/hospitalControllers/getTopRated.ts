import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getToprated = async (req: Request, res: Response) => {
  try {
    const hospitals = await prisma.hospital.findMany();
    const top5 = hospitals
      .sort((a, b) => Number(b.rating) - Number(a.rating))
      .slice(0, 5);

    res.status(200).send(top5);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.log(error);
  }
};
