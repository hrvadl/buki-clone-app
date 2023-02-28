import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Environment from "./Config";

export default function App() {
  useEffect(() => {
    console.log(Environment.REACT_APP_API_URL);
  }, []);

  const [token, setToken] = useState("");

  const logInHandler = () => {
    fetch(Environment.REACT_APP_API_URL + "/auth/log-in", {
      method: "Post",
      body: JSON.stringify({ email: "test@test.com", role: "Student" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data);
      });
  };

  const signUpHandler = () => {
    console.log(Environment.REACT_APP_API_URL);

    fetch("http://0.0.0.0:5127" + "/auth/sign-up", {
      method: "Post",
      body: JSON.stringify({ email: "test@test.com111", role: "Student" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data);
      });
  };

  const checkTokenHandler = () => {
    fetch(Environment.REACT_APP_API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <Button onPress={logInHandler} title="Log in" />
      <Button onPress={signUpHandler} title="Sign up" />
      <Button onPress={checkTokenHandler} title="Check token" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
