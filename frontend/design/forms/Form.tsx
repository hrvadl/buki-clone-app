import React from "react";
import { Controller, Path, useForm } from "react-hook-form";
import { StyleProp, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { FormField } from "./types";

type Props<T extends { [x: string]: any }> = {
  style?: StyleProp<any>;
  fields: FormField<T>[];
  defaultValues: any;
  buttonText: string;
  onSubmit: (values: T) => void;
};

function Form<T extends { [x: string]: any }>({
  style,
  fields,
  defaultValues,
  buttonText,
  onSubmit,
}: Props<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    defaultValues,
  });

  return (
    <View style={style}>
      {fields.map((field) => (
        <Controller
          key={field.placeholder}
          control={control}
          name={field.name as Path<T>}
          rules={field.rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={field.placeholder}
              style={styles.TextInput}
              mode="outlined"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      ))}
      <Button
        textColor="#fff"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        <Text>{buttonText}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    marginBottom: 30,
  },
});

export default Form;
