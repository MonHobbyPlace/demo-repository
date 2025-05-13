"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useServiceCategory } from "@/app/provider/ServiceCategoryProvider";
import { ServicePostCard } from "./_components/ServicePostCard";
import { usePetPost } from "@/app/provider/PetPostProvider";

export default function HomePage() {
  const { serviceCategories, servicePosts } = useServiceCategory();
  const { petPostCategories } = usePetPost();

  const [selectedPetCategory, setSelectedPetCategory] = useState<string>("");
  const [selectedServiceCategory, setSelectedServiceCategory] =
    useState<string>("");

  console.log(servicePosts);

  return (
    <div className=" h-[94%] ">
      <h1 className="font-700 text-[24px]">Services</h1>
      <div className="flex justify-between mb-4">
        <Select onValueChange={(value) => setSelectedPetCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select pet category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {petPostCategories.map((cat) => (
                <SelectItem key={cat.id} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSelectedServiceCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select service category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {serviceCategories.map((cat, index) => (
                <SelectItem key={index} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {servicePosts.map((post, index) => {
        return <ServicePostCard key={index} post={post} />;
      })}
    </div>
  );
}
