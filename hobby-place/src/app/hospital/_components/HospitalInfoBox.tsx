/* eslint-disable @next/next/no-img-element */
// type Hospital = {
//   name: string;
//   location: string;
//   worktime: string;
// };
"use client";
import { Heart, MapPin, PawPrint } from "lucide-react";
import { useState } from "react";

export const HospitalInfoBox = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="h-[150px] w-full flex rounded-3xl text-black overflow-hidden gap-4 my-3">
      <div className="w-[80%] h-full rounded-t-3xl flex gap-2 overflow-hidden bg-[#D8C4B6] p-3">
        <img
          src="hospitalDef.jpeg"
          alt="hospital image"
          className="w-[40%] rounded-3xl h-full "
        />

        <div className="flex flex-col justify-around">
          <p className="text-base text-[#213555] font-bold ">
            Furry Friends Hospital
          </p>
          <div className="rating rating-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="mask mask-star bg-[#0077b6]"
                aria-label={`${index + 1} star`}
                aria-current={index == 1 ? "true" : "false"}
              ></div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center w-1/2">
              <PawPrint color="#023e8a" fill="#023e8a" size={15} />
              <p>Dog</p>
            </div>
            <div className="flex gap-2 items-center w-1/2 flex-wrap">
              <MapPin color="#023e8a" size={15} />
              <p>location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center w-[18%] rounded-full justify-center">
        <Heart
          size={20}
          color="green"
          fill={liked ? "green" : "white"}
          onClick={() => setLiked(liked ? false : true)}
        />
      </div>
    </div>
  );
};
