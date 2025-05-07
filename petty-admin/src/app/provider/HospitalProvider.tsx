"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext } from "react";

export type Hospital = {
  id?: number;
  name: string;
  location: string;
  workTime: string;
  avatarImage: string[];
  about: string;
  viewQuantity?: number;
  phoneNumber: number;
  category: string[];
  backgroundImage: string;
  email: string;
  rating?: number;
};

type HospitalContextType = {
  hospitals: Hospital[];
  isLoading: boolean;
  addHospital: (values: Hospital) => Promise<void>;
  updateHospitalInfo: (values: Hospital) => Promise<void>;
};

const HospitalProviderContext = createContext<HospitalContextType>(
  {} as HospitalContextType
);

export const HospitalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["hospitals"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/hospital`
        );
        console.log("Hospital data:", response.data.data);
        return response.data.data || [];
      } catch (error) {
        console.error("Error fetching hospital data:", error);
        return [];
      }
    },
  });

  const addHospital = async (values: Hospital) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital`,
        values
      );
      console.log("Added hospital:", response);
      await refetch();
    } catch (error) {
      console.error("Error adding hospital:", error);
    }
  };
  const updateHospitalInfo = async (values: Hospital) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital`,
        values
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HospitalProviderContext.Provider
      value={{
        hospitals: data || [],
        isLoading,
        addHospital,
        updateHospitalInfo,
      }}
    >
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <img src="https://res.cloudinary.com/dszot6j60/image/upload/v1746094178/LoaderCat_vnk5pe.gif" />
        </div>
      ) : (
        children
      )}
    </HospitalProviderContext.Provider>
  );
};

export const useHospital = () => {
  const context = useContext(HospitalProviderContext);
  if (context === undefined) {
    throw new Error("useHospital must be used within a HospitalProvider");
  }
  return context;
};
