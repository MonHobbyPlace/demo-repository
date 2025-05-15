/* eslint-disable @next/next/no-img-element */
"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const AdoptMeCrausel = () => {
  const { petPost } = usePetPost();
  const router = useRouter();
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      opts={{
        loop: true,
      }}
      className="w-full flex flex-col justify-center "
    >
      <div className="flex justify-between">
        <p className="text-extrabold text-2xl">Adopt a Pet</p>
        <p
          className="text-sm flex items-center "
          onClick={() => router.push(`/adoptPet`)}
        >
          see more <ArrowRight size={14} />
        </p>
      </div>
      <CarouselContent className=" relative h-[27vh] rounded-xl">
        {petPost.map((element, index) => {
          if (element.price > 0 || element.active === false) {
            return null;
          }
          return (
            <CarouselItem key={index}>
              <img
                onClick={() => router.push(`/homePage/${element.id}`)}
                alt=""
                src={element.image}
                className="w-full  object-cover h-[24vh]"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5" />
      <CarouselNext className="absolute right-5" />
    </Carousel>
  );
};
