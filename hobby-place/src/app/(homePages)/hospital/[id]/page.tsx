/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Hospital } from "../_components/HospitalInfoBox";
import { ChevronLeft, Clock10, Dot, MapPin, Star } from "lucide-react";
import { ContactInfo } from "./_components/ContactInfo";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

// Import the necessary marker images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
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
    L.Icon.Default.mergeOptions({
      iconUrl: markerIcon.src,
      shadowUrl: markerShadow.src,
    });
  }, []);
  const defaultIcon = L.icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowSize: [41, 41], // size of the shadow
  });

  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <div className="relative flex  items-end h-screen bg-white">
      <div className="w-full absolute top-0 h-[35%]">
        <img
          src={hospital.backgroundImage}
          alt="Each hospital image"
          className="w-full h-full"
        />
        <Button className="absolute top-0 m-5 bg-white rounded-full p-6">
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
                className="w-1/4 rounded-xl h-[50px]"
              />
            );
          })}
        </div>
        <div className="border-2 border-[#03346E] w-fit rounded-full flex py-1 gap-2 p-1 items-center">
          <Star color="#03346E" fill="#03346E" size={18} />
          <p>{hospital.rating} stars </p>
          <Dot color="#03346E" fill="#03346E" />
          <p>{hospital.views} views</p>
        </div>
        <p className="font-[Serif] text-[#03346E] font-bold text-3xl w-[70%]">
          {hospital.name}
        </p>
        <div className="flex gap-2 items-center">
          <MapPin color="#03346E" size={18} />
          <p>{hospital.location}</p>
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
        {/* <MapContainer
          center={[47.8864, 106.9057]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[300px] w-full rounded-xl z-1"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.8864, 106.9057]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
        <div></div>
        <div className="absolute bottom-3 w-full ">
          <ContactInfo hospital={hospital} />
        </div>
      </div>
    </div>
  );
}
