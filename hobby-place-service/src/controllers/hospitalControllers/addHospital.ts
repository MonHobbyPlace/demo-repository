import { Request, Response } from "express";
import prisma from "../../prismaClient";
export const addHospital = async (req: Request, res: Response) => {
  const {
    name,
    about,
    phoneNumber,
    workTime,
    category,
    location,
    email,
    avatarImage,
    backgroundImage,
  } = req.body;
  try {
    const newHospital = await prisma.hospital.createMany({
      data: {
        rating: 0,
        name: name,
        about: about,
        email: email,
        location: location,
        phoneNumber: phoneNumber,
        workTime: workTime,
        category: category,
        avatarImage: avatarImage,
        backgroundImage: backgroundImage,
      },
    });
    res.status(200).json({ data: newHospital });
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal error" });
  }
  // const newHospital = await prisma.hospital.createMany({
  //   data: [
  //     {
  //       name: "Happy Paws Clinic",
  //       about: "A friendly neighborhood vet for your furry friends.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/north-building-entrance_q1bwp9.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/north-building-entrance_q1bwp9.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/north-building-entrance_q1bwp9.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/north-building-entrance_q1bwp9.jpg",
  //       ],
  //       email: "contact@happypaws.com",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/north-building-entrance_q1bwp9.jpg",
  //       rating: 5,
  //       location: "Ulaanbaatar, Mongolia",
  //       phoneNumber: 70112233,
  //       workTime: "09:00 - 18:00",
  //       category: ["Veterinary", "Pet Care"],
  //       views: 0,
  //     },

  //     {
  //       name: "Mongol Pet Care",
  //       about: "24/7 animal emergency and wellness center.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/HERO_MGSH_erv2on.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/HERO_MGSH_erv2on.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/HERO_MGSH_erv2on.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/HERO_MGSH_erv2on.jpg",
  //       ],
  //       email: "info@mongolpetcare.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/HERO_MGSH_erv2on.jpg",
  //       rating: 4,
  //       location: "Bayanzurkh District",
  //       phoneNumber: 70113344,
  //       workTime: "00:00 - 23:59",
  //       category: ["Emergency", "Vet"],
  //       views: 0,
  //     },

  //     {
  //       name: "Animal Health Center",
  //       about: "Top-tier diagnostics and surgical services.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/BSA-Hospital_gtm8ee.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/BSA-Hospital_gtm8ee.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/BSA-Hospital_gtm8ee.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/BSA-Hospital_gtm8ee.jpg",
  //       ],
  //       email: "support@animalhealth.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/BSA-Hospital_gtm8ee.jpg",
  //       rating: 5,
  //       location: "Khan-Uul District",
  //       phoneNumber: 70114455,
  //       workTime: "08:00 - 17:00",
  //       category: ["Surgery", "Vet"],
  //       views: 0,
  //     },

  //     {
  //       name: "Pet Wellness Hospital",
  //       about: "Preventive care and pet checkups.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/Hines_20Building_20200_20APR2022_jcoemt.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/Hines_20Building_20200_20APR2022_jcoemt.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/Hines_20Building_20200_20APR2022_jcoemt.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/Hines_20Building_20200_20APR2022_jcoemt.jpg",
  //       ],
  //       email: "wellness@pwh.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561716/Hines_20Building_20200_20APR2022_jcoemt.jpg",

  //       rating: 3,
  //       location: "Sukhbaatar District",
  //       phoneNumber: 70115566,
  //       workTime: "10:00 - 18:00",
  //       category: ["Vet", "Vaccination"],
  //       views: 0,
  //     },

  //     {
  //       name: "CityVet Mongolia",
  //       about: "Urban pet clinic with modern tools.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/DJI_0436_xdhxyx.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/DJI_0436_xdhxyx.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/DJI_0436_xdhxyx.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/DJI_0436_xdhxyx.jpg",
  //       ],
  //       email: "admin@cityvet.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/DJI_0436_xdhxyx.jpg",

  //       rating: 4,
  //       location: "Downtown Ulaanbaatar",
  //       phoneNumber: 70116677,
  //       workTime: "09:00 - 21:00",
  //       category: ["Veterinary", "Grooming"],
  //       views: 0,
  //     },

  //     {
  //       name: "VetCare+",
  //       about: "Personalized health plans for your pets.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/Locations_-Hospital-Rio-Grande-Valley_l5nvds.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/Locations_-Hospital-Rio-Grande-Valley_l5nvds.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/Locations_-Hospital-Rio-Grande-Valley_l5nvds.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/Locations_-Hospital-Rio-Grande-Valley_l5nvds.jpg",
  //       ],
  //       email: "contact@vetcareplus.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/Locations_-Hospital-Rio-Grande-Valley_l5nvds.jpg",

  //       rating: 5,
  //       location: "Chingeltei District",
  //       phoneNumber: 70117788,
  //       workTime: "07:00 - 19:00",
  //       category: ["Vet", "Nutrition"],
  //       views: 0,
  //     },

  //     {
  //       name: "PetCare Hub",
  //       about: "Comprehensive animal care for dogs, cats, and more.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //       ],
  //       email: "care@petcarehub.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //       rating: 4,
  //       location: "Songino Khairkhan District",
  //       phoneNumber: 70118899,
  //       workTime: "08:00 - 20:00",
  //       category: ["Vet", "Dental"],
  //       views: 0,
  //     },

  //     {
  //       name: "Animal Rescue Hospital",
  //       about: "Saving street and injured animals daily.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",
  //       ],
  //       email: "rescue@animalsave.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/2_1_we0vbd.png",

  //       rating: 5,
  //       location: "Ulaanbaatar",
  //       phoneNumber: 70119900,
  //       workTime: "Always Open",
  //       category: ["Rescue", "Emergency"],
  //       views: 0,
  //     },

  //     {
  //       name: "Furry Friends Hospital",
  //       about: "Caring hearts for your furry ones.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/riddle-hospital-pavilion_hescdy.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/riddle-hospital-pavilion_hescdy.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/riddle-hospital-pavilion_hescdy.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/riddle-hospital-pavilion_hescdy.jpg",
  //       ],
  //       email: "hello@furryfriends.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561715/riddle-hospital-pavilion_hescdy.jpg",

  //       rating: 4,
  //       location: "Nalaikh District",
  //       phoneNumber: 70112244,
  //       workTime: "10:00 - 17:00",
  //       category: ["Vet", "Wellness"],
  //       views: 0,
  //     },

  //     {
  //       name: "The Vet Station",
  //       about: "Affordable, modern, and caring pet hospital.",
  //       avatarImage: [
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561714/hospital_daytime_ext_1708x750_2025_xvehu0.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561714/hospital_daytime_ext_1708x750_2025_xvehu0.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561714/hospital_daytime_ext_1708x750_2025_xvehu0.jpg",
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561714/hospital_daytime_ext_1708x750_2025_xvehu0.jpg",
  //       ],
  //       email: "station@vet.mn",
  //       backgroundImage:
  //         "https://res.cloudinary.com/dszot6j60/image/upload/v1745561714/hospital_daytime_ext_1708x750_2025_xvehu0.jpg",

  //       rating: 3,
  //       location: "Ulaanbaatar Central",
  //       phoneNumber: 70115599,
  //       workTime: "09:00 - 20:00",
  //       category: ["Vet", "Lab"],
  //       views: 0,
  //     },
  //   ],
  // });
};
