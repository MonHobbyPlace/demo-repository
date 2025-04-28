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
        address: address,
        about: about,
        image: image,
        phoneNumber: phoneNumber,
        userId: userId,
        age: age,
        purpose: purpose,
        petCategoryId: petCategoryId,
        cost: cost,
        skill: skill,
        serviceId: serviceId,
      },
    });
    res.status(200).json({ success: true, data: newServicePost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
