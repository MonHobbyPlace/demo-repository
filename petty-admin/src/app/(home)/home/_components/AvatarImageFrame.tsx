import { XCircle } from "lucide-react";

export const AvatarImageFrame = (props: {
  imageUrl: string;
  index: number;
  handleOnClick: (value: string, index: number, file: File | null) => void;
}) => {
  const { imageUrl, index, handleOnClick } = props;
  return (
    <div className="flex relative w-full h-[180px]">
      <img
        src={imageUrl}
        alt="Food preview"
        className="h-full w-full rounded border object-scale-down"
      />
      <XCircle
        color="gray"
        className="absolute top-5 right-5"
        onClick={() => handleOnClick("", index, null)}
      />
    </div>
  );
};
