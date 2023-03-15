import { Text } from "@/design/Text";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";

type Props = {
  role: "Student" | "Teacher";
  source: ImageSourcePropType;
  onPress: () => void;
};

const RoleItem = ({ role, source, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={styles.Image} resizeMode="contain" source={source} />
      <Text variant="labelLarge" style={styles.Hint}>
        {role}
      </Text>
    </Pressable>
  );
};

export default RoleItem;

const styles = StyleSheet.create({
  Hint: {
    marginTop: 10,
    textAlign: "center",
  },
  Image: {
    height: 200,
    width: "auto",
    marginTop: 40,
  },
});
