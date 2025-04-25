"use client";

import { useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [existingUser, setExistingUser] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const existingUsers = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users`
      );
      setExistingUser(existingUsers.data.email);
      console.log(existingUsers.data.email);

      if (existingUser && user.email) {
        toast.warning("user already exist");
      } else {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
          user
        );
        console.log("User created:", response.data);
        localStorage.setItem("token", response.data.token);
        toast.success("Good job created user");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/cat.jpg')] bg-cover bg-center gap-6 px-4 py-6">
      <div
        onClick={() => router.push("/log-in")}
        className="absolute top-6 right-6 text-white cursor-pointer hover:scale-110 transition"
      >
        <ChevronRight size={28} />
      </div>
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
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="p-3 w-full border border-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="border-[1px] bg-[#9a643f] border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-200 w-full py-3 mt-4 disabled:opacity-50"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
