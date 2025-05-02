"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext } from "react";

export type PetCategoryType = {
  id: number;
  name: string;
  image: string;
};

type PetCategoryContextType = {
  category: PetCategoryType[];
  isLoading: boolean;
  addCategory: (values: { name: string; image: string }) => Promise<void>;
};
const PetProviderContext = createContext<PetCategoryContextType>(
  {} as PetCategoryContextType
);

export const PetCategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["petCategory"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`
      );
      console.log(response.data.Category);

      return response.data;
    },
  });

  const addCategory = async (values: { name: string; image: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`,
        values
      );
      console.log(response);
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PetProviderContext.Provider
      value={{
        category: user,
        isLoading: isLoading,
        addCategory: addCategory,
      }}
    >
      {isLoading == true ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <img src="https://res.cloudinary.com/dszot6j60/image/upload/v1746094178/LoaderCat_vnk5pe.gif" />
        </div>
      ) : (
        children
      )}
    </PetProviderContext.Provider>
  );
};
export const usePetCategory = () => {
  const context = useContext(PetProviderContext);
  if (!context) {
    console.log("context is not defined");
  }
  return context;
};
