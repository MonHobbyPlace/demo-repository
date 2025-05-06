"use client";
import { usePetCategory } from "@/app/provider/PetCategoryProvider";
import { CategoryButton } from "../../home/_components/CategoryButton";
import { AddCategoryModal } from "../../home/_components/AddCategoryModal";

export const AddPetCategory = () => {
  const { category } = usePetCategory();

  return (
    <div className=" flex flex-wrap gap-3">
      <AddCategoryModal />
      {category.map((cat, index) => {
        return <CategoryButton key={index} category={cat} />;
      })}
    </div>
  );
};
