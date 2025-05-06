import { AllHospitals } from "./_features/AllHospitals";
import { AddPetCategory } from "./_features/AddPetCategory";

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-center gap-5 items-center ">
      <AddPetCategory />
      <AllHospitals />
    </div>
  );
}
