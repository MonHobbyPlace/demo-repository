"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AdoptMeCrausel = () => {
  const { petPost } = usePetPost();
  return (
    <Carousel className="w-full flex justify-center">
      <CarouselContent className=" relative h-56 rounded-xl">
        {petPost.map((element, index) => {
          if (element.price > 0) {
            return null;
          }
          return (
            <CarouselItem key={index}>
              <img
                alt=""
                src={element.image}
                className="w-full  object-cover"
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
