import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Appbar, useTheme } from "react-native-paper";

type Props = {
  name: string;
};

const AdHeader = ({ name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();

  return (
    <Appbar.Header>
      <Appbar.Content title={`Hello, ${name}`} />
      <Appbar.Action
        icon="magnify"
        onPress={() => navigation.navigate("Search")}
      />
    </Appbar.Header>
  );
};

export default AdHeader;
