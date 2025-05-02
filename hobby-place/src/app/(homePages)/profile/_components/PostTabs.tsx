import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "./PostCard";
import { useProfile } from "@/app/provider/ProfileProvider";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const PostTabs = () => {
  const { user } = useProfile();
  const router = useRouter();

  return (
    <Tabs defaultValue="pet" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="pet">Pet posts</TabsTrigger>
        <TabsTrigger value="service">Service posts</TabsTrigger>
      </TabsList>
      <TabsContent value="pet" className="w-full h-full">
        <div className="bg-white h-full flex flex-wrap gap-3 rounded-md overflow-scroll relative p-2 space-y-1.5">
          {user?.PetPost.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
          {user?.PetPost.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
          {user?.PetPost.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}


          <Button
            className="rounded-full fixed z-100 bottom-23 right-8 "
            onClick={() => router.push(`/petPost`)}
          >
            <Plus />
          </Button>
        </div>
      </TabsContent>
      <TabsContent
        value="service"
        className="bg-white h-full rounded-md overflow-hidden p-2 space-y-1.5"
      ></TabsContent>
    </Tabs>
  );
};
