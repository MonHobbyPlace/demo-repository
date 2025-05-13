/* eslint-disable @next/next/no-img-element */
// /pages/service/[serviceId].tsx

import { ServicePost } from "@/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ServicePostDetailPage = () => {
  const router = useRouter();
  const { serviceId } = router.query; // Access the serviceId from URL
  const [servicePost, setServicePost] = useState<ServicePost | null>(null);

  useEffect(() => {
    if (serviceId) {
      const fetchServicePost = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/servicePost/${serviceId}`
        );
        const data = await res.json();
        setServicePost(data.post); // Replace with actual data structure
      };

      fetchServicePost();
    }
  }, [serviceId]);

  if (!servicePost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{servicePost.serviceName}</h1>
      <p className="mt-4">{servicePost.description}</p>
      <img
        src={servicePost.image}
        alt={servicePost.serviceName}
        className="w-full h-80 object-cover mt-4"
      />
      <p className="mt-4">Phone: {servicePost.phoneNumber}</p>
      <p className="mt-4">Cost: ${servicePost.cost}</p>
    </div>
  );
};

export default ServicePostDetailPage;
