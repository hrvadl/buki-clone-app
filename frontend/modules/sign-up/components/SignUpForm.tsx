import Form from "@/design/forms/Form";
import isApiError from "@/models/api-response/utils/is-api-error";
import { UserRole } from "@/models/user";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleProp } from "react-native";
import useOnSignUpMutation from "../hooks/useOnSignUpMutation";
import defaultValues from "../mocks/form-default";
import signUpFields from "../mocks/form-fields";
import isSignUpSucceed from "../utils/is-sign-up-succeed";

type Props = {
  style?: StyleProp<any>;
  role: UserRole;
};

const SignUpForm = ({ style, role }: Props) => {
  const { onSignUp, data, error } = useOnSignUpMutation(role);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (isSignUpSucceed(data)) {
    alert("Success, Now you can login");
    navigation.navigate("LogIn");
  }

  if (isApiError(error)) alert(error.message);

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
