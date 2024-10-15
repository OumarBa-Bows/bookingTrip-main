import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AppSelectProps {
  dataList: any;
  width?: string;
  placeHolder: string;
  textLabel: string;
  onChange?: (value: string) => void; // Accept onChange as a prop
  defaultValue: string;
  value?: string; // Value controlled by react-hook-form
}

export default function AppSelect({
  dataList,
  width = "[180px]",
  placeHolder,
  textLabel,
  onChange,
  defaultValue,
  value, // Destructure value to use controlled input from react-hook-form
  ...rest
}: AppSelectProps) {
  return (
    <Select
      defaultValue={defaultValue}
      value={value} // Controlled value passed from react-hook-form
      onValueChange={(value) => onChange?.(value)} // Forward selected value back to parent
    >
      <SelectTrigger className={`w-${width}`}>
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>

      <SelectContent {...rest}>
        <SelectGroup>
          <SelectLabel>{textLabel}</SelectLabel>
          {dataList?.map((list: any) => (
            <SelectItem key={list.value} value={list.label}>
              {list.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
