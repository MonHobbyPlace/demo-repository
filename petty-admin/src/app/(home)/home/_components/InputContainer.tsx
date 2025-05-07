import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ChangeEventHandler } from "react";

export const InputContainer = (props: {
  error: string | undefined;
  name: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number;
  placeHolder: string;
  label: string;
}) => {
  const { error, onChange, value, name, placeHolder, type, label } = props;
  return (
    <>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={name} className="text-right">
          {label}
        </Label>
        <Input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          className="col-span-3"
          placeholder={placeHolder}
        />
      </div>
      <div className="w-full flex justify-end text-red-500">
        <p>{error}</p>
      </div>
    </>
  );
};
