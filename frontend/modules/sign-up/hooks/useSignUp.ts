import { useState } from "react";

export default function useSignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeEmailHandler = (value: string) => {
    setEmail(value);
  };

  const changeNameHandler = (value: string) => {
    setName(value);
  };

  const changePasswordHandler = (value: string) => {
    setPassword(value);
  };

  const signUpHandler = async () => {};

  return {
    changeEmailHandler,
    changeNameHandler,
    changePasswordHandler,
    email,
    name,
    password,
    signUpHandler,
  };
}
