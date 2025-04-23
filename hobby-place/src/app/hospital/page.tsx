import { Profile } from "../_components/Profile";
import { BackButton } from "./_components/BackButton";
import { HospitalInfoBox } from "./_components/HospitalInfoBox";
import { TopRated } from "./_components/TopRated";
import { CategoryFilter } from "./_features/CategoryFilter";

export default function Home() {
  return (
    <div className="p-5 flex w-full flex-col gap-3 overflow-hidden relative bg-[#f5efe7] h-screen">
      <div className="flex justify-between sticky top-0 w-full">
        <BackButton />
        <Profile />
      </div>
      <p className="text-[#213555] font-bold text-xl">Top rated Hspitals</p>
      <TopRated />
      <CategoryFilter />
      <div className=" overflow-scroll h-[50%] rounded-xl ">
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
      </div>
    </div>
  );
}
