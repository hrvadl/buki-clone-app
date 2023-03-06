import Form from "@/design/forms/Form";
import { UserRole } from "@/models/user";
import React from "react";
import { StyleProp } from "react-native";
import defaultValues from "../mocks/form-default";
import signUpFields from "../mocks/form-fields";

type Props = {
  style?: StyleProp<any>;
  role: UserRole;
};

const SignUpForm = ({ style, role }: Props) => {
  const onSignUp = (values: typeof defaultValues) => {};

  return (
    <Form
      style={style}
      buttonText="Sign up"
      defaultValues={defaultValues}
      fields={signUpFields}
      onSubmit={onSignUp}
    />
  );
};

export default SignUpForm;
