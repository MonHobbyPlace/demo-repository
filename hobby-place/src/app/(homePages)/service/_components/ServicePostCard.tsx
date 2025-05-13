/* eslint-disable @next/next/no-img-element */
// /components/ServicePostCard.tsx

import { ServicePost } from "@/type";

export const ServicePostCard = ({ post }: { post: ServicePost }) => (
  <div className="border p-4 rounded-lg">
    <img
      src={post.image}
      alt={post.serviceName}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h3 className="text-xl font-bold mt-2">{post.serviceName}</h3>
    <p className="mt-2">{post.description}</p>
  </div>
);
