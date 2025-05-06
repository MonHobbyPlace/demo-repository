import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { Hospital } from "../../_components/HospitalInfoBox";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";
import { toast } from "react-toastify";

export const RatingModal = (props: {
  hospital: Hospital;
  fetchData: () => Promise<void>;
}) => {
  const { hospital, fetchData } = props;
  const [rate, setRate] = useState(0);
  const handleRating = (rate: number) => {
    setRate(rate);
    console.log(rate);
  };
  const submitRating = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hospital/rate`,
        {
          rate: rate,
          id: hospital.id,
        }
      );
      console.log(response.data);
      await fetchData();
      toast("Thanks for rate us");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-2 items-center">
          <Star color="#03346E" fill="#03346E" size={18} />
          <p>{hospital.rating} stars </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rate us</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Stars
          </Label>
          <div className="rating rating-lg">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <input
                  key={index}
                  type="radio"
                  name="rating-9"
                  className="mask mask-star bg-amber-300"
                  aria-label="1 star"
                  onClick={() => handleRating(index + 1)}
                  aria-checked={rate === index + 1 ? true : false}
                />
              );
            })}
          </div>
        </div>

        <DialogClose>
          <div onClick={submitRating}>Save changes</div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
