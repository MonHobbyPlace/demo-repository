/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

export type Hospital = {
  id: number;
  name: string;
  location: string;
  workTime: string;
  avatarImage: string[];
  about: string;
  viewQuantity: number;
  phoneNumber: number;
  category: string[];
  backgroundImage: string;
  email: string;
  rating: string;
};
import { useProfile } from "@/app/provider/ProfileProvider";
import axios from "axios";
import { Clock10, Heart, PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HospitalInfoBox = (props: { hospital: Hospital }) => {
  const { hospital } = props;
  const { user, likePost, unLikePost } = useProfile();
  const [userLiked, setUserLiked] = useState("");
  const [locationInfo, setLocationInfo] = useState("");

  const [liked, setLiked] = useState(userLiked.includes("true"));
  const router = useRouter();
  const getLocationInfo = async () => {
    if (hospital.location) {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${
          hospital.location.split(",")[0]
        }&lon=${hospital.location.split(",")[1]}&format=json&apiKey=${
          process.env.NEXT_PUBLIC_LOCATION_API_KEY
        }`
      );
      setLocationInfo(
        `${response.data.results[0].formatted.split("Mongolia")[0]}`
      );
    }
  };
  useEffect(() => {
    getLocationInfo();
    const hospitalIds = user.LikedPost?.map((post) => {
      return post.hospitalId;
    });
    const result = hospitalIds?.map((i) => {
      return i === hospital.id;
    });
    setUserLiked(result?.join() || "");
  }, [hospital]);
  useEffect(() => {
    setLiked(userLiked.includes("true"));
  }, [userLiked]);
  return (
    <div className="h-[120px] w-full flex  rounded-3xl justify-between text-black overflow-hidden gap-4 my-3 shadow-md border">
      <div className="w-full h-full rounded-t-3xl justify-between flex gap-2 overflow-hidden bg-[#e1f7f5]  p-1">
        <div className="flex w-[57%] justify-between">
          <div className="flex flex-col px-3 w-[90%] justify-around">
            <div>
              <p className=" text-[#023e8a] font-bold text-[12px] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {locationInfo}
              </p>
              <p className="text-sm text-[#213555] font-bold ">
                {hospital.name}
              </p>
              <p className="text-[10px] w-full text-[#6c757d] whitespace-nowrap overflow-hidden text-ellipsis">
                {hospital.about}
              </p>
            </div>

            <div className="rating rating-xs">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="mask mask-star-2 bg-[#0077b6]"
                  aria-label={`${index + 1} star`}
                  aria-current={
                    index + 1 == Number(hospital.rating) ? "true" : "false"
                  }
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-[12px]">
              <div className="flex gap-1 items-center w-1/2">
                <PawPrint color="#023e8a" fill="#023e8a" size={15} />
                <p>{hospital.category[0]}</p>
              </div>
              <div className="flex gap-1 items-center w-1/2 text-black">
                <Clock10 color="#023e8a" size={20} />
                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {hospital.workTime}
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn btn-square bg-transparent border-gray-400 shadow-none btn-xs"
            onClick={() => {
              if (!liked) {
                likePost(hospital?.id);
              } else {
                unLikePost(hospital?.id);
              }
            }}
          >
            <Heart
              size={12}
              color="green"
              fill={liked ? "green" : "transparent"}
              onClick={() => setLiked(liked ? false : true)}
            />
          </button>
        </div>
        <img
          onClick={() => router.push(`/hospital/${hospital.id.toString()}`)}
          src={hospital.backgroundImage}
          alt="hospital image"
          className="w-[40%] rounded-3xl h-full object-cover"
        />
      </div>
    </div>
  );
};
