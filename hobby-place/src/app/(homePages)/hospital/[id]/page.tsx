/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Hospital } from "../_components/HospitalInfoBox";
import { ContactInfo } from "./_components/ContactInfo";
import { Button } from "@/components/ui/button";
import { RatingModal } from "./_components/RatingModal";
import dynamic from "next/dynamic";
import { ChevronLeft, Dot, MapPin, Clock10 } from "lucide-react";
import { useProfile } from "@/app/provider/ProfileProvider";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const LocationTab = dynamic(
  () => import("../../profile/_components/LocationTab"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { id } = useParams();
  const { user } = useProfile();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [locationInfo, setLocationInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/hospitalId/${id}/${user?.id}`
      );
      setHospital(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getLocationInfo = async () => {
    if (hospital?.location) {
      const [lat, lon] = hospital.location.split(",");
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`
        );
        setLocationInfo(
          `${response.data.results[0].formatted.split("Mongolia")[0]}`
        );
      } catch (err) {
        console.error("Location fetch error", err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (hospital) getLocationInfo();
  }, [hospital]);

  if (loading || !hospital) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="relative flex items-end h-screen bg-white">
      <div className="w-full absolute top-0 h-[35%]">
        <img
          src={hospital.backgroundImage}
          alt="Hospital background"
          className="w-full h-full object-cover"
        />
        <Button
          onClick={() => router.push("/hospital")}
          className="absolute top-0 m-5 bg-white rounded-full p-6"
        >
          <ChevronLeft color="#03346E" size={40} />
        </Button>
      </div>

      <div className="absolute bottom-0 h-[72%] bg-white w-full rounded-t-3xl p-3 flex flex-col gap-2 overflow-y-auto">
        <div className="flex w-full gap-2">
          {hospital.avatarImage?.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <img
                  src={image}
                  alt="Hospital preview"
                  className="w-[95px] h-[50px] rounded-xl object-cover"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="w-full">
                  <img
                    src={image}
                    alt="Full hospital image"
                    className="w-full h-[200px] rounded-xl object-cover"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="border-2 border-[#03346E] rounded-full flex py-1 px-3 gap-2 items-center">
            <RatingModal hospital={hospital} fetchData={fetchData} />
            <Dot color="#03346E" fill="#03346E" />
            <p>{hospital.viewQuantity} views</p>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {hospital.category?.map((name, index) => (
              <div
                key={index}
                className="border p-2 rounded-full border-[#03346E] text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-[#03346E] font-bold text-3xl font-serif w-[70%]">
          {hospital.name}
        </h1>

        <div className="flex gap-2 items-center">
          <MapPin color="#03346E" size={24} />
          <p>{locationInfo}</p>
        </div>

        <div className="flex gap-2 items-center">
          <Clock10 color="#03346E" size={18} />
          <p>{hospital.workTime}</p>
        </div>

        <div>
          <b>About us:</b>
          <p className="text-sm">{hospital.about}</p>
        </div>

        <LocationTab location={hospital.location} />

        <div className="fixed bottom-3 w-full z-10">
          <ContactInfo hospital={hospital} />
        </div>
      </div>
    </div>
  );
}
