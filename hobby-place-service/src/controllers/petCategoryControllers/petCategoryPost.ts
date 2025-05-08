import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const petCategoryPost = async (req: Request, res: Response) => {
  // const { name, image } = req.body;

  // if (!name || !image) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Name and image are required",
  //   });
  // }

  try {
    // const categoryPost = await prisma.petCategory.create({
    //   data: {
    //     name: name,
    //     image: image,
    //   },
    // });
    const categoryPost = await prisma.petCategory.createMany({
      data: [
        {
          image: "/images/dog.png",
          name: "Dog",
        },
        {
          image: "/images/cat.png",
          name: "Cat",
        },
        {
          image: "/images/bird.png",
          name: "Bird",
        },
        {
          image: "/images/rabbit.png",
          name: "Rabbit",
        },
        {
          image: "/images/fish.png",
          name: "Fish",
        },
        {
          image: "/images/reptile.png",
          name: "Reptile",
        },
        {
          image: "/images/hamster.png",
          name: "Hamster",
        },
        {
          image: "/images/horse.png",
          name: "Horse",
        },
        {
          image: "/images/ferret.png",
          name: "Ferret",
        },
        {
          image: "/images/turtle.png",
          name: "Turtle",
        },
      ],
    });
    res.status(201).json({
      success: true,
      message: "Successfully added category",
      categoryPost,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to add category",
      error: error.message,
    });
  }
};
