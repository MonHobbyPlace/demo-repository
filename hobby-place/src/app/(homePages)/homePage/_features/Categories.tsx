"use client";

import { usePetPost } from "@/app/provider/PetPostProvider";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Categories = () => {
  const { category, petPostCategorys } = usePetPost();
  const [selectedCategory, setSelectedCategory] = useState("0");

  const onClick = (id: string | number) => {
    petPostCategorys(Number(id));
    setSelectedCategory(id as string);
  };

  useEffect(() => {
    petPostCategorys(0);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between w-full h-10 ">
        <div className="text-xl extrabold">Categories</div>
      </div>
      <div className="flex gap-2 overflow-x-auto scroll-bar-hide">
        <button
          onClick={() => onClick("0")}
          style={{
            background: selectedCategory == "0" ? "black" : "white",
          }}
          defaultChecked
          className={`btn btn-outline w-16 px-4 bg-[white flex items-center justify-center rounded-full p-0 `}
        >
          All
        </button>
        {category.map((element, index) => {
          return (
            <button
              key={index}
              style={{
                background: selectedCategory == element.id ? "black" : "white",
              }}
              className={`btn btn-outline bg-[white flex items-center justify-between rounded-full p-0 `}
              onClick={() => onClick(element.id)}
            >
              <img
                alt=""
                src={element.image}
                className="w-9 rounded-full h-9 object-cover"
              />
              <div className="p-2">{element.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
