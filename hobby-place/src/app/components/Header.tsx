/* eslint-disable @next/next/no-img-element */
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between w-full h-16  ">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img
              alt=""
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
          <Search />
        </div>
      </div>
      <div>
        <div className="text-2xl extrabold">Hello (here is userName)</div>
        <p className="text-xs">Local pet care services for you</p>
      </div>
    </div>
  );
};
