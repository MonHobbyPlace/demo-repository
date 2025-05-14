"use client";

/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { ArrowRight, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Hospital } from "../(homePages)/hospital/_components/HospitalInfoBox";
import { useProfile } from "../provider/ProfileProvider";
import debounce from "lodash.debounce";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

type SearchResponseType = {
  image: string;
  breed: string;
  id: number;
};

export const Header = () => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState<SearchResponseType[]>([]);
  const { user } = useProfile();
  const pathName = usePathname();
  const router = useRouter();

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

  useEffect(() => {
    handleSearch(value);
  }, [pathName]);

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

        <Popover>
          <PopoverTrigger asChild>
            <div className="relative flex h-10 gap-2 items-center border px-3 rounded-full cursor-pointer">
              <Search size={16} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[300px]">
            <Input
              type="text"
              placeholder="Search..."
              className="mb-2"
              value={value}
              onChange={onChange}
            />
            <div className="max-h-60 overflow-y-auto">
              {value && searchValue.length === 0 ? (
                <p className="text-xs text-gray-600">No data found</p>
              ) : (
                searchValue.slice(0, 5).map((element) => (
                  <div
                    key={element.id}
                    className="flex items-center gap-2 border-b py-1"
                  >
                    <img
                      className="w-10 h-10 rounded-sm object-cover"
                      src={element.image}
                      alt={element.breed}
                    />
                    <div className="flex-1">
                      <p className="text-xs truncate">{element.breed}</p>
                    </div>
                    <Link
                      href={`${pathName}/${element.id}`}
                      className="text-xs text-blue-500 flex items-center gap-1"
                    >
                      See more <ArrowRight size={12} />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
