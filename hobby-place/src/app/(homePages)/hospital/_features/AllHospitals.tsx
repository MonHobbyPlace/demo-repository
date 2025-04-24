"use client";
import axios from "axios";
import { HospitalInfoBox } from "../_components/HospitalInfoBox";
import { useEffect } from "react";

export const AllHospitals = () => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/hospital");
    console.log(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" overflow-scroll h-[46%] rounded-xl ">
      <HospitalInfoBox />
      <HospitalInfoBox />
      <HospitalInfoBox />
      <HospitalInfoBox />
      <HospitalInfoBox />
    </div>
  );
};
