import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const updateUser = async (req: Request, res: Response) => {
  const { id, profileImage, backgroundImage, username, location } = req.body;
  try {
    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        profileImage: profileImage,
        backgroundImage: backgroundImage,
        username: username,
        location: location,
      },
    });
    res.status(202).json({
      success: true,
      message: "Successfully updated.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error while update user info",
    });
  }
};
