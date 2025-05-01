"use client";

/* eslint-disable @next/next/no-img-element */
import { usePetPost, validationSchema } from "@/app/provider/PetPostProvider";
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
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UploadImageAndVideo } from "../_components/UploadImageAndVideo";

export const PetPosts = () => {
  const { category } = usePetPost();

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
        address: "",
        about: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="p-6 pt-2 space-y-8 max-w-xl mx-auto bg-white rounded-2xl shadow-md">
          <Link
            className="bg-white p-2 rounded-full shadow-lg cursor-pointer"
            href={"/homePage"}
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </Link>

          <UploadImageAndVideo setFieldValue={setFieldValue} />

          <div className="flex gap-2 overflow-x-auto scroll-bar-hide">
            {category.map((element, index) => {
              return (
                <button
                  key={index}
                  className={`btn btn-outline bg-[white flex items-center justify-between rounded-full p-0 ? "opacity-100" : "opacity-60"`}
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

          <div className="space-y-4">
            <FieldBlock
              name="name"
              label="Pet Name"
              placeholder="Enter pet name"
            />
            <FieldBlock name="breed" label="Breed" placeholder="Enter breed" />

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Size</label>
                <Select onValueChange={(val) => setFieldValue("size", val)}>
                  <SelectTrigger className="w-full">
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
              <FieldBlock name="age" label="Age" placeholder="Enter age" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <div className="flex gap-6">
                {["MALE", "FEMALE"].map((gender) => (
                  <label
                    key={gender}
                    className="inline-flex items-center gap-2 text-sm"
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

            <Tabs
              defaultValue={values.purpose}
              onValueChange={(val) => setFieldValue("purpose", val)}
              className="w-full"
            >
              <TabsList>
                <TabsTrigger value="Sale">Sale</TabsTrigger>
                <TabsTrigger value="Adopt">Adopt</TabsTrigger>
              </TabsList>
              <TabsContent value="Sale">
                <FieldBlock
                  name="price"
                  label="Price"
                  placeholder="Enter price"
                />
              </TabsContent>
            </Tabs>

            {/* <FieldBlock
              name="phone"
              label="Phone Number"
              placeholder="Enter phone number"
            /> */}
            <FieldBlock
              name="address"
              label="Address"
              placeholder="Enter address"
            />

            <div>
              <label className="block text-sm font-medium mb-1">About</label>
              <ToggleGroup
                type="multiple"
                className="w-full flex flex-wrap gap-2"
                variant="outline"
              >
                {[
                  "Spray",
                  "Toilet trained",
                  " Good with cats",
                  " Likes to wolk",
                  "Likes to play",
                  "Good with kids",
                  "Good with dogs",
                  "Good with other pets",
                  "Not a bite",
                ].map((about) => (
                  <label
                    key={about}
                    className="inline-flex items-center gap-2 text-sm"
                  >
                    <ToggleGroupItem value={about}>{about}</ToggleGroupItem>
                  </label>
                ))}
                <Input
                  type="text"
                  placeholder="Other"
                  className="w-full mt-2"
                  onChange={(e) => setFieldValue("other", e.target.value)}
                />
                <ErrorMessage
                  name="other"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </ToggleGroup>
            </div>
          </div>

          <Button type="submit" className="w-full mt-6 text-lg">
            Submit Pet
          </Button>
        </Form>
      )}
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
    <label className="block text-sm font-medium mb-1">{label}</label>
    <Field name={name} as={Input} placeholder={placeholder} />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
