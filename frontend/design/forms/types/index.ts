import type { Path } from "react-hook-form";
import { RegisterOptions } from "react-hook-form";

type PickerItem = {
  label: string;
  value: any;
};

export type FormField<T extends { [x: string]: any }> = {
  name: keyof T;
  password?: boolean;
  placeholder: string;
  rules:
    | Omit<
        RegisterOptions<T, Path<T>>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
} & (
  | {
      type: "text";
      items?: never;
    }
  | {
      type: "select";
      items: PickerItem[];
    }
);
