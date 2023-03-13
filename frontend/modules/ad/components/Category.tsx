import { Subject } from "@/models/category";
import React, { memo } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  name: keyof typeof Subject;
  icon: ImageSourcePropType;
  onChoose: (v: keyof typeof Subject) => void;
  isActive: boolean;
};

const Category = ({ icon, name, isActive, onChoose }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onChoose(name)}
      style={{ backgroundColor: isActive ? "#ccc" : "" }}
    >
      <Text>{name}</Text>
      <Image source={icon} />
    </TouchableOpacity>
  );
};

export default memo(Category);
