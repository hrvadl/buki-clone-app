import React, { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Avatar } from "react-native-paper";

type Props = {
  style?: ViewStyle;
  buttonWidth?: number;
  onPress: () => void;
};

const DeleteOnSwipeButton = ({ style, buttonWidth, onPress }: Props) => {
  const [width, setWidth] = useState<number | null>(null);
  const diff = width && buttonWidth ? buttonWidth - width : 0;

  return (
    <Pressable
      onLayout={({ nativeEvent }) => {
        setWidth(nativeEvent.layout.width);
      }}
      onPress={onPress}
      style={[styles.Container, style]}
    >
      <View
        style={[
          {
            width: buttonWidth ?? "auto",
            paddingLeft: diff * 1.2,
            left: -diff / 2,
          },
          styles.Button,
        ]}
      >
        <Avatar.Icon style={styles.Icon} icon="trash-can-outline" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Icon: {
    backgroundColor: "transparent",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    overflow: "visible",
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 15,
    height: "100%",
    position: "relative",
  },
});

export default DeleteOnSwipeButton;
