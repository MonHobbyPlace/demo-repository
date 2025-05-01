/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

type UploadImageAndVideoProps = {
  setFieldValue: (field: string, value: File) => void;
};

export const UploadImageAndVideo = ({
  setFieldValue,
}: UploadImageAndVideoProps) => {
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePreviewChange = (
    file: File | undefined,
    type: "image" | "video"
  ) => {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setFieldValue(type, file);

    if (type === "video") {
      if (videoPreview) URL.revokeObjectURL(videoPreview);
      setVideoPreview(previewUrl);
      setCarouselIndex(1);
    } else {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview(previewUrl);
      setCarouselIndex(0);
    }
  };

  useEffect(() => {
    return () => {
      if (videoPreview) URL.revokeObjectURL(videoPreview);
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [videoPreview, imagePreview]);

  return (
    <>
      <div className="relative h-52 rounded-2xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center overflow-hidden group">
        <label
          htmlFor="image"
          className={`absolute inset-0 z-10 flex items-center justify-center text-gray-500 font-medium text-sm cursor-pointer transition-opacity ${
            imagePreview ? "opacity-0" : "opacity-100 group-hover:text-gray-700"
          }`}
        >
          Click to Upload Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          hidden
          onChange={(e) =>
            handlePreviewChange(e.currentTarget.files?.[0], "image")
          }
        />

        {imagePreview && carouselIndex === 0 && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {videoPreview && carouselIndex === 1 && (
          <video
            src={videoPreview}
            controls
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}
        {imagePreview && videoPreview && (
          <button
            type="button"
            onClick={() => setCarouselIndex((prev) => (prev === 0 ? 1 : 0))}
            className="absolute bottom-3 right-4 text-xs text-white bg-black/60 px-3 py-1 rounded-full hover:bg-black/80 transition z-30"
          >
            {carouselIndex === 0 ? "View Video →" : "← View Image"}
          </button>
        )}
      </div>

      <input
        id="video"
        type="file"
        accept="video/*"
        hidden
        onChange={(e) =>
          handlePreviewChange(e.currentTarget.files?.[0], "video")
        }
      />
      <label
        htmlFor="video"
        className="block text-sm font-medium text-gray-600 cursor-pointer hover:underline mt-2"
      >
        Upload a Video
      </label>

      {/* Uncomment these if using Formik error messages */}
      {/* <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
      <ErrorMessage name="video" component="div" className="text-red-500 text-sm" /> */}
    </>
  );
};
