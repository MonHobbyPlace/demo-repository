/* eslint-disable @next/next/no-img-element */
import { HomeIcon, HospitalIcon, LucideDog, UserRound } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 rounded-xl shadow-md">
      <button>
        <HomeIcon />
      </button>
      <button>
        <LucideDog />
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
