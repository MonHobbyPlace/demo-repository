"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
export const PetCards = () => {
  const { petPost, petPostCategories } = usePetPost();

  useEffect(() => {
    if (petPostCategories.length > 0) {
      console.log("Pet post categories set successfully:", petPostCategories);
    } else {
    }
  }, [petPostCategories]);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between w-full h-10 ">
        <div className="text-xl extrabold">Rehoming a Pets</div>
        {/* <p className="text-sm flex items-center">
          see more <ArrowRight size={14} />
        </p> */}
      </div>
      <div className="flex flex-wrap gap-4 h-[250px] overflow-y-scroll scrollbar-hide">
        {petPostCategories.length > 1 ? (
          <>
            {petPostCategories.map((element, index) => {
              if (
                element.price == 0 ||
                element.price == undefined ||
                element.price == null
              ) {
                return null;
              }
              return (
                <div
                  onClick={() =>
                    router.push(`/homePage/${element.id.toString()}`)
                  }
                  key={index}
                  className="w-2/7 h-fit p-1 border rounded-lg bg-white"
                >
                  <img
                    alt=""
                    src={element.image}
                    className="w-full h-16 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xs font-bold mt-2">
                        {element.petName}
                      </h2>
                      <p className=" text-xs flex items-center gap-1">
                        <MapPin size={12} /> {element.address.split(" ")[0]}
                      </p>
                    </div>

                    <p className="text-gray-500 text-xs">{element.price}$</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {petPost.map((element, index) => {
              if (
                element.price == 0 ||
                element.price == undefined ||
                element.price == null
              ) {
                return null;
              }
              return (
                <div
                  onClick={() =>
                    router.push(`/homePage/${element.id.toString()}`)
                  }
                  key={index}
                  className="w-2/7  f-fit p-1 border rounded-lg bg-white"
                >
                  <img
                    alt=""
                    src={element.image}
                    className="w-full h-16 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xs font-bold mt-2">
                        {element.petName}
                      </h2>
                      <p className=" text-xs flex items-center gap-1">
                        <MapPin size={12} /> {element.address.split(" ")[0]}
                      </p>
                    </div>

                    <p className="text-gray-500 text-xs">{element.price}$</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
