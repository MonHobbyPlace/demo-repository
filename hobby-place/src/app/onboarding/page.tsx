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
  const backPage = () => {
    if (step !== 1) {
      setStep(step - 1);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-blue-900 text-white px-6 py-10">
      <button
        onClick={() => backPage()}
        className="absolute top-6 left-6 text-white cursor-pointer hover:scale-110 transition border rounded-[8px] px-[5px]"
      >
        Back
      </button>
      <button
        onClick={() => router.push("/sign-up")}
        className="absolute top-6 right-6 text-white cursor-pointer hover:scale-110 transition border rounded-[8px] px-[5px]"
      >
        Skip
      </button>
      {step === 1 && <OnboardingOne />}
      {step === 2 && <OnboardingTwo />}
      {step === 3 && <OnboardingThree />}

      {step === 3 ? (
        ""
      ) : (
        <button
          onClick={goToNextStep}
          className="bg-white text-blue-600 font-semibold rounded-full w-full py-3"
        >
          Continue
        </button>
      )}
    </div>
  );
}
