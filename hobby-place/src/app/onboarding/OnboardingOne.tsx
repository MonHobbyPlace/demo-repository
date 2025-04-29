/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

export default function OnboardingOne() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <button
        onClick={() => router.push("/login")}
        className="absolute top-6 right-6 text-white cursor-pointer hover:scale-110 transition"
      >
        <h1 className="Skip"></h1>
      </button>
      <div className="max-w-md">
        <h1 className="text-3xl font-bold">Find your perfect furry friend</h1>
        <p className="mt-4 text-lg">
          Browse through hundreds of adorable pets waiting to be adopted into a
          loving home.
        </p>
        <img
          src="/friend.jpg"
          alt="Adopt"
          className="mt-6 w-full h-48 object-fill mx-auto rounded-[8px]"
        />
      </div>
    </div>
  );
}
