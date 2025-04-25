"use client";

import { useState } from "react";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:4000/users/login",
        user
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        router.push("/homePage");
        toast.success("Login successful!");
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/dog.jpg')] bg-cover gap-4 px-4">
      <div
        onClick={() => router.push("/sign-in")}
        className="absolute top-6 left-6 text-white cursor-pointer hover:scale-110 transition"
      >
        <ChevronLeft size={28} />
      </div>
      <h1 className="text-2xl font-bold text-white">Log In</h1>
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInput}
          className="p-2 w-full max-w-sm border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInput}
          className="p-2 w-full max-w-sm border rounded"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="border-[1px] bg-[#4f8541] border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-200 w-full py-3 mt-4 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};
export default LogIn;
