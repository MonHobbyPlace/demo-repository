import axios from "axios";
export const uploadImageToCloudinary = async (file: File) => {
  if (!file) return null;

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET || ""
    );

    const response = await axios.post(
      process.env.NEXT_PUBLIC_CLOUDINARY_URL || "",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.secure_url;
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};
