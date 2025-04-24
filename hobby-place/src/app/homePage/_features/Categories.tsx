"use client";

import { usePetPost } from "@/app/provider/PetPostProvider";
import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const Categories = () => {
  const { category } = usePetPost();
  return (
    <div>
      <div className="flex items-center justify-between w-full h-16 ">
        <div className="text-xl extrabold">Categories</div>
        <p className="text-sm flex items-center">
          see more <ArrowRight size={14} />
        </p>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {category.map((element, index) => {
          return (
            <button
              className={`btn btn-outline bg-[#1E0342] flex items-center justify-between rounded-full p-0`}
            >
              <img
                alt=""
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="w-9 rounded-full"
              />
              <div className="p-2">{element.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
