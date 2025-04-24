// components/PetCard.tsx
"use client";

type PetCardProps = {
  name: string;
  breed: string;
  image: string;
  age: string;
};

export default function PetCard({ name, breed, image, age }: PetCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 hover:shadow-xl transition-shadow border border-pawPink">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-furBrown">{name}</h3>
        <p className="text-skyBlue font-medium">{breed}</p>
        <p className="text-sm text-gray-600">Age: {age}</p>
        <button className="mt-3 px-4 py-2 bg-grassGreen text-white font-semibold rounded hover:bg-green-600 transition">
          Adopt Me 🐾
        </button>
      </div>
    </div>
  );
}
