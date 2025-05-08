"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Image, XCircle } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { usePetCategory } from "@/app/provider/PetCategoryProvider";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { toast } from "react-toastify";
const validationSchema = yup.object({
  name: yup.string().required("Name required"),
  image: yup.string().required("Image required"),
});
export function AddCategoryModal() {
  const [file, setFile] = useState<File | null>();
  const { addCategory } = usePetCategory();
  const [clicked, setClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setClicked(true);
        const uploadedImage = await uploadImageToCloudinary(file);
        await addCategory({ name: values.name, image: uploadedImage });
        resetForm();
        toast("New successfully added.");
      } catch (error) {
        console.log(error);
      } finally {
        setClicked(false);
      }
    },
  });
  return (
    <>
      {!clicked ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-blue-700 p-7">
              Add new category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new pet category</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-between">
                  <label htmlFor="name">Category name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="border"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <p className="text-red-500">{formik.errors.name}</p>
                </div>
                <div className="space-y-2">
                  <p>Category image</p>
                  {formik.values.image.length === 0 && (
                    <Label className="flex items-center gap-2 cursor-pointer">
                      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">
                        <Image className="text-gray-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">Browse or Drop Image</h3>
                        <p className="text-sm text-gray-500">
                          Select an image file
                        </p>
                      </div>
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        id="image"
                        name="image"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          console.log(file);

                          if (file) {
                            setFile(file);
                            const reader = new FileReader();
                            reader.onload = () => {
                              formik.setFieldValue(
                                "image",
                                reader.result as string
                              );
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </Label>
                  )}
                  {formik.values.image.length !== 0 && (
                    <div className="flex relative w-full h-[180px]">
                      <img
                        src={formik.values.image}
                        alt="Food preview"
                        className="h-full w-full rounded border object-scale-down"
                      />
                      <XCircle
                        color="gray"
                        className="absolute top-5 right-5"
                        onClick={() => formik.setFieldValue("image", "")}
                      />
                    </div>
                  )}
                  <div className="flex justify-end w-full">
                    <p className="text-red-500">{formik.errors.image}</p>
                  </div>
                </div>
                <div className="p-5 w-full">
                  <Button className="rounded-full w-full" type="submit">
                    Save changes
                  </Button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <>
          <Button className="rounded-full bg-blue-700 p-7">
            Adding <span className="loading loading-spinner loading-sm"></span>
          </Button>
        </>
      )}
    </>
  );
}
