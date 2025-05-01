"use client";
import React, { useEffect, useState } from "react";
import { useServiceCategory } from "@/app/provider/ServiceCategoryProvider";
import { FaStar, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";

export const Three = () => {
  const { serviceCategories, servicePosts, fetchServicesByCategory } =
    useServiceCategory();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (serviceCategories.length > 0 && selectedId === null) {
      const first = serviceCategories[0];
      setSelectedId(first.id);
      fetchServicesByCategory(first.id);
    }
  }, [serviceCategories]);

  const handleCategoryClick = (id: number) => {
    setSelectedId(id);
    fetchServicesByCategory(id);
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto bg-white min-h-screen">
      <h2 className="text-2xl font-bold">Providers</h2>

      {/* Categories as Tabs */}
      <div className="flex gap-2 overflow-x-auto">
        {serviceCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-4 py-1 rounded-full border text-sm font-medium whitespace-nowrap ${
              selectedId === cat.id
                ? "bg-purple-500 text-white"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {servicePosts.map((post, index) => (
          <div
            key={post.id}
            className="flex items-center bg-gray-100 rounded-xl p-3 relative"
          >
            <img
              src={post.image}
              alt={post.serviceName}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="ml-3 flex-1">
              <h3 className="font-semibold text-lg">{post.serviceName}</h3>

              <div className="text-sm text-gray-600 flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                4.5 <span className="text-gray-500">(10 reviews)</span>
              </div>

              <div className="text-sm text-purple-600 flex items-center gap-1 mt-1">
                <FaMapMarkerAlt /> {post.address}
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-lg">{post.cost}€/h</p>
              <button className="mt-1">
                <FaRegHeart className="text-gray-400" />
              </button>
            </div>

            {index === servicePosts.length - 1 && (
              <button className="absolute bottom-2 left-2 bg-black text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                <FaMapMarkerAlt />
                Map
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
