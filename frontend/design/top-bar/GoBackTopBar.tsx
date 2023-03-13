import React from "react";
import { Appbar } from "react-native-paper";

type Props = {
  onPressGoBack: () => void;
  title: string;
};

const GoBackTopBar = ({ onPressGoBack, title }: Props) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onPressGoBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default GoBackTopBar;
