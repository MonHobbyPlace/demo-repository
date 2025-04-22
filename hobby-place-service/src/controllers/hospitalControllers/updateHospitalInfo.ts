import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const updateHospitalInfo = async (req: Request, res: Response) => {
  const {
    id,
    name,
    phoneNumber,
    about,
    email,
    location,
    avatarImage,
    backgroundImage,
    workTime,
    category,
  } = req.body;
  try {
    const updatedInfo = await prisma.hospital.update({
      where: { id },
      data: {
        name: name,
        phoneNumber: phoneNumber,
        about: about,
        email: email,
        location: location,
        avatarImage: avatarImage,
        backgroundImage: backgroundImage,
        workTime: workTime,
        category: category,
      },
    });
    res.status(200).json({ data: updatedInfo });
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal error" });
  }
};
