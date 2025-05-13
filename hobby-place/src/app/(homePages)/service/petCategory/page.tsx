"use client";

// /pages/petCategory/index.tsx

import Link from "next/link";
import { useEffect, useState } from "react";
import { PetCategoryCard } from "../_components/PetCategoryCard";
import { PetCategory } from "@/type";

const PetCategoryPage = () => {
  const [petCategories, setPetCategories] = useState<PetCategory[]>([]);

  useEffect(() => {
    const fetchPetCategories = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`
      );
      const data = await res.json();
      setPetCategories(data.Category); // Replace with the actual data structure
    };

    fetchPetCategories();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {petCategories.map((category) => (
        <Link key={category.id} href={`/petCategory/${category.id}`}>
          <PetCategoryCard category={category} />
        </Link>
      ))}
    </div>
  );
};

export default PetCategoryPage;
