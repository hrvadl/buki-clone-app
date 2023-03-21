import Avatar from "@/design/avatar";
import Star from "@/design/Star";
import { Text } from "@/design/Text";
import { Review } from "@/models/review";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Card } from "react-native-paper";

type Props = {
  style?: ViewStyle;
  review: Review;
};

const ReviewItem = ({ review, style }: Props) => {
  return (
    <Card style={style}>
      <Card.Content>
        <View style={styles.Card}>
          <Avatar
            style={styles.Avatar}
            letter={review.reviewer.name.charAt(0)}
          />
          <View style={styles.InfoContainer}>
            <View style={styles.StarsContainer}>
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={30} filled={idx + 1 <= review.rate} />
              ))}
            </View>
            <Text variant="boldMedium" style={styles.Name}>
              {review.reviewer.name}
            </Text>
          </View>
        </View>
        <Text style={styles.ReviewText} variant="bodyLarge">
          {review.text}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  Card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Avatar: {
    width: 50,
    height: 50,
  },
  StarsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  InfoContainer: {
    marginLeft: 5,
  },
  Name: {
    marginLeft: 7,
  },
  ReviewText: {
    marginTop: 15,
  },
});

export default ReviewItem;
