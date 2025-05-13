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

type LocationTabProps = {
  location: string;
};
const LocationTab = dynamic<LocationTabProps>(
  () => import("../../profile/_components/LocationTab"),
  {
    ssr: false,
  }
);
export default function Home() {
  const { id } = useParams();
  const { user } = useProfile();
  const [hospital, setHospital] = useState([] as unknown as Hospital);
  const [locationInfo, setLocationInfo] = useState("");
  const [loading, setLoading] = useState(false);
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
    if (hospital.location) {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${
          hospital.location.split(",")[0]
        }&lon=${hospital.location.split(",")[1]}&format=json&apiKey=${
          process.env.NEXT_PUBLIC_LOCATION_API_KEY
        }`
      );
      setLocationInfo(
        `${response.data.results[0].formatted.split("Mongolia")[0]}`
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    getLocationInfo();
  }, [hospital]);
  const router = useRouter();

  return (
    <div>
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="relative flex  items-end h-screen bg-white">
          <div className="w-full absolute top-0 h-[35%]">
            <img
              src={hospital.backgroundImage}
              alt="Each hospital image"
              className="w-full h-full"
            />
            <Button
              onClick={() => router.push("/hospital")}
              className="absolute top-0 m-5 bg-white rounded-full p-6"
            >
              <ChevronLeft color="#03346E" size={40} />
            </Button>
          </div>
          <div className="absolute bottom-0 h-[72%] bg-white w-full rounded-t-3xl p-3 flex flex-col gap-2 overflow-scroll">
            <div className="flex w-[99%] gap-2">
              {hospital.avatarImage?.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="Each hospital image "
                    className="w-[95px] rounded-xl h-[50px]"
                  />
                );
              })}
            </div>
            <div className="border-2 border-[#03346E] w-fit rounded-full flex py-1 gap-2 p-1 items-center">
              <RatingModal hospital={hospital} fetchData={fetchData} />

              <Dot color="#03346E" fill="#03346E" />
              <p>{hospital.viewQuantity} views</p>
            </div>
            <p className="font-[Serif] text-[#03346E] font-bold text-3xl w-[70%]">
              {hospital.name}
            </p>
            <div className="flex gap-2 items-center">
              <MapPin color="#03346E" size={24} />
              <p>{locationInfo}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Clock10 color="#03346E" size={18} />
              <p>{hospital.workTime}</p>
            </div>
            <div className="flex gap-2 overflow-scroll">
              {hospital.category?.map((name, index) => {
                return (
                  <div
                    key={index}
                    className="border p-1 rounded-full flex justify-center items-center gap-1 "
                  >
                    <img
                      src={hospital.backgroundImage}
                      alt="category image"
                      className="rounded-full h-[35px] w-[35px]"
                    />
                    <p className="w-fit text-sm">{name}</p>
                  </div>
                );
              })}
            </div>
            <LocationTab location={hospital.location} />
            <div></div>
            <div className="absolute bottom-3 w-full ">
              <ContactInfo hospital={hospital} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
