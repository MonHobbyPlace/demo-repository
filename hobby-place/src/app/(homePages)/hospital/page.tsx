import { TopRated } from "./_components/TopRated";
import { CategoryFilter } from "./_features/CategoryFilter";

export default function Home() {
  return (
    <div className=" flex w-full flex-col gap-3 overflow-hidden relative bg-[#e1f7f5] h-full">
      <p className="text-[#213555] font-bold text-xl w-full">
        Top rated Hospitals
      </p>
      <TopRated />
      <CategoryFilter />
    </div>
  );
}
