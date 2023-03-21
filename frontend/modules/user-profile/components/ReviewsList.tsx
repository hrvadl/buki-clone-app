import { Review } from "@/models/review";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import ReviewCard from "./Review";

type Props = {
  reviews: Review[];
  style?: ViewStyle;
};

const ReviewsList = ({ reviews, style }: Props) => {
  console.log(reviews);

  return (
    <View style={style}>
      {reviews.map((it) => (
        <ReviewCard style={{ marginBottom: 10 }} review={it} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewsList;
