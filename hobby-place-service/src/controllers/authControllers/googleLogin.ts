import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import prisma from "../../prismaClient";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET || "";

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ success: false, message: "Token is required" });
      return;
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email || !payload.name) {
      res.status(400).json({ success: false, message: "Invalid Google token" });
      return;
    }

    const { email, name, picture } = payload;

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          username: name.replace(/\s+/g, "").toLowerCase(),
          password: "",
          profileImage: picture || "",
        },
      });
    }

    const jwtToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Logged in with Google successfully",
      token: jwtToken,
      user,
    });
  } catch (error) {
    console.error("❌ Google login error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
