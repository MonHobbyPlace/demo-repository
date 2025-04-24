"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import OnboardingOne from "./OnboardingOne";
import OnboardingTwo from "./OnboardingTwo";
import OnboardingThree from "./OnboardingThree";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const goToNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-blue-600 text-white px-6 py-10">
      {step === 1 && <OnboardingOne />}
      {step === 2 && <OnboardingTwo />}
      {step === 3 && <OnboardingThree />}

      <button
        onClick={goToNextStep}
        className="bg-white text-blue-600 font-semibold rounded-full w-full py-3"
      >
        {step === 3 ? "Start your journey" : "Continue"}
      </button>
    </div>
  );
}
