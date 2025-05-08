import { Label } from "@radix-ui/react-label";
import { Image } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
export const ImageLabel = (props: {
  setBackImage: Dispatch<SetStateAction<string | File | null>>;
  name: string;
  handleValueChange: (name: string, value: string) => void;
}) => {
  const { setBackImage, name, handleValueChange } = props;
  return (
    <Label className="flex items-center gap-2 cursor-pointer h-[180px] border-2 justify-center rounded-md">
      <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">
        <Image className="text-gray-500" size={24} />
      </div>
      <div>
        <h3 className="font-medium">Browse or Drop Image</h3>
        <p className="text-sm text-gray-500">Select an image file</p>
      </div>
      <input
        hidden
        type="file"
        accept="image/*"
        id={name}
        name={name}
        onChange={(e) => {
          const file = e.target.files?.[0];
          console.log(file);

          if (file) {
            setBackImage(file);
            const reader = new FileReader();
            reader.onload = () => {
              handleValueChange(name, reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </Label>
  );
};
