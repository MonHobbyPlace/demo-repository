import { AdoptMeCrausel } from "./_features/_components/AdoptMeCarousel";
import { Categories } from "./_features/_components/Categories";
import { Header } from "./_features/_components/Header";
import { PetCards } from "./_features/_components/petCards";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 px-5">
      <Header />
      <AdoptMeCrausel />
      <Categories />
      <PetCards />
    </div>
  );
};
export default HomePage;
