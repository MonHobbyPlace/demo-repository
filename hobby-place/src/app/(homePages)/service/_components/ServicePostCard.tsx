/* eslint-disable @next/next/no-img-element */
// /components/ServicePostCard.tsx

import { ServicePost } from "@/app/provider/ServiceCategoryProvider";
import Link from "next/link";

export const ServicePostCard = ({ post }: { post: ServicePost }) => {
  console.log(post.user.profileImage);

  return (
    <div className="border p-4 rounded-lg flex flex-col gap-2 w-full">
      <img
        src={post?.image}
        alt="post image"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="flex justify-betweeen items-center w-full">
        <div className="w-[80%]">
          <Link href={`/profile/${post?.userId}`}>
            <div className="flex  items-center gap-2">
              <>
                <div className="w-[40px] h-[40px]">
                  <img
                    src={post.user?.profileImage}
                    alt="post owner profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="text-sm">{post.user?.username}</p>
              </>
            </div>
          </Link>
        </div>
        <div className="flex text-sm">
          <p>Cost per hour:</p>
          <p>{post.cost}$</p>
        </div>
      </div>
    </div>
  );
};
