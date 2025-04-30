import { petPostType } from "@/app/provider/PetPostProvider";
import { Button } from "@/components/ui/button";
import { MapPin, Pencil } from "lucide-react";

export const PostCard = (props: { post: petPostType }) => {
  const { post } = props;
  return (
    <div className=" w-[48%] h-fit bg-[#e1f7f5] rounded-md p-2 relative">
      <img
        src={post.image}
        alt="post image"
        className="rounded-md h-[100px] w-full"
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
      <Button className="bg-white rounded-full absolute top-16 text-xs text-black right-3 p-1">
        <Pencil />
      </Button>
    </div>
  );
};
