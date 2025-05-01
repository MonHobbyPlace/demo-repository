/* eslint-disable @next/next/no-img-element */
import { useProfile } from "@/app/provider/ProfileProvider";
import axios from "axios";
import { Camera } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const EditImage = () => {
  const { user, updateProfile } = useProfile();
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
        } else {
          setImages({
            ...images,
            backgroundImage: reader.result as string,
          });
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
        <img
          src={images.backgroundImage}
          alt="background image"
          className="w-full h-[200px]  "
        />
        <div className="absolute bottom-4  right-4">
          <label htmlFor="background">
            <div className="bg-gray-300 p-[8px] rounded-full border">
              <Camera color="white" size={15} />
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
          className="w-[150px] h-[150px] rounded-full border-5"
        />
        <div className="absolute bottom-2 right-2">
          <label htmlFor="profileImage">
            <div className="bg-gray-300 p-[8px] rounded-full border">
              <Camera color="white" size={15} />
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
