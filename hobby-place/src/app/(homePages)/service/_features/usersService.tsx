/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Heart, MapPin, Star, Map } from "lucide-react";

const walkers = [
  {
    name: "Francisca Santos",
    rating: 3.4,
    reviews: 6,
    location: "Park Eduardo",
    price: 20,
    image: "/cat3.jpg",
    favorite: false,
  },
  {
    name: "António Luís Santos",
    rating: 4.6,
    reviews: 12,
    location: "Park Eduardo",
    price: 34,
    image: "/dog2.jpg",
    favorite: true,
  },
  {
    name: "Marcelo Nuno Duarte Rebelo",
    rating: 4.9,
    reviews: 34,
    location: "Estoril",
    price: 40,
    image: "/cat.jpg",
    favorite: false,
  },
  {
    name: "Anna Costa",
    rating: 3.4,
    reviews: 6,
    location: "Estoril",
    price: 32,
    image: "/dog1.jpg",
    favorite: false,
  },
];

export const UsersService = () => {
  return (
    <div className="min-h-screen  pt-10 font-sans">
      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Walkers</h1>
          <button>
            <svg width="24" height="24" fill="currentColor">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Favorites", "Popular", "Near you", "Recommended"].map((tag, i) => (
            <button
              key={i}
              className={`px-4 py-1 rounded-full border ${
                tag === "Popular"
                  ? "bg-[#C96CFF] text-white"
                  : "border-[#C96CFF] text-[#C96CFF]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-4">
          {walkers.map((walker, idx) => (
            <div
              key={idx}
              className="flex items-center bg-gray-50 rounded-xl p-3 shadow"
            >
              <img
                src={walker.image}
                alt={walker.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{walker.name}</h2>
                  <button>
                    {walker.favorite ? (
                      <Heart className="text-purple-500" />
                    ) : (
                      <Heart className="text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  {walker.rating} ({walker.reviews} reviews)
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {walker.location}
                </div>
              </div>
              <div className="text-right font-semibold text-lg">
                {walker.price}€<span className="text-sm font-normal">/h</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
            <Map className="w-4 h-4" /> Map
          </button>
        </div>
      </div>
    </div>
  );
};
