import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, TextInput, useTheme } from "react-native-paper";

type Props = {
  onPressGoBack: () => void;
  search: string;
  onChangeSearch: (s: string) => void;
};

const SearchHeader = ({ onPressGoBack, search, onChangeSearch }: Props) => {
  const theme = useTheme();

  return (
    <View>
      <Appbar.Header style={styles.Header}>
        <Appbar.BackAction onPress={onPressGoBack} />
        <TextInput
          value={search}
          onChangeText={onChangeSearch}
          placeholder="Search for users..."
          style={[
            styles.TextInput,
            {
              backgroundColor: theme.colors.background,
            },
          ]}
          mode="flat"
        />
      </Appbar.Header>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  TextInput: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    marginRight: 20,
    paddingBottom: 1,
    fontSize: 16,
  },
  Header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
});
