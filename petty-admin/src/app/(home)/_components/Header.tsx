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
    <div className="p-10 flex justify-between items-center">
      <div className="w-[180px] h-[150px] ">
        <img
          src="https://res.cloudinary.com/dszot6j60/image/upload/v1746104301/www.canva.com_design_DAGmNH2lmOk_6mWPUP3CAVdrgrlMFBBWow_edit_2_xeash1.png"
          alt="logo image"
          className="w-full h-full"
        />
      </div>

      <Button className="p-7 rounded-full" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};
