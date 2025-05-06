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
      // data: [
      //   {
      //     petName: "Buddy",
      //     address: "Greenwood City",
      //     about:
      //       "Buddy is a playful Golden Retriever who loves the outdoors and family time. He is gentle, loyal, and perfect for a household with children or other pets.",
      //     image: "https://picsum.photos/200?random=1",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450001,
      //     userId: 1,
      //     age: 2,
      //     breed: "Golden Retriever",
      //     size: "BIG",
      //     gender: "MALE",
      //     price: 0,
      //     purpose: "ADOPT",
      //     petCategoryId: 1,
      //   },
      //   {
      //     petName: "Luna",
      //     address: "Sunrise Town",
      //     about:
      //       "Luna is a sweet and gentle Beagle with a nose for adventure and a heart full of love. She is looking for a cozy home where she can share her endless affection.",
      //     image: "https://picsum.photos/200?random=2",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450002,
      //     userId: 2,
      //     age: 1,
      //     breed: "Beagle",
      //     size: "SMALL",
      //     gender: "FEMALE",
      //     price: 500,
      //     purpose: "SALE",
      //     petCategoryId: 2,
      //   },
      //   {
      //     petName: "Max",
      //     address: "Riverbend Village",
      //     about:
      //       "Max is a highly intelligent German Shepherd who thrives in active homes. He's protective, well-trained, and enjoys outdoor activities like hiking and fetch.",
      //     image: "https://picsum.photos/200?random=3",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450003,
      //     userId: 3,
      //     age: 3,
      //     breed: "German Shepherd",
      //     size: "BIG",
      //     gender: "MALE",
      //     price: 0,
      //     purpose: "ADOPT",
      //     petCategoryId: 3,
      //   },
      //   {
      //     petName: "Bella",
      //     address: "Hilltop Town",
      //     about:
      //       "Bella is a majestic Great Dane with a gentle demeanor. She enjoys relaxing strolls and lots of love and attention from her family.",
      //     image: "https://picsum.photos/200?random=4",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450004,
      //     userId: 4,
      //     age: 4,
      //     breed: "Great Dane",
      //     size: "BIG",
      //     gender: "FEMALE",
      //     price: 1000,
      //     purpose: "SALE",
      //     petCategoryId: 4,
      //   },
      //   {
      //     petName: "Rocky",
      //     address: "Lakeside City",
      //     about:
      //       "Rocky is a playful Boxer who loves being active and showering his owners with affection. Perfect for a home with a fenced backyard and plenty of energy!",
      //     image: "https://picsum.photos/200?random=5",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450005,
      //     userId: 5,
      //     age: 2,
      //     breed: "Boxer",
      //     size: "MIDDLE",
      //     gender: "MALE",
      //     price: 0,
      //     purpose: "ADOPT",
      //     petCategoryId: 5,
      //   },
      //   {
      //     petName: "Daisy",
      //     address: "Crescent Bay",
      //     about:
      //       "Daisy is a calm and loving Labrador Retriever, perfect for families with kids. She is socialized, gentle, and loves fetching balls at the park.",
      //     image: "https://picsum.photos/200?random=6",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450006,
      //     userId: 6,
      //     age: 3,
      //     breed: "Labrador Retriever",
      //     size: "BIG",
      //     gender: "FEMALE",
      //     price: 850,
      //     purpose: "SALE",
      //     petCategoryId: 1,
      //   },
      //   {
      //     petName: "Milo",
      //     address: "Seaside Village",
      //     about:
      //       "Milo is an adorable Pomeranian with a lively spirit. He is playful, smart, and loves attention from his family. His fluffy coat makes him even more cuddly!",
      //     image: "https://picsum.photos/200?random=7",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450007,
      //     userId: 7,
      //     age: 1,
      //     breed: "Pomeranian",
      //     size: "SMALL",
      //     gender: "MALE",
      //     price: 0,
      //     purpose: "ADOPT",
      //     petCategoryId: 2,
      //   },
      //   {
      //     petName: "Skye",
      //     address: "Pinewood Park",
      //     about:
      //       "Skye is a smart Border Collie who loves mental challenges and staying active. She excels in obedience training and is very affectionate with her people.",
      //     image: "https://picsum.photos/200?random=8",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450008,
      //     userId: 8,
      //     age: 2,
      //     breed: "Border Collie",
      //     size: "MIDDLE",
      //     gender: "FEMALE",
      //     price: 750,
      //     purpose: "SALE",
      //     petCategoryId: 3,
      //   },
      //   {
      //     petName: "Thunder",
      //     address: "Mountain Ridge",
      //     about:
      //       "Thunder is a powerful yet gentle Alaskan Malamute who loves colder climates. He's looking for a family that loves outdoor adventures as much as he does.",
      //     image: "https://picsum.photos/200?random=9",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450009,
      //     userId: 9,
      //     age: 4,
      //     breed: "Alaskan Malamute",
      //     size: "BIG",
      //     gender: "MALE",
      //     price: 0,
      //     purpose: "ADOPT",
      //     petCategoryId: 4,
      //   },
      //   {
      //     petName: "Coco",
      //     address: "Willow Creek",
      //     about:
      //       "Coco is a sweet Shih Tzu who enjoys spending her days being pampered. She is gentle, loving, and would thrive in a quiet home with lots of attention.",
      //     image: "https://picsum.photos/200?random=10",
      //     video:
      //       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      //     phoneNumber: 123450010,
      //     userId: 10,
      //     age: 2,
      //     breed: "Shih Tzu",
      //     size: "SMALL",
      //     gender: "FEMALE",
      //     price: 800,
      //     purpose: "SALE",
      //     petCategoryId: 2,
      //   },
      // ],
    });

    res.status(201).json({ success: true, data: newPetPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};
