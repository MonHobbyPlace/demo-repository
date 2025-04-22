import { Request, Response, NextFunction } from "express";
import prisma from "../../prismaClient";
export const userExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      res.status(404).json({
        data: {
          error: true,
          message: "User not found",
        },
      });
    } else {
      next();
    }
  } catch (error) {}
};
