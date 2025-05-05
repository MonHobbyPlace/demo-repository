import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const createPetPost = async (req: Request, res: Response) => {
  const {
    petName,
    address,
    about,
    image,
    phoneNumber,
    age,
    price,
    purpose,
    petCategoryId,
    size,
    gender,
    breed,
    video,
  } = req.body;

  const userId = Number(req.params.id);
  const updatedNumber = Number(phoneNumber);
  const updatedAge = Number(age);
  const updatedPrice = Number(price);
  try {
    const newPetPost = await prisma.petPost.create({
      data: {
        size: size,
        gender: gender,
        breed: breed,
        petName: petName,
        address: address,
        about: about,
        image: image,
        phoneNumber: updatedNumber,
        age: updatedAge,
        price: updatedPrice,
        purpose: purpose,
        petCategoryId: petCategoryId,
        userId: userId,
        video: video,
      },
    });

    res.status(201).json({ success: true, data: newPetPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
