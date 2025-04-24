/* eslint-disable @next/next/no-img-element */
// type Hospital = {
//   name: string;
//   location: string;
//   worktime: string;
// };
"use client";
import { Clock10, Heart, PawPrint } from "lucide-react";
import { useState } from "react";

export const HospitalInfoBox = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="h-[120px] w-full flex  rounded-3xl justify-between text-black overflow-hidden gap-4 my-3 shadow-md border">
      <div className="w-full h-full rounded-t-3xl justify-between flex gap-2 overflow-hidden bg-[#e1f7f5]  p-1">
        <div className="flex">
          <div className="flex flex-col px-3  justify-around">
            <div>
              <p className="text-ellipsis text-[#023e8a] font-bold text-[12px] w-full">
                location
              </p>
              <p className="text-sm text-[#213555] font-bold ">
                Furry Friends Hospital
              </p>
              <p className="text-[10px] text-[#6c757d]">
                Welcome to healthcare pharmacy.
              </p>
            </div>

            <div className="rating rating-xs">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="mask mask-star-2 bg-[#0077b6]"
                  aria-label={`${index + 1} star`}
                  aria-current={index == 1 ? "true" : "false"}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-[12px]">
              <div className="flex gap-1 items-center w-1/2">
                <PawPrint color="#023e8a" fill="#023e8a" size={15} />
                <p>Dog</p>
              </div>
              <div className="flex gap-1 items-center w-1/2 text-ellipses">
                <Clock10 color="#023e8a" size={20} />
                <p className="text-ellipsis w-full">open</p>
              </div>
            </div>
          </div>
          <button className="btn btn-square bg-transparent border-gray-400 shadow-none btn-xs">
            <Heart
              size={12}
              color="green"
              fill={liked ? "green" : "transparent"}
              onClick={() => setLiked(liked ? false : true)}
            />
          </button>
        </div>
        <img
          src="hospitalDef.jpeg"
          alt="hospital image"
          className="w-[40%] rounded-3xl h-full "
        />
      </div>
    </div>
  );
};
