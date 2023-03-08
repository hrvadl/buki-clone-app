import Form from "@/design/forms/Form";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleProp } from "react-native";
import useLoginMutation from "../hooks/useLoginMutation";
import { defaultFields } from "../mocks/default-fields";
import defaultLogInValues from "../mocks/default-form-values";

type Props = {
  style?: StyleProp<any>;
};

const LoginForm = ({ style }: Props) => {
  const { mutate, success } = useLoginMutation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onLogin = (data: typeof defaultLogInValues) => {
    mutate(data);
  };

  if (success) navigation.navigate("Home");

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
