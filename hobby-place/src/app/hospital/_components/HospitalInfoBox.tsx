/* eslint-disable @next/next/no-img-element */
// type Hospital = {
//   name: string;
//   location: string;
//   worktime: string;

import { MapPin, PawPrint } from "lucide-react";

// };
export const HospitalInfoBox = () => {
  return (
    <div className="bg-[#CCDBFD] h-[200px] w-1/2 rounded-xl p-2 text-black overflow-hidden">
      <div className="w-full h-1/2 rounded-t-xl overflow-hidden">
        <img
          src="hospitalDef.jpeg"
          alt="hospital image"
          className="w-full h-full "
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl ">Furry Friends Hospital</p>
        <div className="rating rating-sm">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="mask mask-star bg-[#0077b6]"
              aria-label={`${index + 1} star`}
              aria-current={index == 1 ? "true" : "false"}
            ></div>
          ))}
        </div>
        <div className="flex gap-3">
          <PawPrint color="black" />
          <p>Dog</p>
        </div>
        <div className="flex gap-3">
          <MapPin color="black" />
          <p>location</p>
        </div>
      </div>
    </div>
  );
};
