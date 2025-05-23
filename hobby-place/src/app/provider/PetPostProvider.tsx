"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { useProfile } from "./ProfileProvider";

import { categoryType, petPostType } from "@/type";

type petPostContextType = {
  petPost: petPostType[];
  category: categoryType[];
  setPetPostForId: (id: number) => Promise<void>;
  petPostId: petPostType;
  petPostCategorys: (id: number) => Promise<void>;
  petPostCategories: petPostType[];
  createPetPost: (values: petPostType) => Promise<void>;
  loading: boolean;
  updatePetPost: (values: petPostType, id: number) => Promise<void>;
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
  const { user, refetch } = useProfile();
  const petPostCategorys = async (id: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/${id}`
      );
      setPetPostCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [petPostId, setPetPostId] = useState({} as unknown as petPostType);

  const setPetPostForId = async (id: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/petId/${id}`
      );
      setPetPostId(response.data.data);
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
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  const createPetPost = async (values: petPostType) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/${user.id}`,
        values
      );
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePetPost = async (values: petPostType, id: number) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/${id}`,
        values
      );
      refetch();
    } catch (error) {
      console.log(error);
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
        createPetPost,
        loading,
        updatePetPost,
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
