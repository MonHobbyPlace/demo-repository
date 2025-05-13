"use client";

import { useRouter } from "next/navigation";
import { useServiceCategory } from "@/app/provider/ServiceCategoryProvider";

export default function ServiceCategoryPage() {
  const router = useRouter();
  const { serviceCategories } = useServiceCategory();

  const handleClick = (id: number) => {
    router.push(`/service/${id}`);
  };

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {serviceCategories?.map((category) => (
        <div
          key={category.id}
          className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-md transition"
          onClick={() => handleClick(category.id)}
        >
          <h2 className="text-lg font-semibold text-center">{category.name}</h2>
        </div>
      ))}
    </div>
  );
}
