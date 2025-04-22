import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const createServicePost = async (req: Request, res: Response) => {
  const {
    petName,
    address,
    about,
    image,
    phoneNumber,
    userId,
    age,
    price,
    purpose,
    petCategoryId,
  } = req.body;
  try {
    const newServicePost = await prisma.servicePost.create({
      data: {
        petName: petName,
        address: address,
        about: about,
        image: image,
        phoneNumber: phoneNumber,
        userId: userId,
        age: age,
        price: price,
        purpose: purpose,
        petCategoryId: petCategoryId,
      },
    });
    res.status(200).json({ success: true, data: newServicePost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
