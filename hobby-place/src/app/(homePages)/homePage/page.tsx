import { AdoptMeCrausel } from "./_features/AdoptMeCarousel";
import { PetCards } from "./_features/petCards";
import { Categories } from "./_features/Categories";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4  bg-[#E1F7F5] text-[#0E46A3] ">
      <div>
        <div className="text-2xl extrabold">Hello (here is userName)</div>
        <p className="text-xs">Local pet care services for you</p>
      </div>
      <AdoptMeCrausel />
      <Categories />
      <PetCards />
    </div>
  );
};
export default HomePage;
