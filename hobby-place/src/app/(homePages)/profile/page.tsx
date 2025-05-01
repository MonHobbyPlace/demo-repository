"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { PersonalInfoContainer } from "./_components/PersonalInfoContainer";
import { EditImage } from "./_features/EditImage";
import { PostTabs } from "./_components/PostTabs";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { user, handleLogout } = useProfile();

  return (
    <div className="h-[91%] flex flex-col w-full overflow-scroll">
      <div className="h-[28%] ">
        <EditImage />
        <Button
          className="absolute right-3 top-3 rounded-full bg-white text-black"
          onClick={handleLogout}
        >
          Log out
        </Button>
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
