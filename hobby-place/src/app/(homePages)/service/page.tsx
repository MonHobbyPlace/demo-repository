"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jwtDecode } from "jwt-decode";

type Category = {
  id: number;
  name: string;
};

export default function Service() {
  const [service, setService] = useState({
    address: "",
    about: "",
    image: "",
    phoneNumber: "",
    age: "",
    purpose: "",
    petCategoryId: "",
    cost: "",
    skill: "",
    serviceId: "",
  });

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [serviceCategories, setServiceCategories] = useState<Category[]>([]);
  const [petCategories, setPetCategories] = useState<Category[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: { userId: number } = jwtDecode(token);
        setUserId(decoded.userId);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }

    const fetchData = async () => {
      try {
        const [servicesRes, petsRes] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/serviceCategory`),
          axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`),
        ]);

        console.log("Service categories:", servicesRes.data);
        console.log("Pet categories:", petsRes.data);

        setServiceCategories(servicesRes.data); // Make sure this is an array
        setPetCategories(petsRes.data);
      } catch (err) {
        console.error("Error fetching categories", err);
      }
    };

    fetchData();
  }, []);

  const servicePost = async () => {
    if (!userId) {
      alert("User not authenticated.");
      return;
    }

    try {
      setLoading(true);
      const preparedService = {
        ...service,
        age: Number(service.age),
        petCategoryId: Number(service.petCategoryId),
        cost: Number(service.cost),
        serviceId: Number(service.serviceId),
        phoneNumber: Number(service.phoneNumber),
        skill: service.skill.split(",").map((s) => s.trim()),
        userId,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/servicePost`,
        preparedService
      );

      console.log("Posted:", response.data);
      alert("Service posted successfully!");
    } catch (error) {
      console.error("Error posting service:", error);
      alert("Failed to post service.");
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen p-6 flex flex-col gap-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Add a Service</h1>

      <input
        name="address"
        placeholder="Address"
        value={service.address}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="about"
        placeholder="About"
        value={service.about}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="image"
        placeholder="Image URL"
        value={service.image}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={service.phoneNumber}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="age"
        placeholder="Pet Age"
        value={service.age}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="purpose"
        placeholder="Purpose (e.g. SALE)"
        value={service.purpose}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="cost"
        placeholder="Cost"
        value={service.cost}
        onChange={handleInput}
        className="border p-2"
      />
      <input
        name="skill"
        placeholder="Skills (comma-separated)"
        value={service.skill}
        onChange={handleInput}
        className="border p-2"
      />

      {/* Pet Category Select using Shadcn */}
      <div>
        <label className="text-sm font-medium">Pet Category</label>
        <Select
          onValueChange={(value) =>
            setService((prev) => ({ ...prev, petCategoryId: value }))
          }
        >
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Select Pet Category" />
          </SelectTrigger>
          <SelectContent>
            {petCategories.map((cat) => (
              <SelectItem key={cat.id} value={String(cat.id)}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium">Service Category</label>
        <Select
          onValueChange={(value) =>
            setService((prev) => ({ ...prev, serviceId: value }))
          }
        >
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Select Service Category" />
          </SelectTrigger>
          <SelectContent>
            {serviceCategories.map((cat) => (
              <SelectItem key={cat.id} value={String(cat.id)}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <button
        disabled={loading}
        onClick={servicePost}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4"
      >
        {loading ? "Posting..." : "Add Service"}
      </button>
    </div>
  );
}
