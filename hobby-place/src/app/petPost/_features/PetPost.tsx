/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { petPostType, validationSchema } from "@/type";
export const PetPosts = () => {
  const { category, createPetPost } = usePetPost();
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleFileChange = (event, setFieldValue, type) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue(type, file);
      const previewUrl = URL.createObjectURL(file);
      if (type === "video") setVideoPreview(previewUrl);
      else if (type === "image") setImagePreview(previewUrl);
    }
  };


  return (
    <Formik
      initialValues={{
        petName: "",
        breed: "",
        size: "",
        age: 0,
        gender: "",
        purpose: "SALE",
        price: 0,
        video: "",
        image: "",
        phoneNumber: 0,
        address: "",
        petCategoryId:1,
        about: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values: petPostType) => {
        console.log("Submitted values:", values);
        createPetPost(values);
      }}
    >
      {({ values, setFieldValue }) => {
        useEffect(() => {
          setFieldValue("about", selectedOption);
        }, [selectedOption, setFieldValue]);
        const onClick=(id:string)=>{
          // setCategories(id)
          setFieldValue("petCategoryId",id)
          }
        return (
          <Form className="p-8 space-y-8 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl">
            {/* Image Upload */}
            <div className="relative h-60 rounded-2xl bg-gray-100 flex justify-center items-center overflow-hidden border-2 border-dashed border-gray-300 hover:border-gray-500 transition">
              <label
                htmlFor="image"
                className="absolute z-10 text-gray-600 font-semibold text-sm cursor-pointer"
              >
                {imagePreview ? "" : "Click to Upload Image"}
              </label>
              <Field name="image">
                {({ form }) => (
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(event) =>
                      handleFileChange(event, form.setFieldValue, "image")
                    }
                  />
                )}
              </Field>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                />
              )}
            </div>
            <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />

            <div className="flex gap-2 overflow-x-auto scroll-bar-hide">
        {category.map((element, index) => {
          return (
            <button
              key={index}
              className={`btn btn-outline bg-[white flex items-center justify-between rounded-full p-0 ${values.petCategoryId === element.id ? "opacity-100" : "opacity-60"}`}
              onClick={() => onClick(element.id)}
            >
              <img
                alt=""
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="w-9 rounded-full"
              />
              <div className="p-2">{element.name}</div>
            </button>
          );
        })}
      </div>

            <div className="space-y-6">
              <FieldBlock name="petName" label="Pet Name" placeholder="Enter pet name" />
              <FieldBlock name="breed" label="Pet Breed" placeholder="Enter breed" />

              <div className="flex md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Pet Size
                  </label>
                  <Select onValueChange={(val) => setFieldValue("size", val)}>
                    <SelectTrigger className="w-full rounded-lg">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {["BIG", "MIDDLE", "SMALL"].map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage name="size" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <FieldBlock name="age" label="Pet Age" placeholder="Enter age" />
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
                <div className="flex gap-6">
                  {["MALE", "FEMALE"].map((gender) => (
                    <label
                      key={gender}
                      className="inline-flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Field
                        type="radio"
                        name="gender"
                        value={gender}
                        className="accent-green-600"
                      />
                      {gender === "MALE" ? "Male" : "Female"}
                    </label>
                  ))}
                </div>
                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Sale or Adoption */}
              <Tabs
                defaultValue={values.purpose}
                onValueChange={(val) => setFieldValue("purpose", val)}
                className="w-full"
              >
                <TabsList className="bg-gray-100 rounded-md p-1">
                  <TabsTrigger value="SALE" className="w-1/2">
                    Sale
                  </TabsTrigger>
                  <TabsTrigger value="ADOPT" className="w-1/2">
                    Adopt
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="SALE">
                  <FieldBlock name="price" label="Price" placeholder="Enter price" />
                </TabsContent>
              </Tabs>

              {/* Video Upload */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Video</label>
                <Field name="video">
                  {({ form }) => (
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(event) =>
                        handleFileChange(event, form.setFieldValue, "video")
                      }
                      className="block w-full text-sm text-gray-600"
                    />
                  )}
                </Field>
                <ErrorMessage name="video" component="div" className="text-red-500 text-sm mt-1" />
                {videoPreview && (
                  <video
                    className="mt-4 rounded-lg shadow-md w-full"
                    controls
                    src={videoPreview}
                  />
                )}
              </div>

              {/* Contact Info */}
              <FieldBlock name="phoneNumber" label="Phone Number" placeholder="Enter phone number" />
              <FieldBlock name="address" label="Address" placeholder="Enter Address" />

              {/* About Toggle Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
                <ToggleGroup
                  type="multiple"
                  className=""
                  variant="outline"
                >
                  {[
                    "Spray",
                    "Toilet trained",
                    "Good with cats",
                    "Likes to walk",
                    "Likes to play",
                    "Good with kids",
                    "Good with dogs",
                    "Good with other pets",
                    "Not a biter",
                  ].map((about) => (
                    <ToggleGroupItem
                      key={about}
                      value={about}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-opacity duration-200 ${
                        selectedOption.includes(about)
                          ? "bg-blue-100 text-blue-700 border-blue-300 opacity-100"
                          : "bg-gray-100 text-gray-500 border-gray-300 hover:opacity-60 opacity-30"
                      }`}
                      onClick={() => {
                        if (selectedOption.includes(about)) {
                          setSelectedOption((prev) =>
                            prev.filter((item) => item !== about)
                          );
                        } else {
                          setSelectedOption((prev) => [...prev, about]);
                        }
                      }}
                    >
                      {about}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
                <ErrorMessage
                  name="about"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>


              <Button type="submit" className="w-full mt-4 text-lg py-6 rounded-xl">
                Submit Pet
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
type FieldBlockProps = {
  name: string;
  label: string;
  placeholder?: string;
};

const FieldBlock = ({ name, label, placeholder }: FieldBlockProps) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <Field name={name} as={Input} placeholder={placeholder} />
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);
