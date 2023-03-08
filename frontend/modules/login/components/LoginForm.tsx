import Form from "@/design/forms/Form";
import React from "react";
import { StyleProp } from "react-native";
import { defaultFields } from "../mocks/default-fields";
import defaultLogInValues from "../mocks/default-form-values";

type Props = {
  style?: StyleProp<any>;
};

const LoginForm = ({ style }: Props) => {
  const onLogin = (values: typeof defaultLogInValues) => {};

  return (
    <Form
      style={style}
      buttonText="Log in"
      defaultValues={defaultLogInValues}
      fields={defaultFields}
      onSubmit={onLogin}
    />
  );
};

export default LoginForm;
