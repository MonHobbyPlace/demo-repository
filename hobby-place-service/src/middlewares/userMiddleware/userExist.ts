import { Request, Response, NextFunction } from "express";
import prisma from "../../prismaClient";
export const userExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (user) {
      next();
    } else {
      res.status(404).json({
        success: false,
        message: "User email exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
