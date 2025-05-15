import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const createPetPost = async (req: Request, res: Response) => {
  const {
    petName,
    address,
    about,
    image,
    phoneNumber,
    age,
    price,
    purpose,
    petCategoryId,
    size,
    gender,
    breed,
    video,
  } = req.body;

  const userId = Number(req.params.id);
  const updatedNumber = Number(phoneNumber);
  const updatedAge = Number(age);
  const updatedPrice = Number(price);
  try {
    const newPetPost = await prisma.petPost.create({
      data: {
        size: size,
        gender: gender,
        breed: breed,
        petName: petName,
        address: address,
        about: about,
        image: image,
        phoneNumber: updatedNumber,
        age: updatedAge,
        price: updatedPrice,
        purpose: purpose,
        petCategoryId: petCategoryId,
        userId: userId,
        video: video,
      },
    });
    // const newPetPost = await prisma.petPost.createMany({
    //   data: [
    //     {
    //       size: "MIDDLE", // changed from "Medium"
    //       gender: "MALE",
    //       breed: "Cockatiel",
    //       petName: "Sunny",
    //       address: "Ulaanbaatar",
    //       about: "Loves to whistle and mimic sounds.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302953/c80f6aa14538f5b32f4444aa5a6db0a6_sxrjy2.png",
    //       phoneNumber: 99000001,
    //       age: 1,
    //       price: 0,
    //       purpose: "ADOPT",
    //       petCategoryId: 3,
    //       userId: 1,
    //       video: "https://example.com/video11.mp4",
    //     },
    //     {
    //       size: "SMALL",
    //       gender: "FEMALE",
    //       breed: "Syrian Hamster",
    //       petName: "Nibbles",
    //       address: "Darkhan",
    //       about: "Very energetic and curious hamster.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302376/Syrian-Hamster_grande_zncgjs.jpg",
    //       phoneNumber: 99000002,
    //       age: 1,
    //       price: 50,
    //       purpose: "SALE",
    //       petCategoryId: 7,
    //       userId: 1,
    //       video: "https://example.com/video12.mp4",
    //     },
    //     {
    //       size: "BIG", // changed from "Large"
    //       gender: "MALE",
    //       breed: "Mongolian Horse",
    //       petName: "Chingis",
    //       address: "Tuv Province",
    //       about: "Strong and well-trained horse.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302327/smokey-horse-duchess.jpg_jofkgc.webp",
    //       phoneNumber: 99000003,
    //       age: 4,
    //       price: 250,
    //       purpose: "SALE",
    //       petCategoryId: 8,
    //       userId: 1,
    //       video: "https://example.com/video13.mp4",
    //     },
    //     {
    //       size: "SMALL",
    //       gender: "FEMALE",
    //       breed: "Holland Lop",
    //       petName: "Lola",
    //       address: "Ulaanbaatar",
    //       about: "Soft fur and very cuddly.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302436/rabbits-dental-care-for-rabbits-01_uo9apy.jpg",
    //       phoneNumber: 99000004,
    //       age: 2,
    //       price: 0,
    //       purpose: "ADOPT",
    //       petCategoryId: 4,
    //       userId: 1,
    //       video: "https://example.com/video14.mp4",
    //     },
    //     {
    //       size: "SMALL",
    //       gender: "MALE",
    //       breed: "Goldfish",
    //       petName: "Bubbles",
    //       address: "Ulaanbaatar",
    //       about: "Beautiful golden scales, very active.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302500/Rare_Dumbo_Gold_Betta_Fish_dllwyg.png",
    //       phoneNumber: 99000005,
    //       age: 1,
    //       price: 300,
    //       purpose: "SALE",
    //       petCategoryId: 5,
    //       userId: 1,
    //       video: "https://example.com/video15.mp4",
    //     },
    //     {
    //       size: "MIDDLE", // changed from "Medium"
    //       gender: "FEMALE",
    //       breed: "Leopard Gecko",
    //       petName: "Dotty",
    //       address: "Erdenet",
    //       about: "Calm and easy to care for.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302589/reptiles-hero_16x9_bm8rwm.jpg",
    //       phoneNumber: 99000006,
    //       age: 3,
    //       price: 250,
    //       purpose: "SALE",
    //       petCategoryId: 6,
    //       userId: 1,
    //       video: "https://example.com/video16.mp4",
    //     },
    //     {
    //       size: "SMALL",
    //       gender: "MALE",
    //       breed: "Russian Tortoise",
    //       petName: "Tank",
    //       address: "Ulaanbaatar",
    //       about: "Slow but steady and very calm.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302669/Eastern-Box-Turtle-33_cg5ivy.jpg",
    //       phoneNumber: 99000007,
    //       age: 5,
    //       price: 0,
    //       purpose: "ADOPT",
    //       petCategoryId: 10,
    //       userId: 1,
    //       video: "https://example.com/video17.mp4",
    //     },
    //     {
    //       size: "SMALL",
    //       gender: "FEMALE",
    //       breed: "Ferret",
    //       petName: "Slinky",
    //       address: "Ulaanbaatar",
    //       about: "Playful and intelligent little creature.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302719/Its-said-comparing-a-pet-ferret-to-a-feral-ferret-is-like-comparing-a-pet-border-collie-to-a-dog_wolf-hybrid.-Image-credit_-Andrew-Linscott_p5pzcf.jpg",
    //       phoneNumber: 99000008,
    //       age: 2,
    //       price: 130,
    //       purpose: "SALE",
    //       petCategoryId: 9,
    //       userId: 1,
    //       video: "https://example.com/video18.mp4",
    //     },
    //     {
    //       size: "MIDDLE", // changed from "Medium"
    //       gender: "MALE",
    //       breed: "Parrot",
    //       petName: "Rio",
    //       address: "Ulaanbaatar",
    //       about: "Talkative and loves music.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302778/Red-and-green-Macaw-Vinicius-Rodrigues-de-Souza-Getty_zvbnlj.png",
    //       phoneNumber: 99000009,
    //       age: 3,
    //       price: 0,
    //       purpose: "ADOPT",
    //       petCategoryId: 3,
    //       userId: 1,
    //       video: "https://example.com/video19.mp4",
    //     },
    //     {
    //       size: "SMALL",
    //       gender: "FEMALE",
    //       breed: "Angora Rabbit",
    //       petName: "Snowflake",
    //       address: "Ulaanbaatar",
    //       about: "Fluffy and gentle natured.",
    //       image:
    //         "https://res.cloudinary.com/dszot6j60/image/upload/v1747302841/providence-animal-hospital-charlotte-are-rabbits-rodents-blog_xopszc.jpg",
    //       phoneNumber: 99000010,
    //       age: 1,
    //       price: 0,
    //       purpose: "ADOPT",
    //       petCategoryId: 4,
    //       userId: 1,
    //       video: "https://example.com/video20.mp4",
    //     },
    //   ],
    // });

    res.status(201).json({ success: true, data: newPetPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
