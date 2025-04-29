import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
