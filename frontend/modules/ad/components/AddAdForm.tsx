import Form from "@/design/forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useAddAddMutation from "../hooks/useAddAdMutation";
import { addAdDefaultFields, addAdDefaultValues } from "../mocks/add-ad";
import { addAdSchema } from "../types/add-ad-schema";

const resolver = zodResolver(addAdSchema);

const AddAdForm = () => {
  const { addNewAd, error, isLoading, data } = useAddAddMutation();

  if (error) alert(error.message);

  if (isLoading) return <ActivityIndicator />;

  if (!!data) alert("You have successfully added an ad");

  return (
    <Form
      defaultValues={addAdDefaultValues}
      fields={addAdDefaultFields}
      resolver={resolver}
      onSubmit={addNewAd}
      buttonText="Add"
    />
  );
};

export default AddAdForm;

const styles = StyleSheet.create({});
