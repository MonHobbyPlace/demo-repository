import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getHospital = async (req: Request, res: Response) => {
  const { id, userId } = req.params as unknown as {
    id: number;
    userId?: number;
  };

  try {
    const hospital = await prisma.hospital.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        views: true,
      },
    });
    if (userId) {
      await prisma.views.upsert({
        where: {
          userId_hospitalId: {
            userId: Number(userId),
            hospitalId: Number(id),
          },
        },
        update: {},
        create: {
          userId: Number(userId),
          hospitalId: Number(id),
        },
      });
    }
    res.status(200).json({ ...hospital, viewQuantity: hospital?.views.length||0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while hh fetching hospitals.",
    });
  }
};
