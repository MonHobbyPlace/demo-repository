/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

type ServiceCategory = {
  id: number;
  name: string;
  image: string;
};

export default function ServiceCategoryPage() {
  const params = useParams();
  const petId = params?.id;

  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(
    []
  );

  useEffect(() => {
    if (!petId) return;

    const fetchServiceCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/servicePost/getPetId/${petId}`
        );
        setServiceCategories(res.data.Category); // adjust this key if needed
      } catch (error) {
        console.error("Failed to fetch service categories:", error);
      }
    };

    fetchServiceCategories();
  }, [petId]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {serviceCategories.map((cat) => (
        <Link key={cat.id} href={`/serviceCategory/${cat.id}`}>
          <div className="bg-white p-4 shadow rounded hover:scale-105 transition">
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
