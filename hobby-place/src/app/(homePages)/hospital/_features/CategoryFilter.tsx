"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export const CategoryFilter = () => {
  const [selectedFramework, setSelectedFramework] = useState("");

  const handleRadioChange = (value: string) => {
    setSelectedFramework(value);
    fetchInfo();
  };

  const handleReset = () => {
    setSelectedFramework("");
  };
  const { category } = usePetPost();

  const fetchInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/General`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-2 overflow-x-auto text-white ">
      {selectedFramework.length > 0 && (
        <Button onClick={handleReset} className="bg-[#1E0342] rounded-full p-4">
          x
        </Button>
      )}
      {category.map((element, index) => {
        return (
          <button
            key={index}
            onClick={() => handleRadioChange(element.name)}
            className={`btn btn-outline bg-[#1E0342] border-2 border-[#1E0342] flex items-center justify-between rounded-full p-0 ${
              selectedFramework.length == 0 || selectedFramework == element.name
                ? "flex"
                : "hidden"
            }`}
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
  );
};
