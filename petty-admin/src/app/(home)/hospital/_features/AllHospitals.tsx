"use client";

import { useHospital } from "@/app/provider/HospitalProvider";
import { AddHospitalModal } from "../_components/AddHospitalModal";
import { HospitalInfoBox } from "../_components/HospitalInfoBox";

export const AllHospitals = () => {
  const { hospitals } = useHospital();
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="flex flex-wrap gap-2 max-w-[1200px]">
        <AddHospitalModal />
        {hospitals?.map((hospital, index) => {
          return <HospitalInfoBox key={index} hospital={hospital} />;
        })}
      </div>
    </div>
  );
};
