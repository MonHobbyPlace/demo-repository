import prisma from "../../prismaClient";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

type User = {
  username: string;
  password: string;
  email: string;
};

export const CreateUser = async (req: Request, res: Response) => {
  const user = req.body as User;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      res.status(409).send({
        success: false,
        message: "Email already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashedPassword,
      },
    });

    res.status(201).send({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};
