/* eslint-disable @next/next/no-img-element */
"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { useRouter } from "next/navigation";

export const AdoptSeeMore = () => {
  const router = useRouter();
  const { petPost, petPostCategories } = usePetPost();

  return (
    <div className="h-[700px] overflow-y-scroll p-4">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 overflow-y-scroll scrollbar-hide">
          {petPostCategories.length > 1 ? (
            <>
              {petPostCategories.map((element, index) => {
                if (element.price > 0) return null;
                return (
                  <div
                    key={index}
                    onClick={() =>
                      router.push(`/homePage/${element?.id.toString()}`)
                    }
                    className="cursor-pointer flex gap-4 items-center rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden bg-white p-3"
                  >
                    <img
                      alt={element.petName}
                      src={element.image}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between h-full space-y-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {element.petName}
                      </h3>
                      <div className="flex justify-between text-sm text-gray-600 gap-4">
                        <span>Breed: {element.breed}</span>
                        <span>Size: {element.size}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Age: {element.age}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {petPost.map((element, index) => {
                if (element.price > 0) return null;
                return (
                  <div
                    key={index}
                    onClick={() =>
                      router.push(`/homePage/${element.id.toString()}`)
                    }
                    className="cursor-pointer flex gap-4 items-center rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden bg-white p-3"
                  >
                    <img
                      alt={element.petName}
                      src={element.image}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between h-full space-y-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {element.petName}
                      </h3>
                      <div className="flex justify-between text-sm text-gray-600 gap-4">
                        <span>Breed: {element.breed}</span>
                        <span>Size: {element.size}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Age: {element.age}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
