/* eslint-disable @next/next/no-img-element */
"use client";

import { Hospital } from "@/app/provider/HospitalProvider";
import {
  Clock10,
  Eye,
  Library,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  StarIcon,
} from "lucide-react";
import { AddHospitalModal } from "./AddHospitalModal";

export const HospitalInfoBox = (props: { hospital: Hospital }) => {
  const { hospital } = props;

  return (
    <div className="w-[49%] p-4 border border-gray-300 rounded-md relative">
      <div className="w-full flex gap-2">
        <img
          src={hospital.backgroundImage}
          className="w-[49%] h-[150px] rounded-md "
          alt="hospital background image"
        />
        <div className="w-[48%] flex flex-wrap gap-1 text-sm items-center">
          {hospital.avatarImage.map((el, index) => {
            return (
              <div className="w-[48%]" key={index}>
                <img
                  src={el}
                  className="w-full h-[73px]  rounded-md"
                  alt="each avatar image"
                />
              </div>
            );
          })}
        </div>
      </div>
      <p className="font-bold text-lg">{hospital.name}</p>
      <div className="flex gap-2">
        <div className="w-[50%]">
          <div className="flex gap-1 text-sm items-center">
            <MapPin size={17} color="blue" />
            <p>{hospital.location}</p>
          </div>
          <div className="flex gap-1 text-sm items-center">
            <Clock10 size={17} color="blue" />
            <p>{hospital.workTime}</p>
          </div>
          <div className="flex gap-1 text-sm items-center">
            <Phone size={17} color="blue" />
            <p>{hospital.phoneNumber}</p>
          </div>
          <div className="flex gap-1 text-sm items-center">
            <Mail size={17} color="blue" />
            <p>{hospital.email}</p>
          </div>
        </div>
        <div className="w-[49%]">
          <div className="flex gap-1 text-sm">
            <Library size={25} color="blue" />
            <p>{hospital.about}</p>
          </div>
          <div className="flex items-center gap-1">
            <PawPrint size={17} color="blue" fill="blue" />
            <div className="flex flex-wrap w-full gap-1">
              {hospital.category.map((cat, index) => {
                return (
                  <p key={index} className="text-sm">
                    {cat}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <div className="flex text-sm items-center  gap-1 w-1/2">
              <StarIcon size={17} color="blue" fill="blue" />
              <p>{hospital.rating}</p>
            </div>
            <div className="flex text-sm items-center gap-1">
              <Eye size={17} color="blue" />
              <p>{hospital.viewQuantity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-4">
        <AddHospitalModal
          initialValues={hospital}
          triggerName="edit"
          id={hospital.id}
        />
      </div>
    </div>
  );
};
