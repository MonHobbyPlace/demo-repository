import { Request, Response, NextFunction } from "express";
// import prisma from "../../prismaClient";

export const validateServiceCatName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { image, name } = req.body;

  // const existingService = prisma.serviceCategory.findUnique({
  //   where: { name: name },
  // });

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    res.status(400).json({
      success: false,
      message: "Invalid or missing 'name'",
    });
  }

  if (!image || typeof image !== "string" || image.trim().length === 0) {
    res.status(400).json({
      success: false,
      message: "Invalid or missing 'image'",
    });
  }

  next();
};
