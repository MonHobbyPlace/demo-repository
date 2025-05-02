"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export const Navigation = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-2 p-5">
      <Link href={"/home"}>
        <Button
          className={cn(
            "bg-gray-700 w-[150px] rounded-full border border-gray-700",
            pathName.includes("home") &&
              "bg-white text-gray700 hover:bg-gray-200"
          )}
        >
          Home
        </Button>
      </Link>
      <Link href={"/hospital"}>
        <Button
          className={cn(
            "bg-gray-700 w-[150px] rounded-full border border-gray-700",
            pathName.includes("hospital") &&
              "bg-white text-gray700 hover:bg-gray-200"
          )}
        >
          Hospital
        </Button>
      </Link>
      <Link href={"/services"}>
        <Button
          className={cn(
            "bg-gray-700 w-[150px] rounded-full border border-gray-700",
            pathName.includes("service") &&
              "bg-white text-gray700 hover:bg-gray-200"
          )}
        >
          Services
        </Button>
      </Link>
    </div>
  );
};
