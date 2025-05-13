/* eslint-disable @next/next/no-img-element */
// /components/ServiceCategoryCard.tsx

import { ServiceCategory } from "@/type";

export const ServiceCategoryCard = ({
  service,
}: {
  service: ServiceCategory;
}) => (
  <div className="border p-4 rounded-lg">
    <img
      src={service.image}
      alt={service.name}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h3 className="text-xl font-bold mt-2">{service.name}</h3>
  </div>
);
