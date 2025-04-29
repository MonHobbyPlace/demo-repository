"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { LocationTab } from "./LocationTab";

export const PersonalInfoContainer = () => {
  const { user } = useProfile();

  return (
    <div>
      <div className="flex w-full justify-between py-2">
        <p>Email</p>
        <p className="w-1/2">{user?.email}</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p>Location</p>
        <LocationTab />
      </div>
    </div>
  );
};
