/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type PetCategory = {
  id: number;
  name: string;
  image: string;
};

export default function PetCategoryPage() {
  const [petCategories, setPetCategories] = useState<PetCategory[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPetCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`
        );
        setPetCategories(res.data.Category);
      } catch (error) {
        console.error("Error fetching pet categories:", error);
      }
    };
    fetchPetCategories();
  }, []);

  const handleClick = (id: number) => {
    router.push(`/serviceCategory/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {petCategories.map((category) => (
        <div
          key={category.id}
          className="card bg-white shadow-lg rounded-lg p-4 cursor-pointer"
          onClick={() => handleClick(category.id)}
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}
