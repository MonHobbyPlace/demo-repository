"use client";
/* eslint-disable @next/next/no-img-element */

import { useProfile } from "@/app/provider/ProfileProvider";
import { useState, useEffect } from "react";
import { Clock10, Heart, PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";

// Define Hospital type if not imported
type HospitalType = {
  id: string;
  hospital: {
    id: string;
    name: string;
    rating: number | string;
    category: string[];
    workTime: string;
    backgroundImage: string;
    about: string;
  };
};

export const LikedHospitalCard = () => {
  const [hospital, setHospital] = useState<HospitalType[]>([]);
  const [likedStates, setLikedStates] = useState<Record<string, boolean>>({});
  const [likeInProgress, setLikeInProgress] = useState<string | null>(null);
  const { user, likePost, unLikePost } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (user?.LikedPost) {
      const likedPosts = user.LikedPost as unknown as HospitalType[];

      setHospital(likedPosts);

      const likedMap: Record<string, boolean> = {};
      likedPosts.forEach((h) => {
        likedMap[h.hospital.id] = true;
      });

      setLikedStates(likedMap);
    }
  }, [user]);

  return (
    <>
      {hospital?.map((h, index) => (
        <div
          key={index}
          className="h-[120px] w-full flex rounded-3xl justify-between text-black overflow-hidden gap-4 my-3 shadow-md border"
        >
          <div className="w-full h-full rounded-t-3xl justify-between flex gap-2 overflow-hidden bg-[#e1f7f5] p-1">
            <div className="flex w-[57%] justify-between">
              <div className="flex flex-col px-3 w-[90%] justify-around">
                <div>
                  <p className="text-sm text-[#213555] font-bold">
                    {h.hospital.name}
                  </p>
                  <p className="text-[10px] w-full text-[#6c757d] whitespace-nowrap overflow-hidden text-ellipsis">
                    {h.hospital.about}
                  </p>
                </div>

                <div className="rating rating-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`mask mask-star-2 ${
                        i < Number(h.hospital.rating)
                          ? "bg-[#0077b6]"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-between text-[12px]">
                  <div className="flex gap-1 items-center w-1/2">
                    <PawPrint color="#023e8a" fill="#023e8a" size={15} />
                    <p>{h.hospital.category[0]}</p>
                  </div>
                  <div className="flex gap-1 items-center w-1/2 text-black">
                    <Clock10 color="#023e8a" size={20} />
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {h.hospital.workTime}
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-square bg-transparent border-gray-400 shadow-none btn-xs"
                disabled={likeInProgress === h.hospital.id}
                onClick={async () => {
                  setLikeInProgress(h.hospital.id);
                  const updated = { ...likedStates };
                  try {
                    if (likedStates[h.hospital.id]) {
                      await unLikePost(Number(h.hospital.id));
                      updated[h.hospital.id] = false;
                    } else {
                      await likePost(Number(h.hospital.id));
                      updated[h.hospital.id] = true;
                    }
                    setLikedStates(updated);
                  } finally {
                    setLikeInProgress(null);
                  }
                }}
              >
                <Heart
                  size={12}
                  color="green"
                  fill={likedStates[h.hospital.id] ? "green" : "transparent"}
                />
              </button>
            </div>

            <img
              onClick={() => router.push(`/hospital/${h.id}`)}
              src={h.hospital.backgroundImage}
              alt="hospital image"
              className="w-[40%] rounded-3xl h-full cursor-pointer"
            />
          </div>
        </div>
      ))}
    </>
  );
};
