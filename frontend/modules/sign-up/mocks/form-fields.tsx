import { FormField } from "@/design/forms/types";
import defaultValues from "./form-default";

const signUpFields: FormField<typeof defaultValues>[] = [
  {
    name: "name",
    rules: {
      required: true,
    },
  },
  {
    name: "email",
    rules: {
      required: true,
    },
  },
  {
    name: "password",
    rules: {
      required: true,
    },
  },
  {
    name: "confirmPassword",
    rules: {
      required: true,
    },
  },
];

export default signUpFields;
