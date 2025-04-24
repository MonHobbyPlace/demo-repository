/* eslint-disable @next/next/no-img-element */
"use client";
import { HomeIcon, HospitalIcon, PawPrint, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="flex  justify-between items-center bg-[#03346E] p-4 rounded-xl shadow-md text-[#E1F7F5]">
      <button
        className={pathName.includes("home") ? "opacity-100" : "opacity-60"}
        onClick={() => router.push("/homePage")}
      >
        <HomeIcon />
      </button>
      <button
        className={pathName.includes("service") ? "opacity-100" : "opacity-60"}
        onClick={() => router.push("/service")}
      >
        <PawPrint />
      </button>
      <button
        className={pathName.includes("hospital") ? "opacity-100" : "opacity-60"}
        onClick={() => router.push("/hospital")}
      >
        <HospitalIcon />
      </button>
      <button
        onClick={() => router.push("/user")}
        className={pathName.includes("user") ? "opacity-100" : "opacity-60"}
      >
        <UserRound />
      </button>
    </div>
  );
};
