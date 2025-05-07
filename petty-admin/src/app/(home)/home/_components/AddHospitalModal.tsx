"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import { Plus } from "lucide-react";
import { useState } from "react";
import * as yup from "yup";
import { ImageFrame } from "./ImageFrame";
import { ImageLabel } from "./imageLabel";
import { AvatarImageFrame } from "./AvatarImageFrame";
import { AvatarImageLabel } from "./AvatarImageLabel";
import { MapWithDraggableMarker } from "./LocationTab";
import { ChooseCategory } from "./ChooseCategory";
import { useHospital } from "@/app/provider/HospitalProvider";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";

const validationSchema = yup.object({
  name: yup.string().required("Hospital name required."),
  backgroundImage: yup.string().required("Enter background image."),
  about: yup.string().required("Enter information of hospital "),
  workTime: yup.string().required("Working time required"),
  phoneNumber: yup
    .number()
    .required("Phone number required")
    .min(8, "Enter 8 digit"),
  email: yup.string().email("Wrong format").required("Email required"),
  location: yup.string().required("Location required"),
  avatarImage: yup
    .array()
    .of(yup.string().required("Each image is required"))
    .min(1, "At least one image is required"),
  category: yup
    .array()
    .of(yup.string().required("Each category is required"))
    .min(1, "At least one category is required"),
});

export const AddHospitalModal = (props: {
  initialValues: {
    name: string;
    backgroundImage: string;
    about: string;
    phoneNumber: number;
    email: string;
    workTime: string;
    location: string;
    avatarImage: string[];
    category: string[];
  };
}) => {
  const [backImage, setBackImage] = useState<File | null>();
  const [avatarImages, setAvatarImages] = useState<File[] | null | string[]>(
    []
  );
  const { addHospital } = useHospital();
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      name: "",
      backgroundImage: "",
      about: "",
      phoneNumber: 0,
      workTime: "",
      avatarImage: ["", "", "", ""],
      category: [""],
      email: "",
      location: "",
    },
    onSubmit: async (values) => {
      try {
        const uploadedBackgroundImg = await uploadImageToCloudinary(backImage);
        avatarImages?.map(async (img, index) => {
          const uploaded = await uploadImageToCloudinary(img as File);
          avatarImages[index] = uploaded;
        });
        await addHospital({
          ...values,
          backgroundImage: uploadedBackgroundImg,
          avatarImage: avatarImages as string[],
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleValueChange = (name: string, value: string | string[]) => {
    formik.setFieldValue(name, value);
  };
  const handleAvatarImageChange = (
    value: string,
    index: number,
    file: File | null
  ) => {
    const updatedAvatarImages = [...formik.values.avatarImage];

    updatedAvatarImages[index] = value;

    formik.setFieldValue("avatarImage", updatedAvatarImages);
    const updatedAvatarFiles = [...(avatarImages || [])];
    if (file) {
      updatedAvatarFiles[index] = file;
      setAvatarImages(updatedAvatarFiles as File[]);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-[49%] h-[290px] border-3 text-lg border-dashed border-blue-500 text-blue-500 hover:opacity-80 hover:text-blue-400 "
        >
          <div className="p-5 rounded-full bg-blue-400 ">
            <Plus color="white" size={20} />
          </div>
          <p>Add new hospital</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px] sm:max-h-[80%] bg-white  overflow-scroll">
        <DialogHeader>
          <DialogTitle>Add new hospital</DialogTitle>
          <DialogDescription>
            Enter hospital information in all field.
          </DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 py-4 h-full overflow-scroll">
            <div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Hospital name
                </Label>
                <Input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="col-span-3"
                  placeholder="Enter hospital name"
                />
              </div>
              <div className="w-full flex justify-end text-red-500">
                <p>{formik.errors.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="col-span-3"
                placeholder="Enter email"
              />
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.email}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phoneNumber" className="text-right">
                Phone number
              </Label>
              <Input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => {
                  formik.setFieldValue("phoneNumber", Number(e.target.value));
                }}
                value={formik.values.phoneNumber}
                className="col-span-3"
                placeholder="Enter phone number"
              />
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.phoneNumber}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="about" className="text-right">
                About
              </Label>
              <Textarea
                id="about"
                name="about"
                onChange={formik.handleChange}
                value={formik.values.about}
                className="col-span-3"
                placeholder="Enter detailed information of hospital"
              />
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.about}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="workTime" className="text-right">
                Work time
              </Label>
              <Input
                id="workTime"
                name="workTime"
                onChange={formik.handleChange}
                value={formik.values.workTime}
                className="col-span-3"
                placeholder="Enter hospital's work time"
              />
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.workTime}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <ChooseCategory handleValueChange={handleValueChange} />
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.category}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Background image</p>
              {formik.values.backgroundImage.length === 0 && (
                <ImageLabel
                  name="backgroundImage"
                  setBackImage={setBackImage}
                  handleValueChange={handleValueChange}
                />
              )}
              {formik.values.backgroundImage.length !== 0 && (
                <ImageFrame
                  imageUrl={formik.values.backgroundImage}
                  handleOnClick={() => handleValueChange("backgroundImage", "")}
                />
              )}
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.backgroundImage}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-sm font-bold">Avatar images</p>
              <div className="flex w-[550px] gap-2 flex-wrap ">
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[45%] border-2 rounded-xl h-[180px] flex items-center justify-center"
                    >
                      {formik.values.avatarImage[index].length !== 0 ? (
                        <AvatarImageFrame
                          imageUrl={formik.values.avatarImage[index]}
                          index={index}
                          handleOnClick={handleAvatarImageChange}
                        />
                      ) : (
                        <AvatarImageLabel
                          key={index}
                          index={index}
                          handleValueChange={handleAvatarImageChange}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {formik.errors.avatarImage && (
              <div className="w-full flex justify-end text-red-500">
                <p>Each image is required</p>
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <div className="w-[550px]">
                <MapWithDraggableMarker handleChange={handleValueChange} />
              </div>
            </div>
            <div className="w-full flex justify-end text-red-500">
              <p>{formik.errors.location}</p>
            </div>
          </div>
          <Button className="w-full p-7 my-6" type="submit">
            Add
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
