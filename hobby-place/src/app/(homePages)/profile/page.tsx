"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { PersonalInfoContainer } from "./_components/PersonalInfoContainer";
import { EditImage } from "./_features/EditImage";
import { PostTabs } from "./_components/PostTabs";

export default function Home() {
  const { user } = useProfile();

  return (
    <div className="h-[91%] flex flex-col w-full overflow-scroll">
      <div className="h-[28%] ">
        <EditImage />
      </div>
      <div className="p-5 h-[58%] w-full">
        <p className="font-bold text-2xl">{user?.username}</p>
        <PersonalInfoContainer />
        <div className="sticky top-0 h-full ">
          <PostTabs />
        </div>
      </div>
    </div>
  );
}
