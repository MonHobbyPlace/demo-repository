"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Hospital } from "../_components/HospitalInfoBox";

export default function Home() {
  const { id } = useParams();
  const [hospital, setHospital] = useState([] as unknown as Hospital);
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/hospitalId/${id}`
    );
    setHospital(response.data);
    console.log("response", response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative">
      <div className="w-full h-[20%] absolute top-0 z-0">
        <img
          src={hospital.avatarImage}
          alt="Each hospital image"
          className="w-full "
        />
      </div>
      <div className="h-screen w-full bg-green-500 flex justify-end items-end z-2">
        <div className="bg-white">
          <p>jksadhfarg</p>
        </div>
      </div>
    </div>
  );
}
