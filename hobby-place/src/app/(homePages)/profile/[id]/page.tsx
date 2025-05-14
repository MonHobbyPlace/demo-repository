/* eslint-disable @next/next/no-img-element */
"use client";
import { ProfileType } from "@/app/provider/ProfileProvider";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PostTabs } from "./_components/PostTabs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({} as unknown as ProfileType);
  const { id } = useParams();
  const fetchUserInfo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/get?id=${id}`
      );
      setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div className="h-[91%] w-full ">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dszot6j60/image/upload/v1746094178/LoaderCat_vnk5pe.gif"
            className="w-12 object-cover"
          />
        </div>
      ) : (
        <>
          <div className="h-[28%] ">
            <div className="relative ">
              <div className="absolute top-0 w-full">
                <img
                  src={userInfo?.backgroundImage}
                  alt="background image"
                  className="w-full h-[200px]  "
                />
              </div>
              <div className="absolute top-25 left-5">
                <img
                  src={userInfo?.profileImage}
                  alt="profile image"
                  className="w-[150px] h-[150px] rounded-full border-5"
                />
              </div>
            </div>
          </div>
          <div className="p-5 h-[64%] w-full">
            <p className="font-bold text-2xl">{userInfo?.username}</p>
            <div className="flex justify-between py-2">
              <p className="font-bold">Email</p>
              <p className="w-1/2 text-sm">{userInfo?.email}</p>
            </div>
            <div className="sticky top-0 h-full ">
              <PostTabs userInfo={userInfo} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
