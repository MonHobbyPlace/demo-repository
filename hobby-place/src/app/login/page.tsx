/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";

import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!user.email) {
      toast.error("Email is required.");
      return;
    }

    if (!user.password) {
      toast.error("Password is required.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
        user
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        toast.success("Login successful!");
        router.push("/homePage");
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#b2e0da] bg-cover gap-4 px-4 py-6">
      <img
        src="/cat3.jpg"
        alt="Decor 1"
        className="absolute top-10 left-5 w-28 h-28 rotate-12 animate-[wiggle_6s_ease-in-out_infinite] rounded-full"
      />
      <img
        src="/cat2.jpg"
        alt="Decor 2"
        className="absolute top-20 right-12 w-16 h-16 -rotate-10 animate-[wiggle_4s_ease-in-out_infinite] rounded-full"
      />
      <img
        src="/cat1.jpg"
        alt="Decor 3"
        className="absolute bottom-40 right-30 w-36 h-36 rotate-8 animate-[float_5s_ease-in-out_infinite] rounded-full"
      />
      <img
        src="/cat4.jpg"
        alt="Decor 4"
        className="absolute bottom-20 left-10 w-24 h-24 rotate-18 animate-[wiggle_5s_ease-in-out_infinite] rounded-full"
      />
      <img
        src="/cat5.jpg"
        alt="Decor 5"
        className="absolute bottom-10 right-5 w-28 h-28 -rotate-15 animate-[wiggle_4s_ease-in-out_infinite] rounded-full"
      />

      <button
        onClick={() => router.push("/sign-up")}
        className="absolute top-6 left-6 text-white cursor-pointer hover:scale-110 transition border rounded-full px-[5px]"
      >
        Sign up
        <ChevronLeft size={28} />
      </button>

      <h1 className="text-2xl font-bold text-white">Log In</h1>

      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInput}
          className="p-3 w-full border border-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative w-full">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={user.password}
            onChange={handleInput}
            className="p-3 w-full border border-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="text-[blue]" size={20} />
            ) : (
              <Eye size={20} className="text-[blue]" />
            )}
          </button>
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="backdrop-blur-[20px] text-white font-semibold rounded-lg  w-full py-3 mt-4 disabled:opacity-50 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
