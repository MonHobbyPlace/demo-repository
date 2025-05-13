"use client";

import { useState } from "react";
import { Three } from "./_features/Three";
import { ServicePageHome } from "./_features/servicePageHome";
import ServiceCategoryPage from "./_features/serviceBrowser";
import { AddService } from "./_features/addService";

export default function Service() {
  const [page, setPage] = useState(5); // Default to ServiceCategoryPage

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div>
      {/* Navigation buttons to switch between pages */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Add Service
        </button>
        <button
          onClick={() => handlePageChange(3)}
          className="px-4 py-2 bg-green-500 text-white"
        >
          Three
        </button>
        <button
          onClick={() => handlePageChange(4)}
          className="px-4 py-2 bg-yellow-500 text-white"
        >
          Service Page Home
        </button>
        <button
          onClick={() => handlePageChange(5)}
          className="px-4 py-2 bg-purple-500 text-white"
        >
          Service Categories
        </button>
      </div>

      {/* Page Components */}
      {page === 1 && <AddService />}
      {page === 3 && <Three />}
      {page === 4 && <ServicePageHome />}
      {page === 5 && <ServiceCategoryPage />}
    </div>
  );
}
