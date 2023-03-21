import Star from "@/design/Star";
import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  value: number;
  onChange: (value: number) => void;
  style?: ViewStyle;
};

const ChangeRate = ({ onChange, value, style }: Props) => {
  return (
    <View style={[styles.StarsContainer, style]}>
      {[...Array(5)].map((_, idx) => (
        <Pressable key={idx} onPress={() => onChange(idx + 1)}>
          <Star size={30} style={styles.Star} filled={idx + 1 <= value} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  StarsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  Star: {
    backgroundColor: "transparent",
  },
});

export default ChangeRate;
