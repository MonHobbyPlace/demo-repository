/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Hospital, HospitalInfoBox } from "../_components/HospitalInfoBox";

export const CategoryFilter = () => {
  const [selectedFramework, setSelectedFramework] = useState("");
  const [hospitals, setHospitals] = useState([] as unknown as Hospital[]);
  const [loading, setLoading] = useState(false);
  const { category } = usePetPost();

  const handleRadioChange = (value: string) => {
    setSelectedFramework(value);
  };

  const handleReset = () => {
    setSelectedFramework("");
  };

  const fetchInfo = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/${selectedFramework}`
      );
      if (selectedFramework === "") {
        setHospitals(response.data.data);
      } else setHospitals(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, [selectedFramework]);

  return (
    <div className="h-[62%]">
      <div className="flex gap-2 overflow-x-auto text-white ">
        {selectedFramework.length > 0 && (
          <Button
            onClick={handleReset}
            className="bg-[#1E0342] rounded-full p-4"
          >
            x
          </Button>
        )}
        {category.map((element, index) => {
          return (
            <button
              key={index}
              onClick={() => handleRadioChange(element.name)}
              className={`btn btn-outline bg-[#1E0342] border-2 border-[#1E0342] flex items-center justify-between rounded-full p-0 ${
                selectedFramework.length == 0 ||
                selectedFramework == element.name
                  ? "flex"
                  : "hidden"
              }`}
            >
              <img
                alt="category image"
                src={element.image}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="p-2">{element.name}</div>
            </button>
          );
        })}
      </div>
      <div className="h-[72%] flex flex-col items-center justify-center">
        {loading ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <div className="overflow-scroll h-full rounded-xl w-full">
            {hospitals.length === 0 ? (
              <div className="h-[80%] w-full flex items-center justify-center ">
                <div className="w-2/3 h-fit bg-white p-7 rounded-3xl mt-10 border border-[#03346E] text-[#03346E]">
                  <p className="w-fit">
                    We do not have <b>{selectedFramework} </b>category hospital
                  </p>
                </div>
              </div>
            ) : (
              hospitals?.map((hospital, index) => {
                return <HospitalInfoBox key={index} hospital={hospital} />;
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};
