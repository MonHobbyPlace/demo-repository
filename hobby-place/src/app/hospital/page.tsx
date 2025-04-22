import { Profile } from "../_components/Profile";
import { BackButton } from "./_components/BackButton";
import { HospitalInfoBox } from "./_components/HospitalInfoBox";
import { CategoryFilter } from "./_features/CategoryFilter";

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-3 overflow-scroll relative">
      <div>
        <div className="flex justify-between sticky top-0">
          <BackButton />
          <Profile />
        </div>
        <CategoryFilter />
      </div>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
        <HospitalInfoBox />
      </div>
    </div>
  );
}
