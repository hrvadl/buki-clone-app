import DeleteOnSwipeButton from "@/design/DeleteOnSwipeButton";
import { Review } from "@/models/review";
import ReviewItem from "@/modules/user-profile/components/Review";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import useDeleteReviewMutation from "../hooks/useDeleteReviewMutation";

type Props = {
  style?: ViewStyle;
  reviews: Review[];
};

const MyReviews = ({ style, reviews }: Props) => {
  const { onDelete } = useDeleteReviewMutation();

  return (
    <View style={style}>
      {reviews.map((review) => (
        <GestureHandlerRootView key={review.id}>
          <Swipeable
            useNativeAnimations
            containerStyle={styles.Card}
            renderRightActions={() => (
              <DeleteOnSwipeButton
                onPress={() => onDelete(review.id)}
                buttonWidth={100}
                style={{ width: 80 }}
              />
            )}
          >
            <ReviewItem review={review} />
          </Swipeable>
        </GestureHandlerRootView>
      ))}
    </View>
  );
};

export default MyReviews;

const styles = StyleSheet.create({
  Card: {
    marginBottom: 15,
  },
});
