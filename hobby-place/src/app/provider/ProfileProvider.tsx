/* eslint-disable @next/next/no-img-element */
"use client";
import { petPostType } from "@/type";
import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

export type ProfileType = {
  id: number;
  username: string;
  email: string;
  profileImage: string;
  location: string;
  backgroundImage: string;
  PetPost: petPostType[];
  ServicePost: string[];
  phoneNumber: number;
  LikedPost?: {
    hospitalId: number;
  }[];
  conversations: {
    conversationId: number;
    conversation: {
      messages: { sender: ProfileType; content: string; timestamp: string }[];
      participants: { userId: number; user: ProfileType }[];
    };
  }[];
};

type ProfileContextType = {
  user: ProfileType;
  handleLogout: () => void;
  updateProfile: (values: ProfileType) => Promise<void>;
  isLoading: boolean;
  likePost: (hospitalId: number) => Promise<void>;
  unLikePost: (hospitalId: number) => Promise<void>;
  refetch: (
    options?: RefetchOptions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<QueryObserverResult<any, Error>>;
};
const ProfileContext = createContext<ProfileContextType>(
  {} as ProfileContextType
);

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : 0;
  const { data: user, refetch } = useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/get?id=${userId}`
      );
      console.log(response.data);

      setIsLoading(false);
      return response.data;
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    router.push("/login");
  };

  const updateProfile = async (values: ProfileType) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, values);
    } catch (error) {
      console.log(error);
    }
  };
  const likePost = async (hospitalId: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/like/${userId}/${hospitalId}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const unLikePost = async (hospitalId: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/unLike/${userId}/${hospitalId}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        user: user,
        handleLogout: handleLogout,
        updateProfile: updateProfile,
        isLoading: isLoading,
        likePost: likePost,
        unLikePost: unLikePost,
        refetch: refetch,
      }}
    >
      {isLoading == true ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dszot6j60/image/upload/v1746094178/LoaderCat_vnk5pe.gif"
            className="w-12"
          />
        </div>
      ) : (
        children
      )}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    console.log("context is not defined");
  }
  return context;
};
