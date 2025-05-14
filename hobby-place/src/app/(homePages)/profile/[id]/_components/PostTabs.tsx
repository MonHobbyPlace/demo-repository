"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "../../_components/PostCard";
import { ProfileType } from "@/app/provider/ProfileProvider";

export const PostTabs = (props: { userInfo: ProfileType }) => {
  const { userInfo } = props;

  return (
    <Tabs defaultValue="Active" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="Active">Posts</TabsTrigger>
      </TabsList>
      <TabsContent value="Active" className="w-full h-full">
        <div className="bg-white h-full grid grid-cols-2 gap-3 rounded-md overflow-scroll relative p-2 space-y-1.5">
          {userInfo?.PetPost && userInfo.PetPost.length > 0 ? (
            userInfo.PetPost.map((post, index) =>
              post.active ? <PostCard key={index} post={post} /> : null
            )
          ) : (
            <div className="text-gray-600 text-center">No post yet</div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};
