"use client";
import { AdoptMeCrausel } from "./_features/AdoptMeCarousel";
import { PetCards } from "./_features/petCards";
import { Categories } from "./_features/Categories";
import { useProfile } from "@/app/provider/ProfileProvider";

const HomePage = () => {
  const { user } = useProfile();
  return (
    <div className="flex flex-col gap-4  bg-[#E1F7F5] text-[#0E46A3] ">
      <div className=" my-5">
        <div className="text-2xl extrabold">Hello {user?.username}</div>
        <p className="text-xs">Local pet care services for you</p>
      </div>
      <AdoptMeCrausel />
      <Categories />
      <PetCards />
    </div>
  );
};
export default HomePage;
