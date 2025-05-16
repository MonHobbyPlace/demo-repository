/* eslint-disable @next/next/no-img-element */
"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Camera } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const EditImage = () => {
  const { user, updateProfile } = useProfile();
  const { refetch } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/get?id=${user?.id}`
      );

      return response.data;
    },
  });
  const [images, setImages] = useState({
    profileImage: user?.profileImage,
    backgroundImage: user?.backgroundImage,
  });
  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const id = e.target.id;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (id == "profileImage") {
          setImages({
            ...images,
            profileImage: reader.result as string,
          });
          refetch();
        } else {
          setImages({
            ...images,
            backgroundImage: reader.result as string,
          });
          refetch();
        }
      };
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append("file", e.target.files?.[0] || "");
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET || ""
    );

    const response = await axios.post(
      process.env.NEXT_PUBLIC_CLOUDINARY_URL || "",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (id == "profileImage") {
      await updateProfile({ ...user, profileImage: response.data.secure_url });
    } else {
      await updateProfile({
        ...user,
        backgroundImage: response.data.secure_url,
      });
    }
  };
  return (
    <div className="relative ">
      <div className="absolute top-0 w-full">
        <div className="w-full h-[200px] object-cover ">
          <img
            src={images.backgroundImage}
            alt="background image"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="absolute bottom-4  right-4">
          <label htmlFor="background">
            <div className="bg-gray-300 p-[8px] rounded-full border">
              <Camera color="#03346e" size={15} />
            </div>
          </label>
          <input
            hidden
            type="file"
            accept="image/*"
            id="background"
            onChange={(e) => {
              handleChangeImage(e);
            }}
          />
        </div>
      </div>
      <div className="absolute top-25 left-5">
        <img
          src={images.profileImage}
          alt="profile image"
          className="w-[150px] h-[150px] rounded-full border-5 object-cover"
        />
        <div className="absolute bottom-2 right-2">
          <label htmlFor="profileImage">
            <div className="bg-gray-300 p-[8px] rounded-full border">
              <Camera color="#03346e" size={15} />
            </div>
          </label>
          <input
            hidden
            type="file"
            accept="image/*"
            id="profileImage"
            onChange={(e) => {
              handleChangeImage(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};
