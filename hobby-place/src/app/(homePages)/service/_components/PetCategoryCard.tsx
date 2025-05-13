/* eslint-disable @next/next/no-img-element */
// /components/PetCategoryCard.tsx

import { PetCategory } from "@/type";

export const PetCategoryCard = ({ category }: { category: PetCategory }) => (
  <div className="border p-4 rounded-lg">
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h3 className="text-xl font-bold mt-2">{category.name}</h3>
  </div>
);
