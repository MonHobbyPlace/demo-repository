/* eslint-disable @next/next/no-img-element */
import { PetCategoryType } from "@/app/provider/PetCategoryProvider";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

export const CategoryButton = (props: {
  category: PetCategoryType;
  setLoading: Dispatch<SetStateAction<undefined>>;
}) => {
  const { name, image } = props.category;
  return (
    <Button className="flex rounded-full w-fit h-fit bg-white text-gray-900 border border-gray-900">
      {image && (
        <img
          src={image}
          alt="Category Image"
          className="w-[40px] h-[40px] rounded-full"
        />
      )}
      {name}
    </Button>
  );
};
