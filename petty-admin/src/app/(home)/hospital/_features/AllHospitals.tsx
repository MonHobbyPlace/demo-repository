"use client";

import { useHospital } from "@/app/provider/HospitalProvider";
import { AddHospitalModal } from "../_components/AddHospitalModal";
import { HospitalInfoBox } from "../_components/HospitalInfoBox";

export const AllHospitals = () => {
  const { hospitals } = useHospital();
  return (
    <div className="flex flex-wrap gap-2">
      <AddHospitalModal />
      {hospitals?.map((hospital, index) => {
        return <HospitalInfoBox key={index} hospital={hospital} />;
      })}
    </div>
  );
};
