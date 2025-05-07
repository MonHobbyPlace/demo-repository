/* eslint-disable @next/next/no-img-element */
"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { useRouter } from "next/navigation";

export const AdoptSeeMore = () => {
  const router = useRouter();
  const { petPostCategories } = usePetPost();

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
                    onClick={() => router.push(`/homePage/${element?.id}`)}
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
              <div className="flex flex-col items-center justify-center py-20 text-gray-500 w-full">
                <h2 className="text-xl font-semibold">No pets available</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Please check back later or add a new listing.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
