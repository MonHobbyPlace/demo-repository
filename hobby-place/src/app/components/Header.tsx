/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import axios from "axios";
import { ArrowRight, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Hospital } from "../(homePages)/hospital/_components/HospitalInfoBox";
import { useProfile } from "../provider/ProfileProvider";

type SearchResponseType = {
  image: string;
  breed: string;
  id: number;
};

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const { user } = useProfile();
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState<SearchResponseType[]>([]);

  const searchClick = (value: boolean) => {
    setIsActive(value);
  };
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(pathName);

    setValue(e.target.value);
    if (pathName.includes("hospital")) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/searchValue?name=${value}`
      );
      const resp = response.data.map((el: Hospital) => {
        return { id: el.id, image: el.backgroundImage, breed: el.name };
      });

      setSearchValue(resp);
    } else {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/search/${value}`
      );
      if (Array.isArray(response.data.data)) {
        setSearchValue(response.data.data);
      } else {
        setSearchValue([]);
      }
      console.log(response.data.data);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between w-full h-16  ">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img alt="profile image" src={user?.profileImage} />
          </div>
        </div>
        <div className=" flex h-10 gap-[10px] items-center border px-3 rounded-md relative ">
          <Search size={16} onClick={() => searchClick(true)} />
          {isActive === true ? (
            <input
              type="text"
              className="h-9 focus-visible:ring-0 border-0 outline-none rounded-none"
              placeholder="Search..."
              onChange={(e) => onChange(e)}
            />
          ) : (
            <></>
          )}

          <div className="absolute bg-white z-10 top-[40px] text-black w-[215px] rounded-md">
            {value?.length > 0 && isActive ? (
              <>
                {searchValue?.length === 0 && isActive ? (
                  <>
                    <div className="flex m-2 gap-1 border-b">
                      <div className="w-full  flex gap-1 justify-between">
                        <p className="overflow-hidden text-ellipsis line-clamp-2 text-xs">
                          No data found
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {searchValue?.slice(0, 3)?.map((element, index) => (
                      <div className="flex m-2 gap-1 border-b" key={index}>
                        <img
                          className="w-[35px] h-[35px] rounded-sm"
                          src={`${element.image}`}
                        />
                        <div className="w-full  flex gap-1 justify-between">
                          <p className="overflow-hidden text-ellipsis line-clamp-2 text-xs">
                            {element.breed}
                          </p>
                          <Link href={`${pathName}/${element.id}`}>
                            <h3 className="cursor-pointer flex justify-end h-4 text-xs">
                              see more
                              <ArrowRight size={12} />
                            </h3>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
