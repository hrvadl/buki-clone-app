import ErrorApiResponse from "@/models/api-response";
import { roleMap, UserRole } from "@/models/user";
import { useMutation } from "react-query";
import signUpApi, { SignUpProps } from "../api";
import defaultValues from "../mocks/form-default";

export default function useOnSignUpMutation(role: UserRole) {
  const { mutate, error, data, isError } = useMutation<
    unknown,
    ErrorApiResponse,
    SignUpProps
  >(signUpApi.signUp);
  const onSignUp = (values: typeof defaultValues) =>
    mutate({ ...values, role: roleMap[role] });

  console.log(isError, error);

  return { onSignUp, error, data };
}
