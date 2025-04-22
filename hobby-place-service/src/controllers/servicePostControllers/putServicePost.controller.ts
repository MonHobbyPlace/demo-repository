import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const putServicePost = async (req: Request, res: Response) => {
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
  const id = Number(req.params.id);
  try {
    const updatedServicePost = await prisma.servicePost.updateMany({
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
      where: {
        id: id,
      },
    });
    res.status(200).json({ success: true, data: updatedServicePost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
