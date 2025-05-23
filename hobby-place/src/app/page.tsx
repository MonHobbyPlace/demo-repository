"use client"; // Add this line to mark the file as a client component

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStartOnboarding = () => {
    router.push("/onboarding"); // Navigate to the onboarding flow
  };

  return (
    <div className="w-screen h-screen  flex items-center justify-center bg-[#e1f7f5] text-[#03346E]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to Pet Adoption</h1>
        <p className="mt-4 text-lg">Ready to find your furry friend?</p>
        <button
          onClick={handleStartOnboarding}
          className="bg-[#03346E] text-white font-semibold rounded-full w-full py-3 mt-6"
        >
          Start Onboarding
        </button>
      </div>
    </div>
  );
}
