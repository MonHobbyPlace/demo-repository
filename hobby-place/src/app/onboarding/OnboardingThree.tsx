"use client";

export default function OnboardingThree() {
  const handleCompleteOnboarding = () => {
    localStorage.setItem("onboardingComplete", "true");
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between text-center bg-blue-600 text-white px-6 py-10">
      <div className="max-w-md mt-10">
        <h1 className="text-3xl font-bold">Find playdates and pet friends</h1>
        <p className="mt-4 text-lg">
          Join a community of animal lovers. Schedule playdates or get advice
          from experienced owners.
        </p>
      </div>

      <img
        src="/comm.png"
        alt="Friends"
        className="w-48 h-48 object-contain mx-auto"
      />

      <div className="flex gap-4 w-full max-w-md">
        <button
          onClick={handleCompleteOnboarding}
          className="bg-white text-blue-600 font-semibold rounded-full w-full py-3"
        >
          Sign up
        </button>
        <button
          onClick={() => (window.location.href = "/login")}
          className="border border-white text-white font-semibold rounded-full w-full py-3"
        >
          Login
        </button>
      </div>
    </div>
  );
}
