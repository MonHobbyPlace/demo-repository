"use client";
import { useQuery } from "@tanstack/react-query";
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
  petPosts: string[];
  servicePosts: string[];
};

type ProfileContextType = {
  user: ProfileType;
  handleLogout: () => void;
  updateProfile: (values: ProfileType) => Promise<void>;
  isLoading: boolean;
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/get?currentUser=${1}`
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
    await axios.put("http://localhost:4000/profile", {
      profileId: user.id,
      ...values,
    });
    await refetch();
  };

  return (
    <ProfileContext.Provider
      value={{
        user: user,
        handleLogout: handleLogout,
        updateProfile: updateProfile,
        isLoading: isLoading,
      }}
    >
      {isLoading == true ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/07f9/97c5/b22f6bc9ba535eec9efcdd0bacb3bb4d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RVZlgTF6mUtalHooEWzMyYfM0RgAC90fdGSXBtxoXzCaWiMx1OwKNvEuhBZneVMa2Javz1blckCYcaoiQLyVwAjunKFlb5X5iHOaH9IPnaAUCpxYUaWwDkD8ATVuV9McSLVXQJqS1FPMS1PvmkzYDUZ3n5T8pxGNmBeYyLMd2v~JYlHAaEpePhO5h3xbPJafLXnq91XrGvuQCPPOcLXQZvPQdnqz1F-MugK4H3N~u7AjGkajbLu1wCfWyNaomxgQUGaHsFX8SUF3alEaKnDd73cJpsHgod0vXTQyZLudW78ekgKa01d1H7FdBPdf67K5Dvw0cUjkw6i1q4uK6av9Pw__" />
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
