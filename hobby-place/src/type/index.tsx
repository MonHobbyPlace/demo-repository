import * as Yup from "yup";
export type petPostType = {
  about: string[];
  address: string;
  age: number;
  breed: string;
  createdAt: string;
  gender: string;
  id: number;
  image: string;
  petCategoryId: number;
  petName: string;
  phoneNumber: number;
  price: number;
  purpose: string;
  size: string;
  updatedAt: string;
  userId: number;
  video: string;
  User?: { username: string; profileImage: string };
};

export const validationSchema = Yup.object({
  petName: Yup.string().required("Pet name is required"),
  breed: Yup.string().required("Breed is required"),
  size: Yup.string().required("Pet size is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  purpose: Yup.string().required("Purpose is required"),
  price: Yup.number().when("purpose", {
    is: "SALE",
    then: (schema) => schema.required("Price is required for sale"),
  }),
  phoneNumber: Yup.number().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  about: Yup.array().min(1, "Select at least one feature"),
  petCategoryId: Yup.number().required("Category is required"),
  video: Yup.mixed<File | string>()
    .required("Video is required")
    .test("fileType", "Only video files are allowed", (value): boolean => {
      if (!value) return false;
      if (typeof value === "string") return true; // Allow existing video URL
      return value instanceof File && value.type.startsWith("video/");
    }),

  image: Yup.mixed<File | string>()
    .required("Image is required")
    .test("fileType", "Only image files are allowed", (value): boolean => {
      if (!value) return false;
      if (typeof value === "string") return true; // Allow existing image URL
      return value instanceof File && value.type.startsWith("image/");
    }),
});

export type categoryType = {
  name: string;
  id: string;
};
