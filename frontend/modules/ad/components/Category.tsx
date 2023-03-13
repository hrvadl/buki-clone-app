import { Subject } from "@/models/category";
import React, { memo } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";

type Props = {
  name: keyof typeof Subject;
  icon: ImageSourcePropType;
  onChoose: (v: keyof typeof Subject) => void;
  isActive: boolean;
  adQuantity: number;
  style?: ViewStyle;
};

const Category = ({
  icon,
  name,
  isActive,
  onChoose,
  style,
  adQuantity,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onChoose(name)}
      style={[
        styles.Container,
        style,
        {
          backgroundColor: isActive ? "#ccc" : "transparent",
        },
      ]}
    >
      <View style={styles.TextWrapper}>
        <Text style={styles.Heading}>{name}</Text>
        <Text>{adQuantity}</Text>
      </View>
      <Image style={styles.Image} source={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    width: 140,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
  },
  Image: {
    height: 30,
    width: 30,
  },
  TextWrapper: {
    marginRight: 10,
    width: 80,
  },
  Heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default memo(Category);
