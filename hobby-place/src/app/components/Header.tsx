/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { ArrowRight, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";
import Link from "next/link";
import { Hospital } from "../(homePages)/hospital/_components/HospitalInfoBox";
import { useProfile } from "../provider/ProfileProvider";
import debounce from "lodash.debounce";

type SearchResponseType = {
  image: string;
  breed: string;
  id: number;
};

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState<SearchResponseType[]>([]);
  const { user } = useProfile();
  const pathName = usePathname();
  const router = useRouter();

  const searchClick = (value: boolean) => {
    setIsActive(value);
  };

  const handleSearch = async (input: string) => {
    if (!input) {
      setSearchValue([]);
      return;
    }

    try {
      if (pathName.includes("hospital")) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/searchValue?name=${input}`
        );
        const data = response.data.map((el: Hospital) => ({
          id: el.id,
          image: el.backgroundImage,
          breed: el.name,
        }));
        setSearchValue(data);
      } else {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/search/${input}`
        );
        setSearchValue(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchValue([]);
    }
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 300), [pathName]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    debouncedSearch(inputValue);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between w-full h-16">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full cursor-pointer">
            <img
              src={user?.profileImage || "/default-profile.png"}
              alt="profile"
              onClick={() => router.push("/profile")}
            />
          </div>
        </div>

        <div className="relative flex h-10 gap-2 items-center border px-3 rounded-md">
          <Search size={16} onClick={() => searchClick(true)} />
          {isActive && (
            <input
              type="text"
              className="h-9 focus-visible:ring-0 border-0 outline-none rounded-none text-[16px]"
              placeholder="Search..."
              onChange={onChange}
              value={value}
            />
          )}

          {value?.length > 0 && isActive && (
            <div className="absolute bg-white z-10 top-[40px] text-black w-[215px] rounded-md shadow">
              {searchValue.length === 0 ? (
                <div className="flex m-2 gap-1 border-b">
                  <p className="text-xs text-gray-600">No data found</p>
                </div>
              ) : (
                searchValue.slice(0, 3).map((element) => (
                  <div className="flex m-2 gap-1 border-b" key={element.id}>
                    <img
                      className="w-[35px] h-[35px] rounded-sm"
                      src={element.image}
                      alt={element.breed}
                    />
                    <div className="w-full flex gap-1 justify-between">
                      <p className="text-xs overflow-hidden text-ellipsis line-clamp-2">
                        {element.breed}
                      </p>
                      <Link href={`${pathName}/${element.id}`}>
                        <h3 className="cursor-pointer flex items-center gap-1 text-xs text-blue-500">
                          see more
                          <ArrowRight size={12} />
                        </h3>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
