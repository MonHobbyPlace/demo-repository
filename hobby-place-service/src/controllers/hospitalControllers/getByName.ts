import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getByName = async (req: Request, res: Response) => {
  const name = (req.query.name as string) || undefined;

  try {
    const hospitals = await prisma.hospital.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    res.status(200).json(hospitals);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching hospitals." });
  }
};
