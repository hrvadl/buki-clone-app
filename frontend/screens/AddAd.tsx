import Container from "@/design/container/Container";
import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { AddAdForm } from "@/modules/ad";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "AddAd">;

const AddAd = ({ navigation }: Props) => {
  return (
    <View>
      <GoBackTopBar
        title="Add new ad"
        onPressGoBack={() => navigation.goBack()}
      />
      <Container>
        <AddAdForm />
      </Container>
    </View>
  );
};

export default AddAd;
