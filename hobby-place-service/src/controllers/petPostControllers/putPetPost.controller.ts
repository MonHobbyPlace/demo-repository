import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const putPetPost = async (req: Request, res: Response) => {
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
    breed,
    gender,
    video,
    active,
  } = req.body;
  const id = Number(req.params.id);
  try {
    const updatedPetPost = await prisma.petPost.updateMany({
      data: {
        size: size,
        breed: breed,
        gender: gender,
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
        video: video,
        active: active,
      },
      where: {
        id: id,
      },
    });
    res.status(200).json({ success: true, data: updatedPetPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
