/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

export default function OnboardingThree() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-between text-center bg-blue-400 text-white px-6 py-10">
      <div className="max-w-md mt-10">
        <h1 className="text-3xl font-bold">Find playdates and pet friends</h1>
        <p className="mt-4 text-lg">
          Join a community of animal lovers. Schedule playdates or get advice
          from experienced owners.
        </p>
      </div>

      <img
        src="/pet-friend.png"
        alt="Friends"
        className="w-full h-48 mx-auto object-fill rounded-[8px]"
      />

      <div className="flex gap-4 w-full max-w-md">
        <button
          onClick={() => router.push("/login")}
          className="bg-white text-blue-400 font-semibold rounded-full w-full py-3"
        >
          Sign up
        </button>
        <button
          onClick={() => router.push("/login")}
          className="border border-white text-white font-semibold rounded-full w-full py-3"
        >
          Login
        </button>
      </div>
    </div>
  );
}
