/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const [searchValue, setSearchValue] = useState("");

  const searchClick = (value: boolean) => {
    setIsActive(value);
    // setSearchValue("");
  };
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);

    const response = await axios.get(
      `http://localhost:4000/petPost/search/${value}`
    );
    console.log(response.data);
  };
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
        <div className=" flex h-10 gap-[10px] items-center border px-3 rounded-md relative">
          <Search size={16} onClick={() => searchClick(true)} />
          {isActive === true ? (
            <input
              type="text"
              className="h-9 focus-visible:ring-0 border-0 outline-none rounded-none"
              placeholder="Search..."
              onChange={() => onChange(event)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
