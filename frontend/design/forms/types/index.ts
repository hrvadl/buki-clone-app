import type { Path } from "react-hook-form";
import { RegisterOptions } from "react-hook-form";

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
};
