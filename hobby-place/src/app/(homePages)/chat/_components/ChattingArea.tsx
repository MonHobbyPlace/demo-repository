import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export const ChattingArea = (props: {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}) => {
  const { searchValue, setSearchValue } = props;
  return (
    <>
      <div className="relative ">
        <Search className="absolute top-1.5 left-2" color="#03346E" />
        <div className="">
          <Input
            className="px-9 bg-white"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div></div>
    </>
  );
};
