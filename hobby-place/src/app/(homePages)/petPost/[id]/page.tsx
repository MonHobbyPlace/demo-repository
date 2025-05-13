/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { usePetPost } from "@/app/provider/PetPostProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { petPostType, validationSchema } from "@/type";
import axios from "axios";
import { ChevronLeft, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
const CLOUDINARY_UPLOAD_PRESET = "ml_default";
const CLOUDINARY_CLOUD_NAME = "dp1u0n6zb";
const CLOUDINARY_IMAGE_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
const CLOUDINARY_VIDEO_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`;
type MyFormValues = {
  video: File | null;
  image: File | null;
};
const PetPosts = () => {
  const { category, updatePetPost } = usePetPost();
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [petPostId, setPetPostId] = useState({} as unknown as petPostType);
  const { id } = useParams();
  const setPetPostForId = async () => {
    try {

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/petPost/petId/${id}`
      );
      setPetPostId(response.data.data);
    } catch (error) {
      console.error("Error setting pet post ID:", error);
    } 
  };
  useEffect(() => {
    setPetPostForId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (arg0: string, arg1: File) => void,
    type: "image" | "video"
  ) => {
    const file = event?.target?.files?.[0];
    if (!file) return;

    setFieldValue(type, file);

    const reader = new FileReader();
    reader.onload = async () => {
      const previewUrl = reader.result as string;

      if (type === "image") {
        const uploadedUrl = await uploadToCloudinary(file, "image");
        setImagePreview(uploadedUrl);
        setFieldValue("image", uploadedUrl);
      } else if (type === "video") {
        console.log("Video Preview:", previewUrl);
        const uploadedUrl = await uploadToCloudinary(file, "video");
        console.log("Uploaded Video URL:", uploadedUrl);
        setVideoPreview(uploadedUrl);
        setFieldValue("video", uploadedUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const uploadToCloudinary = async (file: File, type: "image" | "video") => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const uploadUrl =
        type === "image" ? CLOUDINARY_IMAGE_URL : CLOUDINARY_VIDEO_URL;

      const response = await axios.post(uploadUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        petName: petPostId.petName || "",
        breed: petPostId.breed || "",
        size: petPostId.size || "",
        age: petPostId.age || 0,
        gender: petPostId.gender || "",
        purpose: petPostId.purpose || "",
        price: petPostId.price || 0,
        video: petPostId.video || "",
        image: petPostId.image || "",
        phoneNumber: petPostId.phoneNumber || 0,
        address: petPostId.address || "",
        petCategoryId: petPostId.petCategoryId || 0,
        about: petPostId.about || "",
      }}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values: petPostType) => {
        updatePetPost(values, Number(id));
      }}
    >
      {({ values, setFieldValue }) => {
        useEffect(() => {
          setFieldValue("about", selectedOption.join(", "));
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedOption, setFieldValue]);
        const onClick = (id: string) => {
          setFieldValue("petCategoryId", Number(id));
        };
        return (
          <div className="overflow-y-auto scroll-bar-hide h-screen">
            <Form className="px-8 space-y-4 py-2 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl  ">
              <ChevronLeft
                onClick={() => router.push(`/profile`)}
                className="cursor-pointers"
              />
              <div className="relative h-60 rounded-2xl bg-gray-100 flex justify-center items-center overflow-hidden border-2 border-dashed border-gray-300 hover:border-gray-500 transition">
                {loading === true ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                  </>
                ) : (
                  <>
                    <label
                      htmlFor="image"
                      className="absolute z-10 text-gray-600 font-semibold text-sm cursor-pointer"
                    >
                      {imagePreview ? "" : "Click to Upload Image"}
                    </label>
                    <Field name="image">
                      {({ form }: { form: FormikProps<MyFormValues> }) => (
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
                  </>
                )}
              </div>
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-500 text-sm"
              />

              <div className="flex gap-2 overflow-x-auto scroll-bar-hide">
                {category.map((element, index) => {
                  return (
                    <button
                      key={index}
                      className={`btn btn-outline bg-[white flex items-center justify-between rounded-full p-0 ${
                        values.petCategoryId === Number(element.id)
                          ? "opacity-100 bg-black text-white"
                          : "opacity-60"
                      }`}
                      onClick={() => onClick(element.id)}
                    >
                      <img
                        alt=""
                        src={element.image}
                        className="w-9 rounded-full h-9"
                      />
                      <div className="p-2">{element.name}</div>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-6">
                <FieldBlock
                  name="petName"
                  label="Pet Name"
                  placeholder="Enter pet name"
                />
                <FieldBlock
                  name="breed"
                  label="Pet Breed"
                  placeholder="Enter breed"
                />

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
                    <ErrorMessage
                      name="size"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <FieldBlock
                    name="age"
                    label="Pet Age"
                    placeholder="Enter age"
                  />
                </div>

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
                    <FieldBlock
                      name="price"
                      label="Price"
                      placeholder="Enter price"
                    />
                  </TabsContent>
                </Tabs>
                {loading === true ? (
                  <>
                    {" "}
                    <span className="loading loading-spinner loading-sm"></span>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Video
                      </label>
                      <Field name="video">
                        {({ form }: { form: FormikProps<MyFormValues> }) => (
                          <input
                            type="file"
                            accept="video/*"
                            onChange={(event) =>
                              handleFileChange(
                                event,
                                form.setFieldValue,
                                "video"
                              )
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
                  </>
                )}

                <FieldBlock
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter phone number"
                />
                <FieldBlock
                  name="address"
                  label="Address"
                  placeholder="Enter Address"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    About
                  </label>
                  <ToggleGroup
                    type="multiple"
                    className="flex flex-wrap w-full gap-2"
                    variant="outline"
                  >
                    {[
                      "Spray",
                      "Toilet trained",
                      "Good with animals",
                      "Likes to walk",
                      "Likes to play",
                      "Good with kids",
                      "Good with other pets",
                      "Not a biter",
                    ].map((about) => (
                      <ToggleGroupItem
                        key={about}
                        value={about}
                        className={`px-3 py-1.5 text-sm rounded-full border transition-opacity shrink-0 duration-200 min-w-fit ${
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

                    <Dialog>
                      <DialogTrigger>
                        {" "}
                        <Plus className="p-2 rounded-full bg-blue-200 w-8 h-8" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle></DialogTitle>
                          <DialogDescription>
                            <Textarea
                              placeholder="Other information for a pet"
                              onChange={(event) => setOther(event.target.value)}
                            />
                          </DialogDescription>
                        </DialogHeader>
                        <DialogClose className="flex justify-end  ">
                          <p
                            className="p-2 rounded-lg px-4 bg-black text-white"
                            onClick={() =>
                              setSelectedOption((prev) => [...prev, other])
                            }
                          >
                            Save
                          </p>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </ToggleGroup>
                  <ErrorMessage
                    name="about"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-4 text-lg py-6 rounded-xl"
                  onClick={() => router.push("/profile")}
                >
                  Submit Pet
                </Button>
              </div>
            </Form>
          </div>
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
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
export default PetPosts;
