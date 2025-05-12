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
      className="w-full flex flex-col justify-center relative"
    >
      <p
        className="text-sm flex items-center absolute right-0 top-[-25px]"
        onClick={() => router.push(`/adoptPet`)}
      >
        see more <ArrowRight size={14} />
      </p>
      <CarouselContent className=" relative h-56 rounded-xl">
        {petPost.map((element, index) => {
          if (element.price > 0) {
            return null;
          }
          return (
            <CarouselItem key={index}>
              <img
                onClick={() => router.push(`/homePage/${element.id}`)}
                alt=""
                src={element.image}
                className="w-full  object-fill h-56"
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
