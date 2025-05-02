"use client";
import { useFormik } from "formik";
import zod from "zod";
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
const inputType = zod.object({
  name: zod.string().min(1, "Name required"),
  image: zod.string().min(1, "Image required"),
});
export function AddCategoryModal() {
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },
    validationSchema: inputType,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      resetForm();
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new pet category</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex">
              <label htmlFor="name">Category name</label>
              <input
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label htmlFor="image">Category image</label>
              <input
                type="text"
                id="image"
                value={formik.values.image}
                onChange={formik.handleChange}
              />
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
