import { roleMap, UserRole } from "@/models/user";
import { useMutation } from "react-query";
import { signUp, SignUpProps } from "../api";
import { SignUpInput } from "../types/fields-schema";

export default function useOnSignUpMutation(role: UserRole) {
  const { mutate, error, data } = useMutation<unknown, Error, SignUpProps>(
    signUp
  );
  const onSignUp = (values: SignUpInput) =>
    mutate({ ...values, role: roleMap[role] });

  return { onSignUp, error, data };
}
