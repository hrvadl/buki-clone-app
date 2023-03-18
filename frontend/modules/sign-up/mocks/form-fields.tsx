import { FormField } from "@/design/forms/types";
import defaultValues from "./form-default";

const signUpFields: FormField<typeof defaultValues>[] = [
  {
    type: "text",
    name: "name",
    placeholder: "Name",
    rules: {
      required: true,
    },
  },
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
    name: "number",
    placeholder: "Telephone number +380...",
    rules: {
      required: true,
    },
  },
  {
    type: "text",
    name: "password",
    placeholder: "Password",
    password: true,
    rules: {
      required: true,
    },
  },
  {
    type: "text",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    password: true,
    rules: {
      required: true,
    },
  },
];

export default signUpFields;
