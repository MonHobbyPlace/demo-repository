import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePetCategory } from "@/app/provider/PetCategoryProvider";

export const ChooseCategory = (props: {
  handleValueChange: (name: string, value: string[]) => void;
}) => {
  const { handleValueChange } = props;
  const [values, setValues] = useState<string[]>([]); // state for selected values
  const { category } = usePetCategory();
  const handleChange = (newValues: string[]) => {
    setValues(newValues);
    console.log("Selected values:", newValues);
    handleValueChange("category", newValues);
  };

  return (
    <ToggleGroup
      type="multiple"
      value={values}
      onValueChange={handleChange}
      className="w-[400px] flex flex-wrap gap-2" // handle selection changes
    >
      {category.map((value, index) => {
        return (
          <ToggleGroupItem
            className="min-w-fit p-5 border  rounded-tr-lg rounded-br-lg rounded-tl-lg rounded-bl-lg"
            key={index}
            value={value.name}
            aria-label="Toggle bold"
          >
            <p>{value.name}</p>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};
