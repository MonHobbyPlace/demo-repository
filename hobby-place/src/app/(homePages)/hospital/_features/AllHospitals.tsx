"use client";
import axios from "axios";
import { HospitalInfoBox } from "../_components/HospitalInfoBox";
import { useEffect, useState } from "react";

export const AllHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/hospital`
    );
    setHospitals(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" overflow-scroll h-[46%] rounded-xl ">
      {hospitals.map((hospital, index) => {
        return <HospitalInfoBox key={index} hospital={hospital} />;
      })}
    </div>
  );
};
