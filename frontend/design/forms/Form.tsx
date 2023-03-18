import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Controller, Path, Resolver, useForm } from "react-hook-form";
import { StyleProp, StyleSheet, View } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
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
  const { control, handleSubmit } = useForm<T>({
    defaultValues,
    resolver,
  });

  const theme = useTheme();

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
              {field.type === "text" ? (
                <TextInput
                  secureTextEntry={!!field.password}
                  placeholder={field.placeholder}
                  mode="outlined"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              ) : (
                <View
                  style={[
                    styles.PickerContainer,
                    { borderColor: theme.colors.onSurfaceVariant },
                  ]}
                >
                  <Picker
                    style={styles.Picker}
                    selectedValue={value}
                    onValueChange={onChange}
                  >
                    {field.items.map((it) => (
                      <Picker.Item
                        key={it.label}
                        label={it.label}
                        value={it.value}
                      />
                    ))}
                  </Picker>
                </View>
              )}
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
  Picker: {
    padding: 10,
    backgroundColor: "#fff",
  },
  PickerContainer: {
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 5,
  },
});

export default Form;
