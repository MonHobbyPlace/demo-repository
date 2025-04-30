"use client";

/* eslint-disable @next/next/no-img-element */
import { usePetPost } from "@/app/provider/PetPostProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PetPosts = () => {
  const { category } = usePetPost();

  return (
    <div className="p-6 space-y-6">
      <div className="w-full h-52 rounded-xl bg-green-300 flex justify-center items-center relative cursor-pointer">
        <label
          htmlFor="Picture"
          className="text-white font-semibold text-lg absolute"
        >
          Upload Picture
        </label>
        <input id="Picture" hidden type="file" />
      </div>
      <div className="flex gap-2 overflow-x-auto scroll-bar-hide">
        {category.map((element, index) => {
          return (
            <button
              key={index}
              className={`btn btn-outline bg-[white flex items-center justify-between rounded-full p-0 ? "opacity-100" : "opacity-60"`}
            >
              <img
                alt=""
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="w-9 rounded-full"
              />
              <div className="p-2">{element.name}</div>
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {/* Pet Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Name
          </label>
          <Input placeholder="Enter pet name" />
        </div>

        {/* Pet Breed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Breed
          </label>
          <Input placeholder="Enter pet breed" />
        </div>

        {/* Pet Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Size
          </label>
          <div className="flex gap-3">
            <Button variant="outline">Big</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Small</Button>
          </div>
        </div>

        {/* Pet Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Age
          </label>
          <Input placeholder="Enter pet age (e.g., 2 years)" />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex gap-6 items-center">
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="gender"
                value="MALE"
                className="accent-green-600 bg-transparent border-gray-300 focus:ring-green-500 focus:ring-2"
              />
              <span>Male</span>
            </label>
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="gender"
                value="FEMALE"
                className="accent-pink-500 bg-transparent border-gray-300 focus:ring-pink-500 focus:ring-2"
              />
              <span>Female</span>
            </label>
          </div>
        </div>
        <Tabs defaultValue="Sale" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="Sale">Sale</TabsTrigger>
            <TabsTrigger value="Adopt">Adopt</TabsTrigger>
          </TabsList>
          <TabsContent value="Sale">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <Input placeholder="price" />
          </TabsContent>
          <TabsContent value="Adopt"></TabsContent>
        </Tabs>
        <div>
          <label>Phone Number</label>
          <Input placeholder="Enter your phone number" />
        </div>
      </div>
    </div>
  );
};
