"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import { Plus } from "lucide-react";
import * as yup from "yup";

export const AddHospitalModal = () => {
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
    avatarImage: yup.array().required("Enter avatar images"),
    category: yup.array().required("Enter 4 avatar image").max(4),
  });
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      name: "",
      backgroundImage: "",
      about: "",
      phoneNumber: 0,
      workTime: "",
      avatarImage: [],
      category: [],
      email: "",
      location: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add new hospital</DialogTitle>
          <DialogDescription>
            Enter hospital information in all field.
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="grid gap-4 py-4">
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
          </div>
        </form>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
