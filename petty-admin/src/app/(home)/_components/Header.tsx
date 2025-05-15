"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <div className="p-5 flex justify-between items-center sticky top-0 bg-white z-50">
      <div className="w-[120px] h-[100px] ">
        <img
          src="https://res.cloudinary.com/dszot6j60/image/upload/v1747291558/www.canva.com_design_DAGmNH2lmOk_6mWPUP3CAVdrgrlMFBBWow_edit_3_dpzbgs.png"
          alt="logo image"
          className="w-full h-full object-cover"
        />
      </div>

      <Button className="p-5 rounded-full" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};
