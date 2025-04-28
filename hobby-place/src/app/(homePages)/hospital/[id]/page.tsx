"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Hospital } from "../_components/HospitalInfoBox";
import { Dot, MapPin, Star } from "lucide-react";
import { ContactInfo } from "./_components/ContactInfo";

export default function Home() {
  const { id } = useParams();
  const [hospital, setHospital] = useState([] as unknown as Hospital);
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/hospitalId/${id}`
    );
    setHospital(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative flex  items-end h-screen bg-white">
      <img
        src={hospital.avatarImage}
        alt="Each hospital image"
        className="w-full absolute top-0 h-[40%]"
      />
      <div className="absolute bottom-0 h-[63%] bg-white w-full rounded-t-3xl p-3 flex flex-col gap-3 overflow-scroll">
        <div className="flex w-[94%] gap-2">
          <img
            src={hospital.avatarImage}
            alt="Each hospital image "
            className="w-1/4 rounded-xl h-[50px]"
          />
          <img
            src={hospital.avatarImage}
            alt="Each hospital image"
            className="w-1/4 rounded-xl h-[50px]"
          />
          <img
            src={hospital.avatarImage}
            alt="Each hospital image"
            className="w-1/4 rounded-xl h-[50px]"
          />
          <img
            src={hospital.avatarImage}
            alt="Each hospital image"
            className="w-1/4 rounded-xl h-[50px]"
          />
        </div>
        <div className="py-3">
          <div className="border-2 border-[#03346E] w-fit rounded-full flex gap-2 p-1 items-center">
            <Star color="#03346E" fill="#03346E" size={18} />
            <p>jahsgdfj </p>
            <Dot color="#03346E" fill="#03346E" />
            <p>23 views</p>
          </div>
        </div>
        <p className="font-[Serif] text-[#03346E] font-bold text-4xl w-[70%]">
          {hospital.name}
        </p>
        <div className="flex gap-2">
          <MapPin color="#03346E" />
          <p>{hospital.location}</p>
        </div>
        <div className="flex gap-2 overflow-scroll">
          {hospital.category?.map((name, index) => {
            return (
              <div
                key={index}
                className="border p-1 rounded-full flex justify-center items-center gap-1 "
              >
                <img
                  src={hospital.avatarImage}
                  alt="category image"
                  className="rounded-full h-[35px] w-[35px]"
                />
                <p className="w-fit text-sm">{name}</p>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-5 w-full">
          <ContactInfo hospital={hospital} />
        </div>
      </div>
    </div>
  );
}
