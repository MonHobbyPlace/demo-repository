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
    userId,
    avatarImage,
  } = req.body;
  try {
    const newHospital = await prisma.hospital.create({
      data: {
        name: name,
        about: about,
        email: email,
        userId: userId,
        location: location,
        phoneNumber: phoneNumber,
        workTime: workTime,
        category: category,
        avatarImage: avatarImage``,
      },
    });
    res.status(200).json({ data: newHospital });
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
