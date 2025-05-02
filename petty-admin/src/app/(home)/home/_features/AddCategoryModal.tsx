import { usePetCategory } from "@/app/provider/PetCategoryProvider";
import { CategoryButton } from "../_components/CategoryButton";

export const AddCategoryModal = () => {
  const { category } = usePetCategory();
  console.log(category);

  return (
    <div className=" flex">
      {category.map((cat, index) => {
        return <CategoryButton key={index} category={cat} />;
      })}
    </div>
  );
};
