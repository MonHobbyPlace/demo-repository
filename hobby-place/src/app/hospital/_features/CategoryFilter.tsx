"use client";
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

  return (
    <form className="filter">
      <input
        className="btn btn-circle"
        type="reset"
        value="×"
        onClick={handleReset} // Handle reset
      />

      <input
        className="btn rounded-full"
        type="radio"
        name="frameworks"
        value="Dog"
        checked={selectedFramework === "Dog"}
        onChange={(e) => handleRadioChange(e)}
        aria-label="Dog"
      />

      <input
        className="btn rounded-full bg-[#213555]"
        type="radio"
        name="frameworks"
        value="Cat"
        checked={selectedFramework === "Cat"}
        onChange={handleRadioChange}
        aria-label="Cat"
      />

      <input
        className="btn rounded-full"
        type="radio"
        name="frameworks"
        value="Bird"
        checked={selectedFramework === "Bird"}
        onChange={handleRadioChange}
        aria-label="Bird"
      />
    </form>
  );
};
