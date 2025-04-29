"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { ChangeEvent } from "react";

export const PersonalInfoContainer = () => {
  const { user } = useProfile();
  const handleInfoChanges = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="p-5">
      <input
        type="text"
        value={user?.location || ""}
        onChange={(e) => handleInfoChanges(e)}
      />
    </div>
  );
};
