/* eslint-disable @next/next/no-img-element */
import { PetCategoryType } from "@/app/provider/PetCategoryProvider";
import { Button } from "@/components/ui/button";

export const CategoryButton = (props: { category: PetCategoryType }) => {
  const { name, image } = props.category;
  return (
    <Button className="flex rounded-full">
      {image && (
        <img
          src={image}
          alt="Category Image"
          className="w-[20px] h-[20px] rounded-full"
        />
      )}
      {name}
    </Button>
  );
};
