"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import {useProfile } from "./ProfileProvider";
import { categoryType, petPostType } from "@/type";


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
  createPetPost: (values: petPostType) => Promise<void>
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
  
  const {user}=useProfile();
  const createPetPost=async( values:petPostType)=>{
const response=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/${user.id}/petPost`, values)
console.log(response);

  }
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
        createPetPost
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


