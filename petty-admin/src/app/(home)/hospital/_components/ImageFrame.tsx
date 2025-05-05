import { XCircle } from "lucide-react";

export const ImageFrame=(props:{imageUrl:string,
    handleOnClick:(name:string)=>void
})=>{
    const {imageUrl,handleOnClick}=props
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
          onClick={() => handleOnClick("image")}
        />
      </div>
    );
}