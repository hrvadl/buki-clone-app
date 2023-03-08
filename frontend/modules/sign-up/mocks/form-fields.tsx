import { FormField } from "@/design/forms/types";
import defaultValues from "./form-default";

const signUpFields: FormField<typeof defaultValues>[] = [
  {
    name: "name",
    placeholder: "Name",
    rules: {
      required: true,
    },
  },
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
  {
    name: "confirmPassword",
    placeholder: "Confirm Password",
    rules: {
      required: true,
    },
  },
];

export default signUpFields;
