"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
export const PersonalInfoContainer = () => {
  const { user } = useProfile();
  return (
    <div>
      <div className="flex justify-between py-2">
        <p className="font-bold">Email</p>
        <p className="">{user?.email}</p>
      </div>
    </div>
  );
};
