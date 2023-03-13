import { RootStackParamList } from "@/modules/navigation/types/root-stack";
import { SafeAreaView } from "@/modules/platform";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Appbar } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "Search">;

const Search = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Search;
