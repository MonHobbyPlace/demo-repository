"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
// import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const PetCards = () => {
  const { petPostCategories } = usePetPost();

  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 max-h-[32vh] overflow-y-scroll scrollbar-hide">
        <div className="flex items-center justify-between w-full h-10 ">
          <div className="text-xl extrabold">Rehoming a Pets</div>
        </div>
        {petPostCategories?.length > 0 ? (
          <>
            {petPostCategories?.map((element, index) => {
              if (
                element.price == 0 ||
                element.price == undefined ||
                element.price == null ||
                element.active == false
              ) {
                return null;
              }
              return (
                <div
                  onClick={() => router.push(`/homePage/${element?.id}`)}
                  key={index}
                  className="w-2/7 h-fit p-1 border rounded-lg bg-white"
                >
                  <img
                    alt=""
                    src={element.image}
                    className="w-full h-16 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xs font-bold mt-2">
                        {element.petName}
                      </h2>
                      <p className=" text-[8px] flex items-center gap-1">
                        <MapPin size={12} /> {element.address.split(" ")[0]}
                      </p>
                    </div>

                    <p className="text-gray-500 text-xs">{element.price}$</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center py-20 text-gray-500 w-full">
              <h2 className="text-xl font-semibold">No pets available</h2>
              <p className="mt-2 text-sm text-gray-400">
                Please check back later or add a new listing.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
