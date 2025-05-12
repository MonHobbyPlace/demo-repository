"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
export const PersonalInfoContainer = () => {
  const { user } = useProfile();
  return (
    <div>
      <div className="flex w-full justify-between py-2">
        <p className="font-bold">Email</p>
        <p className="w-1/2 text-sm">{user?.email}</p>
      </div>
    </div>
  );
};
