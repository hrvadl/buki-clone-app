import { Ad as AdType } from "@/models/ad";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  ad: AdType;
};

const Ad = ({ ad }: Props) => {
  return (
    <View>
      <Text>{ad.author.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ad;
