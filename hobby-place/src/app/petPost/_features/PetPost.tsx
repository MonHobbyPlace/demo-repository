"use client";

/* eslint-disable @next/next/no-img-element */
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Pet name is required"),
  breed: Yup.string().required("Breed is required"),
  size: Yup.string().required("Pet size is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  purpose: Yup.string().required("Purpose is required"),
  price: Yup.string().when("purpose", {
    is: "Sale",
    then: (schema) => schema.required("Price is required for sale"),
  }),
  video: Yup.mixed()
    .required("Video is required")
    .test("fileType", "Only video files are allowed", (value) =>
      value ? value.type.startsWith("video/") : false
    ),
  image: Yup.mixed()
    .required("Image is required")
    .test("fileType", "Only image files are allowed", (value) =>
      value ? value.type.startsWith("image/") : false
    ),
  phone: Yup.string().required("Phone number is required"),
});

export const PetPosts = () => {
  const { category } = usePetPost();
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
        name: "",
        breed: "",
        size: "",
        age: "",
        gender: "",
        purpose: "Sale",
        price: "",
        video: "",
        image: "",
        phone: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
      }}
    >
      {({ values, setFieldValue }) => (
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
          <ErrorMessage
            name="image"
            component="div"
            className="text-red-500 text-sm"
          />

          {/* Category Selector */}
          <div className="flex gap-3 overflow-x-auto scroll-bar-hide py-1">
            {category.map((element, index) => (
              <button
                key={index}
                type="button"
                className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 rounded-full px-4 py-2 bg-white hover:shadow-sm transition"
              >
                <img
                  alt={element.name}
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">
                  {element.name}
                </span>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <FieldBlock
              name="name"
              label="Pet Name"
              placeholder="Enter pet name"
            />
            <FieldBlock
              name="breed"
              label="Pet Breed"
              placeholder="Enter breed"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Pet Size
                </label>
                <Select onValueChange={(val) => setFieldValue("size", val)}>
                  <SelectTrigger className="w-full rounded-lg">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Big", "Middle", "Small"].map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ErrorMessage
                  name="size"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <FieldBlock name="age" label="Pet Age" placeholder="Enter age" />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Gender
              </label>
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
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Sale or Adoption */}
            <Tabs
              defaultValue={values.purpose}
              onValueChange={(val) => setFieldValue("purpose", val)}
              className="w-full"
            >
              <TabsList className="bg-gray-100 rounded-md p-1">
                <TabsTrigger value="Sale" className="w-1/2">
                  Sale
                </TabsTrigger>
                <TabsTrigger value="Adopt" className="w-1/2">
                  Adopt
                </TabsTrigger>
              </TabsList>

              <TabsContent value="Sale">
                <FieldBlock
                  name="price"
                  label="Price"
                  placeholder="Enter price"
                />
              </TabsContent>
            </Tabs>

            {/* Video Upload */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Video
              </label>
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
              <ErrorMessage
                name="video"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              {videoPreview && (
                <video
                  className="mt-4 rounded-lg shadow-md w-full"
                  controls
                  src={videoPreview}
                />
              )}
            </div>

            {/* Phone */}
            <FieldBlock
              name="phone"
              label="Phone Number"
              placeholder="Enter phone number"
            />

            <Button
              type="submit"
              className="w-full mt-4 text-lg py-6 rounded-xl"
            >
              Submit Pet
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

// Field Block Helper
const FieldBlock = ({ name, label, placeholder }) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <Field name={name} as={Input} placeholder={placeholder} />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
