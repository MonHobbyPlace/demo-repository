"use client";

import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
    if (!user.username) {
      toast.error("Username is required.");
      return;
    }

    if (!user.email) {
      toast.error("Email is required.");
      return;
    }

    if (!user.password) {
      toast.error("Password is required.");
      return;
    }

    if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/users", user);
      localStorage.setItem("token", response.data.token);
      toast.success("Account created successfully!");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/cat.jpg')] bg-cover bg-center gap-6 px-4 py-6">
      <button
        onClick={() => router.push("/login")}
        className="absolute top-6 right-6 text-white cursor-pointer hover:scale-110 transition border rounded-[8px] px-[5px]"
      >
        Log in
      </button>

      <h1 className="text-3xl font-bold text-white text-center">Sign Up</h1>

      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <input
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          className="p-3 w-full border border-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="p-3 w-full border border-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative w-full">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="p-3 w-full border border-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? (
              <EyeOff size={20} className="text-[blue]" />
            ) : (
              <Eye size={20} className="text-[blue]" />
            )}
          </button>
        </div>
        <button
          onClick={handleSignUp}
          disabled={loading}
          className="bg-[#4f8541] text-white font-semibold rounded-lg hover:bg-green-700 w-full py-3 mt-4 disabled:opacity-50 transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
