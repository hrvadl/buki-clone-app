import GoBackTopBar from "@/design/top-bar/GoBackTopBar";
import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Search">;

const Search = ({ navigation }: Props) => {
  return (
    <View>
      <GoBackTopBar
        title="Find users"
        onPressGoBack={() => navigation.goBack()}
      />
    </View>
  );
};

export default Search;
