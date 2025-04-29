import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const getCurrentUser = async (req: Request, res: Response) => {
  const { currentUser } = req.query;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(currentUser),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
