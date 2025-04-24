"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import React, { useState } from "react";

export const CategoryFilter = () => {
  const [selectedFramework, setSelectedFramework] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFramework(event.target.value);
    console.log(event.target.value);
  };

  const handleReset = () => {
    setSelectedFramework("");
  };
  const { category } = usePetPost();

  return (
    <form className="filter">
      <input
        className="btn btn-circle"
        type="reset"
        value="×"
        onClick={handleReset} // Handle reset
      />
      {category.map((element, index) => {
        return (
          <input
            key={index}
            className="btn rounded-full"
            type="radio"
            name="frameworks"
            value={element.name}
            checked={selectedFramework === element.name}
            onChange={(e) => handleRadioChange(e)}
            aria-label={element.name}
          />
        );
      })}
    </form>
  );
};
