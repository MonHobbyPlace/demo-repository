"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import React, { useState } from "react";
import { AllHospitals } from "./AllHospitals";
import axios from "axios";

export const CategoryFilter = () => {
  const [selectedFramework, setSelectedFramework] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFramework(event.target.value);
    console.log(event.target.value);
    fetchInfo();
  };

  const handleReset = () => {
    setSelectedFramework("");
  };
  const { category } = usePetPost();

  const fetchInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/hospital/General"
      );
      console.log(response.data);
    } catch (error) {}
  };
  return (
    <div>
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
      {/* <AllHospitals hospitalInfos={}/> */}
    </div>
  );
};
