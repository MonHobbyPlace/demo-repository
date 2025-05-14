/* eslint-disable @next/next/no-img-element */
"use client";
import { petPostType } from "@/type";
import { Button } from "@/components/ui/button";
import { MapPin, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { useProfile } from "@/app/provider/ProfileProvider";

export const PostCard = (props: { post: petPostType }) => {
  const { post } = props;
  const { updatePetPost } = usePetPost();
  const { user } = useProfile();
  console.log(user.id, post.userId);

  const onClick = () => {
    updatePetPost({ ...post, active: false }, Number(post.id));
  };
  const router = useRouter();
  return (
    <div
      className="  h-fit bg-[#e1f7f5] rounded-md p-2 relative m-0"
      // onClick={() => router.push(`/homePage/${post?.id}`)}
    >
      <img
        src={post.image}
        alt="post image"
        className="rounded-md h-[100px] w-full object-cover"
      />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold mt-2">{post.petName}</h2>
          <p className=" text-sm flex items-center gap-1">
            <MapPin size={12} /> {post.address.split(" ")[0]}
          </p>
        </div>
        <p className="text-gray-500 text-sm">{post.price}$</p>
      </div>
      {post.active && user.id === post.userId ? (
        <>
          <div className="flex justify-end">
            <Button className="bg-white text-black z-20" onClick={onClick}>
              Sold
            </Button>
          </div>
          <Button
            className="bg-white rounded-full absolute top-16 text-xs text-black right-3 p-1"
            onClick={() => router.push(`/petPost/${post.id}`)}
          >
            <Pencil />
          </Button>
        </>
      ) : (
        <div>
          {post.userId === user.id && (
            <div className="w-full flex items-center justify-center text-[#03346E] font-bold p-2">
              {post.purpose === "SALE" ? <p>Sold</p> : <p>Adopted</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
