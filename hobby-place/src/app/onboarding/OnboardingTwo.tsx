/* eslint-disable @next/next/no-img-element */
"use client";

export default function OnboardingTwo() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold">Support and rescue pets easily</h1>
        <p className="mt-4 text-lg">
          Donate, foster, or share profiles of pets in need and be a hero for
          homeless animals.
        </p>
        <img
          src="/fam-dog.jpg"
          alt="Help"
          className="mt-6 w-full h-48 object-fill mx-auto rounded-[8px]"
        />
      </div>
    </div>
  );
}
