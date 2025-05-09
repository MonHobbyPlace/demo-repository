import prisma from "../../prismaClient";
import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type User = {
  password: string;
  email: string;
};
const JWT_SECRET_KEY = process.env.JWT_SECRET || "";

export const LogIn = async (req: Request, res: Response) => {
  const { password, email } = req.body as unknown as User;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(500).json({
        success: false,
        message: "user does not exist",
      });
    }

    if (user) {
      const isSigned = await bcrypt.compare(password, user.password);
      console.log(isSigned);

      if (isSigned) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: { email: user.email, username: user.username },
          },
          JWT_SECRET_KEY
        );

        if (user.role === "ADMIN") {
          res
            .send({
              success: true,
              message: "logged in",
              token: token,
              userId: user.id,
              role: user.role,
            })
            .status(200);
        } else {
          res.status(200).send({
            success: true,
            message: "logged in",
            token: token,
            user: {
              id: user.id,
              role: user.role,
            },
          });
        }
      } else {
        res.status(500).send({
          success: false,
          message: "Password or username did not match.",
        });
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Password or username did not match.",
    });
  }
};
