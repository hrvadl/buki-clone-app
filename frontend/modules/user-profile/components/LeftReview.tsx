import { Text } from "@/design/Text";
import { User } from "@/models/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import useReview from "../hooks/useReview";
import { reviewSchema } from "../schema";
import ChangeRate from "./ChangeRate";

type Props = {
  user: User;
};

const defaultValues = {
  rate: 5,
  text: "",
};

const resolver = zodResolver(reviewSchema);

const LeftReview = ({ user }: Props) => {
  const { sendReviewHandler } = useReview(user.id);

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver,
  });

  return (
    <View>
      <Controller
        control={control}
        name="rate"
        render={({ field: { onChange, value } }) => (
          <ChangeRate value={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="text"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={styles.TextInput}>
            <TextInput
              mode="outlined"
              value={value}
              placeholder="Message of the review..."
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && <Text>{error.message}</Text>}
          </View>
        )}
      />
      <Button
        mode="contained"
        textColor="#fff"
        onPress={handleSubmit(sendReviewHandler)}
      >
        Send review
      </Button>
    </View>
  );
};

export default LeftReview;

const styles = StyleSheet.create({
  TextInput: {
    marginBottom: 15,
  },
});
