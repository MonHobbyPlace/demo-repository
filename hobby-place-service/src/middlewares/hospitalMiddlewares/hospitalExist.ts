import { Response, Request, NextFunction } from "express";
import prisma from "../../prismaClient";
export const hospitalExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  try {
    const hospital = await prisma.hospital.findUnique({
      where: {
        id: id,
      },
    });
    if (!hospital) {
      res.status(404).json({
        data: {
          error: true,
          message: "Hospital not found",
        },
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};
