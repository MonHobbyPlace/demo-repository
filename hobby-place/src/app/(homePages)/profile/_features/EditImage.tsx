/* eslint-disable @next/next/no-img-element */
import { Camera } from "lucide-react";

export const EditImage = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 w-full">
        <img
          src="hospital2.jpeg"
          alt="background image"
          className="w-full h-[200px]  "
        />
        <div className="absolute bottom-4  right-4">
          <label htmlFor="background">
            <div className="bg-gray-300 p-[8px] rounded-full border">
              <Camera color="white" size={15} />
            </div>
          </label>
          <input hidden type="file" accept="image/*" id="background" />
        </div>
      </div>
      <div className="absolute top-25 left-5">
        <img
          src="cat.jpg"
          alt="profile image"
          className="w-[150px] h-[150px] rounded-full border-5"
        />
        <div className="absolute bottom-2 right-2">
          <label htmlFor="profileImage">
            <div className="bg-gray-300 p-[8px] rounded-full border">
              <Camera color="white" size={15} />
            </div>
          </label>
          <input hidden type="file" accept="image/*" id="profileImage" />
        </div>
      </div>
    </div>
  );
};
