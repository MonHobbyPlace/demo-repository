/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async () => {
    if (!user.username) return toast.error("Username is required.");
    if (!user.email) return toast.error("Email is required.");
    if (!user.password) return toast.error("Password is required.");
    if (user.password.length < 6)
      return toast.error("Password must be at least 6 characters long.");

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
        user
      );
      localStorage.setItem("token", response.data.token);
      toast.success("Account created successfully!");
      router.push("/login");
    } catch (error: any) {
      // Log detailed error response
      console.error("Error during signup:", error);
      toast.error("Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      const credential = credentialResponse.credential;
      if (!credential) return toast.error("Google token missing");

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/google-login`,
        { token: credential }
      );

      localStorage.setItem("token", res.data.token);
      toast.success("Logged in with Google!");
      router.push("/login");
    } catch (error: any) {
      // Log detailed error response
      console.error("Error during Google login:", error);
      toast.error("Google sugn up failed");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-center gap-6 px-4 text-black">
      <div className="relative h-screen w-screen bg-[#e1f7f5] bg-cover bg-center overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-6 h-full w-full px-4 py-6">
          <button
            onClick={() => router.push("/")}
            className="absolute top-6 left-6 text-[#03346E] cursor-pointer hover:scale-110 transition border border-[#03346E] rounded-[8px] p-3"
          >
            Back
          </button>
          <button
            onClick={() => router.push("/login")}
            className="absolute top-6 right-6 text-[#03346E] cursor-pointer hover:scale-110 transition border-[#03346E]  border rounded-[8px] p-3"
          >
            Log in
          </button>

          <h1 className="text-3xl font-bold text-[#03346E] text-center">
            Sign Up
          </h1>

          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <input
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              className="p-3 w-full border border-[#03346E] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="p-3 w-full border border-[#03346E] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative w-full">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="p-3 w-full border border-[#03346E] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-[#03346E]" />
                ) : (
                  <Eye size={20} className="text-[#03346E]" />
                )}
              </button>
            </div>

            <button
              onClick={handleSignUp}
              disabled={loading}
              className="text-white font-semibold rounded-lg w-full py-3 mt-4 disabled:opacity-50 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none backdrop-blur-[8px] bg-[#03346E]"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Divider */}
            <div className="flex items-center w-full my-4">
              <hr className="flex-grow border-[#03346E]" />
              <span className="px-2 text-[#03346E]">OR</span>
              <hr className="flex-grow border-[#03346E]" />
            </div>

            {/* ✅ Google Login Button */}
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.error("Google sign-in error:");
                toast.error("Google Sign-in Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
