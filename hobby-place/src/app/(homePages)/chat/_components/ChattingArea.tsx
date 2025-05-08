import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const ChattingArea = () => {
  return (
    <>
      <div className="relative ">
        <Search className="absolute top-1.5 left-2" />
        <div className="">
          <Input className="px-9" />
        </div>
      </div>
      <div></div>
    </>
  );
};