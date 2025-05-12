"use client";

import { usePetPost } from "@/app/provider/PetPostProvider";

/* eslint-disable @next/next/no-img-element */
export const Categories = () => {
  const { category, petPostCategorys } = usePetPost();
  const onClick = (id: string | number) => {
    petPostCategorys(Number(id));
  };
  return (
    <div>
      <div className="flex items-center justify-between w-full h-10 ">
        <div className="text-xl extrabold">Categories</div>
      </div>
      <div className="flex gap-2 overflow-x-auto scroll-bar-hide">
        <button
          onClick={() => onClick("")}
          className={`btn btn-outline w-16 px-4 bg-[white flex items-center justify-center rounded-full p-0 ? "opacity-100" : "opacity-60"`}
        >
          All
        </button>
        {category.map((element, index) => {
          return (
            <button
              key={index}
              className={`btn btn-outline bg-[white flex items-center justify-between rounded-full p-0 ? "opacity-100" : "opacity-60"`}
              onClick={() => onClick(element.id)}
            >
              <img
                alt=""
                src={element.image}
                className="w-9 rounded-full h-9"
              />
              <div className="p-2">{element.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
