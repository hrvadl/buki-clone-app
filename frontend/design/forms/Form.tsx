import React from "react";
import { Controller, Path, Resolver, useForm } from "react-hook-form";
import { StyleProp, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../Text";
import { FormField } from "./types";

type Props<T extends { [x: string]: any }> = {
  style?: StyleProp<any>;
  fields: FormField<T>[];
  defaultValues: any;
  buttonText: string;
  onSubmit: (values: T) => void;
  resolver: Resolver<any>;
};

function Form<T extends { [x: string]: any }>({
  style,
  fields,
  defaultValues,
  buttonText,
  onSubmit,
  resolver,
}: Props<T>) {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<T>({
    defaultValues,
    resolver,
  });

  return (
    <View style={style}>
      {fields.map((field) => (
        <Controller
          key={field.placeholder}
          control={control}
          name={field.name as Path<T>}
          rules={field.rules}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={styles.TextInput}>
              <TextInput
                secureTextEntry={!!field.password}
                placeholder={field.placeholder}
                mode="outlined"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
              {error && <Text style={styles.Error}>{error.message}</Text>}
            </View>
          )}
        />
      ))}
      <Button
        style={styles.Button}
        textColor="#fff"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ color: "#fff" }}>{buttonText}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    position: "relative",
    marginBottom: 30,
  },
  Error: {
    position: "absolute",
    bottom: -25,
    marginLeft: 5,
  },
  Button: {
    marginTop: 10,
  },
});

export default Form;
