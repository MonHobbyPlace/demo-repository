import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const createPetPost = async (req: Request, res: Response) => {
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
    size,
    gender,
    breed,
  } = req.body;
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
        phoneNumber: phoneNumber,
        userId: userId,
        age: age,
        price: price,
        purpose: purpose,
        petCategoryId: petCategoryId,
      },
    });
    res.status(200).json({ sucsess: true, data: newPetPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "INternal error" });
  }
};
