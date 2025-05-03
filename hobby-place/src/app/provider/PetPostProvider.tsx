"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { ProfileType } from "./ProfileProvider";
import * as Yup from "yup";

export type petPostType = {
  about: string;
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
  User: ProfileType;
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Pet name is required"),
  breed: Yup.string().required("Breed is required"),
  size: Yup.string().required("Pet size is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .required("Age is required"),

  gender: Yup.string().required("Gender is required"),

  purpose: Yup.string()
    .oneOf(["SALE", "ADOPT"], "Purpose must be SALE or ADOPT")
    .required("Purpose is required"),

  price: Yup.string().when("purpose", {
    is: "SALE", // make sure this matches your backend values
    then: (schema) => schema.required("Price is required for sale"),
    otherwise: (schema) => schema.notRequired(),
  }),
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

  phone: Yup.string()
    .matches(/^\d{8}$/, "Phone number must be exactly 8 digits")
    .required("Phone number is required"),

  address: Yup.string().required("Address is required"),
  about: Yup.string().required("About is required"),
  other: Yup.string().required("Other is required"),
});

type categoryType = {
  name: string;
  id: string;
  image: string;
};
type petPostContextType = {
  petPost: petPostType[];
  category: categoryType[];
  setPetPostForId: (id: number) => Promise<void>;
  petPostId: petPostType;
  petPostCategorys: (id: number) => Promise<void>;
  petPostCategories: petPostType[];
};

const PetPostContext = createContext<petPostContextType>(
  {} as petPostContextType
);

export const PetPostProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [petPostCategories, setPetPostCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const petPostCategorys = async (id: number) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/categoryId/${id}`
    );
    setPetPostCategories(response.data.data);
    console.log("Pet post categorys set successfully:", petPostCategories);
  };
  const [petPostId, setPetPostId] = useState({} as unknown as petPostType);

  const setPetPostForId = async (id: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/petId/${id}`
      );
      setPetPostId(response.data.data);
      console.log("Pet post ID set successfully:", petPostId);
    } catch (error) {
      console.error("Error setting pet post ID:", error);
    }
  };

  const [petPost, setPetPost] = useState([]);
  const getPetPostData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost`
      );
      setPetPost(data.data);
      console.log("Pet posts fetched successfully:", data.data);
    } catch (error) {
      console.error("Error fetching pet posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const [category, setCategory] = useState([]);
  const getCategoryData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`
      );
      setCategory(data.Category);
      console.log("Category fetched successfully:", data.Category);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };
  useEffect(() => {
    getPetPostData();
    getCategoryData();
  }, []);

  return (
    <PetPostContext.Provider
      value={{
        petPost,
        category,
        setPetPostForId,
        petPostId,
        petPostCategorys,
        petPostCategories,
      }}
    >
      {loading ? (
        <div className="w-full h-full flex items-center justify-center"></div>
      ) : (
        children
      )}
    </PetPostContext.Provider>
  );
};
export const usePetPost = () => {
  const context = useContext(PetPostContext);
  if (!context) {
    console.log("hohho");
  }
  return context;
};
