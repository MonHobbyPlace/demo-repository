/* eslint-disable @next/next/no-img-element */
import {
  HomeIcon,
  HospitalIcon,
  LucideDog,
  PawPrint,
  UserRound,
} from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-[#1E0342] p-4 rounded-xl shadow-md text-[#E1F7F5]">
      <button>
        <HomeIcon />
      </button>
      <button>
        <PawPrint />
      </button>
      <button>
        <HospitalIcon />
      </button>
      <button>
        <UserRound />
      </button>
    </div>
  );
};
