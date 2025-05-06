import { Label } from "@radix-ui/react-label";
import { Image } from "lucide-react";
export const AvatarImageLabel = (props: {
  index: number;
  handleValueChange: (value: string, index: number, file: File | null) => void;
}) => {
  const { index, handleValueChange } = props;
  return (
    <Label className="flex items-center gap-2 cursor-pointer">
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
        id="image"
        name="image"
        onChange={(e) => {
          const file = e.target.files?.[0];
          console.log(file);

          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              handleValueChange(reader.result as string, index, file);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </Label>
  );
};
