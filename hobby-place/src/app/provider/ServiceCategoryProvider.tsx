"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProfileType } from "./ProfileProvider";

type ServiceCategory = {
  id: number;
  name: string;
  image: string;
};

export type ServicePost = {
  phoneNumber: number;
  skill: string[];
  about: string;
  id: number;
  address: string;
  image: string;
  cost: number;
  category: ServiceCategory;
  serviceCategory: ServiceCategory;
  user: ProfileType;
  age: number;
  createdAt: string;
  userId: number;
};

type ServiceContextType = {
  serviceCategories: ServiceCategory[];
  servicePosts: ServicePost[];
  fetchServicesByCategory: (id: number) => Promise<void>;
};

const ServiceContext = createContext<ServiceContextType>(
  {} as ServiceContextType
);

export const ServiceCategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(
    []
  );
  const [servicePosts, setServicePosts] = useState<ServicePost[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/serviceCategory`
        );
        setServiceCategories(res.data.category);
      } catch (error) {
        console.error("Error fetching service categories:", error);
      }
    };
    fetchCategories();
    fetchServicesByCategory();
  }, []);

  const fetchServicesByCategory = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/servicePost/getAll`
      );
      setServicePosts(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching services by category:", error);
    }
  };

  return (
    <ServiceContext.Provider
      value={{ serviceCategories, servicePosts, fetchServicesByCategory }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useServiceCategory = () => useContext(ServiceContext);
