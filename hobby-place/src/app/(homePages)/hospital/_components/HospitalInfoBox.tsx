"use client";

/* eslint-disable @next/next/no-img-element */

type Hospital = {
  id: number;
  name: string;
  location: string;
  worktime: string;
  avatarImage: string;
  about: string;
  phoneNumber: number;
  category: string[];
  backgroundImage: string;
  email: string;
};
import { Clock10, Heart, PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HospitalInfoBox = (props: { hospital: Hospital }) => {
  const { hospital } = props;
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  return (
    <div
      className="h-[120px] w-full flex  rounded-3xl justify-between text-black overflow-hidden gap-4 my-3 shadow-md border"
      onClick={() => router.push(`/hospital/${hospital.id.toString()}`)}
    >
      <div className="w-full h-full rounded-t-3xl justify-between flex gap-2 overflow-hidden bg-[#e1f7f5]  p-1">
        <div className="flex w-[57%] justify-between">
          <div className="flex flex-col px-3 w-[90%] justify-around">
            <div>
              <p className=" text-[#023e8a] font-bold text-[12px] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {hospital.location}
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
                  aria-current={index == 1 ? "true" : "false"}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-[12px]">
              <div className="flex gap-1 items-center w-1/2">
                <PawPrint color="#023e8a" fill="#023e8a" size={15} />
                <p>{hospital.category[0]}</p>
              </div>
              <div className="flex gap-1 items-center w-1/2 text-ellipses">
                <Clock10 color="#023e8a" size={20} />
                <p className="text-ellipsis w-full">{hospital.worktime}</p>
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
          src={hospital.avatarImage}
          alt="hospital image"
          className="w-[40%] rounded-3xl h-full "
        />
      </div>
    </div>
  );
};
