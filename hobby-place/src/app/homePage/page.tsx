import { AdoptMeCrausel } from "./_features/AdoptMeCarousel";
import { Header } from "../components/Header";
import { PetCards } from "./_features/petCards";
import { Footer } from "../components/Footer";
import { Categories } from "./_features/Categories";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 px-5 bg-[#E1F7F5] text-[#0E46A3] h-screen">
      <Header />
      <AdoptMeCrausel />
      <Categories />
      <PetCards />
      <Footer />
    </div>
  );
};
export default HomePage;
