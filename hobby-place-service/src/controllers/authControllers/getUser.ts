import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      message: "All user",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed user",
      error: error,
    });
    console.log(error);
  }
};
