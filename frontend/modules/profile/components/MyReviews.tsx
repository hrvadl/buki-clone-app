import { Review } from "@/models/review";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
  reviews: Review[];
};

const MyReviews = ({ style, reviews }: Props) => {
  return <View style={style}></View>;
};

const styles = StyleSheet.create({});

export default MyReviews;
