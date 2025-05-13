/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type ServiceCategory = {
  id: number;
  name: string;
  image: string;
};

export default function ServiceCategoryPage() {
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(
    []
  );
  const router = useRouter();
  const { petId } = router.query;

  useEffect(() => {
    const fetchServiceCategories = async () => {
      if (!petId) return; // Avoid fetching if petId is not available
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/serviceCategory/petCategory/${petId}`
        );
        setServiceCategories(res.data.category);
      } catch (error) {
        console.error("Error fetching service categories:", error);
      }
    };
    fetchServiceCategories();
  }, [petId]);

  const handleClick = (id: number) => {
    router.push(`/serviceCategory/detail/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {serviceCategories.map((category) => (
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
