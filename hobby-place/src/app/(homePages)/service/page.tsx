"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

type PetCategory = {
  id: number;
  name: string;
  image: string;
};

export default function HomePage() {
  const [categories, setCategories] = useState<PetCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`
      );
      setCategories(res.data.Category);
    };
    fetchCategories();
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4 scroll-auto">
      {categories.map((cat) => (
        <Link key={cat.id} href={`/service/petCategory/${cat.id}`}>
          <div className="p-4 bg-white shadow rounded cursor-pointer hover:scale-105 transition">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{cat.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
