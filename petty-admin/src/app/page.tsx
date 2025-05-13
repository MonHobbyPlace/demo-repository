/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";

import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Home() {
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

      if (data.success && data.role === "ADMIN") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        toast.success("Login successful!");
        router.push("/home");
      } else {
        toast.error("Login failed.You must be ADMIN");
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
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-400 bg-cover gap-4 px-4 py-6">
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
              <EyeOff className="text-white" size={20} />
            ) : (
              <Eye size={20} className="text-white" />
            )}
          </button>
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="backdrop-blur-[20px] text-blue-400 font-semibold rounded-lg  w-full py-3 mt-4 disabled:opacity-50 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border bg-white"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
