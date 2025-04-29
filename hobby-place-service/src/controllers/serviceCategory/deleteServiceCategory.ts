import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const deleteServiceCategory = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const deletedServiceCategory = await prisma.petPost.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ success: true, data: deletedServiceCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
