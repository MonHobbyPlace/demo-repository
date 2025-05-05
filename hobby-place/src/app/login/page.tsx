/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";

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
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/google-login`,
        user
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);

        // Check user role and route accordingly
        if (data.user.role === "admin") {
          router.push("/home"); // Admin homepage
        } else {
          router.push("/homePage"); // User homepage
        }

        toast.success("Login successful!");
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
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-400 bg-cover gap-4 px-4 py-6">
      <button
        onClick={() => router.push("/sign-up")}
        className="absolute top-6 left-6 text-white cursor-pointer hover:scale-110 transition border rounded-[8px] px-[5px] flex "
      >
        Sign up
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
              <EyeOff className="text-white" size={20} />
            ) : (
              <Eye size={20} className="text-white" />
            )}
          </button>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="backdrop-blur-[20px] text-blue-400 font-semibold rounded-lg w-full py-3 mt-4 disabled:opacity-50 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border bg-white"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-white" />
          <span className="px-2 text-white">OR</span>
          <hr className="flex-grow border-white" />
        </div>

        {/* ✅ Google Login Button */}
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const credential = credentialResponse.credential;
              if (!credential) return toast.error("Google token missing");

              console.log(credential);

              const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/users/google-login`,
                { token: credential }
              );

              if (data.success) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.user.id);
                toast.success("Logged in with Google!");
                router.push("/homePage");
              } else {
                toast.error(data.message || "Google login failed");
              }
            } catch (error: any) {
              console.error("Google login error:", error);
              toast.error(
                error.response?.data?.message ||
                  "Google login failed. Please try again."
              );
            }
          }}
          onError={() => {
            toast.error("Google Sign-in Failed");
          }}
        />
      </div>
    </div>
  );
}
