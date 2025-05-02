"use client";
import { usePetCategory } from "@/app/provider/PetCategoryProvider";
import { CategoryButton } from "../_components/CategoryButton";
import { AddCategoryModal } from "../_components/AddCategoryModal";

export const AddPetCategory = () => {
  const { category } = usePetCategory();

  return (
    <div className=" flex">
      <AddCategoryModal />
      {category.map((cat, index) => {
        return <CategoryButton key={index} category={cat} />;
      })}
    </div>
  );
};
