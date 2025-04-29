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
    // const newUser = await prisma.user.createMany({
    //   data: [
    //     {
    //       username: "alice01",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "alice01@example.com",
    //     },
    //     {
    //       username: "bob02",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "bob02@example.com",
    //     },
    //     {
    //       username: "charlie03",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "charlie03@example.com",
    //     },
    //     {
    //       username: "david04",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "david04@example.com",
    //     },
    //     {
    //       username: "emma05",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "emma05@example.com",
    //     },
    //     {
    //       username: "frank06",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "frank06@example.com",
    //     },
    //     {
    //       username: "grace07",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "grace07@example.com",
    //     },
    //     {
    //       username: "hannah08",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "hannah08@example.com",
    //     },
    //     {
    //       username: "ivan09",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "ivan09@example.com",
    //     },
    //     {
    //       username: "julia10",
    //       password: await bcrypt.hash("securepass456", 10),
    //       email: "julia10@example.com",
    //     },
    //   ],
    // });
    // res.send(newUser);
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
