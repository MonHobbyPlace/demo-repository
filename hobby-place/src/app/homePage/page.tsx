import { AdoptMeCrausel } from "./_components/AdoptMeCarousel";
import { Header } from "../components/Header";
import { PetCards } from "./_components/petCards";
import { Footer } from "../components/Footer";
import { Categories } from "./_components/Categories";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 px-5">
      <Header />
      <AdoptMeCrausel />
      <Categories />
      <PetCards />
      <Footer />
    </div>
  );
};
export default HomePage;
