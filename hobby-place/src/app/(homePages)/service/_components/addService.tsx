/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCategorySelect from "./serviceCategorySelect";
import PetCategorySelect from "./petCategorySelect";
import { toast } from "react-toastify";
import { useProfile } from "@/app/provider/ProfileProvider";

type Category = {
  id: number;
  name: string;
};

type ServiceForm = {
  address: string;
  about: string;
  image: string;
  phoneNumber: string;
  age: string;
  // purpose: "SALE" | "ADOPT" | "";
  petCategoryId: string;
  cost: string;
  skill: string;
  serviceId: string;
};

export const AddService = () => {
  const [service, setService] = useState<ServiceForm>({
    address: "",
    about: "",
    image: "",
    phoneNumber: "",
    age: "",
    // purpose: "",
    petCategoryId: "",
    cost: "",
    skill: "",
    serviceId: "",
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [serviceCategories, setServiceCategories] = useState<Category[]>([]);
  const [petCategories, setPetCategories] = useState<Category[]>([]);

  const { user } = useProfile();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, petsRes] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/serviceCategory`),
          axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/petCategory`),
        ]);
        setServiceCategories(servicesRes.data);
        setPetCategories(petsRes.data);
      } catch (err) {
        console.error("Error fetching categories", err);
      }
    };

    fetchData();
  }, []);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };
  const removePhoto = () => {
    setService((prev) => ({ ...prev, image: "" }));
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET!);

    try {
      setUploading(true);
      const res = await axios.post(
        process.env.NEXT_PUBLIC_CLOUDINARY_URL!,
        formData
      );
      const imageUrl = res.data.secure_url;
      setService((prev) => ({ ...prev, image: imageUrl }));
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const servicePost = async () => {
    if (!user.id) {
      toast.error("User not authenticated.");
      return;
    }

    try {
      setLoading(true);
      const preparedService = {
        ...service,
        age: service.age ? Number(service.age) : null,

        phoneNumber: Number(service.phoneNumber),
        petCategoryId: Number(service.petCategoryId),
        cost: Number(service.cost),
        serviceId: Number(service.serviceId),
        skill: service.skill.split(",").map((s) => s.trim()),
        userId: Number(user.id),
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/servicePost`,
        preparedService
      );
      console.log("Service posted successfully:", response.data);

      toast.success("Successfully added service");
      setService({
        address: "",
        about: "",
        image: "",
        phoneNumber: "",
        age: "",
        // purpose: "",
        petCategoryId: "",
        cost: "",
        skill: "",
        serviceId: "",
      });
    } catch (error) {
      console.error("Error posting service:", error);
      toast.error("Please fill all the inputs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-screen overflow-y-auto scroll-smooth p-6 flex flex-col gap-5 max-w-xl mx-auto bg-white rounded-xl shadow-md pb-[150px]">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Add a Service
      </h1>

      <input
        name="address"
        placeholder="Address"
        value={service.address}
        onChange={handleInput}
        className="border p-2 rounded-md"
      />

      <input
        name="about"
        placeholder="About"
        value={service.about}
        onChange={handleInput}
        className="border p-2 rounded-md"
      />

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Photo</label>

        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
        {service.image ? (
          <div className="relative w-full">
            <img
              src={service.image}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={removePhoto}
              className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded-md hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="border p-2 rounded-md w-full"
          />
        )}
      </div>

      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={service.phoneNumber}
        onChange={handleInput}
        className="border p-2 rounded-md"
      />

      <div className="flex gap-[14px] w-full">
        <input
          name="age"
          placeholder="Pet Age"
          value={service.age}
          onChange={handleInput}
          className="border w-full p-2 rounded-md"
        />

        <input
          name="cost"
          placeholder="Cost"
          value={service.cost}
          onChange={handleInput}
          className="border w-full p-2 rounded-md"
        />
      </div>

      <input
        name="skill"
        placeholder="Skills (comma-separated)"
        value={service.skill}
        onChange={handleInput}
        className="border p-2 rounded-md"
      />

      {/* <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Purpose
        </label>
        <Select
          value={service.purpose}
          onValueChange={(value) =>
            setService((prev) => ({
              ...prev,
              purpose: value as "SALE" | "ADOPT",
            }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SALE">Sale</SelectItem>
            <SelectItem value="ADOPT">Adopt</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      <PetCategorySelect
        options={petCategories}
        value={service.petCategoryId}
        onChange={(value) =>
          setService((prev) => ({ ...prev, petCategoryId: value }))
        }
      />

      <ServiceCategorySelect
        options={serviceCategories}
        value={service.serviceId}
        onChange={(value) =>
          setService((prev) => ({ ...prev, serviceId: value }))
        }
      />

      <button
        disabled={loading}
        onClick={servicePost}
        className={`py-2 px-4 rounded-md text-white font-semibold transition duration-200 ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Posting..." : "Add Service"}
      </button>
    </div>
  );
};
