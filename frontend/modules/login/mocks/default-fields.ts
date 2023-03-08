import { FormField } from "@/design/forms/types";
import defaultLogInValues from "./default-form-values";

export const defaultFields: FormField<typeof defaultLogInValues>[] = [
  {
    name: "email",
    placeholder: "Email",
    rules: {
      required: true,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    rules: {
      required: true,
    },
  },
];
