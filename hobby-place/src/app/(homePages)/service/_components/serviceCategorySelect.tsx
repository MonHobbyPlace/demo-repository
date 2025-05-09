import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePetPost } from "@/app/provider/PetPostProvider";

type ServiceCategorySelectProps = {
  options: { id: number; name: string }[];
  value: string;
  onChange: (value: string) => void;
};

export default function ServiceCategorySelect({
  value,
  onChange,
}: ServiceCategorySelectProps) {
  const { category } = usePetPost();
  console.log(category);

  return (
    <div>
      <label className="text-sm font-medium">Service Category</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full mt-1">
          <SelectValue placeholder="Select Service Category" />
        </SelectTrigger>
        <SelectContent>
          {category?.map((cat) => (
            <SelectItem key={cat.id} value={String(cat.id)}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
