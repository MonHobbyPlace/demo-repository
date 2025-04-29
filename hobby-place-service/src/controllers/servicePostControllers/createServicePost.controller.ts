import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const createServicePost = async (req: Request, res: Response) => {
  const {
    address,
    about,
    image,
    phoneNumber,
    userId,
    age,
    purpose,
    petCategoryId,
    cost,
    skill,
    serviceId,
  } = req.body;

  try {
    const newServicePost = await prisma.servicePost.create({
      data: {
        address,
        about,
        image,
        phoneNumber: Number(phoneNumber),
        userId: Number(userId),
        age: Number(age),
        purpose,
        petCategoryId: Number(petCategoryId),
        cost: Number(cost),
        skill,
        serviceId: Number(serviceId),
      },
    });

    res.status(200).json({ success: true, data: newServicePost });
  } catch (error: any) {
    res.status(500).json({
      error: true,
      message: "Internal error",
      details: error?.message || "Unknown",
    });
  }
};
