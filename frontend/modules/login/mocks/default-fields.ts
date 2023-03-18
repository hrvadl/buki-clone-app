import { FormField } from "@/design/forms/types";
import defaultLogInValues from "./default-form-values";

export const defaultFields: FormField<typeof defaultLogInValues>[] = [
  {
    type: "text",
    name: "email",
    placeholder: "Email",
    rules: {
      required: true,
    },
  },
  {
    type: "text",
    name: "password",
    password: true,
    placeholder: "Password",
    rules: {
      required: true,
    },
  },
];
