import { Text } from "@/design/Text";
import { Subject } from "@/models/category";
import { useTheme } from "@react-navigation/native";
import React, { memo } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

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
  const theme = useTheme();

  return (
    <View style={styles.Shadow}>
      <TouchableOpacity
        onPress={() => onChoose(name)}
        style={[
          styles.Container,
          style,
          {
            backgroundColor: isActive ? theme.colors.border : theme.colors.card,
          },
        ]}
      >
        <View style={styles.TextWrapper}>
          <Text style={styles.Heading}>{name}</Text>
          <Text>{adQuantity}</Text>
        </View>
        <Image style={styles.Image} source={icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    width: 140,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    elevation: 2,
  },
  Shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
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
