import ErrorApiResponse from "@/models/api-response";
import { roleMap, UserRole } from "@/models/user";
import { useMutation } from "react-query";
import { signUp, SignUpProps } from "../api";
import { SignUpInput } from "../types/fields-schema";

export default function useOnSignUpMutation(role: UserRole) {
  const { mutate, error, data, isError } = useMutation<
    unknown,
    ErrorApiResponse,
    SignUpProps
  >(signUp);
  const onSignUp = (values: SignUpInput) =>
    mutate({ ...values, role: roleMap[role] });

  return { onSignUp, error, data };
}
