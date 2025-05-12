/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useProfile } from "@/app/provider/ProfileProvider";
import { petPostType } from "@/type/index";
import axios from "axios";
import { ChevronLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PetCardId = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user, refetch } = useProfile();
  const [loading, setLoading] = useState(false);
  const [petPostId, setPetPostId] = useState({} as unknown as petPostType);
  const [isExpanded, setIsExpanded] = useState(false);

  const startChat = async () => {
    const infos = {
      userId1: petPostId.userId,
      userId2: user.id,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chat/conversation`,
      infos
    );
    if (response.data.data.id) {
      refetch();
      router.push(`/chat/${response.data.data.id}/${petPostId.userId}`);
    }
  };
  const setPetPostForId = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/petId/${id}`
      );
      setPetPostId(response.data.data);
      console.log("Pet post ID set successfully:", petPostId);
    } catch (error) {
      console.error("Error setting pet post ID:", error);
    } finally {
      setLoading(false);
      console.log(petPostId);
    }
  };
  useEffect(() => {
    setPetPostForId();
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = petPostId?.about?.slice(0, 150);

  return (
    <div>
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="relative h-screen overflow-y-auto  bg-gray-100">
          <div className="h-[45vh] overflow-hidden relative">
            <img
              src={petPostId?.image}
              alt={petPostId?.petName || "Pet image"}
              className="w-full h-full object-cover"
            />
            <Link
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg cursor-pointer"
              href={"/homePage"}
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </Link>
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

            <div className="grid grid-cols-4 gap-2 text-xs">
              <AttributeCard label="Age" value={petPostId?.age} />
              <AttributeCard label="Sex" value={petPostId?.gender} />
              <AttributeCard label="Breed" value={petPostId?.breed} />
              <AttributeCard label="Size" value={petPostId?.size} />
            </div>

            <div className="flex items-center justify-end mt-6 relative">
              <div className="absolute left-4 w-14 h-14 rounded-full bg-gray-300 shadow-inner">
                <img
                  src={petPostId.User?.profileImage}
                  alt="Posted user profile image"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="w-[85%] bg-blue-500 text-white py-4 px-5 rounded-2xl shadow-lg">
                <div className="text-sm font-semibold">
                  {petPostId.User?.username}
                </div>
                <div className="flex items-center mt-1">
                  <MapPin size={12} />
                  <div className="text-xs">{petPostId?.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <p className="text-sm text-gray-600 mb-2">
                {isExpanded
                  ? petPostId?.about
                  : `${shortText}${
                      petPostId?.about?.length > 150 ? "..." : ""
                    }`}
              </p>

              {petPostId?.about?.length > 150 && (
                <button
                  onClick={toggleExpand}
                  className="text-blue-500 text-sm hover:underline self-end"
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              )}
            </div>

            <div className="flex items-center justify-between mt-4 w-full bg-amber-200">
              <video className="w-full" controls src={petPostId?.video} />
            </div>

            <button
              onClick={startChat}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 shadow-lg hover:bg-blue-700 transition duration-200"
            >
              Adopt Me
            </button>
          </div>
        </div>
      )}
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
