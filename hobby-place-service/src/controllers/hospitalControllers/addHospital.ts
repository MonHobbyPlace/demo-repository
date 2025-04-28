import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const addHospital = async (req: Request, res: Response) => {
  const {
    name,
    about,
    phoneNumber,
    workTime,
    category,
    location,
    email,
    avatarImage,
    rating,
    backgroundImage,
  } = req.body;
  try {
    const newHospital = await prisma.hospital.createMany({
      data: {
        rating: rating,
        name: name,
        about: about,
        email: email,
        location: location,
        phoneNumber: phoneNumber,
        workTime: workTime,
        category: category,
        avatarImage: avatarImage,
        backgroundImage: backgroundImage,
      },
    });
    res.status(200).json({ data: newHospital });
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
