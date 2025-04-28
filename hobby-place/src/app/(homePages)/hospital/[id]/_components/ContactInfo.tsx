import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Hospital } from "../../_components/HospitalInfoBox";
import { Copy, Mail, Phone } from "lucide-react";

export const ContactInfo = (props: { hospital: Hospital }) => {
  const { hospital } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-[94%] bg-[#03346E] text-[#e1f7f5] rounded-full p-5"
        >
          Contact us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact informations</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 items-center text-[#03045e]">
          <Mail size={15} color="#03045e" />
          <p>{hospital.email}</p>
          <Copy size={15} color="#03045e" />
        </div>
        <div className="flex gap-2 items-center text-[#03045e]">
          <Phone size={15} color="#03045e" />
          <p>{hospital.phoneNumber}</p>
          <Copy size={15} color="#03045e" />
        </div>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
};
