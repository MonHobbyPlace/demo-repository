"use client";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const PetCardId = () => {
  const { id } = useParams();
  const { setPetPostForId, petPostId } = usePetPost();

  useEffect(() => {
    setPetPostForId(Number(id));
  }, [id]);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="h-[45vh] overflow-hidden">
        <img
          src={petPostId?.image}
          alt={petPostId?.petName || "Pet image"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full bg-white p-6 rounded-t-[40px] shadow-2xl absolute top-[35vh] left-0 z-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {petPostId?.petName}
          </h2>
          <span className="text-lg font-semibold text-blue-600">
            ${petPostId?.price}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4">{petPostId?.about}</p>

        <div className="grid grid-cols-4 gap-2 text-xs">
          <AttributeCard label="Age" value={petPostId?.age} />
          <AttributeCard label="Sex" value={petPostId?.gender} />
          <AttributeCard
            label="Breed"
            value={petPostId?.breed?.split(" ")[0]}
          />
          <AttributeCard label="Size" value={petPostId?.size} />
        </div>

        <div className="flex items-center justify-end mt-6 relative">
          <div className="absolute left-4 w-14 h-14 rounded-full bg-gray-300 shadow-inner" />
          <div className="w-[85%] bg-blue-500 text-white py-4 px-5 rounded-2xl shadow-lg">
            <div className="text-sm font-semibold">UserName is here</div>
            <div className="text-xs">{petPostId?.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AttributeCard = ({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) => (
  <div className="flex flex-col items-center bg-gray-100 p-3 rounded-xl shadow-sm">
    <span className="text-[10px] text-gray-500">{label}</span>
    <span className="text-sm font-medium text-gray-700">{value}</span>
  </div>
);

export default PetCardId;
