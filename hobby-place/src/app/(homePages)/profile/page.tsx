"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { PersonalInfoContainer } from "./_components/PersonalInfoContainer";
import { EditImage } from "./_features/EditImage";

export default function Home() {
  const { user } = useProfile();

  return (
    <div className="h-screen flex flex-col ">
      <div className="h-[26%] ">
        <EditImage />
      </div>
      <div className="p-5">
        <p className="font-bold text-2xl">{user?.username}</p>
      </div>
      <PersonalInfoContainer />
    </div>
  );
}
